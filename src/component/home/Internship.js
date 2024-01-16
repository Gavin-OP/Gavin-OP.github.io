import '../../css/Internship.css';
import React, { useEffect, useRef } from 'react';

const Internship = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.internship-card');
        let maxHeight = 0;

        cards.forEach(card => {
            const h1 = card.querySelector('h1');
            const h2 = card.querySelector('h2');

            const h1Height = h1.offsetHeight;
            const h2Height = h2.offsetHeight;

            maxHeight = Math.max(maxHeight, h1Height, h2Height);
        });

        cards.forEach(card => {
            const h1 = card.querySelector('h1');
            const h2 = card.querySelector('h2');

            h1.style.height = `${maxHeight}px`;
            h2.style.height = `${maxHeight}px`;
        });
    }, []);

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
                {/* Card 1 */}
                <div className="internship-card">
                    <h1>01</h1>
                    <h2><span className='company-name1'>Zhihu</span>, <br></br> Business Development Intern</h2>
                    <div className='internship-details'>
                        <p>SQL: SELECT *; <br></br>
                            R: read.csv(), <br></br>
                            Excel: ctrl+C ctrl+V.<br></br>
                            <br></br>
                            Monitored and analyzed operational data and generated weekly reports. </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="internship-card">
                    <h1>02</h1>
                    <h2><span className='company-name2'>PwC</span>, <br></br> Summer Intern</h2>
                    <div className='internship-details'>
                        <p>Bloomberg: F1 F1<br></br>
                            Word: ctrl+F<br></br>
                            Excel: ctrl+shift+L, ctrl+shift+><br></br>
                            <br></br>
                            Retrieved financial data, validated the accuracy, and audited the risk.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="internship-card">
                    <h1>03</h1>
                    <h2><span className='company-name3'>FutureX Capital</span>, <br></br> Investment Research Intern</h2>
                    <div className='internship-details'>
                        <p>Markdown: ##, -, **<br></br>
                            PowerPoint: ctrl+E, islide <br></br>
                            Word: ctrl+C, ctrl+V <br></br>
                            <br></br>
                            Pitch desk, due dilligence, and investment research reports.
                        </p>
                    </div>
                </div>
            </div>

            <div className="gradient-line"></div>
        </section>
    );
};

export default Internship;
