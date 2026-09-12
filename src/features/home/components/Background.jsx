import "./Background.scss";

const Background = () => {
  return (
    <section id="profile" className="profile-hero">
      <div className="profile-hero__spacer"></div>
      <div className="profile-hero__mobile-content">
        <div className="profile-hero__mobile-lockup" aria-label="Hi, this is OP.">
          <p className="profile-hero__mobile-hi">Hi,</p>
          <p className="profile-hero__mobile-name">
            This is <span>OP.</span>
          </p>
        </div>
        <p className="profile-hero__mobile-real-name">Gavin Zhang Haoxiang</p>
        <div className="profile-hero__mobile-intro">
          <p>
            I am a <span>Quantitative Finance and Risk Management</span>{" "}
            undergraduate at CUHK.
          </p>
          <p>Perfectly balanced. Aspire to be Quant.</p>
        </div>
      </div>
      <div className="profile-hero__content">
        <div className="profile-hero__identity">
          <h1>Gavin</h1>
          <h2>ZHANG Haoxiang</h2>
        </div>
        <div className="profile-hero__intro">
          <p className="profile-hero__tagline">Hi, this is OP.</p>
          <p>
            I am a <span>Quantitative Finance and Risk Management</span>{" "}
            undergraduate at CUHK.
          </p>
          <p>Perfectly balanced. Aspire to be Quant.</p>
        </div>
      </div>
      <div className="profile-hero__divider"></div>
    </section>
  );
};

export default Background;
