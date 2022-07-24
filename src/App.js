import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { data } from "./data";
import { HOME } from "./routes/home";
import { DETAIL } from "./routes/detail";
import { Cart } from "./routes/Cart";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

function App() {
  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  }, []);

  let [shoes, setShoes] = useState(data);
  let [context] = useState([0,1,2]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
          <Link to="/" className="logo">ShoeShop</Link>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">Cart</Link>
            <Link to="/event" className="nav-link">EVENT</Link>
          </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<HOME shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id" element={ 
            <DETAIL shoes={shoes} />
         }/>
        <Route path="/cart" element={ 
            <Cart />
         }/>
        
        <Route path="/Event" element={ <EVENT /> }>
          <Route path="one" element={ <div> 첫 주문시 양배추즙 서비스 </div> } />
          <Route path="two" element={ <div> 생일기념 쿠폰 받기 </div> } />
        </Route>

        <Route path="*" element={<div>404페이지임</div>} />
      </Routes>
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
