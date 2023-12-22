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
                    <h2>Internship 1</h2>
                    <p>Description of Internship 1</p>
                </div>

                {/* Card 2 */}
                <div className="internship-card">
                    <h2>Internship 2</h2>
                    <p>Description of Internship 2</p>
                </div>

                {/* Card 3 */}
                <div className="internship-card">
                    <h2>Internship 3</h2>
                    <p>Description of Internship 3</p>
                </div>
            </div>
        </section>
    );
};

export default Internship;
