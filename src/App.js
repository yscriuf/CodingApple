import logo from "./logo.svg";
import "./App.css";
import { createContext, Suspense, lazy, useEffect, useState } from "react";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { data } from "./data";
import { HOME } from "./routes/home";
import { DETAIL } from "./routes/detail";
import { Cart } from "./routes/Cart";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  useEffect(()=>{
    if(!localStorage.getItem('watched'))
      localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  let [shoes, setShoes] = useState(data);
  let [context] = useState([0,1,2]);
  let navigate = useNavigate();

  
  // let result = useQuery('작명', ()=>{
  //   axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
  //     console.log(a.data);
  //     return a.data
  //   })
  // })

  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data })
  )

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
          <Link to="/" className="logo">ShoeShop</Link>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">Cart</Link>
            <Link to="/event" className="nav-link">EVENT</Link>
          </Nav>
          <Nav className="ms-auto">
            { result.data }
          </Nav>
      </Navbar>

      <Suspense fallback={<div>로딩중임</div>}>
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
      </Suspense>
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
