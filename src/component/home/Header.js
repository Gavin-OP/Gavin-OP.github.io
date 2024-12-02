import React from 'react';
import '../../css/Header.css'; // Create a new CSS file for styling the Header

const Header = () => {
    console.log('Header.js is renderingadfsafsafas')
    return (
        <section id='profile' className="header-container">
            <div className='spaceholder'></div>
            <div className="header-text-container">
                <div className="left-content">
                    <h1>Gavin</h1>
                    <h2>ZHANG Haoxiang</h2>
                </div>
                <div className="right-content">
                    <p className="OP">Hi, this is OP.</p>
                    <p>
                        I am a <span>Quantitative Finance and Risk Management</span> undergraduate at CUHK.
                    </p>
                    <p>
                        Perfectly balanced. Aspire to be Quant.
                    </p>
                </div>
            </div>
            <div class="arrow-container">
                <span class="arrow"></span>
                <span className="gradient-line"></span>
            </div>
            <div className="gradient-circle"></div>
            <div className="gradient-line"></div>
        </section>
    );
};

export default Header;
