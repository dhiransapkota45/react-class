import "./App.css";
import Card from "./Card";
import Map from "./Map";
import DataFetch from "./data-fetching/DataFetch";
import UseEffectExplore from "./hooks/UseEffectExplore";
import UseState from "./hooks/UseState";
import News from "./news/News";

const App = () => {
  let x = 5;
  let a = true;

 
  return (
    <div className="app-container">
      {/* <UseState /> */}
      {/* <UseEffectExplore /> */}
      {/* <DataFetch /> */}
      <News />
    </div>
  );
};

export default App;
