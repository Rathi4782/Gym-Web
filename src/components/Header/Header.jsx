// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import Cross from '../../assets/cross.png';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpened(false); // Close menu on large screens
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      {isMobile && (
        <div
          className="bars-icon"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <img
            src={menuOpened ? Cross : Bars}
            alt="Menu Icon"
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      )}
      <ul className={`header-menu ${menuOpened ? 'active' : ''}`}>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
