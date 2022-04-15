import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import NewsBlock from "./newsBlock";
import Box from "../../../assets/news_img.png";

const BlockableNews = () => {
  return (
    <section className="blockable_newsblock--wrapper" id="news_block">
      <Rb.Container>
        <Rb.Col lg={10} sm={10} className="m-auto">
          <h2 className="blockable_news-title">News</h2>
          <Rb.Col md={12} className="card_content-top">
            <Rb.Row>
              <Rb.Col md={3} lg={3} xl={3} className="box">
                <img src={Box} alt="box" />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} className="sub-title">
                <p>Lastest</p>
                <h2>News</h2>
              </Rb.Col>
              <Rb.Col md={6} lg={6} xl={6} className="top-content">
                <p className="timer">26.3 - 2022</p>
                <h3>An exclusive information session for</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat ut aliquip ex
                  ea commodo consequat.{" "}
                </p>
              </Rb.Col>
            </Rb.Row>
          </Rb.Col>
          <NewsBlock />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default BlockableNews;
