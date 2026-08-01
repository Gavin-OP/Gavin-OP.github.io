import '../styles/Internship.css';
import React, { useEffect, useMemo } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const getVisibleCards = () => {
    if (window.innerWidth < 768) {
        return 1;
    }

    if (window.innerWidth < 1180) {
        return 2;
    }

    return 3;
};

const Internship = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [visibleCards, setVisibleCards] = React.useState(getVisibleCards);

    const cardsData = [
        {
            id: 1, 
            title: "01", 
            company: "Polymer Capital",
            position: "Alpha Capture System Intern",
            details: "Python: .groupby(), .merge(), .assign()\nGit: git pull, git branch, git rebase\nDocker: docker image, docker run\n\nDatabase. Data preprocessing. Summary statistics. Alpha generation. Backtesting."
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

    const maxIndex = useMemo(
        () => Math.max(cardsData.length - visibleCards, 0),
        [cardsData.length, visibleCards]
    );

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex, maxIndex));
    }, [maxIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };



    return (
        <section id='internship' className="internship-section">
            {/* gradient big sentence */}
            <div className="gradient-sentence">
                <p>Explore my</p>
                <div className='internship-highlight'>internship experiences</div>
            </div>


            {/* internsihp card components */}
            <div className="internship-cards-container">
                <div
                    className='internship-cards-wrapper'
                    style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}
                >
                {cardsData.map((card) => (
                    <div key={card.id} className='internship-card'>
                        <h1>{card.title}</h1>
                        <h2>
                            <span className={`company-name${card.id}`}>{card.company}</span>
                            , <br></br>
                            <span className="internship-position">{card.position}</span>
                        </h2>

                        <div className='internship-details'>
                            <p>{card.details}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>


            {/* Switch button */}
            <div className='button-container'>
                <button 
                onClick={handlePrev} 
                className='internship-card-switch-button' 
                disabled={currentIndex <= 0}
                aria-label="Previous internship cards"
                >
                    <SlArrowLeft/>
                </button>

                <button 
                onClick={handleNext} 
                className='internship-card-switch-button' 
                disabled={currentIndex >= maxIndex}
                aria-label="Next internship cards"
                >
                    <SlArrowRight/>
                </button>
            </div>


            {/* Gradient line */}
            <div className="gradient-line"></div>
        </section>
    );
};

export default Internship;
