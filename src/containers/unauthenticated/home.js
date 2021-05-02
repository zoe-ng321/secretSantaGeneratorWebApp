import santa from "../../assets/santa.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

  return (
    <div>
      <div>
        <Row className="hero">
          <Col className="title" lg={6}> Easily organize a Secret Santa gift exchange with your friends! </Col>
          <Col lg={6}><img height= '500px' src = {santa}/></Col>
        </Row>
        <div className="steps container">
          <Row style={{marginTop: '20px'}}>
            <Col lg={6}><p>Step 1: Create a group for your friends to join!</p></Col>
            <Col lg={6}><img height= '200px' src = {santa}/></Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col lg={6}><p>Step 2: Buy a present for your Secret Santa pairing that we automatically create!</p></Col>
            <Col lg={6}><img height= '200px' src = {santa}/></Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col lg={6}><p>Step 3: Exchange gifts with your friends!</p></Col>
            <Col lg={6}><img height= '200px' src = {santa}/></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
