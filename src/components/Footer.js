import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => (
        <FooterWrapper>
          <div className="container pb-3 pt-4">
            <div className="row">
              <div className="col-md-6">
                <p className="text-capitalize">
                  copyright &copy; tech store {new Date().getFullYear()}. all
                  rights reserved
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-around">
                {value.socialIcons.map(item => (
                  <a key={item.id} href={item.url}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FooterWrapper>
      )}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  color: var(--mainWhite);
  background: var(--darkGrey);
  text-align: center;
  .icon {
    color: var(--mainWhite);
    font-size: 1.5rem;
    text-align: center;
    transition: var(--mainTransition);
    :hover {
      color: var(--primaryColor);
    }
  }
`;
