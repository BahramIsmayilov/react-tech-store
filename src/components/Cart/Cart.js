import React from "react";
import Titile from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section className="my-5">
      {/* title */}
      <Titile title="your cart items" center="true" />
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
}
