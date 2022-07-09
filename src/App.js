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
          {/* <Navbar.Brand href="/">ShoeShop</Navbar.Brand> */}
          <Navbar.Brand onClick={()=>{ navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/detail">Detail</Nav.Link> */}
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HOME shoes={shoes} />} />
        <Route path="/detail" element={ <DETAIL /> }/>
        <Route path="*" element={<div>404페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
