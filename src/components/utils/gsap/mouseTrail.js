import { useRef, useEffect } from "react";

import { gsap } from "gsap";

import "./index.scss";

function MouseTrail() {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const textViewRef = useRef(null);
  const textCloseRef = useRef(null);

  function onMouseMove(e) {
    gsap.to(bigBallRef.current, 0.4, {
      x: e.clientX - 15,
      y: e.clientY - 15,
    });
    gsap.to(smallBallRef.current, 0.1, {
      x: e.clientX - 5,
      y: e.clientY - 7,
    });
  }

  function onMouseHover({ currentTarget }) {
    const isClosable = currentTarget?.classList?.contains("closable");

    gsap.to(bigBallRef.current, 0.3, {
      scale: 4,
    });

    if (isClosable) {
      gsap.set(textViewRef.current, {
        opacity: 0,
      });

      gsap.set(textCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.set(textViewRef.current, {
        opacity: 1,
      });

      gsap.set(textCloseRef.current, {
        opacity: 0,
      });
    }
  }

  function onMouseHoverOut() {
    gsap.to(bigBallRef.current, 0.3, {
      scale: 1,
    });

    gsap.set(textViewRef.current, {
      opacity: 0,
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    const hoverables = document.querySelectorAll(".hoverable");

    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener("mouseenter", onMouseHover);
      hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }
  }, []);

  return (
    <div className="Cursor">
      <div ref={bigBallRef} className="Cursor__ball">
        <span ref={textViewRef} className="Cursor__text">
          View
        </span>
        <span ref={textCloseRef} className="Cursor__text">
          Close
        </span>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div ref={smallBallRef} className="Cursor__ball">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
}

export default MouseTrail;
