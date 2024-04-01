import "./App.css";
import Card from "./Card";
import Map from "./Map";
import DataFetch from "./data-fetching/DataFetch";
import UseEffectExplore from "./hooks/UseEffectExplore";
import UseState from "./hooks/UseState";

const App = () => {
  let x = 5;
  let a = true;

 
  return (
    <div className="app-container">
      {/* <UseState /> */}
      <UseEffectExplore />
      {/* <DataFetch /> */}
    </div>
  );
};

export default App;
