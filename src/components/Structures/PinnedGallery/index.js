import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import "./index.scss";

const IMGINDEX = [1, 2, 3, 4, 5];

function PinnedGallery() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "+=100%",
        },
      });
    });
  }, []);
  return (
    <div ref={containerRef} className="PinnedGallery">
      {IMGINDEX.map((imgId) => {
        return (
          <div className="PinnedGallery__container" key={imgId}>
            <img
              src={`https://picsum.photos/1600/800?random=${imgId}`}
              alt=""
            />
            <h2 className="PinnedGallery__text">Lorem Ipsum</h2>
          </div>
        );
      })}
    </div>
  );
}

export default PinnedGallery;
