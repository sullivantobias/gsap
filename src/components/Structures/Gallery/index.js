import { useLayoutEffect, useState, useRef, useMemo } from "react";
import { gsap } from "gsap";

import imagesLoaded from "imagesloaded";

import "./index.scss";

function Gallery() {
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const imageOverlayRef = useRef(null);

  useLayoutEffect(() => {
    const images = gsap.utils.toArray("img");

    const scrollEffect = () => {
      document.scrollingElement.scrollTo(0, 0);

      gsap.utils.toArray("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper");

        const [x, xEnd] =
          index % 2
            ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              scrub: 0.5,
            },
          }
        );
      });
    };

    imagesLoaded(images).on("always", scrollEffect);
  }, []);

  const onMouseEnter = ({ currentTarget }) => {
    const timeLine = gsap.timeline({
      defaults: {
        duration: 0.5,
      },
    });

    timeLine
      .to(currentTarget, {
        scale: 1.2,
        filter: "grayscale(0%)",
      })
      .to(currentTarget, {
        scale: 1,
        filter: "grayscale(80%)",
      });
  };

  const animation = (src, target) => {
    gsap.fromTo(
      target.current,
      {
        opacity: src ? 0 : 1,
        scale: src ? 0 : 1,
      },
      {
        opacity: src ? 1 : 0,
        scale: src ? 1 : 0,
      }
    );
  };

  const onClickHandler = ({ currentTarget }) => {
    const src = currentTarget?.src;

    src && setCurrentImageUrl(src);

    animation(src, imageOverlayRef);
  };

  const basicSection = (
    <section className="Gallery__text">
      <div className="wrapper text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        risus placerat, luctus erat eget, vulputate nulla.
      </div>
    </section>
  );

  const imagesArray = Array.from({ length: 5 }).map(
    () =>
      `https://picsum.photos/1600/800?random=${Math.floor(Math.random() * 100)}`
  );

  const images = useMemo(
    () =>
      imagesArray.map((value, index) => (
        <li className="hoverable" key={index}>
          <img
            onClick={onClickHandler}
            onMouseEnter={onMouseEnter}
            src={value}
            alt=""
          />
        </li>
      )),
    []
  );

  return (
    <div id="gallery" className="Gallery">
      <div className="Gallery__wrapper">
        {basicSection}

        {Array(3)
          .fill(null)
          .map((value, index) => (
            <section key={index} className="Gallery__section">
              <ul className="wrapper">{images}</ul>
            </section>
          ))}

        {basicSection}
      </div>
      <div
        ref={imageOverlayRef}
        onClick={onClickHandler}
        className="Gallery__overlay"
      >
        <img src={currentImageUrl} alt="" />
      </div>
    </div>
  );
}
export default Gallery;
