import santa from "../../assets/santa.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Home = () => {

  return (
    <Container fluid>
      <div>
        <Row className="hero">
          <Col className="title" lg={6}> Easily organize a Secret Santa gift exchange with your friends! </Col>
          <Col lg={6}><img height= '500px' src = {santa} alt= "text"/></Col>
        </Row>
        <Container className="steps">
          <Row className="step">
            <Col lg={6} style={{backgroundColor:'lightblue'}}><p>Step 1: Create a group for your friends to join!</p></Col>
            <Col lg={6} style={{backgroundColor:'lightcoral'}}><img height= '200px' src = {santa} alt= "text"/></Col>
          </Row>
          <Row className="step">
            <Col lg={6}><p>Step 2: Buy a present for your Secret Santa pairing that we automatically create!</p></Col>
            <Col lg={6}><img height= '200px' src = {santa} alt= "text"/></Col>
          </Row>
          <Row className="step">
            <Col lg={6}><p>Step 3: Exchange gifts with your friends!</p></Col>
            <Col lg={6}><img height= '200px' src = {santa} alt= "text"/></Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Home;
