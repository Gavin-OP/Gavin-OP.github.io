import '../../css/Footer.css'
import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'


// function Footer() {
//     return (
//         <>
//             <MDBFooter className='text-center text-black' style={{ backgroundColor: '#f1f1f1' }}>
//                 <MDBContainer className='pt-4 pb-3' style={{ maxWidth: '90vw' }}    >
//                     <span style={{ marginRight: '7vw' }} onClick={() => window.location = 'mailto:HaoxiangZhang@link.cuhk.edu.hk'} onMouseOver={() => this.style.cursor = 'pointer'} >
//                         <HiOutlineMail style={{ color: 'black', marginLeft: '1rem', height: '25px', width: '25px', marginRight: '5px', marginBottom: '3px' }} size='2x' />
//                         <span>HaoxiangZhang@link.cuhk.edu.hk</span>
//                     </span>

//                     <span style={{ marginRight: '7vw' }} onClick={() => window.location = 'https://github.com/Gavin-OP'} >
//                         <AiOutlineGithub style={{ color: 'black', marginLeft: '1rem', height: '25px', width: '25px', marginRight: '5px', marginBottom: '3px' }} size='2x' />
//                         <span>https://github.com/Gavin-OP</span>
//                     </span>
//                     <span onClick={() => window.location = 'https://www.linkedin.com/in/gavin-zhang-op'}>
//                         <AiFillLinkedin style={{ color: 'black', marginLeft: '1rem', height: '25px', width: '25px', marginRight: '5px', marginBottom: '3px' }} size='2x' />
//                         <span>https://www.linkedin.com/in/gavin-zhang-op</span>
//                     </span>
//                 </MDBContainer>
//                 <div className='text-center p-3' style={{ backgroundColor: "#dedede", color: 'grey' }}>
//                     © 2022 Copyright: ZHANG Haoxiang
//                 </div>
//             </MDBFooter>
//         </>
//     )
// }

// Footer.js
function Footer() {
    const handleIconHover = (e) => {
        e.currentTarget.style.color = '#dbdbdb';
        e.currentTarget.style.cursor = 'pointer';
    };

    const handleIconLeave = (e) => {
        e.currentTarget.style.color = '#86868b';
        e.currentTarget.style.cursor = 'default';
    };

    return (
        <footer id='contact' className="footer-section">
            <div className="footer-content-container">
                <div className="footer-contact">
                    {/* Contact information or any other relevant details */}
                    <ul>
                        <li>
                            <span
                                onClick={() => (window.location.href = 'mailto:HaoxiangZhang@link.cuhk.edu.hk')}
                                onMouseEnter={handleIconHover}
                                onMouseLeave={handleIconLeave}
                            >
                                <HiOutlineMail size={25} />
                                <span>HaoxiangZhang@link.cuhk.edu.hk</span>
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => (window.location.href = 'https://github.com/Gavin-OP')}
                                onMouseEnter={handleIconHover}
                                onMouseLeave={handleIconLeave}
                            >
                                <AiOutlineGithub size={25} />
                                <span>https://github.com/Gavin-OP</span>
                            </span>
                        </li>
                        <li>
                            <span
                                onClick={() => (window.location.href = 'https://www.linkedin.com/in/gavin-zhang-op')}
                                onMouseEnter={handleIconHover}
                                onMouseLeave={handleIconLeave}
                            >
                                <AiFillLinkedin size={25} />
                                <span>https://www.linkedin.com/in/gavin-zhang-op</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='footer-copyright'>&copy; 2022 Copyright: ZHANG Haoxiang</p>
            </div>
        </footer>
    );
}




export default Footer;