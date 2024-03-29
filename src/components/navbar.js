import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { RenderIf } from 'react-rainbow-components';

const NavBar = (props) => {

  const [expanded, setExpanded] = useState(false);

  const logout = () => {
    localStorage.clear()
    props.setLoggedIn(false)
  }

  let loggedIn = props.isLoggedIn;

  return (
    <Navbar expanded={expanded} bg="light" expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/">Secret Santa Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
          <RenderIf isTrue = {!loggedIn}>
            <Nav.Link as={Link} to="/register" onClick={() => setExpanded(false)}>Register</Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>Login</Nav.Link>
          </RenderIf>
          <RenderIf isTrue={loggedIn}>
            <Nav.Link as={Link} to="/dashboard" onClick={() => setExpanded(false)}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/profile" onClick={() => setExpanded(false)}>Profile</Nav.Link>
            <Nav.Link as={Link} to="/home" onClick={logout}>Log Out</Nav.Link>
          </RenderIf>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
