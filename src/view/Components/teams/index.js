import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import './style.scss';
import PersonSlider from './personInfo';
import { DataContext } from '../../../contexts/data.context';

const Team = () => {
  const data = useContext(DataContext);

  return (
    <section className='blockable_team--wrapper' id='Team'>
      <Rb.Container>
        <Rb.Col lg={12} sm={12} className='blockable_team-title'>
          <h2>{data.contents['Team'].title}</h2>
          <p>{data.contents['Team'].description}</p>
          <PersonSlider items={data.contents['Team'].items} />
        </Rb.Col>
      </Rb.Container>
    </section>
  );
};

export default Team;
