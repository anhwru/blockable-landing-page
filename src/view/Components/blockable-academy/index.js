import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import './style.scss';
import AcademyCard from './academy';
import Arrow from '../../../assets/u_arrow-right.png';
import { DataContext } from '../../../contexts/data.context';

import './style.scss';
import { Link } from 'react-router-dom';

const BlockableAcademy = () => {
  const data = useContext(DataContext);
  return (
    <section className='blockable_academy--wrapper' id='academy_block'>
      <Rb.Container>
        <Rb.Row className='academy-title'>
          <Rb.Col md={8} lg={8} sm={12} xl={8}>
            <Rb.Card>
              <Rb.Card.Body>
                <Rb.Card.Title>
                  {data.contents['Blockable academy'].title}
                  <Rb.Button variant='link' className='academy-link' as={Link} to='academy'>
                    <img src={Arrow} alt='arrow' />
                  </Rb.Button>
                </Rb.Card.Title>
                <Rb.Card.Text>{data.contents['Blockable academy'].description}</Rb.Card.Text>
              </Rb.Card.Body>
            </Rb.Card>
          </Rb.Col>
        </Rb.Row>
        <Rb.Row className='card_items-wrapper'>
          {data.contents['Blockable academy'].items.map((e, i) => (
            <Rb.Col lg={4} md={4} sm={12} key={i}>
              <AcademyCard title={e.description} desc={e.content} />
            </Rb.Col>
          ))}
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockableAcademy;
