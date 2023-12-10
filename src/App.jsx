import "./App.css";
import Destination from "./Components/Destination";
import Features from "./Components/Features";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="destinations">
          <Destination />
        </div>
      </main>
    </>
  );
}

export default App;
