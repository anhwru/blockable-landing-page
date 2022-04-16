import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import './style.scss';
import NestCard from './nestCard';
import { DataContext } from '../../../contexts/data.context';

const BlockableNest = () => {
  const data = useContext(DataContext);

  return (
    <section className='blockable_nest--wrapper' id='Blockable Nest'>
      <Rb.Container>
        <Rb.Row className='nest-title'>
          <Rb.Col md={6} lg={6} sm={12} xl={6}>
            <Rb.Card>
              <Rb.Card.Body>
                <Rb.Card.Title>{data.contents['Blockable Nest'].title}</Rb.Card.Title>
                <Rb.Card.Text>{data.contents['Blockable Nest'].description}</Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
        </Rb.Row>
        <Rb.Row className='card_items-wrapper'>
          {data.contents['Blockable Nest'].items.map((e, i) => (
            <Rb.Col lg={4} md={4} sm={12} key={i}>
              <NestCard title={e.description} desc={e.content} />
            </Rb.Col>
          ))}
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockableNest;
