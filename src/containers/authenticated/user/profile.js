import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

 const Profile = () => {

  const [user, setUser] = useState({})
  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/find`, headers)
      .then(res => {
        console.log(res.data.data)
        setUser(res.data.data)
      })
      .catch(error => console.log(error)
    )
  }, []);

  return (
    <Container fluid className="container">
      <div style={{ direction: 'flex', flexDirection:'row'}}>
        <h1>Profile</h1>
        <Row>
          <Col lg={6}>
            <p>Name: {user.firstName + ' ' + user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <Link to="/updateProfile"><Button variant="primary" style={{marginTop:'10px'}}>Update Profile</Button></Link>
          </Col>
          <Col lg={2}>
            <Link to="/updatePassword"><Button variant="primary" style={{marginTop:'10px'}}>Update Password</Button></Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Profile;
