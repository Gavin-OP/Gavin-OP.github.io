import "../styles/Internship.css";
import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Internship = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = React.useState(true);
  const [isNextDisabled, setIsNextDisabled] = React.useState(false);
  const cardsWrapperRef = useRef(null);

  const cardsData = [
    {
      id: 1,
      title: "01",
      company: "Polymer Capital",
      position: "Alpha Capture System Intern",
      details:
        "Python: .groupby(), .merge(), .assign()\nGit: git pull, git branch, git rebase\nDocker: docker image, docker run\n\nDatabase. Data preprocessing. Summary statistics. Alpha generation. Backtesting.",
    },
    {
      id: 2,
      title: "02",
      company: "FutureX Capital",
      position: "Investment Research Intern",
      details:
        "Markdown: ##, -, **\nPowerPoint: ctrl+E, islide\nWord: ctrl+C, ctrl+V\n\nPitch desk, due dilligence, and investment research",
    },
    {
      id: 3,
      title: "03",
      company: "Zhihu",
      position: "Business Development Intern",
      details:
        "SQL: SELECT *;\nR: read.csv()\nExcel: ctrl+C ctrl+V\n\nMonitored and analyzed operational data and generated weekly reports.",
    },
    {
      id: 4,
      title: "04",
      company: "PwC",
      position: "Summer Intern",
      details:
        "Bloomberg: F1 F1\nWord: ctrl+F\nExcel: ctrl+shift+L, ctrl+shift+> \n\nRetrieved financial data, validated the accuracy, and audited the risk.",
    },
  ];

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
      const newIndex =
        prevIndex === cardsData.length - 3 ? prevIndex : prevIndex + 1;
      setIsNextDisabled(newIndex === cardsData.length - 3);
      setIsPrevDisabled(false);
      return newIndex;
    });
  };

  return (
    <section id="internship" className="internship-section">
      {/* gradient big sentence */}
      <div className="gradient-sentence">
        <p>Explore my</p>
        <div className="internship-highlight">internship experiences</div>
      </div>

      {/* internsihp card components */}
      <div className="internship-cards-container">
        <div
          className="internship-cards-wrapper"
          ref={cardsWrapperRef}
          style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        >
          {cardsData.map((card) => (
            <div key={card.id} className="internship-card">
              <h1>{card.title}</h1>
              <h2>
                <span className={`company-name${card.id}`}>{card.company}</span>
                , <br></br>{" "}
                <span style={{ fontSize: "25px" }}>{card.position}</span>
              </h2>

              <div className="internship-details">
                <p>{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Switch button */}
      <div className="button-container">
        <button
          onClick={handlePrev}
          className="internship-card-switch-button"
          disabled={isPrevDisabled}
        >
          <SlArrowLeft />
        </button>

        <button
          onClick={handleNext}
          className="internship-card-switch-button"
          disabled={isNextDisabled}
        >
          <SlArrowRight />
        </button>
      </div>

      {/* Gradient line */}
      <div className="gradient-line"></div>
    </section>
  );
};

export default Internship;
