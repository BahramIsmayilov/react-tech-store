import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpeg";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" img={mainBcg} max="true">
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
