import { useEffect, useState } from "react";

import { gsap } from "gsap";

import classNames from "classnames";

import "./index.scss";

function Navigation({ links }) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sectionsElements = document.querySelectorAll("div[id]");

    window.addEventListener("scroll", () => {
      const wTop = window?.pageYOffset;

      sectionsElements?.forEach((section) => {
        if (wTop + 100 > section?.offsetTop) setCurrentSection(section?.id);
      });
    });
  }, []);

  function onMouseOver({ currentTarget }) {
    const timeline = gsap.timeline();

    timeline
      .to(currentTarget, {
        yPercent: -40,
        duration: 0.4,
      })
      .to(currentTarget, {
        yPercent: 0,
        duration: 0.4,
      });
  }

  return (
    <div className="Navigation">
      <ul>
        {links.map(({ label, href }) => (
          <li
            className={classNames("Navigation__link", {
              "is-active": currentSection === href.split("#")[1],
            })}
            key={href}
          >
            <a href={href}>
              {label.split("").map((letter, index) => (
                <div key={letter + index} onMouseEnter={onMouseOver}>
                  {letter}
                </div>
              ))}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
