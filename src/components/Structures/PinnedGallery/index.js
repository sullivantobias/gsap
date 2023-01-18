import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import "./index.scss";

function PinnedGallery() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "+=100%",
      },
    });

    tl.to(containerRef.current, {});
  }, []);
  return (
    <div id="history" ref={containerRef} className="PinnedGallery">
      {Array(5)
        .fill(null)
        .map((value, index) => (
          <div className="PinnedGallery__container" key={index}>
            <img
              src={`https://picsum.photos/1600/800?random=${Math.floor(
                Math.random() * 100
              )}`}
              alt=""
            />
            <h2 className="PinnedGallery__text">Lorem Ipsum</h2>
          </div>
        ))}
    </div>
  );
}

export default PinnedGallery;
