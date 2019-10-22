import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context";

export default function CartList() {
  return (
    <div className="container-fluid my-2">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { cart, increment, decrement, removeItem } = value;
            if (cart.length === 0) {
              return (
                <div className="col-10 mx-auto mt-5">
                  <h1 className="text-center text-capitalize text-title">
                    your cart is currently empty
                  </h1>
                </div>
              );
            }

            return (
              <div className="col text-center">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    cartItem={item}
                    increment={increment}
                    decrement={decrement}
                    removeItem={removeItem}
                  ></CartItem>
                ))}
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
