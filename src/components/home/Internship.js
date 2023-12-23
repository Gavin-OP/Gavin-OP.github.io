import React from 'react';
import '../../css/Internship.css';

const Internship = () => {
    return (
        <section className="internship-section">
            {/* Gradient big sentence */}
            <div className="gradient-sentence">
                <p>
                    Explore my
                </p>
                <div className='internship-highlight'>Internship Experience</div>
            </div>

            {/* Three 新拟态 dark card components */}
            <div className="internship-cards">
                {/* Card 1 */}
                <div className="internship-card">
                    <h1>01</h1>
                    <h2><span className='company-name1'>Zhihu</span>, <br></br> Business Development Intern</h2>
                    <p>Description of Internship 1</p>
                </div>

                {/* Card 2 */}
                <div className="internship-card">
                    <h1>02</h1>
                    <h2><span className='company-name2'>PwC</span>, <br></br> Summer Intern</h2>
                    <p>Description of Internship 2</p>
                </div>

                {/* Card 3 */}
                <div className="internship-card">
                    <h1>03</h1>
                    <h2><span className='company-name3'>FutureX Capital</span>, <br></br> Investment Research Intern</h2>
                    <p>Description of Internship 3</p>
                </div>
            </div>
        </section>
    );
};

export default Internship;
