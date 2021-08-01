import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const Footer = (props) => {

  return (
      <div className="footer">
        <Container fluid style={{marginLeft:'40px'}}>
          <Row className="footerRow">
            <Col lg={2}>
            </Col>
            <Col lg={3}>
              <Row>
                <Link to = "/about" className="footerItem">About</Link>
              </Row>
              <Row>
                <Link to = "/dashboard" className="footerItem">Dashboard</Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Footer;
