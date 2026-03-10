import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; // ✅ 이미 import 됨
import { Col, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !pw) {
      alert("모든 항목을 입력해주세요");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        //로그인 유저
        auth,
        email,
        pw
      );
      alert("로그인 성공!");
      setEmail("");
      setPw("");
      navigate("/pay2");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("해당 이메일의 사용자를 찾을 수 없습니다.");
      } else if (error.code === "auth/wrong-password") {
        alert("비밀번호가 올바르지 않습니다.");
      } else if (error.code === "auth/invalid-email") {
        alert("이메일 형식이 올바르지 않습니다.");
      } else if (error.code === "auth/invalid-credential") {
        // 🔥 추가
        alert("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        console.error("Error:", error);
        alert("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      <h3 style={{ color: "#6B5B4D", marginBottom: "30px" }}>로그인</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label 
            style={{ color: "#6B5B4D", fontWeight: "bold" }}
            column
            sm="2"
          >
            이메일
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label
            style={{ color: "#6B5B4D", fontWeight: "bold" }}
            column
            sm="2"
          >
            비밀번호
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#8B7355",
            border: "none",
            padding: "10px 30px",
          }}
        >
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default Login;
