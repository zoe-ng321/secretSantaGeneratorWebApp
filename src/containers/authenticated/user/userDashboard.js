import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button, Card, RenderIf } from 'react-rainbow-components';
import Loading from '../../../components/loading';
import axios from 'axios';
import moment from 'moment';

const UserDashboard = () => {

  const [user, setUser] = useState({groupList: []});
  const [isLoading, setIsLoading] = useState(true);

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/find`, headers)
      .then(res => {
        setUser(res.data.data)
        setIsLoading(false)
      })
      .catch(error => console.log(error)
    )
  }, []);

  return (
    <Container fluid className="container">
      <RenderIf isTrue={isLoading}>
        <Loading/>
      </RenderIf>
      <RenderIf isTrue={!isLoading}>
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
            {user.groupList.map(group => {
              return (
                <Col lg={4} key={group._id}>
                  <Card style={{
                     width: '18rem',
                     height: '14rem',
                     marginTop: '15px',
                     padding: '15px',
                     textAlign: 'center'
                  }}>
                      <h2>{group.name}</h2>
                      <h6>
                        Sign Up Deadline:<br/> {moment(group.signUpEndDate.toString()).format("MM/DD/YYYY")}
                      </h6>
                      <h6>
                        End Date: <br/>{moment(group.endDate.toString()).format("MM/DD/YYYY")}
                      </h6>
                      <Link to={"/groupDashboard/" + group.groupId}><Button variant="brand" style={{marginTop: '10px'}}>See group details</Button></Link>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </RenderIf>
    </Container>
  );
}

export default UserDashboard;
