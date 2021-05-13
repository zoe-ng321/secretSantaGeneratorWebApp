import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, withRouter } from "react-router-dom";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DatePicker } from 'react-rainbow-components';

class AddExclusion extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const groupId = this.props.location.state.groupId;
    return (
      <Container fluid className="container">
        <h1>Add Exclusion</h1>
        <Form>
          <Form.Group as={Col} md="6" controlId="formPerson1">
            <Form.Label>Person 1</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formPerson2">
            <Form.Label>Person 2</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
          <Col md="6">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
              <Link to={"/groupDashboard/" + groupId}>Back</Link>
            </Form.Text>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default withRouter(AddExclusion);
