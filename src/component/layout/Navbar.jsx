import React, { useEffect, useState, useCallback } from "react";
import "../styles/Navbar.css";

function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 15);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={visible ? "visible" : "hidden"}>
      <ul>
        <li>
          <button
            className="navBarLink"
            onClick={() => scrollToAnchor("profile")}
          >
            Profile
          </button>
        </li>
        <li>
          <button
            className="navBarLink"
            onClick={() => scrollToAnchor("internship")}
          >
            Internship
          </button>
        </li>
        <li>
          <button
            className="navBarLink"
            onClick={() => scrollToAnchor("project")}
          >
            Project
          </button>
        </li>
        <li>
          <button
            className="navBarLink"
            onClick={() => scrollToAnchor("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
