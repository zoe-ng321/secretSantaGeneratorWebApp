import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Input, Button, RenderIf } from 'react-rainbow-components';
import { Link, withRouter } from "react-router-dom";

const Wishlist = (props) => {

  var isUpdate = true;
  var groupId = props.location.state.groupId;

  const [wishlist, setWishlist] = useState('')
  const [showError, setShowError] = useState(false)
  
  const submitHandler = () => {
    if (wishlist === ''){
      setShowError(true)
    }else{
      setShowError(false)
      const request = {groupId: groupId, wishlist: wishlist}
      console.log(request)
    }
  }

  return (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>{isUpdate ? 'Update' : 'Create'} Wishlist</h1>
        <RenderIf isTrue={showError}>
          <Alert variant="danger">Please enter your wishlist</Alert>
        </RenderIf>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Input
              label="Wishlist"
              placeholder="Wishlist"
              type="text"
              className="rainbow-p-around_medium infoInput"
              value={wishlist}
              onChange={e => {setWishlist(e.target.value)}}
            />
            <Link to={"/groupDashboard/" + groupId}>
              <Button
                label="Back"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
            <Button
              label= {isUpdate ? 'Update Wishlist' : 'Create Wishlist'}
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
  );
}

export default withRouter(Wishlist);
