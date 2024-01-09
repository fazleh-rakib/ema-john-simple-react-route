import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product ,deletItemHandeler}) => {
//   console.log(product, "prod");
  const { id, price, name, img, quantity } = product;
  return (
    <div className="review-item">
      <img src={product.img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price : <span className="text-orange">${price}</span>
        </p>
        <p>
          Quantity : <span className="text-orange">{quantity}</span>
        </p>
      </div>
      <button onClick={()=>deletItemHandeler(id)} className="btn-delete">
        <FontAwesomeIcon className="delet-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
