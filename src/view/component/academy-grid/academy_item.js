import React from "react";
import * as Rb from "react-bootstrap";
import Acd from "../../../assets/acd.png";
import Aw from "../../../assets/u_award.png";
import Go from "../../../assets/go_btn.png";

const AcademyItem = () => {
  return (
    <>
      <Rb.Card className="academy-card">
        <Rb.Card.Img variant="top" src={Acd} />
        <Rb.Card.Body>
          <Rb.Badge bg="success" className="badge">
            Comming Soon
          </Rb.Badge>
          <Rb.Card.Title>
            Build a Blockchain & Cryptocurrency using Python
          </Rb.Card.Title>
          <Rb.Card.Text className="required-level">
            <img src={Aw} alt="required" />
            <p> All level</p>
          </Rb.Card.Text>
          <Rb.Button variant="outline">
            <img src={Go} alt="go" />
          </Rb.Button>
        </Rb.Card.Body>
      </Rb.Card>
    </>
  );
};

export default AcademyItem;
