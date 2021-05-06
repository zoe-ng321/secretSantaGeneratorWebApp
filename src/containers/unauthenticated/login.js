import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "text"
    }
  }

  render(){
    return (
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
              Don't have an account? <a href="#">Register now!</a>
            </Form.Text>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default Login;
