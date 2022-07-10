import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

export function DETAIL(props) {
  let [alertMsg, setAleartMsg] = useState(false);
  let [userInput, setUserInput] = useState("");

  useEffect(() => {
    const regex = /[^0-9]/;

    if(regex.test(userInput)){
      console.log('숫자가 아님');
      setAleartMsg(true);
    } else{
      setAleartMsg(false);
    }

    return () => {};
  }, [userInput]);

  let { id } = useParams();

  props.shoes.forEach((element, i) => {
    if (element.id == id) {
      id = i;
    }
  });

  // 아래와 같이 했을 때 만들어지는 것은 component임.
  let ColorBtn = styled.button`
    background: ${(props) => props.bg};
    color: black;
    padding: 10px;
  `;

  let itemSrc =
    "https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg";

  return (
    <div className="container">
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></input>
      
      {
        alertMsg ? 
          <>
            <div className="alert alert-warning">숫자만 입력해주세요</div>
          </>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={itemSrc} width="100%" />
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
