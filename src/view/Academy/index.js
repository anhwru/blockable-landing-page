import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";

import ContactUs from "../component/contact-us";
import NavBarTop from "../component/navbar";
import AcademyGridList from "../component/academy-grid";

const Academy = () => {
  return (
    <section className="home_page--wrapper">
      <Rb.Container fluid>
        <NavBarTop />
        <AcademyGridList />
        <ContactUs />
      </Rb.Container>
    </section>
  );
};

export default Academy;
