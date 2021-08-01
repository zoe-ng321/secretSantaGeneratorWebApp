import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Link, withRouter, useHistory } from "react-router-dom";
import { Select, Button, RenderIf } from 'react-rainbow-components';
import Loading from '../../../components/loading';
import axios from 'axios';

const AddExclusion = (props) => {

  const groupId = props.location.state.groupId;
  const containerStyles = {
    maxWidth: 700,
  };

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  const [groupMembers, setGroupMembers] = useState([]);
  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory()

  useEffect(() => {
    const request = {groupId: groupId}
    axios.post(`${process.env.REACT_APP_API_URL}/api/group/find`, { request }, headers)
      .then(res => {
        createGroupMembers(res.data.data.members)
        setIsLoading(false)
      })
      .catch(error => console.log(error)
    )
  }, []);

  const createGroupMembers = (members) => {
    const options = members.map(member => {
      return {value: member.id, label: member.name}
    })
    setGroupMembers(options)
  }

  const submitHandler = () => {
    if (validateRequest()){
      setShowError(false)
      const request = {groupId: groupId, id1: person1, id2: person2}
      axios.post(`${process.env.REACT_APP_API_URL}/api/group/addExclusion`, { request }, headers)
        .then(res => {
          history.push("/groupDashboard/" + groupId);
        })
        .catch(error => console.log(error)
      )
    } else {
      setShowError(true)
    }
  }

  const validateRequest = () => {
    return person1 !== person2
  }

  return (
    <div style ={{textAlign:'center', alignItems: 'center', display: 'flex'}}>
      <Container fluid className="container">
        <RenderIf isTrue={!isLoading}>
          <h1>Add Exclusion</h1>
          <RenderIf isTrue={showError}>
            <Alert variant="danger">Invalid input</Alert>
          </RenderIf>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <Select
                label="Person 1"
                options={groupMembers}
                id="example-select-1"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto infoInput"
                value={person1}
                onChange={e => setPerson1(e.target.value)}
              />
              <Select
                label="Person 2"
                options={groupMembers}
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
        </RenderIf>
        <RenderIf isTrue={isLoading}>
          <Loading/>
        </RenderIf>
      </Container>
    </div>
  );

}

export default withRouter(AddExclusion);
