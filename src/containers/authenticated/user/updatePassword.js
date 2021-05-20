import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const UpdatePassword = (props) => {

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const updateHandler = () => {
    const request = {oldPassword: oldPassword, newPassword: newPassword}
    console.log(request)
  }

  return (
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
  );

}

export default UpdatePassword;
