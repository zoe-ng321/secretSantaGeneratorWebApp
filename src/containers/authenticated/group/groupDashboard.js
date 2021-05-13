import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { RenderIf } from 'react-rainbow-components';

function GroupDashboard(props) {

  var isOwner = true;
  var isPaired = false;
  var name = "Test";
  let { groupId } = useParams();

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
              <Button variant="primary">Update Wishlist</Button>
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
                <Button variant="primary">Add Exclusion</Button>
              </Link>
            </Col>
          </RenderIf>
          <RenderIf isTrue={isOwner && !isPaired}>
            <Col lg={2}>
              <Button variant="secondary">Create Pairings</Button>
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
            <tr>
              <td>Test</td>
              <td>123 Test St</td>
              <td>Food</td>
            </tr>
            <tr>
              <td>Test1</td>
              <td>321 Test St</td>
              <td>Gift card</td>
            </tr>
            <tr>
              <td>Test2</td>
              <td>100 Test St</td>
              <td>Clothes</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default GroupDashboard;
