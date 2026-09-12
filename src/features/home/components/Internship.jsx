import { useMemo } from "react";
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
    tools: ["Python: .groupby()", ".merge()", ".assign()", "git rebase", "docker run"],
    summary:
      "Database. Data preprocessing. Summary statistics. Alpha generation. Backtesting.",
  },
  {
    id: 2,
    title: "02",
    company: "FutureX Capital",
    position: "Investment Research Intern",
    tools: ["Markdown: ##", "-", "**", "ctrl+E", "ctrl+C / ctrl+V"],
    summary: "Pitch desk, due diligence, and investment research.",
  },
  {
    id: 3,
    title: "03",
    company: "Zhihu",
    position: "Business Development Intern",
    tools: ["SQL: SELECT *", "R: read.csv()", "ctrl+C / ctrl+V"],
    summary: "Monitored and analyzed operational data and generated weekly reports.",
  },
  {
    id: 4,
    title: "04",
    company: "PwC",
    position: "Summer Intern",
    tools: ["Bloomberg: F1 F1", "ctrl+F", "ctrl+shift+L", "ctrl+shift+>"],
    summary:
      "Retrieved financial data, validated the accuracy, and audited the risk.",
  },
];

const VISIBLE_CARDS = 3;

const Internship = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.home.internshipIndex);

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

  return (
    <section id="internship" className="internship">
      <div className="internship__heading">
        <p>Explore my</p>
        <div className="internship__highlight">internship experiences</div>
      </div>

      <div className="internship__cards-container">
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
                <div className="internship__tools">
                  <p className="internship__tools-label">Tools I survived</p>
                  <div className="internship__tools-list">
                    {card.tools.map((tool) => (
                      <span key={tool} className="internship__tool">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="internship__summary">{card.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="internship__button-container">
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
