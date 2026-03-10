import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import "../Board.css";

const List = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    });
    return () => unsubscribe();
  }, []);


  const handleDelete = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await deleteDoc(doc(db, "posts", id));
        alert("삭제되었습니다!");
      } catch (error) {
        console.error("Error:", error);
        alert("삭제 실패!");
      }
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px" }}>
      {/* 헤더 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#6B5B4D" }}>상담신청</h2>
        <button
          onClick={() => navigate("/board/write")}
          style={{
            backgroundColor: "#8B7355",
            color: "white",
            border: "none",
            padding: "10px 25px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          글쓰기
        </button>
      </div>

      {/* 게시글 목록 */}
      {posts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999", padding: "50px" }}>
          게시글이 없습니다.
        </p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "#FAF8F5",
              border: "1px solid #E5DDD5",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <button
              onClick={() => handleDelete(post.id)}
              style={{
                position: "absolute",
                top: "32px",
                right: "15px",
                backgroundColor: "#cacacaff",
                color: "white",
                border: "none",
                padding: "5px 15px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              삭제
            </button>

            <h4
              style={{
                color: "#6B5B4D",
                marginBottom: "10px",
                paddingRight: "60px",
              }}
            >
              {post.title}
            </h4>
            <p style={{ color: "#8B7355", margin: 0 }}>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
