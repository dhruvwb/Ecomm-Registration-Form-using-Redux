import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/action";
import UserInfo from "./userInfo";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const LoginRedux = ({ login, user, error, isLoggedIn }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    if (name && password) {
      login(name, password);
    }
  };

  if (user) {
    return <Navigate to="/UserInfo" replace />;
  }

  return (
    <Container className="p-5">
      <h1 className="mb-3">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-danger">{nameError}</p>}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "30px" }}>
          Login
        </Button>
      </Form>
      {submit && error && (
        <Alert variant="danger" className="mt-3">
          {"Invalid credentials. Please try again."}
        </Alert>
      )}
      {credentialsError && (
        <Alert variant="danger" className="mt-3">
          {credentialsError}
        </Alert>
      )}
    </Container>
  );
};

const mapsStateToProps = (state) => ({
  user: state.user.user,
  error: state.user.error,
  isLoggedIn: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (name, password) => dispatch(login(name, password)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(LoginRedux);
