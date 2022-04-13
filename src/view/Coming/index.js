import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";

import NavBarTop from "../Components/navbar";

const Coming = () => {
  return (
    <section className="coming_page--wrapper">
      <Rb.Container fluid>
        <NavBarTop />
        <h2 className="coming_page-title">Coming soon</h2>
      </Rb.Container>
    </section>
  );
};

export default Coming;
