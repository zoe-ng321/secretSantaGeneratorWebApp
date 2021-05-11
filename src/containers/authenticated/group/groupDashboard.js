import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


function GroupDashboard() {

  var isOwner = true;
  var isPaired = false;
  var name = "Test";

  return (
    <Container fluid className="container">
      <div style={{ direction: 'flex', flexDirection:'row'}}>
        <h1>Group Dashboard</h1>
        <div>
          <div>
            <Button variant="primary">Update Wishlist</Button>
          </div>
          {(isOwner && !isPaired) ?
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
              <Button variant="primary">Create Pairings</Button>
            </div> : ''
          }
          {!isPaired ?
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
              <Button variant="primary">Add Exclusion</Button>
            </div> : ''}
        </div>
        {isPaired ?
          <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <h4>You are the Secret Santa for {name}!</h4>
          </div> : ''}

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
