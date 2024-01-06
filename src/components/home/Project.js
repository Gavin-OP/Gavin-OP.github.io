import React, { useEffect } from 'react';
import '../../css/Project.css';


// const ProjectCard = ({ projectImage, iconClass, title }) => (
//     <div className="project-item">
//         <div className="shadow"></div>
//         <div className="content">
//             <div className="icon">
//                 <i className={`iconfont ${iconClass}`}></i>
//             </div>
//             <div className="text">
//                 <div className="tit">{title}</div>
//             </div>
//         </div>
//     </div>
// );

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
            <div className="gradient-sentence">
                <p>Explore my</p>
                <div className='project-highlight'>best projects</div>
            </div>

            <div className="projectcard-container">
                <div className="project-item" id='project-wechat-analysis'>
                    <div className="project-content">
                        {/* project image */}
                        {/* <div className='project-image-container' id>
                            <div className="project-image">
                                <img src={process.env.PUBLIC_URL + '/image/wechat_analysis_backgroud.png'} alt="Project 1 Wechat Analysis" />
                            </div>
                        </div> */}

                        {/* project detail */}
                        <div className='project-detail-1'>
                            <p className='project-small-detail1'>WeChat Usage Annual Report</p>
                        </div>

                    </div>
                </div>


                {/* <div className="project-item">
                    <div className="project-content">
                        <div className='project-image-container'>
                            <div className="project-image">
                                <img src={process.env.PUBLIC_URL + '/image/Stock_Portfolio.png'} alt="Project Image" />
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="project-item">
                    <p className='project-small-detail3'>Stock<br></br>Price<br></br>Prediction</p>
                    <div className="project-content">
                        <div className='project-detail-3'>
                            <p className='project-active-detail3'>Use <span style={{ color: 'white' }}>CNN, LSTM, and ARIMA </span>to predict Tesla stock prices.
                                <br></br>
                                Prediction? or Classification? or B.........
                                <br></br>

                            </p>
                        </div>
                        <div className='project-image-container' id='project-image-container3'>
                            <div className="project-image" id='project-image3'>
                                <img src={process.env.PUBLIC_URL + '/image/price.png'} alt="Project Image" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};


export default Project;
