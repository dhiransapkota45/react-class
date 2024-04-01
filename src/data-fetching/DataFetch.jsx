import React, { useState, useEffect } from "react";

const DataFetch = () => {
  const [catdata, setCatdata] = useState([]);

  const fetchdata = async () => {
    console.log("first");
    const response = await fetch("https://catfact.ninja/facts");

    const catfacts = await response.json();
    setCatdata(catfacts.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <button onClick={fetchdata}>fetch data</button>

      <div>
        {catdata.map((item, index) => {
          return (
            <div key={index}>
              {index + 1}.) {item.fact}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFetch;
