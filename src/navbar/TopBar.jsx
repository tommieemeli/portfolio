import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

function Topbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class="fas fa-hat-wizard"></i> GEE 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-home"></i> Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/me'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Who <i class="fas fa-question"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/textmemaybe'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Lets talk <i class="fas fa-user-secret"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Topbar;