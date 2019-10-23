import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/REACT_APP_CONTACT_EMAIL"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="first-name"
                className="form-control"
                id="uname"
                placeholder="Bahram Ismayilov"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="example@example.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="important!!!"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                cols="25"
                rows="10"
                className="form-control"
                placeholder="hello there buddy"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="send"
                className="form-control btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
