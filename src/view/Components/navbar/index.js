import * as React from 'react';
import { Link } from 'react-scroll';
import * as Rb from 'react-bootstrap';
import './style.scss';
import Logo from '../../../assets/logo.png';
import { DataContext } from '../../../contexts/data.context';

export default function NavBarTop() {
  const data = React.useContext(DataContext);

  return (
    <Rb.Navbar bg='transparent' expand='lg' fixed='top'>
      <Rb.Container>
        <Rb.Navbar.Brand href='#home'>
          <img src={Logo} alt='logo' />
        </Rb.Navbar.Brand>
        <Rb.Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Rb.Navbar.Collapse id='basic-navbar-nav'>
          <Rb.Nav className='me-auto'></Rb.Nav>
          <Rb.Nav>
            {data.menus.map((e) => (
              <Link
                key={e.id}
                activeClass='active'
                to={e.name}
                spy={true}
                smooth={true}
                duration={200}>
                {e.name}
              </Link>
            ))}          
          </Rb.Nav>
        </Rb.Navbar.Collapse>
      </Rb.Container>
    </Rb.Navbar>
  );
}
