import React, {useState} from 'react';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Input, Button, RenderIf } from 'react-rainbow-components';
import Alert from 'react-bootstrap/Alert';

import { Link } from "react-router-dom";

const JoinGroup = (props) => {

  const [groupId, setGroupId] = useState('')
  const [wishlist, setWishlist] = useState('')

  const submitHandler = () => {
    const request = {groupId: groupId, wishlist: wishlist}
    console.log(request)
  }

  const v1 = (
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
  )

  const v2 = (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Join Group</h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Input
              label="Group Id"
              placeholder="Group Id"
              type="text"
              className="rainbow-p-around_medium infoInput"
              value={groupId}
              onChange={e => {setGroupId(e.target.value)}}
            />
            <Input
              label="Wishlist"
              placeholder="Wishlist"
              type="text"
              className="rainbow-p-around_medium infoInput"
              value={wishlist}
              onChange={e => {setWishlist(e.target.value)}}
            />
            <Link to= "/dashboard">
              <Button
                label="Back"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
            <Button
              label="Join Group"
              onClick={submitHandler}
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


export default JoinGroup;
