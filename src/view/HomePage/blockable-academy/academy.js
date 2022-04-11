import React from "react";
import * as Rb from "react-bootstrap";
import Ad1 from "../../../assets/academy_01.png";

const AcademyCard = () => {
  return (
    <>
      <Rb.Card className="">
        <Rb.Card.Img variant="top" src={Ad1} />
        <Rb.Card.Body>
          <Rb.Card.Title>Blockchain Basics</Rb.Card.Title>
          <Rb.Card.Text>
            Learn the fundamentals elements of a blockchain and its practical
            applications with experienced experts in worldwide Blockchain
            projects.
          </Rb.Card.Text>
        </Rb.Card.Body>
      </Rb.Card>
    </>
  );
};

export default AcademyCard;
