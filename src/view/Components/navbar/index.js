import * as React from "react";
import { Link } from "react-scroll";
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
            <Link
              activeClass="active"
              to="hub_block"
              spy={true}
              smooth={true}
              duration={200}
            >
              Blockable Hub
            </Link>
            <Link
              activeClass="active"
              to="nest_block"
              spy={true}
              smooth={true}
              duration={200}
            >
              Blockable Nest
            </Link>
            <Link
              activeClass="active"
              to="partnership_block"
              spy={true}
              smooth={true}
              duration={200}
            >
              Parternship
            </Link>
            <Link
              activeClass="active"
              to="teams_block"
              spy={true}
              smooth={true}
              duration={200}
            >
              Team
            </Link>
            <Link
              activeClass="active"
              to="news_block"
              spy={true}
              smooth={true}
              duration={200}
            >
              News
            </Link>
            <Link
              activeClass="active"
              to="contactus_block"
              spy={true}
              smooth={true}
              duration={200}
            >
              Contact Us
            </Link>
          </Rb.Nav>
        </Rb.Navbar.Collapse>
      </Rb.Container>
    </Rb.Navbar>
  );
}
