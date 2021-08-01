import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Link, useHistory } from "react-router-dom";
import { Input, Button, RenderIf } from 'react-rainbow-components';
import axios from 'axios';

const UpdateProfile = () => {

  const history = useHistory();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [showError, setShowError] = useState(false)

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  const updateHandler = () => {
    if (firstName === '' && lastName === '' && address === ''){
      setShowError(true)
    }else{
      setShowError(false)
      const request = {address: address, firstName: firstName, lastName: lastName}
      axios.post(`${process.env.REACT_APP_API_URL}/api/user/updateProfile`, { request }, headers)
        .then(res => {
          history.push("/profile");
        })
        .catch(error => console.log(error)
      )
    }
  }

  return (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Update Profile</h1>
        <RenderIf isTrue={showError}>
          <Alert variant="danger">Please enter valid information</Alert>
        </RenderIf>
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
  );
}


export default UpdateProfile;
