import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Link, useHistory } from "react-router-dom";
import { Input, Button, RenderIf } from 'react-rainbow-components';
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

  return (
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
  );

}

export default UpdatePassword;
