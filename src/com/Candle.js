import React from "react";
import Card from "./Card";

const Candle = ({ data }) => {
  const filterItems = data.filter((item) => {
    return item.list === "c";
  });

  console.log(filterItems);

  return (
    <div className="candle-section">
      <h3>GIFT</h3>
      <ul className="product-list">
        {filterItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Candle;
