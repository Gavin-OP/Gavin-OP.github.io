import '../../css/Navbar.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// function Navigation() {
//     return (
//         <>
//             <Navbar sticky='top'>
//                 <Container fluid className='mt-2' >
//                     <Navbar.Toggle />
//                     <Navbar.Collapse className="justify-content-end me-3" style={{ color: 'white' }} >
//                         <NavDropdown title={<span style={{ fontWeight: 'bold' }}>Academic</span>} className='me-3 '>
//                             <NavDropdown.Item href="/page/GEUC4011-Data-Analysis.html" className='text-center'>Project</NavDropdown.Item>
//                             <NavDropdown.Item href="/" className='text-center'>Essay</NavDropdown.Item>
//                             <NavDropdown.Item href="/" className='text-center'>Notes</NavDropdown.Item>
//                             <NavDropdown.Item href="/page/timetable.html" className='text-center'>Timetable</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown title={<span style={{ fontWeight: 'bold' }}>Internship</span>} className='me-3' >
//                             <NavDropdown.Item href="/" className='text-center'>FutureX Capital</NavDropdown.Item>
//                             <NavDropdown.Item href="/" className='text-center'>PWC</NavDropdown.Item>
//                             <NavDropdown.Item href="/" className='text-center'>Zhihu</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown title={<span style={{ fontWeight: 'bold' }}>Extracurricular</span>} className='me-3' align='end' >
//                             <NavDropdown.Item href="/" className='text-center'>Vlog</NavDropdown.Item>
//                         </NavDropdown>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             <nav>
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#projects">Projects</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                 </ul>
//             </nav>
//         </>
//     )
// }

// export default Navigation

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 15);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={visible ? 'visible' : 'hidden'}>
      <ul>
        <li><a className='navBarLink' onClick={() => scrollToAnchor('profile')}>Profile</a></li>
        <li><a className='navBarLink' onClick={() => scrollToAnchor('internship')}>Internship</a></li>
        {/* <li><a className='navBarLink' onClick={() => scrollToAnchor('project')}>Projects</a></li> */}
        <li><a className='navBarLink' onClick={() => scrollToAnchor('contact')}>Contact</a></li>
        {/* <li>
          <a onClick={() => handleSmoothScroll('home')}>Home</a>
        </li>
        <li>
          <button onClick={() => handleSmoothScroll('internship')}>Internship</button>
        </li>
        <li>
          <button onClick={() => handleSmoothScroll('project')}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleSmoothScroll('contact')}>Contact</button>
        </li> */}
      </ul>
    </nav>
  );
}


export default Navigation;