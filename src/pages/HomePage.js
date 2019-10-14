import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpeg";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" img={mainBcg} max>
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          our products
        </Link>
      </Hero>
    </>
  );
}
