import React, {useState, useEffect} from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { RenderIf, Button, Modal } from 'react-rainbow-components';
import Loading from '../../../components/loading';
import axios from 'axios';
const GroupDashboard = (props) => {

  let { groupId } = useParams();

  const history = useHistory();
  const [user, setUser] = useState({})
  const [group, setGroup] = useState({})
  const [tableInfo, setTableInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const [isPaired, setIsPaired] = useState(false)
  const [pairing, setPairing] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const headers = { headers: { 'auth-token': localStorage.getItem("auth-token") } };

  const createPairings = () => {
    const request = {groupId: groupId};
    axios.post(`${process.env.REACT_APP_API_URL}/api/group/generatePairings`, { request }, headers)
      .then(res => {
        console.log(res)
        handleOnClose()
        history.push("/groupDashboard/" + groupId);
      })
      .catch(error => console.log(error)
    )
  }

  useEffect(() => {
    const request = {groupId: groupId}
    axios.post(`${process.env.REACT_APP_API_URL}/api/group/groupDashboard`, { request }, headers)
      .then(res => {
        setTableInfo(res.data.data)
        axios.post(`${process.env.REACT_APP_API_URL}/api/group/find`, { request }, headers)
          .then(res1 => {
            setGroup(res1.data.data)
            axios.get(`${process.env.REACT_APP_API_URL}/api/user/find`, headers)
              .then(res2 => {
                console.log(res1.data.data)
                setIsPaired(res1.data.data.isAssigned)
                setIsOwner(res2.data.data._id.toString() === res1.data.data.creatorId.toString())
                setUser(res2.data.data)
                setIsLoading(false)
                getPairing(res1.data.data, res2.data.data._id)
              })
              .catch(error => console.log(error)
            )
          })
          .catch(error => console.log(error)
        )
      })
      .catch(error => console.log(error)
    )
  }, []);

  const getPairing = (data, id) => {
    if (data.isAssigned){
      for (let i = 0; i < data.pairings.length; i++){
        if (data.pairings[i].gifter.id.toString() === id.toString()){
          setPairing(data.pairings[i].giftee.name)
        }
      }
    }
  }

  const handleOnClick = () => {
    return setIsOpen(true);
  }

  const handleOnClose = () => {
    return setIsOpen(false);
  }

  let tableBody = tableInfo.map(member => {
    return(
      <tr key={member.name}>
        <td>{member.name}</td>
        <td>{member.address}</td>
        <td>{member.wishlist}</td>
      </tr>
    )
  })

  return (
    <Container fluid className="container">
      <RenderIf isTrue={!isLoading}>
        <div style={{marginTop: '10px', marginBottom: '15px'}}>
          <h1>Group Dashboard</h1>
          <Modal id="modal-1" isOpen={isOpen} onRequestClose={handleOnClose}>
            <p>Are you sure you want to generate pairings? <br/>
            Once this has been done, no participants can join the group.</p>
            <Row>
              <Button variant="destructive" style={{marginTop:'10px', marginLeft: '80px'}} onClick={handleOnClose}>Cancel</Button>
              <Button variant="brand" style={{marginTop:'10px', marginLeft: '80px'}} onClick={createPairings}>Generate Pairings</Button>
            </Row>
          </Modal>
          <Row>
            <Col lg={2}>
              <Link to={{
                pathname: "/wishlist",
                state: {
                  groupId: groupId
                }
              }}>
                <Button variant="brand" style={{marginTop:'10px'}}>Update Wishlist</Button>
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
                  <Button variant="brand" style={{marginTop:'10px'}}>Add Exclusion</Button>
                </Link>
              </Col>
            </RenderIf>
            <RenderIf isTrue={isOwner && !isPaired}>
              <Col lg={2}>
                <Button variant="outline-brand" onClick={handleOnClick} style={{marginTop:'10px'}}>Create Pairings</Button>
              </Col>
            </RenderIf>
          </Row>
          <RenderIf isTrue={isPaired}>
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
              <h4>You are the Secret Santa for {pairing}!</h4>
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
              {tableBody}
            </tbody>
          </Table>
        </div>
      </RenderIf>
      <RenderIf isTrue={isLoading}>
        <Loading/>
      </RenderIf>
    </Container>
  );
}

export default GroupDashboard;
