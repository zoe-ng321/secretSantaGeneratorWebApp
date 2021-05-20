import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const UpdateProfile = () => {

  const [address, setAddress] = useState('')

  const updateHandler = () => {
    const request = {address: address}
    console.log(request)
  }

  return (
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
  );
}


export default UpdateProfile;
