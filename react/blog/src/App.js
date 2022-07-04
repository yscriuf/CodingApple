import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let blogName = "지렁이의 성장 블로그";
  let [title, changeTitle] = useState(['할머니 코트 추천', '여자 코트 추천', '남자 코트 추천']);
  let [like, upLike] = useState([0,0,0]);

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

  return (
    <div className="App">
      <div className="blog-title">
        {blogName}
      </div>
      <div style={ {color : 'black', fontSize : '30px'} }>
        게시글
      </div>
      <button onClick={ () => { order(); } }>이름순 정렬</button>
      <div className="list">
        <h4>{title[0]} <span onClick={ () => { upCntLike(0) } }>👍</span> {like[0]} </h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]} <span onClick={ () => { upCntLike(1) } }>👍</span> {like[1]} </h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]} <span onClick={ () => { upCntLike(2) } }>👍</span> {like[2]} </h4>
        <p>2월 16일 발행</p>
      </div>
    </div>
  );
}

export default App;
