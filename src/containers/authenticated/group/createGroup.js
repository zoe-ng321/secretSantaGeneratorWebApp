import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
//import moment from 'moment';
//import { SingleDatePicker } from 'react-dates';
import { DatePicker } from 'react-rainbow-components';

const CreateGroup = (props) => {

  const [groupName, setGroupName] = useState(new Date())
  const [signupDeadline, setSignUpDeadline] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
//  const [isFocused, setIsFocused] = useState(false)

  const submitHandler = () => {
    const request = {name: groupName, signUpEndDate: signupDeadline, endDate: endDate}
    console.log(request)
  }
    /*
    <SingleDatePicker
      date={endDate}
      onDateChange={setEndDate(date)}
      focused={isFocused}
      onFocusChange={setFocused(focused)}
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
          <Form.Control type="text" placeholder="Group Name" value={groupName} onChange={e => setGroupName(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formSignupDeadline">
          <Form.Label>Signup Deadline</Form.Label>
          <DatePicker
              id="datePicker-1"
              value={signupDeadline}
              onChange={value => setSignUpDeadline(value)}
              label="Signup Deadline"
              formatStyle="large"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formEndDate">
          <Form.Label>End Date</Form.Label>
          <DatePicker
              id="datePicker-1"
              value={endDate}
              onChange={value => setEndDate(value)}
              label="End Date"
              formatStyle="large"
          />
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit" onClick={submitHandler}>
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


export default CreateGroup;
