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
                    <p>
                        Welcome to my personal website. I am passionate about web development and creating meaningful user experiences.
                    </p>
                </div>
            </div>
            <div className="gradient-line"></div>
        </header>
    );
};

export default Header;
