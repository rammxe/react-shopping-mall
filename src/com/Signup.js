import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !pw || !pw2) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    if (pw !== pw2) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pw
      );
      alert("회원가입이 완료 되었습니다");
      setEmail("");
      setPw("");
      setPw2("");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("이미 사용 중인 이메일입니다.");
      } else if (error.code === "auth/invalid-email") {
        alert("이메일 형식이 올바르지 않습니다.");
      } else if (error.code === "auth/weak-password") {
        alert("비밀번호를 6자리 이상으로 입력해주세요.");
      } else {
        alert("회원가입 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      <h3 style={{ color: "#6B5B4D", marginBottom: "30px" }}>회원가입</h3>
      <Form onSubmit={handleSignup}>
        <Form.Group
          style={{ color: "#6B5B4D", fontWeight: "bold" }}
          as={Row}
          className="mb-3"
        >
          <Form.Label column sm="2">
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

        <Form.Group as={Row} className="mb-3">
          <Form.Label
            style={{ color: "#6B5B4D", fontWeight: "bold" }}
            column
            sm="2"
          >
            비밀번호 확인
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="비밀번호 확인"
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
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
          회원가입
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
