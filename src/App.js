import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let blogName = "지렁이의 성장 블로그";
  let [title, changeTitle] = useState(['할머니 코트 추천', '여자 코트 추천', '남자 코트 추천']);
  let [postDate, changePostDate] = useState([[2,3,14,6], [3,4,12,2], [4,1,2,11]]); // m:d:hh:mm
  let [like, upLike] = useState([0,0,0]);
  let [modal, setModal] = useState(0);
  let [addTitle, setAddTitle] = useState('');

  function setDate(){
    let today = new Date();

    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    return [month, date, hours, minutes];
  }

  function upCntLike(i){
    var newLike = [...like];
    newLike[i] = newLike[i] + 1;
    upLike(newLike);
  }

  function order(){
    var newTitle = [...title];
    newTitle.sort(function(a, b) { // 한글 오름차순
      return a < b ? -1 : a > b ? 1 : 0;
    });
    changeTitle(newTitle);
  }

  function add(t){
    var newTitle = [...title];
    newTitle.push(t);
    changeTitle(newTitle);

    var newLike = [...like];
    newLike.push(0);
    upLike(newLike);

    var newDate = [...postDate];
    newDate.push(setDate());
    changePostDate(newDate);
  }

  function remove(idx){
    console.log(idx);
    var newTitle = [...title];
    newTitle.splice(idx, 1);
    changeTitle(newTitle);

    var newLike = [...like];
    newLike.splice(idx, 1);
    upLike(newLike);

    setModal(0);
  }

  return (
    <div className="App">
      <div className="blog-title">
        {blogName}
      </div>
      <div style={ {color : 'black', fontSize : '30px'} }>
        게시글
      </div>
      <button onClick={ () => { order(); } }>이름순 정렬</button>
      {
        title.map((t, i)=>{
          return(
            <div className="list" key={i}>
              <h4 onClick={() => { modal == i + 1 ? setModal(0) : setModal(i + 1); }}>{title[i]} <span onClick={ (e) => { upCntLike(i); e.stopPropagation(); } }>👍</span> {like[i]} </h4>
              <p>{postDate[i][0]}월 {postDate[i][1]}일 {postDate[i][2]}시 {postDate[i][3]}분 발행</p>
            </div>
          )
        })
      }
      {
        modal ? <Modal color="yellow" title={title[modal - 1]} idx={modal - 1} remove={remove}/> : null
      }
      
      <input onChange={(e)=>{ setAddTitle(e.target.value); }}></input>
      <button onClick={()=>{ if(addTitle != "") { add(addTitle); } }}>글 발행</button>

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>내용</p>
      <button onClick={()=>{props.remove(props.idx)}}>삭제</button>
    </div>
  );
}

export default App;
