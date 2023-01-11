import Header from "./components/Structures/Header";
import MouseTrail from "./components/utils/gsap/mouseTrail";

function App() {
  return (
    <div className="App">
      <Header />
      <MouseTrail />
      <img className="hoverable" src="assets/image.png" alt="" />
    </div>
  );
}

export default App;
