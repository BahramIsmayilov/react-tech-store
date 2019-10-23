import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SingleProductBcg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context";

export default function SingleProductPage() {
  return (
    <>
      <Hero title="single product" img={SingleProductBcg} />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            console.log("hello from loading");
            return <h1>product loading...</h1>;
          }
          const {
            id,
            title,
            price,
            company,
            description,
            image
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 m-3">
                    <img
                      // src={`../${image}`}
                      src={image}
                      className="img-fluid"
                      alt="singleProduct image"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 m-3">
                    <h5 className="text-title mb-4">model : {title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company : {company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      price : ${price}
                    </h5>
                    <p className="text-title mb-3">
                      some info about product :{" "}
                    </p>
                    <p className="mb-5">{description}</p>
                    <button
                      className="main-link mr-4 mb-4"
                      onClick={() => addToCart(id)}
                    >
                      add to cart
                    </button>
                    <Link to="/products" className="main-link">
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
