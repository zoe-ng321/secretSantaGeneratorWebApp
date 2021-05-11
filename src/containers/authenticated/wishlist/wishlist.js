import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

class Wishlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "text"
    }
  }

  render(){
    var isUpdate = this.props.isUpdate;
    var groupId = this.props.groupId;

    return (
      <Container fluid className="container">
        <h1>{isUpdate ? 'Update' : 'Create'} Wishlist</h1>
        <Form>
          <Form.Group as={Col} md="6" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email"/>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          <Col md="6">
            <Button variant="primary" type="submit">
              {isUpdate ? 'Update' : 'Create'} Wishlist
            </Button>
            <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
              <Link to="/group">Back</Link>
            </Form.Text>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default Wishlist;
