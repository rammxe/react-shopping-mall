import React from 'react';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link } from 'react-router-dom';

import Diffuser from './com/Diffuser';
import Candle from './com/Candle';
import ProductAll from './com/ProductAll';
import Event from './com/Event';

import data from './data/data';
import Card from './com/Card';

import Detail from './com/Detail';
import Board from './com/Board';
import Write from './com/Write';
import Pay from './com/Pay';
import Pay2 from './com/Pay2';
import Signup from './com/Signup';
import Login from './com/Login';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Rammxe
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/diffuser">
              FACE TOWEL
            </Nav.Link>
            <Nav.Link as={Link} to="/candle">
              GIFT
            </Nav.Link>
            <Nav.Link as={Link} to="/Event">
              Event
            </Nav.Link>
            <Nav.Link as={Link} to="/board">
              BOARD
            </Nav.Link>
          </Nav>
          {/* 🔥 회원가입/로그인 따로 분리 */}
          <Nav className="auth-links">
            <Nav.Link as={Link} to="/signup">
              회원가입
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              로그인
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ProductAll data={data} Card={Card} />} />
        <Route
          path="/diffuser"
          element={<Diffuser data={data} Card={Card} />}
        />
        <Route path="/candle" element={<Candle data={data} Card={Card} />} />
        <Route path="/product/:id" element={<Detail data={data} />} />
        <Route path="/event" element={<Event />} />
        <Route path="/board" element={<Board />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/pay2" element={<Pay2 />} />
        <Route path="/board/write" element={<Write />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
