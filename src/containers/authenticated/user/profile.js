import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


 const Profile = () => {

  const userData = {
    firstName: "Test",
    lastName: "User",
    email: "testUser@gmail.com",
    address: "123 Main St.",
  }

  const [user, setUser] = useState({})

  return (
    <Container fluid className="container">
      <div style={{ direction: 'flex', flexDirection:'row'}}>
        <h1>Profile</h1>
        <Row>
          <Col lg={6}>
            <p>Name: {userData.firstName + ' ' + user.lastName}</p>
            <p>Email: {userData.email}</p>
            <p>Address: {userData.address}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <Link to="/updateProfile"><Button variant="primary">Update Profile</Button></Link>
          </Col>
          <Col lg={2}>
            <Link to="/updatePassword"><Button variant="primary">Update Password</Button></Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Profile;
