import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import "./hero.css";
import RatingComp from "./RatingComp";
import img from "../assets/Group 57349@2x.jpg";
export default function HeroSection() {
  return (
    <div className="hero-section background" style={{ marginBottom: "60px" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Turning Ideas Into Digital Wonders</h1>
            <p>
              Advantal Technologies is more than just a custom software
              development company; we're your end-to-end tech partners. We
              journey with you every step of the way, from crafting your digital
              vision into reality to executing and managing its seamless
              integration into your business/organisation.
            </p>
            <Button variant="primary" className="me-2 heroP">
              Let's Connect
            </Button>
            <Button variant="outline-primary" className="heroP">
              Watch Video
            </Button>
          </Col>
          <Col md={6}>
            <Row mt-0>
              <Image
                src={img}
                // visible={{ md: true, lg: true, xl: true }}
                className="thumbnail imageHero hide-on-xs,"
                width={10}
                rounded
              />
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <RatingComp /> */}
    </div>
  );
}
