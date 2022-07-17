import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./detail.css";
import styled from "styled-components";
import {Context1} from './../App.js'
import { useContext } from "react";

export function DETAIL(props) {
  let {context} = useContext(Context1);
  console.log(context);
  let [alertMsg, setAleartMsg] = useState(false);
  let [userInput, setUserInput] = useState("");
  let [tabs, setTabs] = useState(['상세정보', '리뷰', 'Q&A', '반품/교환정보']);
  let [tabContents, setTabContents] = useState(['상세정보 페이지', '리뷰 페이지', 'Q&A 페이지', '반품 페이지']);
  let [selectedTab, setSelectedTab] = useState(0);
  let [loading, setLoading] = useState('');

  useEffect(() => {
    console.log('props change');
    setLoading('loading');
  }, [props]);

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
    <div className={"tab-wrap " + loading}>
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

      <div className="tab-contaniner">
        {
          tabs.map((element, i)=>{
            return <div id={`tab-${i}`} className="tab-btn" onClick={(e)=>{setSelectedTab(i);}}>{element}</div>
          })
        }
      </div>

      <div className="tab-content">
        {
          tabContents[selectedTab]
        }
      </div>
      
    </div>
  );
}
