import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import { DataContext } from '../../../contexts/data.context';
import './style.scss';

const BlockableHub = () => {
  const data = useContext(DataContext);

  return (
    <section className='blockable_hub--wrapper' id='Blockable Hub'>
      <Rb.Container>
        <Rb.Row>
          <Rb.Col lg={6} sm={6} className='hub-title'>
            <h2 className='blockable_hub-title'>Blockable Hub</h2>
            <p className='blockable_hub-sub'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </Rb.Col>
        </Rb.Row>
        <Rb.Row>
          <Rb.Col xl={6} lg={6} sm={12}>
            {/* <img
              className="hub-image"
              src="https://www.kojac.nl/tailwind/images/Backend/nodejs.png"
              alt="logo-hub"
              width={300}
            /> */}
          </Rb.Col>
          <Rb.Col xl={6} lg={6} sm={12} className='list-hub'>
            <Rb.Row>
              {data.contents['Blockable Hub'].map((e) => (
                <Rb.Col lg={6} sm={6} key={e.id}>
                  <img src={e.img} alt='hub-img' />
                  <h3 className='list_hub-title'>{e.description}</h3>
                  <p className='list_hub-content'>{e.content}</p>
                </Rb.Col>
              ))}
            </Rb.Row>
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default BlockableHub;
