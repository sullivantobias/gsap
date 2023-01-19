import { gsap } from "gsap";

import "./index.scss";

function Navigation({ links }) {
  function onMouseOver({ currentTarget }) {
    const timeline = gsap.timeline();

    timeline
      .to(currentTarget, {
        yPercent: -40,
        duration: 0.4,
        color: "#fcd535",
      })
      .to(currentTarget, {
        yPercent: 0,
        duration: 0.4,
        color: "#fff",
      });
  }

  return (
    <div className="Navigation">
      <ul>
        {links.map(({ label, href }) => (
          <li className="Navigation__link" key={href}>
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
