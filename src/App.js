import Axios from "axios";
import React, { useState, useEffect } from "react";

import Articles from "./components/Articles";
import Navbar from "./components/Navbar";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get("https://www.reddit.com/r/webdev.json");
      console.log(response.data.data.children);
      setArticles(response.data.data.children);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="articles">
        {articles != null
          ? articles.map((article, index) => (
              <Articles key={index} article={article.data} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default App;
