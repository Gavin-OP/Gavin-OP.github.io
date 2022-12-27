import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigation() {
    return (
        <>
            <Navbar>
                <Container fluid>
                    {/* <Navbar.Brand href="/">
              <img
                alt=''
                src='/avatar.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />
            </Navbar.Brand> */}


                    {/* <div>
          <ul>
            <li>Personal Profile</li>
          </ul>
        </div> */}
                    {/* 
        <div
          class="s-navbar-desktop s-navbar-desktop-fixed strikingly-fixed s-bg-light-text s-new-layout topBar s-new-layout-a _alternativeNavBackgroundColorIsDifferentFromNormal has-new-layout has-button">
          <div class="s-nav-inner">

            <div class="s-nav-items-and-links">
              <ul class="s-uncollapsed-nav ">
                <li class="s-nav-li">
                  <div class="s-nav-link-container"><a class="s-font-body" href="#personal-profile">Personal
                    Profile</a></div>
                </li>
        <li class="s-nav-li"><div class="s-nav-link-container"><a class="s-font-body" href="#services">Internship</a></div></li> -->
                <li class="s-nav-li">
                  <div class="s-nav-link-container"><a class="s-font-body" href="#contact-me">Contact Me</a>
                  </div>
                </li>
                <li class="s-nav-li">
                  <div class="s-nav-link-container"><a class="s-font-body"
                    href="https://op-gavin.notion.site/STAT-Notes-baf3c4eb592642cb956801cc43709bcf">STAT
                    Notes</a></div>
                </li>
                <li class="s-nav-li">
                  <div class="s-nav-link-container"><a class="s-font-body"
                    href="/CSCI2720 Assignment 1/CSCI2070 Assignment 1.html">CSCI 2720 Assignment</a></div>
                </li>
                <li class="s-nav-li">
                  <div class="s-nav-link-container"><a class="s-font-body"
                    href="https://github.com/Gavin-OP/CV-template-CN/">CV Template (CN)</a></div>
                </li>
                <li class="s-nav-li">
                  <div class="s-nav-link-container" style="display: none;"><a class="s-font-body"
                    href="/GEUC4011-Data-Analysis.html">GEUC4011</a></div>
                </li>
                <li class="s-nav-li">
                  <div class="s-nav-link-container" style="display: none;"><a class="s-font-body"
                    href="https://op-gavin.notion.site/FINA-Notes-6699a4ba3e17426ab9b9de1f54e09ecd">FINA
                    Notes</a></div>
                </li>

              </ul>
            </div>
          </div>
        </div> */}
                    {/* <Navbar bg="light" variant="light" >
          <Container fluid className='me-1 ms-1'>
            <Navbar.Brand className='ms-0'>Road Tracker</Navbar.Brand>
          </Container>
        </Navbar> */}



                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end me-3" style={{ color: 'white' }}>
                        <NavDropdown title="Academic" className='me-3' >
                            <NavDropdown.Item href="#action3">FINA</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">STAT</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">CSCI</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation