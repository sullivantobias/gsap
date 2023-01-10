import { useRef, useEffect } from "react";

import { gsap } from "gsap";

import "./index.scss";

const SPEED = 0.1;

function MouseTrail() {
  const trailRef = useRef(null);

  useEffect(() => {
    gsap.set(trailRef.current, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const fpms = 60 / 1000;

    const xSet = gsap.quickSetter(trailRef.current, "x", "px");
    const ySet = gsap.quickSetter(trailRef.current, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add((time, deltaTime) => {
      const delta = deltaTime * fpms;
      const dt = 1.0 - Math.pow(1.0 - SPEED, delta);

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      xSet(pos.x);
      ySet(pos.y);
    });
  }, []);

  return <div ref={trailRef} className="MouseTrail"></div>;
}

export default MouseTrail;
