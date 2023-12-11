import "./App.css";
import About from "./Components/About";
import Destination from "./Components/Destination";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/contact";

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
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
