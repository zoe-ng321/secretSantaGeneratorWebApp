import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DatePicker } from 'react-rainbow-components';

class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),//moment(),
      focused: false,
    }
  }

  render(){
    /*
    <SingleDatePicker
      date={this.state.date}
      onDateChange={date => this.setState({ date })}
      focused={this.state.focused}
      onFocusChange={({ focused }) => this.setState({ focused })}
      id="date1"
      numberOfMonths={1}
    />
    */
    return (
      <Container fluid className="container">
        <h1>Create Group</h1>
        <Form>
          <Form.Group as={Col} md="6" controlId="formGroupName">
            <Form.Label>Group Name</Form.Label>
            <Form.Control type="text" placeholder="Group Name"/>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formDate1">
            <Form.Label>Date1</Form.Label>
            <DatePicker
                id="datePicker-1"
                value={this.state.date}
                onChange={value => this.setState({ date: value })}
                label="DatePicker Label"
                formatStyle="large"
            />
          </Form.Group>
          <Col md="6">
            <Button variant="primary" type="submit">
              Create Group
            </Button>
            <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
              <Link to="/dashboard">Back</Link>
            </Form.Text>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default CreateGroup;
