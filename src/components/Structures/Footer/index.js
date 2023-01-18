import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";

import "./index.scss";
import Arrow from "../../Arrow";

function Footer() {
  const footerContainer = useRef(null);
  const footerTextRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(footerTextRef.current, {
      scrollTrigger: {
        trigger: footerContainer.current,
      },
      opacity: 0,
      x: -200,
      duration: 1,
    });
  }, []);
  return (
    <footer id="contact" ref={footerContainer} className="Footer">
      <Arrow />
      <p ref={footerTextRef}>
        Curabitur ut leo porttitor, condimentum ligula vitae, varius dui. Donec
        at lacinia elit. Aenean posuere nibh sit amet lacus pretium, sed pretium
        erat eleifend. Donec at eros sed odio posuere elementum sit amet eget
        massa. Praesent malesuada volutpat massa, non consequat velit vehicula
        in. Donec tempor id enim nec vulputate. Ut vestibulum elit metus, eu
        consectetur lectus interdum id.
      </p>
    </footer>
  );
}

export default Footer;
