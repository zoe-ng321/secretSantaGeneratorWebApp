import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Input, Button } from 'react-rainbow-components';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    const request = {email: email, password: password}
    axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, { request })
      .then(res => {
        setTimeout(() => {
          localStorage.setItem("auth-token", res.data.token);
          history.push("/dashboard");
        }, 3000);
      })
      .catch(error => console.log(error)
    )
  }

  /*const v1 = (
    <Container fluid className="container">
      <h1>Login</h1>
      <Form>
        <Form.Group as={Col} md="6" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => {setEmail(e.target.value)}}/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => {setPassword(e.target.value)}}/>
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
          <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
            Don't have an account? <Link to="/register">Register now!</Link>
          </Form.Text>
        </Col>
      </Form>
    </Container>
  )*/

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
              className="rainbow-p-around_medium infoInput"
              value={email}
              onChange={e => {setEmail(e.target.value)}}
            />
            <Input
              label="Password"
              placeholder="**********"
              type="password"
              className="rainbow-p-around_medium infoInput"
              value={password}
              onChange={e => {setPassword(e.target.value)}}
            />
            <Button
              label="Login"
              onClick={login}
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

export default Login;
