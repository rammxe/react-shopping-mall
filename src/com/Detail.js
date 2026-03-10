import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Detail.css";

const Detail = ({ data }) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const product = data.find((item) => item.id === parseInt(id));

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="detail-wrapper">
      <Container className="detail-container">
        {product ? (
          <Row>
            <Col md={6}>
              <div className="detail-img-box">
                <img
                  src={`${process.env.PUBLIC_URL}/img/${product.img}`}
                  alt={product.title}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="detail-info">
                <h2>{product.title}</h2>

                <div className="detail-price-box">
                  <div className="price-row">
                    <span className="sale-badge">{product.sale}</span>
                    <span className="current-price">{product.price2}</span>
                  </div>
                  <p className="original-price">소비자가: {product.price}</p>
                </div>

                <div className="detail-description">
                  <h4>상품 설명</h4>
                  <p>
                    고급스러운 디자인과 은은한 향이 어우러진 프리미엄
                    제품입니다.
                  </p>
                  <p>
                    선물용으로도 인기가 많으며, 오랜 시간 지속되는 향기를 즐기실
                    수 있습니다.
                  </p>
                </div>

                {/* 수량 선택 */}
                <div className="quantity-box">
                  <div className="quantity-row">
                    <span className="quantity-label">수량</span>
                    <div className="quantity-controls">
                      <button className="qty-btn" onClick={decreaseQty}>
                        -
                      </button>
                      <span className="qty-number">{qty}</span>
                      <button className="qty-btn" onClick={increaseQty}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="total-price-row">
                    <span className="total-label">총 금액</span>
                    <span className="total-amount">
                      {(
                        parseInt(product.price2.replace(/[^0-9]/g, "")) * qty
                      ).toLocaleString()}
                      원
                    </span>
                  </div>
                </div>

                {/* 버튼 */}
                <div className="detail-buttons">
                  <button className="cart-btn">장바구니</button>
                  <button className="buy-btn" onClick={() => navigate("/pay")}>
                    구매하기
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <div className="product-not-found">
            <h3>상품을 찾을 수 없습니다 😢</h3>
            <Button variant="primary" href="/">
              홈으로 돌아가기
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Detail;
