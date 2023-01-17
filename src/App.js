import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "./components/Structures/Header";
import Section from "./components/Structures/Section";
import MouseTrail from "./components/utils/gsap/mouseTrail";
import Gallery from "./components/Structures/Gallery";
import PinnedGallery from "./components/Structures/PinnedGallery";

gsap.registerPlugin(ScrollTrigger);

function App() {
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
      <PinnedGallery />
    </div>
  );
}

export default App;
