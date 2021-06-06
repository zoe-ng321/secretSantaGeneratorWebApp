import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { RenderIf } from 'react-rainbow-components';

const GroupDashboard = (props) => {

  let { groupId } = useParams();
  const [group, setGroup] = useState({})

  var isOwner = true;
  var isPaired = false;
  var name = "Test";

  const createPairings = () => {
    alert("create pairings clicked");
  }

  const groupMembers = [
    {
      name: "Test",
      address: '123 Test St',
      wishlist: 'food',
    },
    {
      name: "Test1",
      address: '321 Test St',
      wishlist: 'Gift card',
    },
    {
      name: "Test2",
      address: '100 Test St',
      wishlist: 'Clothes',
    },

  ]

  const signupDeadline = new Date();
  const endDate = new Date();

  let tableBody = groupMembers.map(member => {
    return(
      <tr key={member.name}>
        <td>{member.name}</td>
        <td>{member.address}</td>
        <td>{member.wishlist}</td>
      </tr>
    )
  })

  return (
    <Container fluid className="container">
      <div style={{marginTop: '10px', marginBottom: '15px'}}>
        <h1>Group Dashboard</h1>
        <Row>
          <Col lg={2}>
            <Link to={{
              pathname: "/wishlist",
              state: {
                groupId: groupId
              }
            }}>
              <Button variant="primary" style={{marginTop:'10px'}}>Update Wishlist</Button>
            </Link>
          </Col>
          <RenderIf isTrue={!isPaired}>
            <Col lg={2}>
              <Link to={{
                pathname: "/addExclusion",
                state: {
                  groupId: groupId,
                }
              }}>
                <Button variant="primary" style={{marginTop:'10px'}}>Add Exclusion</Button>
              </Link>
            </Col>
          </RenderIf>
          <RenderIf isTrue={isOwner && !isPaired}>
            <Col lg={2}>
              <Button variant="secondary" onClick={createPairings} style={{marginTop:'10px'}}>Create Pairings</Button>
            </Col>
          </RenderIf>
        </Row>
        <RenderIf isTrue={isPaired}>
          <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <h4>You are the Secret Santa for {name}!</h4>
          </div>
        </RenderIf>
      </div>
      <div>
        <Table responsive="lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Wishlist</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default GroupDashboard;
