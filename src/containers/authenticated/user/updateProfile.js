import React, {useState} from 'react';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, useHistory } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import { Input, Button, RenderIf } from 'react-rainbow-components';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const UpdateProfile = () => {

  const history = useHistory();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  const updateHandler = () => {
    const request = {address: address, firstName: firstName, lastName: lastName}
    axios.post(`${process.env.REACT_APP_API_URL}/api/user/updateProfile`, { request }, headers)
      .then(res => {
        console.log(res)
        history.push("/profile");
      })
      .catch(error => console.log(error)
    )
  }

  /*const v1 = (
    <Container fluid className="container">
      <h1>Update Profile</h1>
      <Form>
        <Form.Group as={Col} md="6" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}/>
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit" onClick={updateHandler}>
            Update
          </Button>
          <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
            <Link to={"/profile"}>Back</Link>
          </Form.Text>
        </Col>
      </Form>
    </Container>
  )*/

  const v2 = (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Update Profile</h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Input
              label="First Name"
              placeholder="First Name"
              type="text"
              className="rainbow-p-around_medium infoInput"
              value={firstName}
              onChange={e => {setFirstName(e.target.value)}}
            />
            <Input
              label="Last Name"
              placeholder="Last Name"
              type="text"
              className="rainbow-p-around_medium infoInput"
              value={lastName}
              onChange={e => {setLastName(e.target.value)}}
            />
            <Input
              label="Address"
              placeholder="Address"
              type="text"
              className="rainbow-p-around_medium infoInput"
              value={address}
              onChange={e => {setAddress(e.target.value)}}
            />
            <Link to= "/profile">
              <Button
                label="Back"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
            <Button
              label="Update Profile"
              onClick={updateHandler}
              variant="brand"
              className="rainbow-m-around_medium"
              style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
            />
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


export default UpdateProfile;
