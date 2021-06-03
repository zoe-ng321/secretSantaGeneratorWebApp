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

const UpdatePassword = (props) => {

  const history = useHistory();
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showError, setShowError] = useState(false)

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  const updateHandler = () => {
    if (validateRequest()){
      setShowError(false)
      const request = {oldPassword: oldPassword, newPassword: newPassword}
      axios.post(`${process.env.REACT_APP_API_URL}/api/user/updatePassword`, { request }, headers)
        .then(res => {
          console.log(res)
          history.push("/profile");
        })
        .catch(error => console.log(error)
      )
    }else{
      setShowError(true)
    }
  }

  const validateRequest = () => {
    return oldPassword !== '' && newPassword !== ''
  }

  const v1 = (
    <Container fluid className="container">
      <h1>Update Password</h1>
      <Form>
        <Form.Group as={Col} md="6" controlId="formOldPassword">
          <Form.Label>Old Password</Form.Label>
          <Form.Control type="password" placeholder="Old Password" value={oldPassword} onChange={e => setOldPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formNewPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
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
  )

  const v2 = (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Update Password</h1>
        <RenderIf isTrue={showError}>
          <Alert variant="danger">Please enter valid information</Alert>
        </RenderIf>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Input
              label="Old Password"
              placeholder="**********"
              type="password"
              className="rainbow-p-around_medium infoInput"
              value={oldPassword}
              onChange={e => {setOldPassword(e.target.value)}}
            />
            <Input
              label="New Password"
              placeholder="**********"
              type="password"
              className="rainbow-p-around_medium infoInput"
              value={newPassword}
              onChange={e => {setNewPassword(e.target.value)}}
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

export default UpdatePassword;
