import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";
import PartnerShip from "./partnerShip";

const BlockablePartnerShip = () => {
  return (
    <section className="blockable_partnership--wrapper">
      <Rb.Container>
        <Rb.Col lg={8} sm={12} className="text-center m-auto">
          <h2 className="partnership-title">Blockable Partnership</h2>
          <p className="blockable_partner-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </Rb.Col>
        <Rb.Row className="partnership-logo">
          <Rb.Col md={9} lg={9} className="list-brand">
            <Rb.Row>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
              <Rb.Col md={3} lg={3} xl={3} sm={12} className="img-wrapper">
                <PartnerShip />
              </Rb.Col>
            </Rb.Row>
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockablePartnerShip;
