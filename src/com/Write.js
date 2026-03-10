import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*유효성검사*/
    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!content) {
      alert("내용을 입력해주세요");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        createdAt: serverTimestamp(),
      });
      alert("작성 완료되었습니다.");
      setTitle("");
      setContent("");
      navigate("/board");
    } catch (error) {
      console.error("Error:", error);
      alert("작성 실패 잠시 후 다시 시도해주세요!");
    }
  };

  return (
    <Container className="my-5">
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#FAF8F5",
          padding: "40px",
          borderRadius: "10px",
          border: "1px solid #E5DDD5",
        }}
      >
        <h2
          style={{
            color: "#6B5B4D",
            marginBottom: "30px",
            fontWeight: "600",
          }}
        >
          글쓰기
        </h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label style={{ color: "#6B5B4D", fontWeight: "500" }}>
              제목
            </Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              style={{
                backgroundColor: "#FFF",
                border: "1px solid #E5DDD5",
                padding: "12px",
                borderRadius: "5px",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ color: "#6B5B4D", fontWeight: "500" }}>
              상담내용
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                backgroundColor: "#FFF",
                border: "1px solid #E5DDD5",
                padding: "12px",
                borderRadius: "5px",
                resize: "none",
              }}
            />
          </Form.Group>

          <div
            style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
          >
            <Button
              type="button"
              onClick={() => navigate("/board")}
              style={{
                backgroundColor: "#D4C4B0",
                border: "none",
                padding: "10px 30px",
                borderRadius: "5px",
                color: "#6B5B4D",
              }}
            >
              취소
            </Button>
            <Button
              type="submit"
              style={{
                backgroundColor: "#8B7355",
                border: "none",
                padding: "10px 30px",
                borderRadius: "5px",
              }}
            >
              등록
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Write;
