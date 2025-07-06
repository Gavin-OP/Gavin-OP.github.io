import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";

// Footer.js
function Footer() {
  const handleIconHover = (e) => {
    e.currentTarget.style.color = "#dbdbdb";
    e.currentTarget.style.cursor = "pointer";
  };

  const handleIconLeave = (e) => {
    e.currentTarget.style.color = "#86868b";
    e.currentTarget.style.cursor = "default";
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content-container">
        <div className="footer-contact">
          {/* Contact information or any other relevant details */}
          <ul>
            <li>
              <span
                onClick={() =>
                  (window.location.href =
                    "mailto:HaoxiangZhang@link.cuhk.edu.hk")
                }
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
              >
                <HiOutlineMail size={25} />
                <span>HaoxiangZhang@link.cuhk.edu.hk</span>
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  (window.location.href = "https://github.com/Gavin-OP")
                }
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
              >
                <AiOutlineGithub size={25} />
                <span>https://github.com/Gavin-OP</span>
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/gavin-zhang-op")
                }
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
              >
                <AiFillLinkedin size={25} />
                <span>https://www.linkedin.com/in/gavin-zhang-op</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2022-2024 ZHANG Haoxiang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
