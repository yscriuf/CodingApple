import { useParams } from "react-router";
import styled from "styled-components";

export function DETAIL(props) {

  let {id} = useParams();
  console.log(id);

  props.shoes.forEach((element, i) => {
    if(element.id == id){
      id = i;
    }
  });

  let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
  `

  let itemSrc = "https://codingapple1.github.io/shop/shoes" + (Number(id)+1) + ".jpg";

  return (
    <div className="container">
      <YellowBtn>버튼</YellowBtn>
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