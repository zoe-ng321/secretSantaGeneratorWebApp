import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, withRouter } from "react-router-dom";

const Wishlist = (props) => {

  var isUpdate = true;
  var groupId = props.location.state.groupId;

  const [wishlist, setWishlist] = useState('')

  const submitHandler = () => {
    const request = {groupId: groupId, wishlist: wishlist}
    console.log(request)
  }

  return (
    <Container fluid className="container">
      <h1>{isUpdate ? 'Update' : 'Create'} Wishlist</h1>
      <Form>
        <Form.Group as={Col} md="6" controlId="formWishlist">
          <Form.Label>Wishlist</Form.Label>
          <Form.Control as="textarea" placeholder="Wishlist" value={wishlist} onChange={e=>setWishlist(e.target.value)}/>
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit" onClick={submitHandler}>
            {isUpdate ? 'Update' : 'Create'} Wishlist
          </Button>
          <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
            <Link to={"/groupDashboard/" + groupId}>Back</Link>
          </Form.Text>
        </Col>
      </Form>
    </Container>
  );
}

export default withRouter(Wishlist);
