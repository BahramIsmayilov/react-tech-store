import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Sidecart() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, cartOpen, closeCart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <h1>hello from side cart</h1>
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
  z-index: 1;
  transition: var(--mainTransition);
  border-left: solid 4px var(--primaryColor);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
