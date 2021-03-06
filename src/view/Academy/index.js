import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";

import ContactUs from "../Components/contact-us";
import NavBarTop from "../Components/navbar";
import AcademyGridList from "../Components/academy-grid";

const Academy = () => {
  return (
    <section className="academy_page--wrapper">
      <Rb.Container fluid>
        <NavBarTop />
        <h2 className="academy_page-title">Blockable Academy</h2>
        <AcademyGridList />
        <ContactUs />
      </Rb.Container>
    </section>
  );
};

export default Academy;
