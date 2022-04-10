import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import NewsBlock from "./newsBlock";

const BlockableNews = () => {
  return (
    <section className="blockable_newsblock--wrapper">
      <Rb.Container>
        <Rb.Col lg={12} sm={12}>
          <h2 className="blockable_hub-title">News</h2>
          <NewsBlock />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default BlockableNews;
