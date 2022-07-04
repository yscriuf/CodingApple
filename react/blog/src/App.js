import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let blogName = "지렁이의 성장 블로그";
  let [title, b] = useState(['남자 코트 추천', '여자 코트 추천', '할머니 코트 추천']);
  let [like, upLike] = useState(0);

  function upCntLike(){
    upLike(like+1);
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
        <h4>{title[0]} <span onClick={ upCntLike }>👍</span> {like} </h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 16일 발행</p>
      </div>
    </div>
  );
}

export default App;
