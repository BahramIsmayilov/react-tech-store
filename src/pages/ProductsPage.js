import React from "react";
import Hero from "../components/Hero";
import ProductBcg from "../images/productsBcg.jpeg";
import Products from "../components/ProductsPage/Products";

export default function ProductsPage() {
  return (
    <>
      <Hero img={ProductBcg} />
      <Products />
    </>
  );
}
