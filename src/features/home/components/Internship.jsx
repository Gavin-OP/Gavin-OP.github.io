import { useMemo, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setInternshipIndex } from "../../../app/store/slices/homeSlice";
import "./Internship.scss";

const cardsData = [
  {
    id: 1,
    title: "01",
    company: "Polymer Capital",
    position: "Alpha Capture System Intern",
    details:
      "Python: .groupby(), .merge(), .assign()\nGit: git pull, git branch, git rebase\nDocker: docker image, docker run\n\nDatabase. Data preprocessing. Summary statistics. Alpha generation. Backtesting.",
    tools: [
      { category: "Python", items: ".groupby(), .merge(), .assign()" },
      { category: "Git", items: "git pull, git branch, git rebase" },
      { category: "Docker", items: "docker image, docker run" },
    ],
    summary:
      "Database. Data preprocessing. Summary statistics. Alpha generation. Backtesting.",
  },
  {
    id: 2,
    title: "02",
    company: "FutureX Capital",
    position: "Investment Research Intern",
    details:
      "Markdown: ##, -, **\nPowerPoint: ctrl+E, islide\nWord: ctrl+C, ctrl+V\n\nPitch desk, due diligence, and investment research.",
    tools: [
      { category: "Markdown", items: "##, -, **" },
      { category: "PowerPoint", items: "ctrl+E, islide" },
      { category: "Word", items: "ctrl+C, ctrl+V" },
    ],
    summary: "Pitch desk, due diligence, and investment research.",
  },
  {
    id: 3,
    title: "03",
    company: "Zhihu",
    position: "Business Development Intern",
    details:
      "SQL: SELECT *;\nR: read.csv()\nExcel: ctrl+C ctrl+V\n\nMonitored and analyzed operational data and generated weekly reports.",
    tools: [
      { category: "SQL", items: "SELECT *;" },
      { category: "R", items: "read.csv()" },
      { category: "Excel", items: "ctrl+C ctrl+V" },
    ],
    summary: "Monitored and analyzed operational data and generated weekly reports.",
  },
  {
    id: 4,
    title: "04",
    company: "PwC",
    position: "Summer Intern",
    details:
      "Bloomberg: F1 F1\nWord: ctrl+F\nExcel: ctrl+shift+L, ctrl+shift+> \n\nRetrieved financial data, validated the accuracy, and audited the risk.",
    tools: [
      { category: "Bloomberg", items: "F1 F1" },
      { category: "Word", items: "ctrl+F" },
      { category: "Excel", items: "ctrl+shift+L, ctrl+shift+>" },
    ],
    summary:
      "Retrieved financial data, validated the accuracy, and audited the risk.",
  },
];

const VISIBLE_CARDS = 3;

const Internship = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.home.internshipIndex);
  const [phoneCardIndex, setPhoneCardIndex] = useState(0);
  const cardsContainerRef = useRef(null);

  const maxIndex = useMemo(
    () => Math.max(cardsData.length - VISIBLE_CARDS, 0),
    [],
  );
  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const updateIndex = (nextIndex) => {
    dispatch(setInternshipIndex({ index: nextIndex, maxIndex }));
  };
  const handlePrev = () => {
    updateIndex(currentIndex - 1);
  };

  const handleNext = () => {
    updateIndex(currentIndex + 1);
  };

  const handleCardsScroll = () => {
    const container = cardsContainerRef.current;
    if (!container || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const cards = [...container.querySelectorAll(".internship__card")];
    const nearestCardIndex = cards.reduce(
      (nearestIndex, card, index) =>
        Math.abs(card.offsetLeft - container.scrollLeft) <
        Math.abs(cards[nearestIndex].offsetLeft - container.scrollLeft)
          ? index
          : nearestIndex,
      0,
    );

    setPhoneCardIndex((currentIndex) =>
      currentIndex === nearestCardIndex ? currentIndex : nearestCardIndex,
    );
  };

  return (
    <section id="internship" className="internship">
      <div className="internship__heading">
        <p>Explore my</p>
        <div className="internship__highlight">internship experiences</div>
      </div>

      <div
        ref={cardsContainerRef}
        className="internship__cards-container"
        onScroll={handleCardsScroll}
      >
        <div
          className="internship__cards-wrapper"
          style={{
            transform: `translateX(-${(currentIndex * 100) / VISIBLE_CARDS}%)`,
          }}
        >
          {cardsData.map((card) => (
            <article key={card.id} className="internship__card">
              <h1>{card.title}</h1>
              <h2>
                <span
                  className={`internship__company-name internship__company-name--${card.id}`}
                >
                  {card.company}
                </span>
                , <br />
                <span className="internship__position">{card.position}</span>
              </h2>

              <div className="internship__details">
                <p className="internship__desktop-details">{card.details}</p>
                <div className="internship__mobile-details">
                  <div className="internship__tools">
                    <div className="internship__tools-list">
                      {card.tools.map((tool) => (
                        <div key={tool.category} className="internship__tool-row">
                          <span className="internship__tool-badge">
                            {tool.category}
                          </span>
                          <span className="internship__tool-items">
                            {tool.items}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="internship__summary">{card.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="internship__button-container">
          <div
            className="internship__carousel-position"
            role="progressbar"
            aria-label="Internship carousel position"
            aria-valuemin={1}
            aria-valuemax={cardsData.length}
            aria-valuenow={phoneCardIndex + 1}
          >
          <div
            className="internship__carousel-position-track"
            aria-hidden="true"
          >
            <div
              className="internship__carousel-position-thumb"
              style={{
                width: `${100 / cardsData.length}%`,
                transform: `translateX(${phoneCardIndex * 100}%)`,
              }}
            />
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="internship__switch-button"
          disabled={isPrevDisabled}
          aria-label="Previous internship cards"
        >
          <SlArrowLeft />
        </button>

        <button
          onClick={handleNext}
          className="internship__switch-button"
          disabled={isNextDisabled}
          aria-label="Next internship cards"
        >
          <SlArrowRight />
        </button>
      </div>

      <div className="internship__divider"></div>
    </section>
  );
};

export default Internship;
