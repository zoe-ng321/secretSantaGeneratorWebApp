import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Link, useHistory } from "react-router-dom";
import { DatePicker, Input, Button, RenderIf } from 'react-rainbow-components';
import axios from 'axios';

const CreateGroup = (props) => {

  const [groupName, setGroupName] = useState('')
  const [signupDeadline, setSignUpDeadline] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [showError, setShowError] = useState(false)
  const history = useHistory();

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };
  const now = new Date();

  const submitHandler = () => {
    if (validateRequest()){
      setShowError(false)
      const request = {name: groupName, signUpEndDate: signupDeadline, endDate: endDate}
      axios.post(`${process.env.REACT_APP_API_URL}/api/group/createGroup`, { request }, headers)
        .then(res => {
          console.log(res)
          history.push("/dashboard");
        })
        .catch(error => console.log(error)
      )
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

  return (
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
  );
}


export default CreateGroup;
