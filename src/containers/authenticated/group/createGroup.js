import React, {useState} from 'react';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
//import moment from 'moment';
//import { SingleDatePicker } from 'react-dates';
import { DatePicker, Input, Button, RenderIf } from 'react-rainbow-components';

const CreateGroup = (props) => {

  const [groupName, setGroupName] = useState('')
  const [signupDeadline, setSignUpDeadline] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showError, setShowError] = useState(false)

//  const [isFocused, setIsFocused] = useState(false)
  const now = new Date();

  const submitHandler = () => {
    if (validateRequest()){
      setShowError(false)
      const request = {name: groupName, signUpEndDate: signupDeadline, endDate: endDate}
      console.log(request)
    } else{
      setShowError(true);
      console.log("error")
    }
  }

  const validateRequest = () => {
    if (signupDeadline <= now || endDate <= now || signupDeadline >= endDate){
      return false
    }
    return true;
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

  const v1 = (
    <Container fluid className="container">
      <h1>Create Group</h1>
      <RenderIf isTrue={showError}>
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
          <Alert variant="danger">Please enter valid information</Alert>
        </div>
      </RenderIf>
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
  )

  const v2 = (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Create Group</h1>
        <RenderIf isTrue={showError}>
          <Alert variant="danger">Please enter valid information</Alert>
        </RenderIf>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Input
              label="Group Name"
              placeholder="Group Name"
              type="text"
              className="rainbow-p-around_medium infoInput"
              style={{marginTop: '10px'}}
              value={groupName}
              onChange={e => {setGroupName(e.target.value)}}
            />
            <DatePicker
                id="datePicker-1"
                value={signupDeadline}
                onChange={value => setSignUpDeadline(value)}
                label="Signup Deadline"
                formatStyle="large"
                className="infoInput"
            />
            <DatePicker
                id="datePicker-1"
                value={endDate}
                onChange={value => setEndDate(value)}
                label="End Date"
                formatStyle="large"
                className="infoInput"
            />
            <Link to= "/dashboard">
              <Button
                label="Back"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
            <Button
              label="Create Group"
              onClick={submitHandler}
              variant="brand"
              className="rainbow-m-around_medium"
              style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
            />
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  )

  return (
    <div>
      {v2}
    </div>
  );
}


export default CreateGroup;
