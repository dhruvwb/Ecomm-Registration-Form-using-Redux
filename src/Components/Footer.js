import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function Footer() {
  return (
    <div className=" bg-dark mt-10 " style={{ color: "white" }}>
      <br />
      <Container>
        <Container
          className="row container"
          style={{ color: "white", marginTop: "20px" }}
        >
          <div className="col-md-4">
            <h3>OUR SERVICES</h3>
            <ul>
              <li>
                <i className="fa fa-angle-right"></i> Mobile App Development
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Web Development
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Digital Transformation
              </li>
              <li>
                <i className="fa fa-angle-right"></i> IT Staff Augmentation
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Digital Marketing
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Managed IT Services
              </li>
              <li>
                <i className="fa fa-angle-right"></i> ERP Software Development
              </li>
              <li>
                <i className="fa fa-angle-right"></i> CRM Development
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <i className="fa fa-angle-right"></i> About Advantal
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Team
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Events & Conferences
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Engagement Models
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Careers
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Contact Us
              </li>
              <li>
                <i className="fa fa-angle-right"></i> News
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Portfolio
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Blog
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Downloads
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>OUR SOLUTIONS</h3>
            <ul>
              <li>
                <i className="fa fa-angle-right"></i> Secure Communication
              </li>
              <li>
                <i className="fa fa-angle-right"></i> TACACS
              </li>
              <li>
                <i className="fa fa-angle-right"></i> SMSC
              </li>
              <li>
                <i className="fa fa-angle-right"></i> SBOX
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Syslog Server
              </li>
              <li>
                <i className="fa fa-angle-right"></i> IP Log Manager
              </li>
              <li>
                <i className="fa fa-angle-right"></i> OTA SIM Tool
              </li>
              <li>
                <i className="fa fa-angle-right"></i> IPTV
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Shield360° - MDM
              </li>
            </ul>
          </div>
        </Container>
      </Container>
    </div>
  );
}
