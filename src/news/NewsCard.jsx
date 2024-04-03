import React from "react";

const NewsCard = (props) => {
  return (
    <div style={{ width:"300px", border:"1px solid green", borderRadius:"10px" }} >
      <div>
        <img style={{ width: "100%" }} src={props.data.urlToImage} alt="" />
      </div>
      <div style={{padding:"10px"}}>
      <div>{props.data.title}</div>
      <div>{props.data.description}</div>
      <div>{props.data.author}</div>
      </div>
    </div>
  );
};

export default NewsCard;
