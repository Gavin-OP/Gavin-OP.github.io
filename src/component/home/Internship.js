import '../../css/Internship.css';
import React, { useEffect, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Internship = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPrevDisabled, setIsPrevDisabled] = React.useState(true);
    const [isNextDisabled, setIsNextDisabled] = React.useState(false);
    const cardsRef = useRef([]);

    const cardsData = [
        {
            id: 1, 
            title: "01", 
            company: "Polymer Capital",
            position: "Alpha Capture System Intern",
            details: "Python: .groupby(), .merge(), .assign()\nDocker: docker iamge, docker run\nGit: git pull, git branch, git rebase\n\nDatabase. Data preprocessing. Summary statistics. Alpha generation. Backtesting. "
        },
        {
            id: 2, 
            title: "02", 
            company: "FutureX Capital",
            position: "Investment Research Intern",
            details: "Markdown: ##, -, **\nPowerPoint: ctrl+E, islide\nWord: ctrl+C, ctrl+V\n\nPitch desk, due dilligence, and investment research"
        },
        {
            id: 3, 
            title: "03", 
            company: "Zhihu",
            position: "Business Development Intern",
            details: "SQL: SELECT *;\nR: read.csv()\nExcel: ctrl+C ctrl+V\n\nMonitored and analyzed operational data and generated weekly reports."
        },
        {
            id: 4, 
            title: "04", 
            company: "PwC",
            position: "Summer Intern",
            details: "Bloomberg: F1 F1\nWord: ctrl+F\nExcel: ctrl+shift+L, ctrl+shift+> \n\nRetrieved financial data, validated the accuracy, and audited the risk."
        },
    ]

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? 0 : prevIndex - 1;
            setIsPrevDisabled(newIndex === 0);
            setIsNextDisabled(false);
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === cardsData.length - 3 ? prevIndex : prevIndex + 1;
            setIsNextDisabled(newIndex === cardsData.length - 3);
            setIsPrevDisabled(false);
            return newIndex; 
        });
    };

    const getVisibleCards = () => {
        const endIndex = currentIndex + 3;
        if (endIndex <= cardsData.length) {
            return cardsData.slice(currentIndex, endIndex);
        } else {
            return [...cardsData.slice(currentIndex), ...cardsData.slice(0, endIndex - cardsData.length)];
        }
    }

    return (
        <section id='internship' className="internship-section">
            {/* Gradient big sentence */}
            <div className="gradient-sentence">
                <p>
                    Explore my
                </p>
                <div className='internship-highlight'>internship experiences</div>
            </div>

            {/* Three 新拟态 dark card components */}
            <div className="internship-cards">
                {getVisibleCards().map((card, index) => (
                    <div key={card.id} className='internship-card' ref={el => cardsRef.current[index] = el}>
                        <h1>{card.title}</h1>
                        <h2 ><span className={`company-name${card.id}`}>{card.company}</span>, <br></br> {card.position}</h2>

                        <div className='internship-details'>
                            <p>{card.details}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Switch button */}
            <div className='button-container'>
                <button 
                onClick={handlePrev} 
                className='internship-card-switch-button' 
                disabled={isPrevDisabled}>
                    <SlArrowLeft/>
                </button>

                <button 
                onClick={handleNext} 
                className='internship-card-switch-button' 
                disabled={isNextDisabled}>
                    <SlArrowRight/>
                </button>
            </div>

            <div className="gradient-line"></div>
        </section>
    );
};

export default Internship;
