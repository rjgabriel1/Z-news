import React from "react";

function NewsArticle(props) {
  return (
    <div className="news">
      <img src={props.cover} alt="cover of the article"></img>

      <h1 className="news-title">{props.title}</h1>
      <p className="news-description">
        {props.description}{" "}
        <a className="article-url" href={props.url}>
          Read More..
        </a>
      </p>

      <span className="news-author news-infos">
        {props.author ? props.author : "Unknown"}
      </span>
      <br />
      <span className="news-source news-infos">source: {props.source}</span>
    </div>
  );
}

export default NewsArticle;
