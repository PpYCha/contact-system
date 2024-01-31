import React, { useEffect, useState } from "react";
import FormContact from "./FormContact";
import TableComponent from "../../components/TableComponent";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ModalComponent from "../../components/ModalComponent";
import Spinner from "react-bootstrap/Spinner";

const Contact = () => {
  const navigate = useNavigate();
  const tableColumn = ["NAME", "COMPANY", "PHONE", "EMAIL"];
  const [contactList, setContactList] = useState([]);
  const [seletecItem, setSetseletecItem] = useState({});
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("http://127.0.0.1:8000/api/contacts");
    setLoading(false);
    setContactList(res.data.data);
  };

  const handleEdit = (item) => {
    navigate(`/contacts/form/${item.id}`);
  };

  const handleDelete = (item) => {
    handleShow();
    setSetseletecItem(item.id);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    await axios.delete(`http://127.0.0.1:8000/api/contacts/${seletecItem}`);
    fetchData();
    setLoading(false);
    handleClose();
  };

  return (
    <div className="contact-container">
      <div>
        <div className="contact-header-container">
          <h3>Contacts</h3>
          <div className="buttons-search-container">
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="secondary"
                onClick={() => {
                  navigate("/contacts/form");
                }}
              >
                Add Contact
              </Button>

              <Button
                variant="secondary"
                onClick={() => {
                  navigate("/contacts");
                }}
              >
                Contacts
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </ButtonGroup>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="search" placeholder="Search" />
            </Form.Group>
          </div>
        </div>
      </div>

      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <TableComponent
          tableColumn={tableColumn}
          tableRows={contactList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      <ModalComponent
        show={show}
        handleClose={handleClose}
        handleConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default Contact;
