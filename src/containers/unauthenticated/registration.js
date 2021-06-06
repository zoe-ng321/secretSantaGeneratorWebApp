import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { Input, Button } from 'react-rainbow-components';

const Registration = (props) =>{

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  return (
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
                  className="rainbow-p-around_medium infoInput"
                  value={firstName}
                  onChange={e => {setFirstName(e.target.value)}}
                />
                </Col>
                <Col lg={4}>
                <Input
                  label="Last Name"
                  placeholder="Last"
                  type="text"
                  className="rainbow-p-around_medium infoInput"
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
                className="rainbow-p-around_medium infoInput"
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
}

export default Registration;
