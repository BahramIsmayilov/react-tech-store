import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const { links, handleSidebar, sidebarOpen } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 60.3px;
  left: 0;
  background: var(--mainGrey);
  width: 100%;
  height: 100%;
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background-color: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background-color: var(--primaryColor);
    padding-left: 2.5rem;
    color: var(--mainWhite);
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
