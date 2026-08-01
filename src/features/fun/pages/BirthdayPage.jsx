import { Link } from "react-router-dom";
import "./BirthdayPage.scss";

const reportImages = [
  "/image/20240109/01.png",
  "/image/20240109/02.png",
  "/image/20240109/03.png",
  "/image/20240109/04.png",
  "/image/20240109/05.png",
];

const BirthdayPage = () => {
  return (
    <main className="birthday-page">
      <header className="birthday-page__header">
        <p className="birthday-page__eyebrow">WeChat Analysis</p>
        <h1 className="birthday-page__title">2023 Annual Report</h1>
        <Link to="/" className="birthday-page__back-link">
          Back to Home
        </Link>
      </header>

      <section className="birthday-page__gallery" aria-label="Annual report slides">
        {reportImages.map((src, index) => (
          <figure key={src} className="birthday-page__slide">
            <img
              src={src}
              alt={`WeChat analysis annual report slide ${index + 1}`}
              loading="lazy"
            />
          </figure>
        ))}
      </section>
    </main>
  );
};

export default BirthdayPage;
