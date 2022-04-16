import { useState, useContext, useEffect } from "react";
import { Link } from "react-scroll";
import * as Rb from "react-bootstrap";
import "./style.scss";
import Logo from "../../../assets/logo.png";
import { DataContext } from "../../../contexts/data.context";
import { NavLink } from "react-router-dom";

export default function NavBarTop() {
  const [offset, setOffset] = useState(0);
  const [toggle, setToggle] = useState(false);
  const data = useContext(DataContext);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Rb.Navbar
      bg={offset > 90 ? "black" : "transparent"}
      expand="lg"
      fixed="top"
    >
      <Rb.Container className="nav_container">
        <Rb.Navbar.Brand as={NavLink} to="/">
          <img src={Logo} alt="logo" />
        </Rb.Navbar.Brand>
        <Rb.Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "" : ""}
        </Rb.Navbar.Toggle>
        <Rb.Navbar.Collapse id="basic-navbar-nav">
          <Rb.Nav className="me-auto"></Rb.Nav>
          <Rb.Nav>
            {data.menus.map((e) => (
              <Link
                key={e.id}
                activeClass="active"
                to={e.name}
                spy={true}
                smooth={true}
                duration={200}
              >
                {e.name}
              </Link>
            ))}
          </Rb.Nav>
        </Rb.Navbar.Collapse>
      </Rb.Container>
    </Rb.Navbar>
  );
}
