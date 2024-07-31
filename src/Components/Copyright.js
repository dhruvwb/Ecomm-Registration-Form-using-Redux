import React from "react";
import { Container, Row, Col, Navbar, Nav, Image } from "react-bootstrap";
import img from "../assets/Group 57340@2x.png";
import "./copyright.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Copyright() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <hr />
        <Row className="justify-content-between FooterLogo align-items-center">
          <Col xs={12} md={3} className="advantalFooterLogo">
            <Image
              src={img}
              alt="Advantal Logo"
              height={100}
              width={100}
              fluid
            />
          </Col>
          <Col xs={12} md={6} className="text-center">
            <p className="mb-0">
              &copy; 2024 Advantal Technologies. All Rights Reserved.
            </p>
            <p className="mb-0">
              <a href="/terms-of-use" className="text-light">
                Terms of Use
              </a>{" "}
              |{" "}
              <a href="/privacy-policy" className="text-light">
                Privacy Policy
              </a>
            </p>
          </Col>
          <Col xs={12} md={3} className="text-end">
            {/* <a
              href="https://www.facebook.com/advantal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a
              href="https://twitter.com/advantal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/advantal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/advantal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-lg"></i>
            </a> */}
            <div className="d-flex social justify-content-center">
              <a href="#" className="mx-2">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="mx-2">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="mx-2">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="mx-2">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
