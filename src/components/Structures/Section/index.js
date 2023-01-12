import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import "./index.scss";

function Section({ title, desc }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useLayoutEffect(() => {
    gsap
      .timeline({
        defaults: {
          x: 300,
          opacity: 1,
          duration: 2,
          ease: "elastic",
        },
        scrollTrigger: {
          trigger: titleRef.current,
          start: "left right",
        },
      })
      .to(titleRef.current, {})
      .to(descRef.current, {}, 0.4);
  }, []);

  return (
    <div className="Section">
      <div className="Section__backGround" />
      <h1 ref={titleRef}>{title}</h1>
      <p ref={descRef}>{desc}</p>
    </div>
  );
}

export default Section;
