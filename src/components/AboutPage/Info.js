import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              alt="about img"
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className=" my-3 text-muted text-lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              tenetur veritatis iure itaque similique quas illo vel. Recusandae
              impedit nihil laudantium harum optio sit eos.
            </p>
            <p className="my-3 text-muted text-lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              tenetur veritatis iure itaque similique quas illo vel. Recusandae
              impedit nihil laudantium harum optio sit eos.
            </p>
            <button className="main-link" style={{ marginTop: "2rem" }}>
              more info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
