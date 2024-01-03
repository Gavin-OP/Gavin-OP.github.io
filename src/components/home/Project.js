import React, { useEffect } from 'react';
import '../../css/Project.css';


const ProjectCard = ({ projectImage, iconClass, title }) => (
    <div className="project-item">
        {/* <div className="shadow"></div> */}
        <div className="content">
            <div className="icon">
                <i className={`iconfont ${iconClass}`}></i>
            </div>
            <div className="text">
                <div className="tit">{title}</div>
            </div>
        </div>
    </div>
);

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
                <div className="project-item">
                    {/* <div className="shadow"></div> */}
                    <div className="content">
                        {/* <div className="icon">
                            <i className={`iconfont ${iconClass}`}></i>
                        </div> */}
                        {/* <div className="text">
                            <div className="tit">{title}</div>
                        </div> */}

                        {/* project image */}
                        <div className='project--image-container'>
                            <div className="project-image">
                                <img src={process.env.PUBLIC_URL + '/image/NKY_BS_IV_Surface.png'} alt="Project Image" />
                            </div>
                        </div>

                        {/* Tweet content and action buttons */}
                        {/* <div className='tweet-text-container' >
                            <div className="tweet-text" onClick={handleOpen}>{props.tweetText}</div>
                            <div className="tweet-actions">
                                <button className="like-button" style={{ color: state.likeLight }} onClick={handleLike}><FontAwesomeIcon icon={faHeart} /></button>
                                <div className="action-number">{props.likeCount}</div>
                                <button className="dislike-button" style={{ color: state.dislikeLight }} onClick={handleDislike}><FontAwesomeIcon icon={faHeartBroken} /></button>
                                <div className="action-number">{ }</div>
                                <button className="favorite-button" style={{ color: state.starLight }} onClick={handleStar}><FontAwesomeIcon icon={faStar} /></button>
                                <div className="action-number">{ }</div>
                                <button className="comment-button" style={{ color: state.commentLight }} onClick={toggleCommentInput}><FontAwesomeIcon icon={faComment} /></button>
                                <div className="action-number">{props.commentCount}</div>
                                <button className="retweet-button" onClick={handleRetweetBtn}><FontAwesomeIcon icon={faShare} /></button>
                            </div>
                        </div> */}
                    </div>
                </div>


                <div className="project-item">
                    {/* <div className="shadow"></div> */}
                    <div className="content">
                        <div className='project--image-container'>
                            <div className="project-image">
                                <img src={process.env.PUBLIC_URL + '/image/huizhou_sunset.jpg'} alt="Project Image" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="project-item">
                    {/* <div className="shadow"></div> */}
                    <div className="content">
                        <div className='project--image-container'>
                            <div className="project-image">
                                <img src={process.env.PUBLIC_URL + '/image/Capilano_Suspension_Bridge.jpg'} alt="Project Image" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* 
                <ProjectCard backgroundImage="../../public/image/Capilano_Suspension_Bridge.jpg" iconClass="icon-yangguang" title="Sunshine" />
                <ProjectCard backgroundImage="../../public/image/Capilano_Suspension_Bridge.jpg" iconClass="icon-yangguang" title="Sunshine" />
                <ProjectCard backgroundImage="../../public/image/Capilano_Suspension_Bridge.jpg" iconClass="icon-yangguang" title="Sunshine" />
                <ProjectCard backgroundImage="../../public/image/Capilano_Suspension_Bridge.jpg" iconClass="icon-yangguang" title="Sunshine" />
                <ProjectCard backgroundImage="../../public/image/Capilano_Suspension_Bridge.jpg" iconClass="icon-yangguang" title="Sunshine" /> */}
            </div>
        </section>
    );
};


export default Project;
