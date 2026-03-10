import React from "react";
import Card from "./Card";

const Diffuser = ({ data }) => {
  const filterItems = data.filter((item) => {
    return item.list === "d";
  });

  console.log(filterItems);

  return (
    <div className="diffuser-section">
      <img src={process.env.PUBLIC_URL + "/img/img04.png"} alt="diffuser" />
      <h3>FACE TOWEL</h3>
      <ul className="product-list">
        {filterItems.map((item) => (
          <Card key={item.id} item={item} /> 
        ))}
      </ul>
    </div>
  );
};

export default Diffuser;