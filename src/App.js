import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import bg from './img/bg.png'
import { data } from './data';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{backgroundImage : 'url(' + bg + ')' }} ></div>
      
      <Row>
      {
         shoes.map((t, i)=>{
           return(
             <ITEMCARD item={shoes[i]}></ITEMCARD>
           )
         })        
      }
      </Row>

    </div>
  );
}

function ITEMCARD(props){
  return(
    <Col md={4}>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.item.id + 1) + ".jpg"} width='80%'/>
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </Col>
  );
}

export default App;
