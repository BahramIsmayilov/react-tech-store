import React, { Component } from "react";
import { FaDolly, FaDollarSign, FaRedo } from "react-icons/fa";
import styled from "styled-components";

export default class Featured extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly className="icon" />,
        title: "free shipping",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, explicabo."
      },
      {
        id: 2,
        icon: <FaRedo className="icon" />,
        title: "30 days return policy",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, explicabo."
      },
      {
        id: 3,
        icon: <FaDollarSign className="icon" />,
        title: "secured payment",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, explicabo."
      }
    ]
  };
  render() {
    const { services } = this.state;

    return (
      <ServicesWrapper className="px-5 py-3">
        <div className="container py-5">
          <div className="row">
            {services.map(item => (
              <div
                key={item.id}
                className="text-center col-sm-6 col-10 mx-auto col-md-4 pt-4"
              >
                {item.icon}
                <p className="text-capitalize pt-3">{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.div`
  background: rgba(95, 183, 234, 0.5);
  .icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
