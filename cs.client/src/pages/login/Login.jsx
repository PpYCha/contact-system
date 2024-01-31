import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./index.css";
import axios from "axios";
import { defaultUrl } from "../../utils/defaultUrl";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const res = await axios.post(`http://127.0.0.1:8000/api/login`, {
        ...payload,
      });
      if (res.status === 200) {
        navigate("/contacts");
      }
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
      <h3>Sign in</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            values={payload.username}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            values={payload.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter passowrd
          </Form.Control.Feedback>
        </Form.Group>
        <div className="button-group">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/register">
            <Button variant="secondary">Register</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
