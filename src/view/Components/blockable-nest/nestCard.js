import React from 'react';
import * as Rb from 'react-bootstrap';
import Nest from '../../../assets/nest2.png';
import Go from '../../../assets/go_btn.png';

const NestCard = ({ title, desc }) => {
  console.log(title)
  return (
    <>
      <Rb.Card className='nest_card-items'>
        <Rb.Card.Title>{title}</Rb.Card.Title>
        <Rb.Card.Text>{desc}</Rb.Card.Text>
        <Rb.Card.Img variant='top' src={Nest} />
        <Rb.Card.Body>
          <Rb.Button variant='outline'>
            <img src={Go} alt='go' />
          </Rb.Button>
        </Rb.Card.Body>
      </Rb.Card>
    </>
  );
};

export default NestCard;
