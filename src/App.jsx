import "./App.css";
import Card from "./Card";
import Map from "./Map";
import DataFetch from "./data-fetching/DataFetch";
import UseEffectExplore from "./hooks/UseEffectExplore";
import UseState from "./hooks/UseState";
import About from "./news/About";
import General from "./news/General";
import Navbar from "./news/Navbar";
import News from "./news/News";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </div>
  );
};

export default App;
