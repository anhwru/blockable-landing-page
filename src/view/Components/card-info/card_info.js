import React from "react";
import * as Rb from "react-bootstrap";
import Acd from "../../../assets/acd.png";

const CardInfo = () => {
  return (
    <>
      <Rb.Card className="card_info">
        <Rb.Card.Img variant="top" src={Acd} />
        <Rb.Card.Body>
          <Rb.Card.Title>Asgard</Rb.Card.Title>
          <Rb.Card.Text className="description">
            <p> Thế giới của các vị thầnl</p>
          </Rb.Card.Text>
        </Rb.Card.Body>
      </Rb.Card>
    </>
  );
};

export default CardInfo;
