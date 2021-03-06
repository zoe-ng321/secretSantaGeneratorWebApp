import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="light" expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/">Secret Santa Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
          <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>Login</Nav.Link>
          <Nav.Link as={Link} to="/register" onClick={() => setExpanded(false)}>Register</Nav.Link>
          <Nav.Link as={Link} to="/dashboard" onClick={() => setExpanded(false)}>Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/createGroup" onClick={() => setExpanded(false)}>Create Group</Nav.Link>
          <Nav.Link as={Link} to="/groupDashboard" onClick={() => setExpanded(false)}>Group Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
