import React, { useEffect, useState, useCallback } from 'react';
import '../styles/Navbar.css';

function Navigation() {
  const navItems = [
    { label: 'Profile', target: 'profile' },
    { label: 'Internship', target: 'internship' },
    { label: 'Project', target: 'project' },
    { label: 'Contact', target: 'contact' }
  ];
  const [, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    setPrevScrollPos((previousPosition) => {
      setVisible(previousPosition > currentScrollPos || currentScrollPos < 24);
      return currentScrollPos;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const targetId = window.location.hash.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }

    window.requestAnimationFrame(() => {
      targetElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }, []);


  const scrollToAnchor = (anchorName) => {
    if (!anchorName) {
      return;
    }

    const anchorElement = document.getElementById(anchorName);
    if (!anchorElement) {
      return;
    }

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${anchorName}`
    );
    anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <nav
      className={`site-nav ${visible ? 'site-nav--visible' : 'site-nav--hidden'}`}
      aria-label="Primary"
    >
      <ul className="site-nav__list">
        {navItems.map((item) => (
          <li key={item.target} className="site-nav__item">
            <button
              className="site-nav__link"
              onClick={() => scrollToAnchor(item.target)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default Navigation;
