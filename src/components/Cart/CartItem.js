import React from "react";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash
} from "react-icons/fa";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, image, price, title, total, count } = cartItem;
  return (
    <div className="row mt-4 mt-lg-3 text-capitalize align-items-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2 mt-3 mt-lg-0">
        <img src={image} width="60" alt="product image" />
      </div>
      {/* end of image */}
      {/* product */}
      <div className="col-10 mx-auto col-lg-2 mt-2 mt-lg-0">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      {/* end of product */}
      {/* price */}
      <div className="col-10 mx-auto col-lg-2 mt-2 mt-lg-0">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      {/* end of price */}
      {/* count */}
      <div className="col-10 mx-auto col-lg-2 mt-2 mt-lg-0">
        <div className="d-flex justify-content-center align-items-center">
          <FaChevronCircleDown
            className="text-main cart-icon"
            onClick={() => decrement(id)}
          />
          <span className="text-muted mx-3 cart-icon">{count}</span>
          <FaChevronCircleUp
            className="text-main cart-icon"
            onClick={() => increment(id)}
          />
        </div>
      </div>
      {/* end of count */}
      {/* remove */}
      <div className="col-10 mx-auto col-lg-2 mt-1 mt-lg-0">
        <FaTrash
          className="cart-icon text-danger"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* end of remove */}
      {/* price */}
      <div className="col-10 mx-auto col-lg-2 mt-1 mt-lg-0">
        <strong className="text-muted">item total : ${total}</strong>
      </div>
      {/* end of price */}
    </div>
  );
}
