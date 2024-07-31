import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iso from "../assets/iso-9001-2015-150x150@2x.jpg";
export default function Certifications() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-4">
          <div
            className="card p-4 shadow-div-dark"
            style={{ boxShadow: "10px 5px 10px #0099C7" }}
          >
            <img
              src={iso}
              alt="ISO 9001:2015 Certified"
              className="mb-3"
              width={70}
              height={70}
            />
            <h4>ISC 9001:2015 Certified</h4>
            <p>
              The certification speaks volumes about our top-tier software
              development quality. We deliver reliable, error-free, and smooth
              functioning custom software products to our clients.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div
            className="card p-4 shadow-div"
            style={{ boxShadow: "10px 5px 10px #0099C7" }}
          >
            <img
              src={iso}
              alt="ESC Registered Member"
              className="mb-3"
              width={70}
              height={70}
            />
            <h4>ESC Registered Member</h4>
            <p>
              We're registered as the Electronic & Computer Software Export
              Council member (ESC member) under the Foreign Trade Policy of
              India. This testifies the trust we've garnered globally.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
