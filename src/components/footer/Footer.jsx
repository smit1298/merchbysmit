import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="foot-logo">
        <Col className="footer-img">
          <Link className="image" to="/">
            <img src="./Assets/images/logo.jpg" alt="merch.xyz" />
          </Link>
        </Col>
      </Row>

      <Row className="footlink">
        <div className="links">
          <Link className="overview" to="/">
            Overview
          </Link>
          <Link className="overview" to="/">
            Features
          </Link>
          <Link className="overview" to="/">
            Help
          </Link>
          <a className="overview" href='https://drive.google.com/file/d/1vRAruXR-AvBYbInisQJnEwAEPUzvzT7h/view?usp=sharing' target='_blank'>
            Policy
          </a>
        </div>
      </Row>

      <Row>
        <div className="foot-small">
          <small className="rights">
          &copy; 2022 Merch.xyz. All rights reserved.
          </small>
          <div className="link-term">
            <a className="terms" href='https://drive.google.com/file/d/1vRAruXR-AvBYbInisQJnEwAEPUzvzT7h/view?usp=sharing' target='_blank'>Terms</a>
            <Link className="terms" to="/">Privacy</Link>
            <Link className="terms" to="/">Cookies</Link>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
