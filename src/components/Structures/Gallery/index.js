import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import imagesLoaded from "imagesloaded";

import "./index.scss";

const SECTIONINDEX = [1, 2, 3, 4];
const IMGINDEX = [1, 2, 3, 4, 5];

function Gallery() {
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

  const basicSection = (
    <section className="Gallery__text">
      <div className="wrapper text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        risus placerat, luctus erat eget, vulputate nulla.
      </div>
    </section>
  );

  return (
    <div className="Gallery">
      <div className="Gallery__wrapper">
        {basicSection}

        {SECTIONINDEX.map((id) => {
          return (
            <section key={id} className="Gallery__section">
              <ul className="wrapper">
                {IMGINDEX.map((imgId) => {
                  return (
                    <li className="hoverable" key={imgId}>
                      <img
                        onMouseEnter={onMouseEnter}
                        src={`https://picsum.photos/1600/800?random=${imgId}`}
                        alt=""
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {basicSection}
      </div>
    </div>
  );
}
export default Gallery;
