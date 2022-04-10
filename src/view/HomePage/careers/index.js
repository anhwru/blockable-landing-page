import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import CareersSlider from "./careers";

const Careers = () => {
  return (
    <section className="blockable_careers--wrapper">
      <Rb.Container>
        <Rb.Col lg={12} sm={12}>
          <h2 className="blockable_hub-title text-center">Jobs</h2>
          <CareersSlider />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default Careers;
