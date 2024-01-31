import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./index.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const FormContact = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const res = await axios.post(`http://127.0.0.1:8000/api/contacts`, {
        ...payload,
      });
      navigate("/contacts");
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
      <h3>Add Contact</h3>
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

        <Form.Group className="mb-3" controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company"
            values={payload.company}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter company
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            values={payload.phone}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter phone
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            values={payload.username}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter email
          </Form.Control.Feedback>
        </Form.Group>

        <div className="button-group">
          <Link to="/contacts">
            <Button variant="secondary" type="submit">
              Go Back to Contact
            </Button>
          </Link>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormContact;
