import "./App.css";
import About from "./news/About";
import Business from "./news/Business";
import Entertainmemt from "./news/Entertainmemt";
import General from "./news/General";
import Navbar from "./news/Navbar";
import News from "./news/News";
import { Routes, Route } from "react-router-dom";
import Notfound from "./news/Notfound";

import { createContext } from "react";
import Comp1 from "./news/Comp1";

export const Context = createContext();



const Comp2 = () => {
  return (
    <div>
      asdf
      <Comp1  />
    </div>
  );
};

const Comp3 = () => {
  return (
    <div>
      asdfasdf
      <Comp2  />
    </div>
  );
};

const App = () => {
  const data = "this is data";

  return (
    <Context.Provider value={{ data: "this is data", age:39 }}>
      {/* <Comp3 data={data} /> */}
      {/* <Comp3 /> */}
      <Comp1 />
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/general" element={<General />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainmemt />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;
