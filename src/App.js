import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { data } from "./data";
import { HOME } from "./routes/home";
import { DETAIL } from "./routes/detail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HOME shoes={shoes} />} />
        <Route path="/detail" element={ <DETAIL /> }/>
        
        {/* 1번 방법 */}
        <Route path="/about" element={ <ABOUT /> }>
          <Route path="item" element={ <div> Nested about item </div> } />
          <Route path="shop" element={ <div> Nested about shop </div> } />
        </Route>

        {/* 2번 방법 */}
        <Route path="/about/item" element={ <> <ABOUT/> <div> Nested about item </div> </>} />
        <Route path="/about/shop" element={ <> <ABOUT/> <div> Nested about shop </div> </>} />


        <Route path="*" element={<div>404페이지임</div>} />
      </Routes>
    </div>
  );
}

function ABOUT(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
