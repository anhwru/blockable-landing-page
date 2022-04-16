import React from 'react';
import * as Rb from 'react-bootstrap';
import Nest from '../../../assets/nest2.png';
import Go from '../../../assets/go_btn.png';

const NestCard = ({ title, desc }) => {
  console.log(title);
  return (
    <>
      <Rb.Card className='nest_card-items'>
        <Rb.Card.Img variant='top' src={Nest} />
        <Rb.Card.Title>Other Projects</Rb.Card.Title>
        <Rb.Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Rb.Card.Text>
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
