import React, { useState } from "react";

const UseState = () => {
  // let count = 4;
  const [count, setCount] = useState(7);

  const [booleanval, setBooleanval] = useState(true);

  const btnHandler = () => {
    // if (count > 10) {
    //   setCount(count - 1);
    // } else {
    setCount(count + 1);
    // }
    console.log(count);
  };

  const toggleDiv = () => {
    setBooleanval(!booleanval)
    // setBooleanval(booleanval === true ? false : true)
  }

  console.log("it runs on state change");
  return (
    <div>
      {/* {booleanval === true && <div>Show Me </div>} */}
        {
            booleanval === true ? <div>it is true</div> : <div>It is false</div>
        }
        <button onClick={toggleDiv}>Toggle</button>
      {/* <div>{count}</div>
      <button onClick={btnHandler}>Click me</button> */}
    </div>
  );
};

export default UseState;
