import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PopupButton } from "@typeform/embed-react";
import "./navbar.css";

function Navs({ ButtonSetter, Buttons }) {
  return (
    <Navbar className="general shadow-sm" bg="white" expand="lg">
      <Container className="nav-container">
        <Navbar.Brand className="logo me-5" href="/">
          <img src="./Assets/images/logo.jpg" alt="Merch_logo_image" />
          {/* <p className="merch-name">Merch.xyz</p> */}
        </Navbar.Brand>
        <Navbar.Toggle className="minimize mb-4" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "150px" }}>
            <Nav.Link>
              <Link
                className={
                  Buttons === "home" ? "link-home nav-link" : "nav-link"
                }
                to="/"
                onClick={() => ButtonSetter("home")}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={
                  Buttons === "contact" ? "link-contact nav-link" : "nav-link"
                }
                to="/contact"
                onClick={() => ButtonSetter("contact")}
              >
                Contact us
              </Link>
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto pt-2 flex align-center justify-center">
            <Nav.Link className="me-3">
              <Link
                className={
                  Buttons === "shop" ? "link-shop nav-link" : "nav-link"
                }
                to="/shop"
                onClick={() => ButtonSetter("shop")}
              >
                Shop now
              </Link>
            </Nav.Link>

            <PopupButton
              className="sign-up register my-button"
              id="JDgvFkEa"
              style={{ fontSize: 20 }}
              type="submit"
            >
              Get started
            </PopupButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
