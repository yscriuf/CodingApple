import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let blogName = "지렁이의 성장 블로그";
  let [title, changeTitle] = useState(['남자 코트 추천', '여자 코트 추천', '할머니 코트 추천']);
  let [like, upLike] = useState([0,0,0]);

  function upCntLike(i){
    var newLike = [...like];
    newLike[i] = newLike[i] + 1;
    upLike(newLike);
  }

  function change(i, txt){
    var newTitle = [...title];
    newTitle[i] = txt;
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
      <div className="list">
        <h4>{title[0]} <span onClick={ () => { upCntLike(0) } }>👍</span> {like[0]} </h4>
        <p>2월 16일 발행</p>
        <button onClick={ () => { change(0, 'hihi'); } }>다른 글 보기</button>
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
