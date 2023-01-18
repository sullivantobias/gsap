import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import "./index.scss";

function Arrow() {
  const arrowRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      default: { duration: 1 },
    });

    tl.to(arrowRef.current, {
      yPercent: 40,
    });
  }, []);
  return (
    <div ref={arrowRef} className="Arrow">
      <a href="#home">
        <i className="Arrow__icon" />
      </a>
    </div>
  );
}

export default Arrow;
