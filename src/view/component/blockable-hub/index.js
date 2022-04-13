import React from "react";
import * as Rb from "react-bootstrap";
import Book from "../../../assets/hub-book.png";
import User from "../../../assets/hub-user.png";
import Global from "../../../assets/hub-global.png";
import Folder from "../../../assets/hub-folder.png";
import "./style.scss";

const BlockableHub = () => {
  return (
    <section className="blockable_hub--wrapper">
      <Rb.Container>
        <Rb.Row>
          <Rb.Col lg={6} sm={6} className="hub-title">
            <h2 className="blockable_hub-title">Blockable Hub</h2>
            <p className="blockable_hub-sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </Rb.Col>
        </Rb.Row>
        <Rb.Row>
          <Rb.Col xl={6} lg={6} sm={12}>
            <img
              src="https://www.kojac.nl/tailwind/images/Backend/nodejs.png"
              alt="logo-hub"
              width={300}
            />
          </Rb.Col>
          <Rb.Col xl={6} lg={6} sm={12} className="list-hub">
            <Rb.Row>
              <Rb.Col lg={6} sm={6}>
                <img src={Book} alt="hub-img" />
                <h3 className="list_hub-title">Crypto Education</h3>
                <p className="list_hub-content">
                  We focus on investment course and blockchain developer{" "}
                </p>
              </Rb.Col>
              <Rb.Col lg={6} sm={6}>
                <img src={User} alt="hub-img" />
                <h3 className="list_hub-title">Crypto Alert Group</h3>
                <p className="list_hub-content">
                  Group to share investment recommendations and ask questions
                  about Crypto
                </p>
              </Rb.Col>
              <Rb.Col lg={6} sm={6}>
                <img src={Folder} alt="hub-img" />
                <h3 className="list_hub-title">Crypto Portfolio</h3>
                <p className="list_hub-content">
                  Investment fund for mid term and long term investors{" "}
                </p>
              </Rb.Col>
              <Rb.Col lg={6} sm={6}>
                <img src={Global} alt="hub-img" />
                <h3 className="list_hub-title">Naked Coin</h3>
                <p className="list_hub-content">
                  Investment recommendation run by machine learning and data
                  scanning
                </p>
              </Rb.Col>
            </Rb.Row>
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockableHub;
