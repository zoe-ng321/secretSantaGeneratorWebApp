import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

class UpdatePassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "text"
    }
  }

  render(){
    return (
      <Container fluid className="container">
        <h1>Update Password</h1>
        <Form>
          <Form.Group as={Col} md="6" controlId="formOldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="Old Password"/>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password"/>
          </Form.Group>
          <Col md="6">
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default UpdatePassword;
