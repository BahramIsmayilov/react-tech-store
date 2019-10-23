import React from "react";
import Cart from "../components/Cart/";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";

export default function CartPage(props) {
  return (
    <>
      <Hero img={storeBcg} />
      <Cart history={props.history} />
    </>
  );
}
