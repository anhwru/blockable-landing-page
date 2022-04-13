import React from "react";
import * as Rb from "react-bootstrap";

import "./styles.scss";
import BlockableHeader from "../component/block-header";
import BlockableHub from "../component/blockable-hub";
import BlockableNest from "../component/blockable-nest";
import BlockablePartnerShip from "../component/blockable-partnership";
import BlockableAcademy from "../component/blockable-academy";
import BlockableNews from "../component/blockable-news";
import Team from "../component/teams";
import Careers from "../component/careers";
import ContactUs from "../component/contact-us";

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
