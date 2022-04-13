import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";

import ContactUs from "../Components/contact-us";
import NavBarTop from "../Components/navbar";
import CardList from "../Components/card-info";

const CardPage = () => {
  return (
    <section className="home_page--wrapper">
      <Rb.Container fluid>
        <NavBarTop />
        <CardList />
        <ContactUs />
      </Rb.Container>
    </section>
  );
};

export default CardPage;
