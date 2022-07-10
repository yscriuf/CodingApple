import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

export function DETAIL(props) {

  let [count, setCount] = useState(3);
  let timer;
  useEffect(()=>{
    // 이 안에 적은 코드는, 밑에 html이 렌더링 되고나서 실행되서 빠릿빠릿한 홈페이지처럼 보이게 만들어줌.
    // mount 시 실행, dependency가 변경될 때 실행
    console.log('진입');
    timer = setTimeout(()=>{
      if(count > 0)
        setCount(count-1);
      else
        clearTimeout(timer);
    }, 1000);
  }, [])

  let {id} = useParams();
  console.log(id);

  props.shoes.forEach((element, i) => {
    if(element.id == id){
      id = i;
    }
  });

  // 아래와 같이 했을 때 만들어지는 것은 component임.
  let ColorBtn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding : 10px;
  `

  let itemSrc = "https://codingapple1.github.io/shop/shoes" + (Number(id)+1) + ".jpg";

  return (
    <div className="container">
      {
        count ?
        <>
          <div className="alert alert-warning">
            {count}초 이내 아래 버튼 클릭 시 할인
          </div>
          <ColorBtn bg="white" onClick={()=>{ alert('할인!') }}>
            버튼
          </ColorBtn>
        </> : null
      }
      <div className="row">
        <div className="col-md-6">
          <img
            src = {itemSrc}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}