import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import PersonSlider from "./personInfo";

const Team = () => {
  return (
    <section className="blockable_team--wrapper">
      <Rb.Container>
        <Rb.Col lg={12} sm={12}>
          <h2 className="blockable_hub-title">Teams</h2>
          <PersonSlider />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default Team;
