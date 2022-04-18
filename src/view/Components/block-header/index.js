import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import NavBarTop from '../navbar/index';
import Bg from '../../../assets/bg-video.mp4';
import './style.scss';
import { DataContext } from '../../../contexts/data.context';

const BlockableHeader = () => {
  const data = useContext(DataContext);

  return (
    <>
      <video className='videoTag' autoPlay loop muted id='background-video'>
        <source src={Bg} type='video/mp4' />
      </video>
      <section className='block_header--wrapper'>
        <Rb.Container>
          <Rb.Row>
            <NavBarTop />
          </Rb.Row>
          <Rb.Row className='banner'>
            <Rb.Col md={6} lg={6} sm={12} xl={6} className='banner-title'>
              <Rb.Card>
                <Rb.Card.Body>
                  <Rb.Card.Title>Build /a/ Better Blockchain</Rb.Card.Title>
                  <Rb.Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  </Rb.Card.Text>
                </Rb.Card.Body>
              </Rb.Card>
            </Rb.Col>
          </Rb.Row>
        </Rb.Container>
      </section>
    </>
  );
};

export default BlockableHeader;
