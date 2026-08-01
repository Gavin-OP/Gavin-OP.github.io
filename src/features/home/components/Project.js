import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import '../styles/Project.css';


const Project = () => {
    const [activeProjectId, setActiveProjectId] = React.useState('wechat-analysis');

    const projects = [
        {
            id: 'wechat-analysis',
            title: 'WeChat\nUsage\nAnnual\nReport',
            description: (
                <>
                    Calculate sentimental score by <span>SnowNLP</span> to analyze emotion
                    <br />
                    contained in WeChat messages daily.
                    <br />
                    <br />
                    So, is it a happy day or a sad day?
                </>
            ),
            image: '/image/sentiment_score_daily.png',
            imageAlt: 'sentiment score daily',
            backgroundImage: '/image/wechat_analysis_backgroud.png',
            actions: [
                {
                    href: '/#/20240109',
                    icon: faImages,
                    className: 'project-action project-action--slide',
                    ariaLabel: 'Open project image'
                }
            ]
        },
        {
            id: 'stock-prediction',
            title: 'Stock\nPrice\nPrediction',
            description: (
                <>
                    Use <span>CNN, LSTM, and ARIMA</span> to predict Tesla stock prices.
                    <br />
                    Prediction? or Classification? or B.........
                    <br />
                </>
            ),
            image: '/image/price.png',
            imageAlt: 'Tesla price prediction',
            actions: [
                {
                    href: 'https://github.com/Gavin-OP/stat4012-group-project',
                    icon: faGithub,
                    className: 'project-action project-action--github',
                    ariaLabel: 'Open GitHub repository',
                    external: true
                },
                {
                    href: '/#/stat4012-cnn-lstm',
                    icon: faFilePdf,
                    className: 'project-action project-action--pdf',
                    ariaLabel: 'Open project PDF'
                }
            ]
        }
    ];



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
                    {projects.map((project) => {
                        const isActive = activeProjectId === project.id;

                        return (
                            <article
                                key={project.id}
                                className={`project-item ${isActive ? 'project-item--active' : ''}`}
                                id={project.id === 'wechat-analysis' ? 'project-wechat-analysis' : undefined}
                                onClick={() => setActiveProjectId(project.id)}
                                onMouseEnter={() => setActiveProjectId(project.id)}
                                style={
                                    project.backgroundImage
                                        ? { backgroundImage: `url(${process.env.PUBLIC_URL}${project.backgroundImage})` }
                                        : undefined
                                }
                            >
                                {project.backgroundImage ? <div className="project-overlay"></div> : null}

                                <div className="project-content">
                                    <p className='project-small-detail'>
                                        {project.title.split('\n').map((line) => (
                                            <span key={line}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>

                                    <div className='project-detail'>
                                        <p className='project-active-detail'>{project.description}</p>

                                        <div className='project-image-container'>
                                            <div className={`project-image ${project.id === 'wechat-analysis' ? 'project-image--wechat' : 'project-image--stock'}`}>
                                                <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.imageAlt} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-icons">
                                    {project.actions.map((action) => (
                                        <a
                                            key={action.href}
                                            href={action.href}
                                            className={action.className}
                                            aria-label={action.ariaLabel}
                                            target={action.external ? '_blank' : undefined}
                                            rel={action.external ? 'noreferrer' : undefined}
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            <FontAwesomeIcon icon={action.icon} />
                                        </a>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section >
    );
};


export default Project;

