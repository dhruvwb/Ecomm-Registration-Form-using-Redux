import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../assets/cta-2-1@2x.jpg";
import "./softwareIdea.css";
export default function SoftwareIdea() {
  return (
    <div
      className="mt-10 background"
      style={{ marginBottom: "60px", alignItems: "center" }}
    >
      <div style={{}}>
        <div className="p-5 container text-light custom-rounded">
          <Row className="align-items-center ">
            <Col
              md={6}
              style={
                {
                  // width: "500px",
                }
              }
              className="text-center text-md-start "
            >
              <h1>Do You Have A Revolutionary Software Idea?</h1>
              <h3>Let's Build Future-Ready Solutions Together!</h3>
              <br />
              <Button variant="primary" href="#">
                Contact Us
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={img}
                alt="A man working on a laptop"
                className="img-fluid manwithLaptop"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
