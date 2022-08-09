import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "./contactForm.css";

function ContactForm() {
  // setting values to default
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  //   setting submit state
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState();

  //   handling changes for inputs
  const handlefirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handlelastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };
   const handleMessage = (event) => {
    setValues({ ...values, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.phoneNumber &&
      values.message
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <Container>
      <Row>
        <Col className="contact-container">
          <div className="contact-head">
            <h6>Contact us</h6>
            <h1>Get in touch</h1>
            <p>We’d love to hear from you. Please fill out this form.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && valid ? (
              <div className="success-message">
                We will get back to you shortly. Thank You!
              </div>
            ) : null}
            <div className="names d-flex text-start">
              {/* first name */}
              <div id="firstname" className="m-3">
                <label htmlFor="firstName">
                  First name<span style={{ color: "red" }}>*</span> <br />
                </label>
                <br />
                <input
                  onChange={handlefirstName}
                  value={values.firstName}
                  className="form-field firstName ps-2"
                  placeholder="Temitope"
                  name="firstName"
                  type="text"
                />
                <br />
                {submitted && !values.firstName ? (
                  <span className="error-text">
                    Please enter your first name
                  </span>
                ) : null}
                <br />
              </div>

              <div id="lastname" className="m-3">
                {/* last name */}
                <label htmlFor="lastName">
                  Last name<span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <input
                  onChange={handlelastName}
                  value={values.lastName}
                  className="form-field lastName ps-2"
                  placeholder="Adebuzor"
                  name="lastName"
                  type="text"
                />
                <br />
                {submitted && !values.lastName ? (
                  <span className="error-text">
                    Please enter your last name
                  </span>
                ) : null}
                <br />
              </div>
            </div>
            {/* email */}
            <div id="email" className="m-3">
              <label htmlFor="email">
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                onChange={handleEmail}
                value={values.email}
                className="form-field ps-2"
                placeholder="Company-name@testcompany.com"
                name="email"
                type="email"
              />
              <br />
              {submitted && !values.email ? (
                <span className="error-text">Please enter a valid email</span>
              ) : null}
            </div>

            <br />
            <div id="phone-number">
              {/* Phone Number */}
              <label htmlFor="phoneNumber">Phone number</label> <br />
              <PhoneInput
                placeholder="+234 567 890 1234"
                value={value}
                onChange={setValue}
                name="phoneNumber"
                className="form-field phone m-3"
              />
              <br />
              {submitted && !values.phoneNumber ? (
                <span className="error-text">
                  Please enter your Phone Number
                </span>
              ) : null}
            </div>

            <br />
            <div id="message" className="m-3">
              {/* message */}
              <label htmlFor="message">Message</label> <br />
              <input
                type="text"
                name="message"
                className="form-field message"
                onChange={handleMessage}
                value={values.message}
              />
              <br />
              {submitted && !values.message ? (
                <span className="error-text">Please enter your Message</span>
              ) : null}
            </div>

            <br />
            <span className="checked d-flex">
              <input type="checkbox" name="privacy" required />
              <p className="d-flex">You agree to our friendly &nbsp;
              <Link to="#">privacy policy.</Link></p>
            </span>
            <br />
            <button className="create m-3" type="submit">
              Send message
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
