import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../nav/Button";
import "./newsletter.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  return (
    <Container>
      <Row className="newsletter">
        <Col className="join">
          <div>
            <h5>Join our newsletter</h5>
          </div>
          <div>
            <p>
              Sign up for our newsletter and get 10% off your next purchase.
            </p>
          </div>
        </Col>
        <Col className="subscribe">
          <form>
            <div className="input-btn">
              <input
                className="subscribe-text"
                aria-label="Your email address"
                name="email_address"
                placeholder="Your email address"
                required
                type="email"
                onChange={handleEmailChange}
                value={email}
              />
              <Button className="subscribe-btn" onClick={""}>
                Subscribe
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribeForm;
