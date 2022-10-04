import React from "react";
import Button from "@material-ui/core/Button";
import "./Productstyle.css";

const Product = ({ item, addToCart, removeFromCart }) => {
  return (
    <div>
      <div className="product-container">
        <div className="flex-div">
          <h3>{item.title}</h3>
          <div className="information">
            <p>Price: ₹{item.price}</p>
            <p>Total: ₹{(item.amount * item.price).toFixed(2)}</p>
          </div>
          <div className="button">
            <Button
              style={{ backgroundColor: "red" }}
              size="small"
              disableElevation
              variant="contained"
              onClick={() => removeFromCart(item.id)}
            >
              Remove Item
            </Button>
            <p>{item.amount}</p>
            <Button
              style={{ backgroundColor: "#FF9900" }}
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
              Add Item
            </Button>
          </div>
        </div>
        <img src={item.image} alt={item.title} className="product-img" />
      </div>
    </div>
  );
};

export default Product;
