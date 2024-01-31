import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./index.css";
import axios from "axios";
import { defaultUrl } from "../../utils/defaultUrl";
import { Link } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const res = await axios.post(`http://127.0.0.1:8000/api/register`, {
        ...payload,
      });
      console.log(res);
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);

    setPayload((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="login-container">
      <h3>Registration</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            values={payload.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            required
            values={payload.username}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter email address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            // required
            values={payload.password}
            onChange={handleChange}
          />

          {payload.password == payload.confirmPassword ? (
            <Form.Control.Feedback type="invalid">
              Please enter password
            </Form.Control.Feedback>
          ) : (
            <Form.Control.Feedback type="invalid">
              Passwords did not match
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="confirmPassword"
            placeholder="Enter confirm password"
            required
            values={payload.confirmPassword}
            onChange={handleChange}
          />
          {payload.password == payload.confirmPassword ? (
            <Form.Control.Feedback type="invalid">
              Please enter password
            </Form.Control.Feedback>
          ) : (
            <Form.Control.Feedback type="invalid">
              Passwords did not match
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <div className="button-group">
          <Link to="/">
            <Button variant="secondary" type="submit">
              Sign In
            </Button>
          </Link>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register Now
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
