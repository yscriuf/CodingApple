import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import bg from './img/bg.png'

function App() {
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
        <Col md={4}>
          <img src={process.env.PUBLIC_URL + '/logo192.png'} width='80%'/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col md={4}>
          <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col md={4}>
          <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
