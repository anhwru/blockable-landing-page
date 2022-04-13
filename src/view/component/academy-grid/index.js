import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import AcademyCard from "./academy_item";

const AcademyGridList = () => {
  return (
    <section className="academy_grid-list">
      <Rb.Container>
        <Rb.Row className="academy_items">
          <Rb.Col lg={4} md={4} sm={12} className="item">
            <AcademyCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12} className="item">
            <AcademyCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12} className="item">
            <AcademyCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12} className="item">
            <AcademyCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12} className="item">
            <AcademyCard />
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default AcademyGridList;
