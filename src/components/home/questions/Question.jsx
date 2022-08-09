import React, { useState } from "react";
import {
  Accordion,
  Card,
  Container,
  useAccordionButton,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./question.css";
import Button from "../../nav/Button";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    handleClick();
  });

  return (
    <div className="card-header" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const Question = () => {
  const [activeKey, setActiveKey] = useState(0);

  const data = [
    {
      question: "How do i get my Merchz?",
      answer:
        "We protect your merchz with the return policies and we use our own personal delivery people so you don't need to worry about losing your items. Trust us, you are well protected.",
    },
    {
      question: "What happens if I receive a damaged item?",
      answer:
        "In the event that your order is damaged, we will replace it at no additional cost, provided we have the inventory. A full refund will be issued if we cannot replace the item. ",
    },
    {
      question: "I accidentally ordered the wrong size; how can I fix this?  ",
      answer:
        "We can certainly help you get your order right, as long as it has not been shipped yet. Please email us at support@merchs.com and include the name and email on the order, the new size you’d like and your order number.  ",
    },
    {
      question: "What are your delivery costs?  ",
      answer:
        "We offer free shipping within Nigeria and across the world. We have over a thousand shipping partners worldwide, making shipping as easy as possible.  ",
    },
    {
      question: "How long does shipping take for Nigerian orders?",
      answer:
        "It typically takes 3 - 7 days for an item to be delivered to the customer after it has been shipped from one of our warehouses. ",
    },
    {
      question: "Do you ship internationally?  ",
      answer:
        "Yes, we offer global shipping. Upon leaving Nigeria, packages will be shipped to a regional hub before being delivered to the country of destination. A package's final delivery is handled by its local postal service once it reaches its destination country. Orders shipped internationally can take up to three to eight weeks to arrive. ",
    },
    {
      question: "Do I have to pay international customs and VAT?   ",
      answer:
        "Customs may charge an additional fee or VAT for international shipping. We cannot calculate the cost in advance due to the difference in fees between countries. These fees are not paid by Merch. ",
    },
  ];
  return (
    <Container fluid className="App">
      <Row className="all-question text-center justify-content-center">
        <Row className="frequent">
          <div>
            <h3>Frequently asked questions</h3>
            <p>Everything you need to know about Merch.xyz</p>
          </div>
        </Row>
        <Row className="accordion-row">
          <Accordion defaultActiveKey={0} activeKey={activeKey}>
            {data.map((item, index) => (
              <Card key={index}>
                <CustomToggle
                  as={Card.Header}
                  eventKey={index}
                  handleClick={() => {
                    if (activeKey === index) {
                      setActiveKey(null);
                    } else {
                      setActiveKey(index);
                    }
                  }}
                >
                  <span className="texts">
                    <div>{item.question}</div>
                    <div className="signs">
                      {activeKey === index ? "-" : "+"}
                    </div>
                  </span>
                </CustomToggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body className="answer">{item.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Row>

        <Row className="avatars text-center justify-content-center">
          <div className="avatar justify-content-center d-flex">
            <div className="img">
              <img src="./Assets/images/avatar1.png" alt="avatar1" />
              <img src="./Assets/images/Avatar2.png" alt="avatar2" />
              <img src="./Assets/images/Avatar3.png" alt="avatar3" />
              <img src="./Assets/images/Avatar4.png" alt="avatar4" />
            </div>
          </div>
          <div className="questions">
            <h3>Still have questions?</h3>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <Link className="link-btn" to="/contact">
            <Button>Get in touch</Button>
          </Link>
        </Row>
      </Row>
    </Container>
  );
};
export default Question;
