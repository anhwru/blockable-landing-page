import React, { useContext } from 'react';
import * as Rb from 'react-bootstrap';
import './style.scss';
import Fb from '../../../assets/fb.png';
import Tl from '../../../assets/tl.png';
import Tw from '../../../assets/tw.png';
import Yt from '../../../assets/yt.png';
import Dc from '../../../assets/dc.png';
import Lc from '../../../assets/lc.png';
import Mail from '../../../assets/fi_mail.png';
import { DataContext } from '../../../contexts/data.context';

const Team = () => {
  const data = useContext(DataContext);

  return (
    <section className='blockable_contact--wrapper'>
      <Rb.Container>
        <Rb.Col lg={12} sm={12} className='blockable_contact-title' id='Contact us'>
          <h2>{data.contents['Contact us'].title}</h2>
          <p>{data.contents['Contact us'].description}</p>
          <Rb.Button variant='outline-light' className='disclaimer'>
            Disclaimer
          </Rb.Button>
        </Rb.Col>

        <Rb.Row>
          <Rb.Col md={6} lg={6} xl={6} className='m-auto contact-group'>
            <Rb.Button>
              <img src={Fb} alt='contact' />
            </Rb.Button>
            <Rb.Button>
              <img src={Tl} alt='contact' />
            </Rb.Button>
            <Rb.Button>
              <img src={Tw} alt='contact' />
            </Rb.Button>
            <Rb.Button>
              <img src={Yt} alt='contact' />
            </Rb.Button>
            <Rb.Button>
              <img src={Dc} alt='contact' />
            </Rb.Button>
          </Rb.Col>
        </Rb.Row>
        <Rb.Row className='address-contact'>
          <Rb.Col md={6} lg={6} xl={6} className='d-flex addr'>
            <img src={Lc} alt='address' />
            <p>{data.settings.address}</p>
          </Rb.Col>
          <Rb.Col md={6} lg={6} xl={6} className='d-flex addr'>
            <img src={Mail} alt='address' />
            <a href={`mailto:${data.settings.email}`}>{data.settings.email}</a>
          </Rb.Col>
        </Rb.Row>
      </Rb.Container>
    </section>
  );
};

export default Team;
