import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Input, Button, RenderIf } from 'react-rainbow-components';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const JoinGroup = (props) => {

  const [groupId, setGroupId] = useState('')
  const [wishlist, setWishlist] = useState('')
  const [showError, setShowError] = useState(false)
  const history = useHistory()

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  const submitHandler = () => {
    if (validateRequest()){
      setShowError(false)
      const request = {groupId: groupId, wishlist: wishlist}
      axios.post(`${process.env.REACT_APP_API_URL}/api/group/join`, { request }, headers)
        .then(res => {
          history.push("/dashboard");
        })
        .catch(error => console.log(error)
      )
    }else{
      setShowError(true)
    }
  }

  const validateRequest = () => {
    return groupId !== '' && wishlist !== ''
  }

  return (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Join Group</h1>
        <RenderIf isTrue={showError}>
          <Alert variant="danger">Please enter valid information</Alert>
        </RenderIf>
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
  );
}


export default JoinGroup;
