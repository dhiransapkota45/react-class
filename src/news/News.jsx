import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [newsdata, setNewsdata] = useState([]);

  const fetchdata = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything/?apiKey=ab2f8638d29949a38a94987bcd8d78f6&q=bitcoin"
    );
    const newsdata = await response.json();

    setNewsdata(newsdata.articles);
    // setCatdata(catfacts.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <div>Welcome to News Website</div>
      </div>

      <div style={{display:"flex",flexWrap:"wrap", gap:"10px"}}>
        {newsdata.map((item, index) => {
          return (
            <NewsCard name="dhiran" key={index} data={item} />
          );
        })}
      </div>
    </div>
  );
};

export default News;
