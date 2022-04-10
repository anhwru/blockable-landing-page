import React from "react";
import * as Rb from "react-bootstrap";
import "./style.scss";

const ContactUs = () => {
  return (
    <section className="blockable_contact--wrapper">
      <Rb.Container>
        <Rb.Col lg={12} sm={12}>
          <h2 className="blockable_hub-title text-center">Contact</h2>
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default ContactUs;
