import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending bits...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();
  const sended = () => {
    alert("MESSAGE SENT !");
  };

  return (
    <div>
      <Container className="contact-form">
        <h2 className="contact-h2">
          Send a message, and i'll get back to you!
        </h2>
        <form className={classes.root} autoComplete="off">
          <Row>
            <Col>
              <TextField
                className="vittu"
                id="name"
                label="Name"
                variant="standard"
                color="secondary"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                className="vittu"
                id="email"
                label="Email"
                variant="standard"
                color="secondary"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                className="vittu"
                id="message"
                label="Message"
                multiline
                rows={6}
                variant="standard"
                color="secondary"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <i class="fas fa-paper-plane" onClick={sended}></i>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
