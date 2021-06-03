import React, {useState} from 'react';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, withRouter, useHistory } from "react-router-dom";
import { Input, Button } from 'react-rainbow-components';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const Registration2 = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registration1 = props.location.state;

  const submit = () => {
    const request = {...registration1, email: email, password: password}
    console.log(request)
    axios.post(`${process.env.REACT_APP_API_URL}/api/user/registration`, { request })
      .then(res => {
        console.log(res)
        history.push("/login");
      })
      .catch(error => console.log(error)
    )
  }

  /*const v1 = (
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
              <Form.Control type="firstName" placeholder="First Name"/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Last Name"/>
            </Form.Group>
          </Row>
        </Col>
        <Form.Group as={Col} md="6" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="address" placeholder="123 Main St. City, State 78701"/>
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
          <Button variant="primary" type="submit" onClick={submit}>
            Register
          </Button>
        </Col>
      </Form>
    </Container>
  );*/

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
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Input
              label="Email"
              placeholder="inputEmail@gmail.com"
              type="email"
              className="rainbow-p-around_medium infoInput"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <Input
              label="Password"
              placeholder="**********"
              type="password"
              className="rainbow-p-around_medium infoInput"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <Link to= "/register">
              <Button
                label="Back"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
            <Button
              label="Register"
              onClick={submit}
              variant="brand"
              className="rainbow-m-around_medium"
              style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
            />
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

export default withRouter(Registration2);
