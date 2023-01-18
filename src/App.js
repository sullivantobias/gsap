import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Header from "./components/Structures/Header";
import Section from "./components/Structures/Section";
import MouseTrail from "./components/utils/gsap/mouseTrail";
import Gallery from "./components/Structures/Gallery";
import PinnedGallery from "./components/Structures/PinnedGallery";
import Footer from "./components/Structures/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Header />

      <MouseTrail />
      <div id="home">
        {Array(3)
          .fill(null)
          .map((value, index) => (
            <Section
              key={index}
              title="Lorem Ipsum"
              desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            />
          ))}
      </div>

      <Gallery />

      <PinnedGallery />

      <Footer />
    </div>
  );
}

export default App;
