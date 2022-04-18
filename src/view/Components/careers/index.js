import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import Careers from "./careers";
import Box from "../../../assets/news_img.png";

const BlockableNews = () => {
  return (
    <section className="blockable_careers--wrapper" id="careers_block">
      <Rb.Container>
        <Rb.Col lg={10} sm={10} className="m-auto">
          <h2 className="blockable_carrers-title">Careers</h2>
          <Rb.Col md={12} className="card_content-top">
            <Rb.Row>
              <Rb.Col md={3} lg={3} xl={3} className="box">
                <img src={Box} alt="box" />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} className="sub-title">
                <p>Lastest</p>
                <h2>News</h2>
              </Rb.Col>
            </Rb.Row>
          </Rb.Col>
          <Careers />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default BlockableNews;
