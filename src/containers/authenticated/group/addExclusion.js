import React, {useState} from 'react';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link, withRouter } from "react-router-dom";
import { Select } from 'react-rainbow-components';
import { DatePicker, Input, Button, RenderIf } from 'react-rainbow-components';
import Alert from 'react-bootstrap/Alert';

const AddExclusion = (props) => {

  const groupId = props.location.state.groupId;
  const containerStyles = {
    maxWidth: 700,
  };

  const options = [
      { value: 'P1', label: 'Option 1' },
      { value: 'P2', label: 'Option 2' },
      { value: 'P3', label: 'Option 3' },
  ];

  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');
  const [showError, setShowError] = useState(false);


  const submitHandler = () => {
    if (validateRequest()){
      setShowError(false)
      const request = {groupId: groupId, person1: person1, person2: person2}
      console.log(request)
    } else {
      setShowError(true)
    }
  }

  const validateRequest = () => {
    return person1 !== person2
  }

  const v1 = (
    <Container fluid className="container">
      <h1>Add Exclusion</h1>
      <Form>
        <Form.Group as={Col} md="6" controlId="formPerson1">
          <Select
            label="Person 1"
            options={options}
            id="example-select-1"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            value={person1}
            onChange={e => setPerson1(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formPerson2">
          <Form.Label>Person 2</Form.Label>
          <Form.Control as="select" value={person2} onChange={e=>setPerson2(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>
        <Col md="6">
          <Button variant="primary" type="submit" onClick={submitHandler}>
            Submit
          </Button>
          <Form.Text style={{fontSize: '16px', marginTop:'20px'}}>
            <Link to={"/groupDashboard/" + groupId}>Back</Link>
          </Form.Text>
        </Col>
      </Form>
    </Container>
  )

  const v2 = (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <h1>Add Exclusion</h1>
        <RenderIf isTrue={showError}>
          <Alert variant="danger">Invalid input</Alert>
        </RenderIf>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Select
              label="Person 1"
              options={options}
              id="example-select-1"
              style={containerStyles}
              className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto infoInput"
              value={person1}
              onChange={e => setPerson1(e.target.value)}
            />
            <Select
              label="Person 2"
              options={options}
              id="example-select-1"
              style={containerStyles}
              className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto infoInput"
              value={person2}
              onChange={e => setPerson2(e.target.value)}
            />
            <Link to={"/groupDashboard/" + groupId}>
              <Button
                label="Back"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{marginTop: '20px', width: '225px', marginLeft:'10px', marginRight:'10px'}}
              />
            </Link>
            <Button
              label="Add Exclusion"
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

export default withRouter(AddExclusion);
