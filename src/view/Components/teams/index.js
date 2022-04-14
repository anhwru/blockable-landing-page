import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import PersonSlider from "./personInfo";

const Team = () => {
  return (
    <section className="blockable_team--wrapper" id="Team">
      <Rb.Container>
        <Rb.Col lg={12} sm={12} className="blockable_team-title">
          <h2>Teams</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <PersonSlider />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default Team;
