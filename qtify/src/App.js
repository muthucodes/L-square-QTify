import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section type={"albums"} category={"top"} />
      <Section type={"albums"} category={"new"} />
      <Section type={"songs"} category={""} />
    </div>
  );
}

export default App;
