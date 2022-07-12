import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { data } from "./data";
import { HOME } from "./routes/home";
import { DETAIL } from "./routes/detail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/event">EVENT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HOME shoes={shoes} />} />
        <Route path="/detail/:id" element={ <DETAIL shoes={shoes} /> }/>
        
        <Route path="/Event" element={ <EVENT /> }>
          <Route path="one" element={ <div> 첫 주문시 양배추즙 서비스 </div> } />
          <Route path="two" element={ <div> 생일기념 쿠폰 받기 </div> } />
        </Route>

        <Route path="*" element={<div>404페이지임</div>} />
      </Routes>

      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{ 
          var temp = [...shoes];
          result.data.forEach((element)=>{
            temp.push(element);
          })
          setShoes(temp);
          console.log(shoes);
         })
         .catch(()=>{
          console.log('실패함');
         })
      }}>
        버튼
      </button>
    </div>
  );
}

function EVENT(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
