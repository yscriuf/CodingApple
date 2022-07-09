import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import bg from "../img/bg.png";

export function HOME(props) {
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <Row>
        {props.shoes.map((t, i) => {
          return <ITEMCARD item={props.shoes[i]}></ITEMCARD>;
        })}
      </Row>
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
