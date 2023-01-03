import React from 'react';
import {
    MDBFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'


function Footer() {
    return (
        <>
            <MDBFooter className='text-center text-black' style={{ backgroundColor: '#f1f1f1' }}>
                <MDBContainer className='pt-4 pb-3' style={{ maxWidth: '90vw' }}    >
                    <span style={{ marginRight: '7vw' }} onClick={() => window.location = 'mailto:HaoxiangZhang@link.cuhk.edu.hk'} onMouseOver={() => this.style.cursor = 'pointer'} >
                        <HiOutlineMail style={{ color: 'black', marginLeft: '1rem', height: '25px', width: '25px', marginRight: '5px', marginBottom: '3px' }} size='2x' />
                        <span>HaoxiangZhang@link.cuhk.edu.hk</span>
                    </span>

                    <span style={{ marginRight: '7vw' }} onClick={() => window.location = 'https://github.com/Gavin-OP'} >
                        <AiOutlineGithub style={{ color: 'black', marginLeft: '1rem', height: '25px', width: '25px', marginRight: '5px', marginBottom: '3px' }} size='2x' />
                        <span>https://github.com/Gavin-OP</span>
                    </span>
                    <span onClick={() => window.location = 'https://www.linkedin.com/in/gavin-zhang-op'}>
                        <AiFillLinkedin style={{ color: 'black', marginLeft: '1rem', height: '25px', width: '25px', marginRight: '5px', marginBottom: '3px' }} size='2x' />
                        <span>https://www.linkedin.com/in/gavin-zhang-op</span>
                    </span>
                </MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: "#dedede", color: 'grey' }}>
                    © 2022 Copyright: ZHANG Haoxiang
                </div>
            </MDBFooter>
        </>
    )
}

export default Footer;