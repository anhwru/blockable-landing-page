import React from 'react';
import * as Rb from 'react-bootstrap';

import './styles.scss';
import BlockableHeader from '../Components/block-header';
import BlockableHub from '../Components/blockable-hub';
import BlockableNest from '../Components/blockable-nest';
import BlockablePartnerShip from '../Components/blockable-partnership';
import BlockableAcademy from '../Components/blockable-academy';
import BlockableNews from '../Components/blockable-news';
import Team from '../Components/teams';
import Careers from '../Components/careers';
import ContactUs from '../Components/contact-us';

const Home = () => {
  return (
    <section className='home_page--wrapper'>
      <Rb.Container fluid>
        <BlockableHeader />
        <BlockableHub />
        <BlockableNest />
        <BlockablePartnerShip />
        <BlockableAcademy />
        <BlockableNews />
        <Team />
        <Careers />
        <ContactUs />
      </Rb.Container>
    </section>
  );
};

export default Home;
