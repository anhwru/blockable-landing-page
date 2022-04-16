import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import './style.scss';
import PartnerShip from './partnerShip';
import { DataContext } from '../../../contexts/data.context';

const BlockablePartnerShip = () => {
  const data = useContext(DataContext);

  return (
    <section className='blockable_partnership--wrapper' id='Partnership'>
      <Rb.Container>
        <Rb.Col lg={8} sm={12} className='text-center m-auto'>
          <h2 className='partnership-title'>{data.contents['Partnership'].title}</h2>
          <p className='blockable_partner-sub'>{data.contents['Partnership'].description}</p>
        </Rb.Col>
        <Rb.Row className='partnership-logo'>
          <Rb.Col md={9} lg={9} className='list-brand'>
            <Rb.Row>
              {data.contents['Partnership'].items.map((e, i) => (
                <Rb.Col md={3} lg={3} xl={3} sm={4} className='img-wrapper' key={i}>
                  <PartnerShip />
                </Rb.Col>
              ))}
            </Rb.Row>
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockablePartnerShip;
