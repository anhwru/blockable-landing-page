import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import Careers from "./careers";

const BlockableNews = () => {
  return (
    <section className="blockable_careers--wrapper" id="careers_block">
      <Rb.Container>
        <Rb.Col lg={10} sm={10} className="m-auto">
          <h2 className="blockable_carrers-title">Careers</h2>
          <Careers />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default BlockableNews;
