import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <li className="cardItem">
      <Link to={`/product/${item.id}`}>
        <img src={`${process.env.PUBLIC_URL}/img/${item.img}`}></img>
        <h4>{item.title}</h4>
        <div className="info1">
          <span className="sale">{item.sale}</span>
          <span> {item.price2}</span>
        </div>
        <p className="info2">
          소비자가 : <span>{item.price}</span>
        </p>
      </Link>
    </li>
  );
};

export default Card;
