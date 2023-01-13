import { useEffect, useState } from "react";
import { gsap } from "gsap";

import imagesLoaded from "imagesloaded";

import "./index.scss";

function Gallery() {
  const [index] = useState([1, 2, 3, 4]);
  const [imgIndex] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const images = gsap.utils.toArray("img");
    const showDemo = () => {
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

    imagesLoaded(images).on("always", showDemo);
  }, []);

  return (
    <div className="Gallery">
      <div className="Gallery__wrapper">
        <section className="Gallery__text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>

        {index.map((id) => {
          return (
            <section key={id} className="Gallery__section">
              <ul className="wrapper">
                {imgIndex.map((id) => {
                  return (
                    <li key={id}>
                      <img src="https://source.unsplash.com/random" alt="" />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <section className="Gallery__text">
          <div className="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </section>
      </div>
    </div>
  );
}
export default Gallery;
