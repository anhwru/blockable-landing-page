import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import CardInfo from "./card_info";

const CardList = () => {
  return (
    <section className="card_grid-list">
      <Rb.Container>
        <Rb.Row className="card_items">
          <Rb.Col lg={6} md={6} xl={6} className="ygg-wrapper">
            <p className="ygg-title">Yggdrasil</p>
          </Rb.Col>
          <Rb.Col lg={6} md={6} sm={12} className="item">
            <CardInfo />
          </Rb.Col>
          <Rb.Col lg={6} md={6} sm={12} className="item">
            <CardInfo />
          </Rb.Col>
          <Rb.Col lg={6} md={6} sm={12} className="item">
            <CardInfo />
          </Rb.Col>
          <Rb.Col lg={6} md={6} sm={12} className="item">
            <CardInfo />
          </Rb.Col>
          <Rb.Col lg={6} md={6} sm={12} className="item">
            <CardInfo />
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default CardList;
