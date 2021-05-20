import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const JoinGroup = (props) => {

  const [groupId, setGroupId] = useState('')
  const [wishlist, setWishlist] = useState('')

  const submitHandler = () => {
    const request = {groupId: groupId, wishlist: wishlist}
    console.log(request)
  }

  return (
    <Container fluid className="container">
      <h1>Join Group</h1>
      <Form>
        <Form.Group as={Col} md="6" controlId="formGroupId">
          <Form.Label>Group Id</Form.Label>
          <Form.Control type="text" placeholder="Group Id" value={groupId} onChange={e => setGroupId(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formWishlist">
          <Form.Label>Wishlist</Form.Label>
          <Form.Control type="text" placeholder="Wishlist" value={wishlist} onChange={e => setWishlist(e.target.value)}/>
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit" onClick={submitHandler}>
            Join Group
          </Button>
          <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
            <Link to="/dashboard">Back</Link>
          </Form.Text>
        </Col>
      </Form>
    </Container>
  );
}


export default JoinGroup;
