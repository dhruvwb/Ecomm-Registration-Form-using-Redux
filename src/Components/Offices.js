import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./offices.css";
import img from "../assets/R.png";
export default function Offices() {
  return (
    <Container>
      <Container
        className="offices-container "
        style={{ marginBottom: "60px" }}
      >
        <h2 className="text-center mb-5">Our Offices</h2>
        <h1 className="text-center mb-5">Advantal Global Presence</h1>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <div
              className="card office-card"
              style={{
                backgroundColor: "#0099C7",
                color: "white",
                border: "2px solid #0099C7",
                height: "18rem",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">DEVELOPMENT CENTER</h5>
                <div className="d-flex m-2 align-items-center">
                  <img src={img} alt="USA Flag" width="50" height="30" />
                  <h6 className="card-subtitle mb-2 text-muted">India</h6>
                </div>
                <p className="card-text">
                  209, 1st Floor, Right Wing, MPSEDC STP Building, Electronic
                  Complex, Pardesipura, Indore - 452010 Madhya Pradesh, India
                </p>
                <p className="card-text">
                  Phone: +91 9926054677 (Business), +91 9131295441 (HR)
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div
              className="card office-card"
              style={{
                backgroundColor: "#191919",
                color: "white",
                border: "2px solid #0099C7",
                height: "18rem",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">CORPORATE OFFICE</h5>
                <div className="d-flex m-2 align-items-center">
                  <img src={img} alt="USA Flag" width="50" height="30" />
                  <h6 className="card-subtitle mb-2 text-muted">India</h6>
                </div>
                <p className="card-text">
                  Unit No. 527 and 528, 5th Floor, Vipul Trade Centre, Sector
                  48, Sohna Road, Gurugram, Haryana - 122018, India
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div
              className="card office-card"
              style={{
                backgroundColor: "#0099C7",
                color: "white",
                border: "2px solid #0099C7",
                height: "18rem",
              }}
            >
              <div className="card-body ">
                <h5 className="card-title">UNITED STATES OFFICE</h5>
                <div className="d-flex m-2 align-items-center">
                  <img src={img} alt="USA Flag" width="50" height="30" />
                  <h6 className="card-subtitle mb-2 text-muted">USA</h6>
                </div>
                <p className="card-text">
                  539 W. Commerce St, #2969, Dallas, TX 75208, United States
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
