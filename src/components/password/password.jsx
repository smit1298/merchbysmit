import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "../register/registerForm.css";

function Register() {
  // setting values to default
  const [values, setValues] = useState({
    companyEmail: ""
  });

  //   setting submit state
  const [submitted, setSubmitted] = useState(false);

  //   handling changes for inputs

  const handleCompanyEmail = (event) => {
    setValues({ ...values, companyEmail: event.target.value });
  };


  // handling submit
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <Container>
      <Row>
        <Col className="form-container">
          <img className="reg" src="./Assets/images/logo.jpg" alt="Merch.xyz" />
          <h1>Retrieve Password</h1>

          <form className="register-form" onSubmit={handleSubmit}>
            {/* company email */}
            <label htmlFor="companyEmail">
              Company Email<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              onChange={handleCompanyEmail}
              value={values.companyEmail}
              className="form-field"
              placeholder="Company-name@testcompany.com"
              name="companyEmail"
              type="email"
            />
            <br />
            {submitted && !values.companyEmail ? (
              <span className="error-text">Please enter a valid email</span>
            ) : null}
            <br />
            
            <br />
            {/* Log-in Button */}
            <button className="create" type="submit">
              Submit
            </button>
            <br />
           
          </form>
          <span className="password-foot d-flex justify-content-between">
            <small>
              <p>&copy; Company-name</p>
            </small>
            <small>
              <Icon icon="bi:envelope" /> &nbsp;
              <a href="/contact">help@testcompany.com</a>
            </small>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
