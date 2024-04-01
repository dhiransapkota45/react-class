import React, { useEffect, useState } from "react";

const UseEffectExplore = () => {
  const [count, setCount] = useState(7);
  const [booleanval, setBooleanval] = useState(true);

  // useEffect(() => {
  //   console.log("hi");
  // }, [count, booleanval]);

  useEffect( ()=>{
    console.log("hi")
  }, [count]) 

  const incrementCount = () => {
    setCount(count + 1);
  };

  const togglehandler = () => {
    setBooleanval(!booleanval);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>increment</button>

      <div>
        {booleanval === true ? <div>it is true</div> : <div>It is false</div>}
        <button onClick={togglehandler}>Toggle</button>
      </div>
    </div>
  );
};

export default UseEffectExplore;
