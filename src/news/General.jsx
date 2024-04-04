import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

import { useLocation } from "react-router-dom";

const General = () => {
  const [newsdata, setNewsdata] = useState([]);

  const location = useLocation();
  const locationWithoutSlash = location.pathname.slice(1);
  

  const fetchdata = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${locationWithoutSlash}&apiKey=ab2f8638d29949a38a94987bcd8d78f6`
    );
    const newsdata = await response.json();

    setNewsdata(newsdata.articles);
    // setCatdata(catfacts.data);
  };

  useEffect(() => {
    fetchdata();
  }, [locationWithoutSlash]);

  return (
    <div>
      <div>
        <div>Welcome to General News</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {newsdata.map((item, index) => {
          return <NewsCard name="dhiran" key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default General;
