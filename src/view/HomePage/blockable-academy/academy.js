import React from "react";
import * as Rb from "react-bootstrap";
import Nest from "../../../assets/nest2.png";
import Go from "../../../assets/go_btn.png";

const AcademyCard = () => {
  return (
    <>
      <Rb.Card style={{ width: "18rem" }}>
        <Rb.Card.Img variant="top" src="holder.js/100px180" />
        <Rb.Card.Body>
          <Rb.Card.Title>Card Title</Rb.Card.Title>
          <Rb.Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Rb.Card.Text>
        </Rb.Card.Body>
      </Rb.Card>
    </>
  );
};

export default AcademyCard;
