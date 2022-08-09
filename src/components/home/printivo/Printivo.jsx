import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./printivo.css";

function Printivo() {
  return (
    <Container fluid className="printivo-conts">
      <Row className="printivo">
        <Col className="growing">
          <p>Our growing list of trusted partners grows even bigger</p>
        </Col>

        <Col className='printivo-img ps-5 col-lg-6 col-sm-12 col-md-12'>
          <img src="./Assets/images/printivo.png" alt="printivo" />
          <img src="./Assets/images/grace.png" alt="grace" />
          <img src="./Assets/images/ship.png" alt="ship" />
          <img src="./Assets/images/heritage.png" alt="ship" />
        </Col>
      </Row>
    </Container>
  );
}

export default Printivo;
