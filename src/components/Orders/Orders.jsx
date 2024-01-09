import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./orders.css";
import { removeFromDb } from "../../utilities/fakedb";
const Orders = () => {
  const SavedCart = useLoaderData();
  const [cart , setCart] = useState(SavedCart)

  const deletItemHandeler = id =>{
    const remaining = cart.filter(product => product.id !== id)
    setCart((remaining))
    removeFromDb(id)
  }
 
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} deletItemHandeler={deletItemHandeler} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
