import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const UserDashboard = () => {

  const [user, setUser] = useState({});
  useEffect(() => {
    
  });

  return (
    <Container fluid className="container">
      <div style={{ direction: 'flex', flexDirection:'row'}}>
        <h1>Dashboard</h1>
        <Row>
          <Col lg={2}>
            <Link to="/createGroup"><Button variant="primary" style={{marginTop:'10px'}}>Create new group</Button></Link>
          </Col>
          <Col lg={2}>
            <Link to="joinGroup"><Button variant="primary" style={{marginTop:'10px'}}>Join group</Button></Link>
          </Col>
        </Row>
      </div>
      <div style={{marginTop:"15px"}}>
        <Row>
          <Col lg={4}>
            <Card className="groupCard">
              <Card.Body>
                <Card.Title>Group 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Link to="/groupDashboard/1"><Button variant="primary">See group details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="groupCard">
              <Card.Body>
                <Card.Title>Group 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Link to="/groupDashboard/2"><Button variant="primary">See group details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="groupCard">
              <Card.Body>
                <Card.Title>Group 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Link to="/groupDashboard/3"><Button variant="primary">See group details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="groupCard">
              <Card.Body>
                <Card.Title>Group 4</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Link to="/groupDashboard/4"><Button variant="primary">See group details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default UserDashboard;
