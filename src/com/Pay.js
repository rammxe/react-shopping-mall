import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pay.css"; // 🔥 CSS import

const Pay = () => {
  const navigate = useNavigate();

  return (
    <div className="pay-container">
      <h4 className="pay-title">로그인</h4>
      <p className="pay-description">아이디와 비밀번호를 입력해주세요</p>
      <div className="pay-buttons">
        <button className="pay-btn-login" onClick={() => navigate("/login")}>
          기존회원 로그인
        </button>
        <button className="pay-btn-signup" onClick={() => navigate("/signup")}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Pay;
