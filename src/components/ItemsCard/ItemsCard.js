import React from "react";
import "./ItemsCard.css";
const ItemsCard = ({ items }) => {
  const { title, image, classes } = items;
  return (
    <div className="items">
      <div className="items-img">
        <img src={image} alt="" />
      </div>

      <h3
        style={{
          color: `${classes}`,
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default ItemsCard;
