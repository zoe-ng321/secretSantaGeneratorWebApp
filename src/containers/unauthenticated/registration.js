import React, {useState} from 'react';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { Input, Button } from 'react-rainbow-components';

const Registration = (props) =>{

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const v1 = (
    <Container fluid className="container">
      <h1>Registration</h1>
      <Form>
        <Col style={{marginBottom: '20px', marginTop: '15px'}}>
          <Form.Text style={{fontSize: '16px'}}>
            Already have an account? <Link to="/login">Login now!</Link>
          </Form.Text>
        </Col>
        <Col>
          <Row>
            <Form.Group as={Col} md="4" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={e => {setFirstName(e.target.value)}}/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={e => {setLastName(e.target.value)}}/>
            </Form.Group>
          </Row>
        </Col>
        <Form.Group as={Col} md="6" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="123 Main St. City, State 78701"
            value={address}
            onChange={e => {setAddress(e.target.value)}}/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Col>
      </Form>
    </Container>
    );

  const v2 = (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Registration</h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <div style={{marginTop: '15px'}}>
              Already have an account? <Link to="/login">Login now!</Link>
            </div>
            </Col>
          <Col lg={3}></Col>
        </Row>
        <Row style={{marginTop: '10px'}}>
          <Col>
            <Row>
              <Col lg={2}></Col>
              <Col lg={4}>
                <Input
                  label="First Name"
                  placeholder="First"
                  type="text"
                  className="rainbow-p-around_medium"
                  style={{marginTop: '10px'}}
                  value={firstName}
                  onChange={e => {setFirstName(e.target.value)}}
                />
                </Col>
                <Col lg={4}>
                <Input
                  label="Last Name"
                  placeholder="Last"
                  type="text"
                  className="rainbow-p-around_medium"
                  style={{marginTop: '10px'}}
                  value={lastName}
                  onChange={e => {setLastName(e.target.value)}}
                />
              </Col>
              <Col lg={2}></Col>
            </Row>
          </Col>
          </Row>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <Input
                label="Address"
                placeholder="123 Main St. City, State 78701"
                type="text"
                className="rainbow-p-around_medium"
                style={{marginTop: '10px'}}
                value={address}
                onChange={e => {setAddress(e.target.value)}}
              />
              <Link to={{
                pathname: "/register2",
                state: {
                  firstName: firstName,
                  lastName: lastName,
                  address: address
                }
              }}>
                <Button
                  label="Next"
                  variant="brand"
                  className="rainbow-m-around_medium"
                  style={{marginTop: '20px', width: '250px'}}
                />
              </Link>
            </Col>
            <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <div>
      {v2}
    </div>
  );
}

export default Registration;
