import React from "react";
import FeedbackDetail from "./feedbackDetail";
import "./feedback.css"

import { Container, Row, Col } from "react-bootstrap";

function Feedback() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-bottom">
            <h6>Contact us</h6>
            <h1>We’d love to hear from you</h1>
            <p>Our friendly team is always here to chat.</p>
          </div>
        </Col>
      </Row>

      <Row className="feedback-img">
        <Col>
          <img
            src="./Assets/images/contactFeedback.png"
            alt="contact feedback"
          />
        </Col>
      </Row>

      <Row className="feedbacks">
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/envelope.png"
            title="Chat to sales"
            name="Sales Chat"
            description="Speak to our friendly team."
            contact="sales@merchs.xyz"
            link="mailto: contact@merchs.xyz"
          />
        </Col>
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/chat.png"
            title="Chat to support"
            name="Support Chat"
            description="We’re here to help."
            contact="contact@merchs.xyz"
            link="mailto: contact@merchs.xyz"
          />
        </Col>
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/location.png"
            title="Visit us"
            name="visit"
            description="Visit our office HQ."
            contact="39, Ikorodu road, Jibowu, Lagos. "
            link="#"
          />
        </Col>
        <Col className="feedback col-lg-3">
          <FeedbackDetail
            Image="./Assets/icons/call.png"
            title="Call us"
            name="Support Chat"
            description="Mon-Fri from 8am to 5pm"
            contact="+234 812 318 7053"
            link="tel: +2348123187053"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Feedback;
