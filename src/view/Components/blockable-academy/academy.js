import React from 'react';
import * as Rb from 'react-bootstrap';
import Ad1 from '../../../assets/academy_01.png';

const AcademyCard = ({ title, desc }) => {
  return (
    <>
      <Rb.Card className=''>
        <Rb.Card.Img variant='top' src={Ad1} />
        <Rb.Card.Body>
          <Rb.Card.Title>{title}</Rb.Card.Title>
          <Rb.Card.Text>{desc}</Rb.Card.Text>
        </Rb.Card.Body>
      </Rb.Card>
    </>
  );
};

export default AcademyCard;
