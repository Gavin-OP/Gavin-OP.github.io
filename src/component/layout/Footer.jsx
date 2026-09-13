import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  const contacts = [
    {
      id: "email",
      icon: <HiOutlineMail size={25} />,
      label: "HaoxiangZhang@link.cuhk.edu.hk",
      mobileLabel: "HaoxiangZhang@link...",
      href: "mailto:HaoxiangZhang@link.cuhk.edu.hk",
    },
    {
      id: "github",
      icon: <AiOutlineGithub size={25} />,
      label: "https://github.com/Gavin-OP",
      mobileLabel: "@Gavin-OP",
      href: "https://github.com/Gavin-OP",
    },
    {
      id: "linkedin",
      icon: <AiFillLinkedin size={25} />,
      label: "https://www.linkedin.com/in/gavin-zhang-op",
      mobileLabel: "/gavin-zhang-op",
      href: "https://www.linkedin.com/in/gavin-zhang-op",
    },
  ];
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__mobile-signoff">
        <p>
          Perfectly
          <br />
          <span>balanced.</span>
        </p>
        <p>Hi, this is OP.</p>
      </div>
      <div className="site-footer__content">
        <div className="site-footer__contact">
          <ul className="site-footer__list">
            {contacts.map((contact) => (
              <li key={contact.id} className="site-footer__item">
                <a
                  className="site-footer__link"
                  href={contact.href}
                  target={contact.id === "email" ? undefined : "_blank"}
                  rel={contact.id === "email" ? undefined : "noreferrer"}
                >
                  <span className="site-footer__desktop-contact">
                    {contact.icon}
                    <span>{contact.label}</span>
                  </span>
                  <span className="site-footer__mobile-contact">
                    <strong>{contact.id}</strong>
                    <span>{contact.mobileLabel}</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p className="site-footer__copyright">
          &copy; 2022&ndash;{currentYear} ZHANG Haoxiang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
