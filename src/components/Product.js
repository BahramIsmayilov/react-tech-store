import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";

export default function Product({ product }) {
  const { id, image, title, price } = product;
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  // src={`../${image}`}
                  src={image}
                  alt="product"
                  className="card-img-top p-5"
                />
                <div className="product-icons">
                  <Link
                    to={`/products/${id}`}
                    onClick={() => setSingleProduct(id)}
                  >
                    <FaSearch className="icon" />
                  </Link>

                  <FaCartPlus className="icon" onClick={() => addToCart(id)} />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0 text-capitalize">{title}</p>
                <p className="mb-0 text-main"> ${price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
    :hover {
      box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      .card-img-top {
        transform: scale(1.15);
        opacity: 0.2;
      }
      .product-icons {
        opacity: 1 !important;
        z-index: 1;
      }
    }
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .img-container {
    position: relative;
  }
  .product-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--mainTransition);
  }

  .icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 1rem;
    cursor: pointer;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
  }
`;
