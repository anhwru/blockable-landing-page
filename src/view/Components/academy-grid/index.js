import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import './style.scss';
import AcademyCard from './academy_item';
import { DataContext } from '../../../contexts/data.context';

const AcademyGridList = () => {
  const data = useContext(DataContext);

  return (
    <section className='academy_grid-list'>
      <Rb.Container>
        <Rb.Row className='academy_items'>
          {data.page2.map((e, i) => (
            <Rb.Col lg={4} md={4} sm={12} className='item' key={i}>
              <AcademyCard content={e.content} description={e.description} />
            </Rb.Col>
          ))}
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default AcademyGridList;
