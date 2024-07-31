import React from "react";
import {
  Button,
  Image,
  Row,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
} from "react-bootstrap";
import img from "../assets/Group 57349@2x.jpg";
export default function CardComp() {
  return (
    <div>
      <Container>
        <Row className="mt-5 " style={{ marginBottom: "60px" }}>
          <Col md={6} sm={6} xs={12}>
            <Card
              className="shadow-sm rounded-3"
              style={{
                height: "200px",
                marginBottom: "60px",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <h2 className="mb-2">20+</h2>
                  <p className="mb-0">Countries Reached</p>
                </div>
                <div className="mt-3">
                  <p className="text-muted text-center">
                    We're a preferred software product engineering and digital
                    transformation partners for businesses and enterprises
                    across the world.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6} xs={12}>
            <Card className="shadow-sm rounded-3" style={{ height: "200px" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <h2 className="mb-2">250+</h2>
                  <p className="mb-0">Satisfied Clients</p>
                </div>
                <div className="mt-3">
                  <p className="text-muted text-center">
                    From award-winning telecom software solutions to high
                    revenue-generating e-commerce platforms, we believe in
                    surpassing client expectations.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
