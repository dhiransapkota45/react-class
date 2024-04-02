import React, { useState, useEffect } from "react";

const News = () => {
  const [newsdata, setNewsdata] = useState([]);

  const fetchdata = async () => {
    const response = await fetch("https://newsapi.org/v2/everything/?apiKey=ab2f8638d29949a38a94987bcd8d78f6&q=bitcoin");
    const newsdata = await response.json();
    
    setNewsdata(newsdata.articles);
    // setCatdata(catfacts.data);
  };
  console.log(newsdata)

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <div>Welcome to News Website</div>
      </div>

      <div>
        {
            newsdata.map((item, index) => {
                return (
                <div style={{ border: "2px solid green" }} key={index}>
                    <div>
                        <img style={{width:"200px"}} src={item.urlToImage} alt="" />
                    </div>
                    <div>
                    {item.title}
                    </div>
                    <div>
                    {item.description}
                    </div>
                    <div>
                    {item.author}
                    </div>
                </div>
                );
            })
        }
      </div>
    </div>
  );
};

export default News;
