import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

import { useLocation } from "react-router-dom";
import NewsHolder from "./NewsHolder";

const General = () => {
  return (
    <div>
      <div>
        <div>Welcome to General News</div>
      </div>
    <NewsHolder />
    </div>
  );
};

export default General;
