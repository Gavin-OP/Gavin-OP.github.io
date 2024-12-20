import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import '../styles/Project.css';


const Project = () => {
    useEffect(() => {
        const setActive = function () {
            items.forEach((item) => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        };

        const items = document.querySelectorAll('.project-item');

        items.forEach((item) => {
            item.addEventListener('click', setActive);
        });

        return () => {
            items.forEach((item) => {
                item.removeEventListener('click', setActive);
            });
        };
    }, []); // Empty dependency array ensures this effect runs once after the initial render



    return (
        <section id='project' className="project-section">
            {/* gradient big sentence */}
            <div className="gradient-sentence">
                <p>Explore my</p>
                <div className='project-highlight'>best projects</div>
            </div>


            {/* project card */}
            <div className="project-cards-container">
                <div className='project-cards-wrapper'>

                    {/* project 1 */}
                    <div className="project-item active" id='project-wechat-analysis'>
                        <div className="project-content">
                            {/* content in inactive state */}
                            <p className='project-small-detail1'>
                                WeChat<br></br>Usage<br></br>Annual<br></br>Report
                            </p>

                            {/* project detail */}
                            <div className='project-detail1'>
                                <p className='project-active-detail1'>Calculate sentimental score by <span style={{ color: 'white' }}>SnowNLP</span> to analyze emotion<br></br>
                                    contained in WeChat messages daily.
                                    <br></br>
                                    <br></br>
                                    So, is it a happy day or a sad day?
                                </p>

                                <div className='project-image-container' id='project-image-container1'>
                                    <div className="project-image" id='project-image1'>
                                        <img src={process.env.PUBLIC_URL + '/image/sentiment_score_daily.png'} alt="sentiment score daily" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="project-icons">
                            {/* <button className="code-button"><FontAwesomeIcon icon={faCode} /></button> */}
                            <a href="/#/20240109">
                                <button className="slide-button"><FontAwesomeIcon icon={faImages} /></button>
                            </a>
                        </div>

                    </div>



                    {/* project 2 */}
                    <div className="project-item">
                        <div className="project-content">
                            {/* content in inactive state */}
                            <p className='project-small-detail3'>
                                Stock<br></br>Price<br></br>Prediction
                            </p>

                            {/* project detail */}
                            <div className='project-detail3'>
                                <p className='project-active-detail3'>Use <span style={{ color: 'white' }}>CNN, LSTM, and ARIMA </span>to predict Tesla stock prices.
                                    <br></br>
                                    Prediction? or Classification? or B.........
                                    <br></br>
                                </p>

                                <div className='project-image-container' id='project-image-container3'>
                                    <div className="project-image" id='project-image3'>
                                        <img src={process.env.PUBLIC_URL + '/image/price.png'} alt="TASLA price prediction" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="project-icons">
                            <a href="https://github.com/Gavin-OP/stat4012-group-project">
                                <button className="github-button"><FontAwesomeIcon icon={faGithub} /></button>
                            </a>
                            <a href="/#/stat4012-cnn-lstm">
                                <button className="pdf-button" ><FontAwesomeIcon icon={faFilePdf} /></button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};


export default Project;


