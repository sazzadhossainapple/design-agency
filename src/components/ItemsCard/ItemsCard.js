import React from "react";
import "./ItemsCard.css";
const ItemsCard = ({ items }) => {
  const { title, image } = items;
  return (
    <div className="items">
      <div className="items-img">
        <img src={image} alt="" />
      </div>

      <h3>{title}</h3>
    </div>
  );
};

export default ItemsCard;
