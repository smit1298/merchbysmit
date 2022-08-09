import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./chateau.css";

function Chateau() {
  return (
    <>
      <Container fluid className="real">
        <Row className="chateau">
          <Col className="all">
            <div className="chateau-img">
              <img src="./Assets/images/chateau.jpg" alt="chateau" />
            </div>
            <div className="quote">
              <h3>
                Merch.xyz has really increased our brand outlook, they make
                really awesome brand items that are easily recognisiable and
                what we represent as a brand, i will always use them.
              </h3>
              <img src="./Assets/images/Osonuga.png" alt="osonuga" />
              <h4>Osonuga Oluwatobi</h4>
              <p>Managing Director / Chateau Royal</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Chateau;
