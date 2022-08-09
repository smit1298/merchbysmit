import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import Button from "../../nav/Button";
import { Container, Row, Col } from "react-bootstrap";

function hero() {
  return (
    <Container fluid className="container-hero">
      <Row className="hero-all col-md-11 ">
        <Col className="get-started col-md-6">
          <div className="left">
            <div className="one-paragraph">
              <div className="first-para">
                <p className="what">What’s new?</p>
              </div>
              <div className="second-para">
                <p className="get">Get 10% of your next Merch Buy</p>
              </div>
            </div>

            <div className="two">
              <h2 className="produce">
                <span style={{ color: "#566BD9" }}>Produce</span> & &nbsp;
                <span style={{ color: "#DBA90F" }}>ship</span> your branded
                materials straight to you and your stakeholders.
              </h2>
            </div>

            <div className="three">
              <p className="design">
                We design and produce your company merchandise for your
                employees, customers, partners and events.
              </p>
            </div>

            <Button className="hero-btn mb-4" href="/register">
              Get Started
            </Button>
          </div>
        </Col>

        {/* Hero page Image  */}
        <Col className="products col-md-6">
          <div className="right">
            <Row className="top-img w-100 mb-2">
              <Col className="top-first me-2">
                <img
                  src="./Assets/images/frontback.jpg"
                  alt="front and back branded tee shirt"
                />
              </Col>
              <Col className="top-second">
                <img src="./Assets/images/sleeve.jpg" alt="branded sleeve" />
              </Col>
            </Row>

            <Row className="bottom-img w-100">
              <Col className="bottom-first">
                <img src="./Assets/images/capblue.jpg" alt="cap1" />
              </Col>
              <Col className="bottom-second">
                <img src="./Assets/images/capwhite.jpg" alt="cap2" />
              </Col>
              <Col className="bottom-third">
                <img src="./Assets/images/white.jpg" alt="white tee shirt" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default hero;
