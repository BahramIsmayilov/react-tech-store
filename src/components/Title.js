import React from "react";
import styled from "styled-components";

export default function Title({ title, center }) {
  return (
    <TitleWrapper className="row" center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  .title-underline {
    margin: ${props => (props.center ? "0 auto" : null)};
    width: 7rem;
    height: 0.3rem;
    background-color: var(--primaryColor);
  }
`;
