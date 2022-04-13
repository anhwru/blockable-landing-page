import * as React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import Logo from "../../../assets/logo.png";

export default function NavBarTop() {
  return (
    <Rb.Navbar bg="transparent" expand="lg" fixed="top">
      <Rb.Container>
        <Rb.Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Rb.Navbar.Brand>
        <Rb.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Rb.Navbar.Collapse id="basic-navbar-nav">
          <Rb.Nav className="me-auto"></Rb.Nav>
          <Rb.Nav>
            <Rb.Nav.Link>Blockable Hub</Rb.Nav.Link>
            <Rb.Nav.Link>Blockable Nest</Rb.Nav.Link>
            <Rb.Nav.Link>Parternship</Rb.Nav.Link>
            <Rb.Nav.Link>Team</Rb.Nav.Link>
            <Rb.Nav.Link>News</Rb.Nav.Link>
            <Rb.Nav.Link>Contact Us</Rb.Nav.Link>
          </Rb.Nav>
        </Rb.Navbar.Collapse>
      </Rb.Container>
    </Rb.Navbar>
  );
}
