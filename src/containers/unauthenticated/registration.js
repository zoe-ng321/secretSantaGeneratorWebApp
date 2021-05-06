import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Registration() {

  return (
    <Container fluid className="container">
      <h1>Registration</h1>
      <Form>
        <Col style={{marginBottom: '20px'}}>
          <Form.Text style={{fontSize: '16px'}}>
            Already have an account? <a href="#">Login now!</a>
          </Form.Text>
        </Col>
        <Col>
          <Row>
            <Form.Group as={Col} md="4" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name"/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Last Name"/>
            </Form.Group>
          </Row>
        </Col>
        <Form.Group as={Col} md="6" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="address" placeholder="123 Main St. City, State 78701"/>
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Col>
      </Form>
    </Container>
  );
}

export default Registration;
