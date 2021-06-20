import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../../../components/loading';
import Container from 'react-bootstrap/Container';
import { RenderIf, Button } from 'react-rainbow-components';
import axios from 'axios';

 const Profile = () => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/find`, headers)
      .then(res => {
        console.log(res.data.data)
        setUser(res.data.data)
        setIsLoading(false)
      })
      .catch(error => console.log(error)
    )
  }, []);

  const profile = (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Profile</h1>
        <Row style={{marginTop: '15px'}}>
          <Col lg={3}></Col>
          <Col lg={6}>
            <h5>Name: {user.firstName + ' ' + user.lastName}</h5>
            <h5>Email: {user.email}</h5>
            <h5>Address: {user.address}</h5>
          </Col>
          <Col lg={3}></Col>
        </Row>
        <Row style={{marginTop: '15px'}}>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Link to= "/updateProfile">
              <Button
                label="Update Profile"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
            <Link to= "/updatePassword">
              <Button
                label="Update Password"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  )

  return (
    <Container fluid className="container">
      <RenderIf isTrue={!isLoading}>
        {profile}
      </RenderIf>
      <RenderIf isTrue={isLoading}>
        <Loading/>
      </RenderIf>
    </Container>
  );
}

export default Profile;
