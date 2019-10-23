import React from "react";
import { ProductConsumer } from "../../context";
import Paypal from "./Paypal";

export default function CartTotals() {
  return (
    <div className="container my-3 text-center">
      <div className="row">
        <ProductConsumer>
          {value => {
            const {
              clearCart,
              cartSubTotal,
              cartTax,
              cartTotal,
              history
            } = value;
            return (
              <div className="col-10 mx-auto my-4 text-title">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  cart-clear
                </button>
                <h3>subtotal : ${cartSubTotal}</h3>
                <h3>tax : ${cartTax}</h3>
                <h3 style={{ marginBottom: "2rem" }}>total : ${cartTotal} </h3>
                <Paypal
                  history={history}
                  clearCart={clearCart}
                  cartTotal={cartTotal}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
