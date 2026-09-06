import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveProjectId } from "../../../app/store/slices/homeSlice";
import "./Project.scss";

const projects = [
  {
    id: "wechat-analysis",
    title: "WeChat\nUsage\nAnnual\nReport",
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
    imageSrc: "/image/sentiment_score_daily.png",
    imageAlt: "sentiment score daily",
    backgroundImage: "/image/wechat_analysis_backgroud.png",
    actions: [
      {
        href: "/20240109",
        icon: faImages,
        className: "project-showcase__action-button project-showcase__action-button--slide",
        ariaLabel: "Open project image",
      },
    ],
  },
  {
    id: "stock-prediction",
    title: "Stock\nPrice\nPrediction",
    description: (
      <>
        Use <span>CNN, LSTM, and ARIMA </span>to predict Tesla stock prices.
        <br />
        Prediction? or Classification? or B.........
        <br />
      </>
    ),
    imageSrc: "/image/price.png",
    imageAlt: "Tesla price prediction",
    actions: [
      {
        href: "https://github.com/Gavin-OP/stat4012-group-project",
        icon: faGithub,
        className: "project-showcase__action-button project-showcase__action-button--github",
        ariaLabel: "Open GitHub repository",
        external: true,
      },
      {
        href: "/file/Stock_Return_Prediction_with_CNN_and_Attention_based_LSTM_models.pdf",
        icon: faFilePdf,
        className: "project-showcase__action-button project-showcase__action-button--pdf",
        ariaLabel: "Open project PDF",
      },
    ],
  },
];

const Project = () => {
  const dispatch = useDispatch();
  const activeProjectId = useSelector((state) => state.home.activeProjectId);
  const cardsContainerRef = useRef(null);
  const projectRefs = useRef(new Map());
  const activeProjectIndex = Math.max(
    projects.findIndex((project) => project.id === activeProjectId),
    0,
  );
  const showGalleryControls = projects.length > 2;

  const selectProject = (projectId) => {
    if (projectId !== activeProjectId) {
      dispatch(setActiveProjectId(projectId));
    }
  };

  const selectProjectAtIndex = (index) => {
    const project = projects[index];
    if (project) {
      selectProject(project.id);
    }
  };

  useEffect(() => {
    if (!showGalleryControls) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      const container = cardsContainerRef.current;
      const activeProject = projectRefs.current.get(activeProjectId);
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (container && activeProject) {
        container.scrollTo({
          left: activeProject.offsetLeft,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeProjectId, showGalleryControls]);

  return (
    <section id="project" className="project-showcase">
      <div className="project-showcase__heading">
        <p>Explore my</p>
        <div className="project-showcase__highlight">best projects</div>
      </div>

      <div
        ref={cardsContainerRef}
        className="project-showcase__cards-container"
      >
        <div className="project-showcase__cards-wrapper">
          {projects.map((project) => {
            const isActive = activeProjectId === project.id;
            return (
              <article
                key={project.id}
                ref={(element) => {
                  if (element) {
                    projectRefs.current.set(project.id, element);
                  } else {
                    projectRefs.current.delete(project.id);
                  }
                }}
                className={`project-showcase__item project-showcase__item--${project.id} ${isActive ? "project-showcase__item--active" : ""}`}
                onClick={() => selectProject(project.id)}
                onKeyDown={(event) => {
                  if (
                    !isActive &&
                    (event.key === "Enter" || event.key === " ")
                  ) {
                    event.preventDefault();
                    selectProject(project.id);
                  }
                }}
                role={isActive ? undefined : "button"}
                tabIndex={isActive ? undefined : 0}
                aria-label={isActive ? undefined : `Open ${project.title.replaceAll("\n", " ")}`}
                style={
                  project.backgroundImage
                    ? { backgroundImage: `url(${project.backgroundImage})` }
                    : undefined
                }
              >
                {project.backgroundImage ? (
                  <div className="project-showcase__overlay"></div>
                ) : null}

                <div className="project-showcase__content">
                  <p className="project-showcase__small-detail">
                    {project.title.split("\n").map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>

                  <div className="project-showcase__detail">
                    <p className="project-showcase__active-detail">
                      {project.description}
                    </p>

                    <div className="project-showcase__image-container">
                      <div
                        className={`project-showcase__image project-showcase__image--${project.id}`}
                      >
                        <img src={project.imageSrc} alt={project.imageAlt} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="project-showcase__icons"
                  aria-hidden={!isActive}
                >
                  {project.actions.map((action) => (
                    <a
                      key={action.href}
                      href={action.href}
                      className={action.className}
                      aria-label={action.ariaLabel}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      tabIndex={isActive ? 0 : -1}
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

      {showGalleryControls ? (
        <div
          className="project-showcase__controls"
          aria-label="Project gallery controls"
        >
          <button
            type="button"
            className="project-showcase__control"
            aria-label="Previous project"
            disabled={activeProjectIndex === 0}
            onClick={() => selectProjectAtIndex(activeProjectIndex - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            className="project-showcase__control"
            aria-label="Next project"
            disabled={activeProjectIndex === projects.length - 1}
            onClick={() => selectProjectAtIndex(activeProjectIndex + 1)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default Project;
