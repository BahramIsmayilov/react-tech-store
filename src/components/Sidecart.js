import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default function Sidecart() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, cartOpen, closeCart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul className="mt-4 mb-5">
              {cart.map(item => {
                return (
                  <li key={item.id}>
                    <img
                      // src={`../${item.image}`}
                      src={item.image}
                      alt="product image"
                      style={{ width: "2.5rem" }}
                    />
                    <h6 className="mt-2 text-uppercase">{item.title}</h6>
                    <p className="main-text text-title">
                      amount : {item.count}
                    </p>
                  </li>
                );
              })}
              <h4 className="text-main text-capitalize mt-2">
                cart total: ${cartTotal}
              </h4>
              <div className="text-center">
                <Link to="/cart" className="main-link mb-5 mt-4">
                  cart page
                </Link>
              </div>
            </ul>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.nav`
  position: fixed;
  top: 60.3px;
  right: 0;
  background-color: var(--mainGrey);
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: var(--mainTransition);
  border-left: solid 4px var(--primaryColor);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  ul {
    list-style: none;
  }
  h6 {
    margin: 0.2rem !important;
  }
`;
