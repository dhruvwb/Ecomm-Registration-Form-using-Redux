import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./rating.css";
export default function RatingComp() {
  return (
    <div className="ratings-section">
      <Container>
        <Row>
          <Col md={4}>
            <div className="rating-card">
              <p>***** 4.3</p>
              <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
            </div>
          </Col>
          <Col md={4}>
            <div className="rating-card">
              <p>***** 4.9</p>
              <Image src="https://www.goodfirms.co/images/logo.png" />
            </div>
          </Col>
          <Col md={4}>
            <div className="rating-card">
              <p>***** 4.8</p>
              <Image src="https://clutch.co/img/clutch-logo.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
