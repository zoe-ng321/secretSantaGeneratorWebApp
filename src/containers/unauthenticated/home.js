import santa from "../../assets/santa.jpg";
import hero from "../../assets/hero.png";
import hero2 from "../../assets/herocopy.png";
import step1 from "../../assets/step1.jpg";
import step2 from "../../assets/step2.jpg";
import step3 from "../../assets/step3.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button, Card } from 'react-rainbow-components';
import { Link } from "react-router-dom";

const Home = () => {

  const cards = (
    <Row style={{marginLeft: '30px'}}>
      <Col lg={4}>
        <Card className="cardStep">
          <img height= '200px' src = {step1} alt= "Create a group"/>
          <div style={{marginTop:'15px'}}>
            <h4>Step 1</h4>
            <p>Create a group for your friends to join!</p>
          </div>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className="cardStep">
          <img height= '200px' src = {step2} alt= "Discover your Secret Santa pairing"/>
          <div style={{marginTop:'15px'}}>
            <h4>Step 2</h4>
            <p>Buy a present for your Secret Santa - we'll generate the pairs for you!</p>
          </div>
        </Card>
      </Col>
      <Col lg={4}>
        <Card className="cardStep">
          <img height= '200px' src = {step3} alt= "Exchange gifts"/>
          <div style={{marginTop:'15px'}}>
            <h4>Step 3</h4>
            <p>Exchange gifts with your friends!</p>
          </div>
        </Card>
      </Col>
    </Row>
  );

  return (
    <Container fluid>
      <div>
        <Row className="hero">
          <Col className="title" lg={6}> Easily organize a Secret Santa gift exchange with your friends! </Col>
          <Col lg={6}><img className="heroimg" height= '500px' src = {hero} alt= "present"/></Col>
          <Col lg={6}><img className="heroimg2" height= '500px' src = {hero2} alt= "present"/></Col>
        </Row>
        <Container className="steps">
          {cards}
        </Container>
        <Row className="getStarted">
          <div>
            <h1>Excited to have a gift exchange?</h1>
            <h2>Get started now!</h2>
            <Link to="/register">
              <Button
                label="Sign up"
                variant="brand"
                className="rainbow-m-around_medium"
                style={{ width: '225px', fontWeight: 'bold'}}
              />
            </Link>
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
