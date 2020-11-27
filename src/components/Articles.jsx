import React from "react";
import "../App.css";

const Articles = (props) => {
  return (
    <div>
      <a href={"https://reddit.com" + props.article.permalink} target="new">
        <h2>{props.article.title}</h2>
      </a>
    </div>
  );
};

export default Articles;
