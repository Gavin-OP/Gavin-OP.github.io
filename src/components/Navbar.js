import '../css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {
    return (
        <>
            <Navbar sticky='top'>
                <Container fluid className='mt-2' >
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end me-3" style={{ color: 'white' }} >
                        <NavDropdown title={<span style={{ fontWeight: 'bold' }}>Academic</span>} className='me-3 '>
                            <NavDropdown.Item href="/GEUC4011-Data-Analysis.html" className='text-center'>Project</NavDropdown.Item>
                            <NavDropdown.Item href="/" className='text-center'>Essay</NavDropdown.Item>
                            <NavDropdown.Item href="/" className='text-center'>Notes</NavDropdown.Item>
                            <NavDropdown.Item href="/timetable.html" className='text-center'>Timetable</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span style={{ fontWeight: 'bold' }}>Internship</span>} className='me-3' >
                            <NavDropdown.Item href="/" className='text-center'>FutureX Capital</NavDropdown.Item>
                            <NavDropdown.Item href="/" className='text-center'>PWC</NavDropdown.Item>
                            <NavDropdown.Item href="/" className='text-center'>Zhihu</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span style={{ fontWeight: 'bold' }}>Extracurricular</span>} className='me-3' align='end' >
                            <NavDropdown.Item href="/" className='text-center'>Vlog</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation