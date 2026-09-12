import { useEffect, useRef, useState } from "react";
import "./Navbar.scss";

const SCROLL_THRESHOLD = 14;
const TOP_THRESHOLD = 8;
const navItems = [
  { label: "Profile", target: "profile" },
  { label: "Internship", mobileLabel: "Intern", target: "internship" },
  { label: "Project", target: "project" },
  { label: "Contact", target: "contact" },
];

function Navigation() {
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeTarget, setActiveTarget] = useState("profile");
  const scrollState = useRef({
    lastPosition: 0,
    accumulatedDistance: 0,
    direction: null,
    animationFrame: null,
  });

  useEffect(() => {
    const state = scrollState.current;
    state.lastPosition = window.scrollY;

    const updateNavigation = () => {
      const currentPosition = Math.max(window.scrollY, 0);
      const atTop = currentPosition <= TOP_THRESHOLD;
      const delta = currentPosition - state.lastPosition;

      setIsAtTop(atTop);

      if (atTop) {
        state.accumulatedDistance = 0;
        state.direction = null;
        setVisible(true);
      } else if (delta !== 0) {
        const direction = delta > 0 ? "down" : "up";

        if (direction !== state.direction) {
          state.direction = direction;
          state.accumulatedDistance = 0;
        }

        state.accumulatedDistance += Math.abs(delta);

        if (state.accumulatedDistance >= SCROLL_THRESHOLD) {
          setVisible(direction === "up");
          state.accumulatedDistance = 0;
        }
      }

      state.lastPosition = currentPosition;
      state.animationFrame = null;
    };

    const handleScroll = () => {
      if (state.animationFrame !== null) {
        return;
      }

      state.animationFrame = window.requestAnimationFrame(updateNavigation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (state.animationFrame !== null) {
        window.cancelAnimationFrame(state.animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveTarget(visibleSection.target.id);
        }
      },
      { rootMargin: "-20% 0px -55%", threshold: [0.1, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const targetId = window.location.hash.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }

    window.requestAnimationFrame(() => {
      targetElement.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }, []);

  const scrollToAnchor = (anchorName) => {
    if (!anchorName) {
      return;
    }

    const anchorElement = document.getElementById(anchorName);
    if (!anchorElement) {
      return;
    }

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#${anchorName}`,
    );
    anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <nav
      className={[
        "site-nav",
        visible ? "site-nav--visible" : "site-nav--hidden",
        isAtTop ? "site-nav--at-top" : "site-nav--scrolled",
      ].join(" ")}
      aria-label="Primary"
    >
      <ul className="site-nav__list">
        {navItems.map((item) => (
          <li key={item.target} className="site-nav__item">
            <button
              className={`site-nav__link ${activeTarget === item.target ? "site-nav__link--active" : ""}`}
              onClick={() => scrollToAnchor(item.target)}
            >
              <span className="site-nav__desktop-label">{item.label}</span>
              <span className="site-nav__mobile-label">
                {item.mobileLabel || item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
