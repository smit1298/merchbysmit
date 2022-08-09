import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./image.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function image() {
  return (
    <Container fluid id="trusted-brands">
      <Row id="images">
        <Row className="trusted-center">
          <Col className="trusted-text mt-5">
            <h6>Join our trusted Brands</h6>
          </Col>
        </Row>

        <Row>
          <div className="media-scroller snaps-inline mt-5 mb-4">
            <div className="media-element">
              <img src="./Assets/images/sportingLagos.jpg" alt="sporting" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/chateau.jpg" alt="chateau" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/atco.jpg" alt="atco" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/robethson.jpg" alt="robethson" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/comerico.jpg" alt="comerico" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/settle2.jpg" alt="settle" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/learnam.png" alt="learnam" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/miniemoney.jpg" alt="miniemoney" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/pave.png" alt="pave" />
            </div>
            <div className="media-element">
              <img src="./Assets/images/revrica.png" alt="revrica" />
            </div>
          </div>
        </Row>
      </Row>
    </Container>
  );
}

export default image;
