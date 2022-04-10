import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import NestCard from "./nestCard";

const BlockableNest = () => {
  return (
    <section className="blockable_nest--wrapper">
      <Rb.Container>
        <Rb.Row className="nest-title">
          <Rb.Col md={6} lg={6} sm={12} xl={6}>
            <Rb.Card>
              <Rb.Card.Body>
                <Rb.Card.Title>Blockable Nest</Rb.Card.Title>
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
            <NestCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12}>
            <NestCard />
          </Rb.Col>
          <Rb.Col lg={4} md={4} sm={12}>
            <NestCard />
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockableNest;
