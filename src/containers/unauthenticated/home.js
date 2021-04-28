import '../../App.css';
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
        <div>
          blah blah 
        </div>
      </div>
    </div>
  );
}

export default Home;
