import React from 'react';
import '../../css/Header.css'; // Create a new CSS file for styling the Header

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-text-container">
                <div className="left-content">
                    <h1>ZHANG Haoxiang</h1>
                </div>
                <div className="right-content">
                    <p className="OP">Hi, this is OP.</p>
                    <p>
                        I am <span>BSc. in Quantitative Finance and Risk Management</span> student at CUHK.
                    </p>
                </div>
            </div>
            <div className="gradient-line"></div>
        </header>
    );
};

export default Header;
