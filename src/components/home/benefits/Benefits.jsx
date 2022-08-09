import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Detail from "./Detail";
import "./Benefits.css"

function Benefits() {
  return (
    <>
      <Container id="benefit">
        <Row>
          <Col className="text-center">
            <div className="benefit">
              <h6>Benefits</h6>
              <h3>You get lots and lots of benefits from using Merch.xyz</h3>
              <p>Overview of benefits from using Merch.xyz</p>
            </div>
          </Col>
        </Row>

        <Row className="pb-5 text-center">
          <Col className="col-12 col-md-6 col-lg-4">
            <Detail
              Img="./Assets/icons/order.png"
              name="place an order"
              titles="Simple to place an order"
              descriptions="Users access the your customized store using a unique company ID and email address/Voucher ID. They can quickly glance through what they want and place the order."
              // features={[]}
            />
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Detail
              Img="./Assets/icons/demand.png"
              name="Demand ordering"
              titles="On-Demand Ordering"
              descriptions="We offer our clients access to a wide range of products with little or no expense of stocking pre-branded apparel and soft goods."
              // features={[]}
            />
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Detail
              Img="./Assets/icons/monetize.png"
              name="monitize brand"
              titles="Monitize your Brand"
              descriptions="Sell your swags to the public and earn extra for being on Merchs.xyz"
              // features={[]}
            />
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Detail
              Img="./Assets/icons/payment.png"
              name="Payment"
              titles="Multiple Payment Options"
              descriptions="Supports multiple checkout payment options with a payment gateway integration for credit card and account transfer. We also use a voucher system that can be invoiced and pay at the end of the month."
              // features={[]}
            />
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Detail
              Img="./Assets/icons/support.png"
              name="place an order"
              titles="Support whenever you need"
              descriptions="Site includes search feature to easily find desired merchandise. It also has live chat and customer service to facilitate the process. Your company also gets a dedicated account manager for support and product offerings."
              // features={[]}
            />
          </Col>
          <Col className="col-12 col-md-6 col-lg-4">
            <Detail
              Img="./Assets/icons/smartphone.png"
              name="multiple payment"
              titles="Designed to work easy on smartphones"
              descriptions="Designed to work easily on smartphones."
              // features={[]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Benefits;
