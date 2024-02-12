import React, { useState } from "react";

const Contact = (props) => {
  const containerStyle = {
    height: "100vh",
    maxWidth: "100vw",
  };
  const [input, setinput] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    props.showAlert("Your Form Submitted", "success");
  };
  return (
    <>
      <div style={containerStyle} className="container">
        <div className="container d-flex non-flex gap">
          <div className="box-1 border-primary">
            <img
              src="\Images\contactbg1.png"
              className="d-flex contact-img img-fluid"
              alt=""
            />
            <p className="py-4 sm:py-3 text-center text-white">
              If you have questions or just want to get in touch,use the form
              below.We look forward to hearing from you!
            </p>
          </div>
          <div className="box-2 border-primary">
            <h2 className="text-center text-dark">Contact Us</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="name"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Name"
                minLength={3}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Email"
                minLength={3}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label py-2">
                Enter Your Message Here
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                value={input.message}
                onChange={handleChange}
                placeholder="Message"
                minLength={3}
                required
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              onChange={handleChange}
              disabled={
                input.name.length < 3 ||
                input.email.length < 3 ||
                input.message.length < 3
              }
              type="submit"
              className="my-2 btn d-block mx-auto btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
