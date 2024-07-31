import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import samsung from "../assets/Group 57259@2x.png";
import "./client.css";
export default function Clients() {
  return (
    <Container className="mt-5 mb-30 " style={{ marginBottom: "110px" }}>
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center mb-4">Creating Digital Wonders</h2>
          <h3 className="text-center">For Clients Globally</h3>
        </Col>
      </Row>
      <Row className="justify-content-center  mt-5  ">
        <Col className="text-center clientRow">
          <img src={samsung} alt="Nokia Logo" width="100" />
        </Col>
        <Col className="text-center">
          <img src={samsung} alt="Samsung Logo" width="100" />
        </Col>
        <Col className="text-center">
          <img src={samsung} alt="Airtel Logo" width="100" />
        </Col>
        <Col className="text-center">
          <img src={samsung} alt="HCL Logo" width="100" />
        </Col>
        <Col className="text-center">
          <img src={samsung} alt="BSNL Logo" width="100" />
        </Col>
        <Col className="text-center">
          <img src={samsung} alt="NTT Logo" width="100" />
        </Col>
      </Row>
    </Container>
  );
}
