import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import bg from "../img/bg.png";

export function HOME(props) {
  let getItem = 2;
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <Row>
        {
        props.shoes.map((t, i) => {
          return <ITEMCARD item={props.shoes[i]}></ITEMCARD>;
        })
        }
      </Row>

      <button onClick={()=>{
        GET_Item(props.shoes, props.setShoes, getItem);
        console.log(getItem);
      }}>
        버튼
      </button>
    </>
  );
}

function ITEMCARD(props) {
  return (
    <Col md={4}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.item.id + 1) +
          ".jpg"
        }
        width="80%"
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </Col>
  );
}

function GET_Item(shoes, setShoes, getItem){
  console.log(getItem);
  fetch(`https://codingapple1.github.io/shop/data${getItem}.json`)
  .then((result) => result.json())
  .then((result) => {
    var temp = [...shoes, ...result];
    setShoes(temp);
    getItem++;
    })
    .catch((e)=>{
    console.log(e);
    })
}