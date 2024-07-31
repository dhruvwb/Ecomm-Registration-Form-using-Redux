import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Technologies() {
  return (
    <Container className="mt-5" style={{ marginBottom: "50px" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h2 className="text-center mb-4">Technologies We Work With</h2>
          <Row className="justify-content-center">
            <Col xs={6} md={4} lg={2} className="text-center mb-4">
              <h4 className="mb-2">Mobile</h4>
              <div className="d-flex flex-column align-items-center">
                {/* <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                  alt="Ios"
                  className="bi bi-apple"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Ios</p>
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                  alt="Android"
                  className="bi bi-android2"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Android</p>
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                  alt="Kotlin"
                  className="bi bi-kotlin"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Kotlin</p> */}
                <div className="d-flex flex-column align-items-center">
                  {/* <img
                    src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                    alt="Objective-c"
                    className="bi bi-c-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p>Objective-c</p> */}
                </div>
              </div>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center mb-4">
              <h4 className="mb-2">Frontend</h4>
              <div className="d-flex flex-column align-items-center">
                {/* <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                  alt="React Native"
                  className="bi bi-react"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>React native</p> */}
              </div>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center mb-4">
              <h4 className="mb-2">Database</h4>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center mb-4">
              <h4 className="mb-2">Backend</h4>
              <div className="d-flex flex-column align-items-center">
                {/* <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                  alt="Flutter"
                  className="bi bi-code-slash"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Flutter</p> */}
              </div>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center mb-4">
              <h4 className="mb-2">CMS</h4>
            </Col>
            <Col xs={6} md={4} lg={2} className="text-center mb-4">
              <h4 className="mb-2">Infra and DevOps</h4>
              <div className="d-flex flex-column align-items-center">
                {/* <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                  alt="Ionic"
                  className="bi bi-circle-fill"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Ionic</p>
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.svg"
                  alt="Swift"
                  className="bi bi-code-slash"
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Swift</p> */}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
