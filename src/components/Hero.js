import React from "react";
import mainBcg from "../images/mainBcg.jpeg";
import styled from "styled-components";

export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper img={img} max={max}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => (props.max ? "100vh" : "60vh")};
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) center/cover no-repeat;
  color: var(--mainWhite);
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBcg,
  max: ""
};
