import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import {
  PhoneFill,
  Globe,
  PcDisplayHorizontal,
  Server,
  CodeSlash,
  Megaphone,
} from "react-bootstrap-icons";
export default function Services() {
  return (
    <div
      className=" mt-15"
      style={{
        backgroundColor: "#191919",
        color: "white",
        marginBottom: "80px",
        // height: "650px",
      }}
    >
      <Container>
        <div>
          <br />
          <h2 className="text-center mb-4 mt-10">Explore Our Services</h2>
          <h2 className="text-center mb-5">
            We Just Don't Develop Software,
            <br />
            We Engineer Success
          </h2>
          <Row className="">
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#191919",
                  color: "white",
                  border: "2px solid #0099C7",
                  // height: "0px",
                }}
              >
                <CardBody>
                  <PhoneFill
                    size={24}
                    className="mb-3"
                    style={{ height: "34px" }}
                  />
                  <CardTitle>Mobile Application Development</CardTitle>
                  <CardText>
                    Mobile apps powered by leading-edge technologies and
                    delightful user experience design and user interface
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#191919",
                  color: "white",
                  border: "2px solid #0099C7",
                  height: "189px",
                }}
              >
                <CardBody>
                  <Globe size={24} className="mb-3" />
                  <CardTitle>Digital Transformation Solutions</CardTitle>
                  <CardText>
                    Make your enterprise future-ready with tailored digital
                    solutions and revolutionary strategies.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#191919",
                  color: "white",
                  border: "2px solid #0099C7",
                  height: "189px",
                }}
              >
                <CardBody>
                  <PcDisplayHorizontal size={24} className="mb-3" />
                  <CardTitle>360° Software Product </CardTitle>
                  <CardText>
                    Whether consumer apps or enterprise software, we engineer
                    software from design to deployment.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#191919",
                  color: "white",
                  border: "2px solid #0099C7",
                  height: "189px",
                }}
              >
                <CardBody>
                  <Server size={24} className="mb-3" />
                  <CardTitle>Managed IT Services</CardTitle>
                  <CardText>
                    Let us manage, monitor, and optimize your infrastructure, so
                    you can focus on your core business activities.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#191919",
                  color: "white",
                  border: "2px solid #0099C7",
                  height: "189px",
                }}
              >
                <CardBody>
                  <CodeSlash size={24} className="mb-3" />
                  <CardTitle>Web Development</CardTitle>
                  <CardText>
                    From elegant websites to robust web panels, we engineer web
                    solutions that empower enterprises.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#191919",
                  color: "white",
                  border: "2px solid #0099C7",
                  height: "189px",
                }}
              >
                <CardBody>
                  <Megaphone size={24} className="mb-3" />
                  <CardTitle>Digital Marketing Services</CardTitle>
                  <CardText>
                    Data-driven marketing strategies to amplify your digital
                    presence and drive engagements and conversions.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
