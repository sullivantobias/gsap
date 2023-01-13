import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import "./index.scss";

function Section({ title, desc, isAnimationRevert }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useLayoutEffect(() => {
    let getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray(".Section").forEach((section, i) => {
      section.bg = section.querySelector(".Section__backGround");

      section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "linear",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });

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
