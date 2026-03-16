import React, { useState } from 'react';
import './App.css';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="App">
      {/* ====== 커스텀 네브바 ====== */}
      <header className="custom-header">
        <div className="header-inner">
          {/* 브랜드 */}
          <Link to="/" className="header-brand" onClick={closeMenu}>
            Rammxe
          </Link>

          {/* 데스크탑 nav */}
          <nav className="header-nav desktop-nav">
            <Link to="/diffuser" className="nav-item">
              FACE TOWEL
            </Link>
            <Link to="/candle" className="nav-item">
              GIFT
            </Link>
            <Link to="/event" className="nav-item">
              Event
            </Link>
            <Link to="/board" className="nav-item">
              BOARD
            </Link>
          </nav>

          {/* 데스크탑 auth */}
          <div className="header-auth desktop-nav">
            <Link to="/signup" className="nav-item">
              회원가입
            </Link>
            <Link to="/login" className="nav-item">
              로그인
            </Link>
          </div>

          {/* 햄버거 버튼 (모바일만) */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="mobile-nav-item" onClick={closeMenu}>
            홈
          </Link>
          <Link to="/diffuser" className="mobile-nav-item" onClick={closeMenu}>
            FACE TOWEL
          </Link>
          <Link to="/candle" className="mobile-nav-item" onClick={closeMenu}>
            GIFT
          </Link>
          <Link to="/event" className="mobile-nav-item" onClick={closeMenu}>
            Event
          </Link>
          <Link to="/board" className="mobile-nav-item" onClick={closeMenu}>
            BOARD
          </Link>
          <div className="mobile-menu-divider"></div>
          <Link to="/signup" className="mobile-nav-item" onClick={closeMenu}>
            회원가입
          </Link>
          <Link to="/login" className="mobile-nav-item" onClick={closeMenu}>
            로그인
          </Link>
        </div>

        {/* 백드롭 (메뉴 열릴 때 배경) */}
        {menuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
      </header>

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
