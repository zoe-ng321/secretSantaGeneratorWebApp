import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {

  return (
      <div className="footer">
        <Row className="footerRow">
          <Col lg={2}>
          </Col>
          <Col lg={3}>
            <strong>Hours: <br/></strong>
            Open daily from 5am - 11am<br/> (or until sold out)
          </Col>
          <Col lg={4}>
            <strong>Address: <br/></strong>
            1406 E. Rio Grande St, Victoria, TX 77901
          </Col>
          <Col lg={3}>
            <strong>Phone: <br/></strong>
            (361) 572-4152
          </Col>
        </Row>
      </div>
  );
}

export default Footer;
