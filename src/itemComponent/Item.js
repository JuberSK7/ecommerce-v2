import React from "react";
import "./itemStyle.css";


const Item = ({ item, handleAddToCart }) => {
  return (
    <div>
      <div className="item-container">
        <img src={item.image} alt={item.title} className="item-img" />

        <div>
          <h4>{item.title}</h4>
          <h3>₹{item.price}</h3>
        </div>

        <button className="button" onClick={() => handleAddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
