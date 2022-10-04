import React from "react";
import Product from "../productComponent/Product";
import "./Cardstyle.css";

const Card = ({ cartItems, addToCart, removeFromCart }) => {
  const calculetTotale = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  return (
    <div className="wrapper">
      <h2>Amazone Cart</h2>
      {cartItems.length === 0 ? <p>No Items in Cart </p> : null}
      {cartItems.map((item) => (
        <Product
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>TotleAmount: ₹{calculetTotale(cartItems).toFixed(2)}</h2>
    </div>
  );
};

export default Card;
