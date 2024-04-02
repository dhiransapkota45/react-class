import React, { useState, useEffect } from "react"

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
            <div style={{display:"flex"}} key={index}>
              <div>
                {index +1}
              </div>
              <div>
                {item.fact}
              </div>
              <div>
                {item.length}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFetch;
