import React from 'react';
import '../../css/Header.css'; // Create a new CSS file for styling the Header

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-text-container">
                <div className="left-content">
                    <h1>Gavin</h1>
                    <h2>ZHANG Haoxiang</h2>
                </div>
                <div className="right-content">
                    <p className="OP">Hi, this is OP.</p>
                    <p>
                        I am a <span>Quantitative Finance and Risk Management</span> student at CUHK.
                    </p>
                    <p>
                        Perfectly balanced. Aspire to explore. 
                    </p>
                </div>
            </div>
            <div className="gradient-line"></div>
        </header>
    );
};

export default Header;
