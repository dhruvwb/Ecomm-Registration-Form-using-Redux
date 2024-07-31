import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col,
  Image,
  NavDropdown,
} from "react-bootstrap";

import CardComp from "./CardComp";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Certifications from "./Certifications";
import Clients from "./Clients";
import SoftwareIdea from "./SoftwareIdea";
import Technologies from "./Technologies";
import Offices from "./Offices";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Tech from "./Tech";

export default function Navigation() {
  return (
    <>
      <Navbar
        bg="dark"
        className="bg-light"
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#">Advantal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <NavDropdown title="Industries" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Industry 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Industry 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Industry 3
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Solution" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Solution 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Solution 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Solution 3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#insight">Insight</Nav.Link>
              <NavDropdown title="About Advantal" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-light">Contact Us</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HeroSection />
      <CardComp />
      <Services />
      <Certifications />
      <Clients />
      <SoftwareIdea />
      {/* <Technologies /> */}
      <Tech />
      <Offices />
      <Footer />
      <Copyright />
    </>
  );
}
