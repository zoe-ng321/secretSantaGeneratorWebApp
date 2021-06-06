import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button, Card } from 'react-rainbow-components';

const UserDashboard = () => {

  const [user, setUser] = useState({});
  useEffect(() => {

  }, []);

  const userGroups = [
    {
      id: "1",
      title: "Group 1",
      signupDeadline: "June 25, 2021",
      endDate: "July 15, 2021",
    },
    {
      id: "2",
      title: "Group 2",
      signupDeadline: "July 25, 2021",
      endDate: "August 15, 2021",
    },
    {
      id: "3",
      title: "Group 3",
      signupDeadline: "November 25, 2021",
      endDate: "December 20, 2021",
    }
  ]

  const cards = userGroups.map(group => {
    return (
      <Col lg={4} key={group.id}>
        <Card style={{
           width: '18rem',
           height: '14rem',
           marginTop: '15px',
           padding: '15px',
           textAlign: 'center'
        }}>
            <h2>{group.title}</h2>
            <h6>
              Sign Up Deadline:<br/> {group.signupDeadline}
            </h6>
            <h6>
              End Date: <br/>{group.endDate}
            </h6>
            <Link to={"/groupDashboard/" + group.id}><Button variant="brand" style={{marginTop: '10px'}}>See group details</Button></Link>
        </Card>
      </Col>
    )
  })

  return (
    <Container fluid className="container">
      <div style={{ direction: 'flex', flexDirection:'row'}}>
        <h1>Dashboard</h1>
        <Row>
          <Col lg={2}>
            <Link to="/createGroup"><Button variant="brand" style={{marginTop:'10px'}}>Create new group</Button></Link>
          </Col>
          <Col lg={2}>
            <Link to="joinGroup"><Button variant="brand" style={{marginTop:'10px'}}>Join group</Button></Link>
          </Col>
        </Row>
      </div>
      <div style={{marginTop:"15px"}}>
        <Row>
          {cards}
        </Row>
      </div>
    </Container>
  );
}

export default UserDashboard;
