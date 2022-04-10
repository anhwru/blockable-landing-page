import React from "react";
import * as Rb from "react-bootstrap";

import "./styles.scss";
import BlockableHeader from "./block-header";
import BlockableHub from "./blockable-hub";
import BlockableNest from "./blockable-nest";
import BlockablePartnerShip from "./blockable-partnership";
import BlockableAcademy from "./blockable-academy";
import BlockableNews from "./blockable-news";
import Team from "./teams";
import Careers from "./careers";
import OurTeam from "./teams";
import ContactUs from "./contact-us";

const Home = () => {
  return (
    <section className="home_page--wrapper">
      <Rb.Container fluid>
        <BlockableHeader />
        <BlockableHub />
        <BlockableNest />
        <BlockablePartnerShip />
        <BlockableAcademy />
        <BlockableNews />
        <Team />
        <Careers />
        <ContactUs />
      </Rb.Container>
    </section>
  );
};

export default Home;
