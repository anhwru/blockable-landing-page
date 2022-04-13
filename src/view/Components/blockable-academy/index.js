import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import AcademyCard from "./academy";
import Arrow from "../../../assets/u_arrow-right.png";

const BlockableAcademy = () => {
  return (
    <section className="blockable_academy--wrapper" id="academy_block">
      <Rb.Container>
        <Rb.Row className="academy-title">
          <Rb.Col md={8} lg={8} sm={12} xl={8}>
            <Rb.Card>
              <Rb.Card.Body>
                <Rb.Card.Title>
                  Blockable Academy <img src={Arrow} alt="arrow" />
                </Rb.Card.Title>
                <Rb.Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniamn reprehenderit in voluptate velit esse
                  cillum dolore
                </Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
        </Rb.Row>
        <Rb.Row className="card_items-wrapper">
          <Rb.Col lg={4} md={4} sm={12}>
            <AcademyCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12}>
            <AcademyCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12}>
            <AcademyCard />
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockableAcademy;
