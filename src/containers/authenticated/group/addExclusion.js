import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, withRouter } from "react-router-dom";
import { Select } from 'react-rainbow-components';

class AddExclusion extends React.Component {

  render(){
    const groupId = this.props.location.state.groupId;
    const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' },
];
    return (
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
            />
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
