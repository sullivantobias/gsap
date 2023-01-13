import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "./components/Structures/Header";
import Section from "./components/Structures/Section";
import MouseTrail from "./components/utils/gsap/mouseTrail";
import Gallery from "./components/Structures/Gallery";

gsap.registerPlugin(ScrollTrigger);

function App() {
  let getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useEffect(() => {
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
  });

  return (
    <div className="App">
      <Header />
      <MouseTrail />
      <Section
        title="Lorem Ipsum"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
      />
      <Section
        title="Lorem Ipsum"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
      />
      <Section
        title="Lorem Ipsum"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
      />

      <Gallery />
    </div>
  );
}

export default App;
