import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

class JoinGroup extends React.Component {

  render(){
    return (
      <Container fluid className="container">
        <h1>Join Group</h1>
        <Form>
          <Form.Group as={Col} md="6" controlId="formGroupId">
            <Form.Label>Group Id</Form.Label>
            <Form.Control type="text" placeholder="Group Id"/>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formWishlist">
            <Form.Label>Wishlist</Form.Label>
            <Form.Control type="text" placeholder="Wishlist"/>
          </Form.Group>
          <Col md="6">
            <Button variant="primary" type="submit">
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
}

export default JoinGroup;
