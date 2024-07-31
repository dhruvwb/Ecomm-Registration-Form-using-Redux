import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/action";

const UserInfo = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container style={{ marginTop: "90px", marginBottom: "60px" }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">User Information</h1>
          <ListGroup variant="flush" style={{ marginTop: "50px" }}>
            <ListGroupItem>
              <p>Name: {user.name}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Password: {user.password}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Gender: {user.gender}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>pincode: {user.pincode}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>state: {user.state}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>city: {user.city}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Age: {user.age}</p>
            </ListGroupItem>
          </ListGroup>
          <Button className="mx-auto" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
