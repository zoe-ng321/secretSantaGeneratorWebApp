import React from 'react';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { Input, Button } from 'react-rainbow-components';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "text"
    }
  }

  render(){

    const v1 = (
      <Container fluid className="container">
        <h1>Login</h1>
        <Form>
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
              Login
            </Button>
            <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
              Don't have an account? <Link to="/register">Register now!</Link>
            </Form.Text>
          </Col>
        </Form>
      </Container>
    )

    const v2 = (
      <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Login</h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Input
              label="Email"
              placeholder="inputEmail@gmail.com"
              type="email"
              className="rainbow-p-around_medium"
              style={{marginTop: '10px'}}
            />
            <Input
              label="Password"
              placeholder="**********"
              type="password"
              className="rainbow-p-around_medium"
              style={{marginTop: '10px'}}
            />
            <Button
              label="Login"
              onClick={() => alert('clicked!')}
              variant="brand"
              className="rainbow-m-around_medium"
              style={{marginTop: '15px', width: '250px'}}
            />
            <div style={{marginTop: '15px'}}>
              Don't have an account? <Link to="/register">Register now!</Link>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
      </div>
    )
    return (
      <div>
        {v2}
      </div>
    );
  }
}

export default Login;
