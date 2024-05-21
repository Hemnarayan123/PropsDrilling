import React from "react";
import './Cart.css'

function Cart({image, name, price, rating}) {
  return (
    <>
      <div className="main-div">
        <div className="image">
          <img
            src={image}
            alt=""
          />
        </div>

        <div className="content">
          <h1 className="name">Product Name : {name}</h1>
          <h3 className="price">Price : {price}</h3>
          <h4 className="rating">Rating  : {rating}</h4>
        </div>
      </div>

    </>
  );
}

export default Cart;
