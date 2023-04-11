import React, { useState, useEffect } from "react";
import fetchData from "../../API/fetchData";
import "./NewsArticles.css";


function NewsArticle(props) {
  const coverPlaceHolder ="https://groundwater.org/wp-content/uploads/2022/07/news-placeholder.png";
  return (
    <div className={`news ${props.darkMode ? "dark" : ""}`}>
      {props.article.urlToImage ? (
        <img
          className="article-image"
          src={props.article.urlToImage}
          alt="cover of the article"
        />
      ) : (
        <img
          className="article-image"
          src={coverPlaceHolder}
          alt="cover of the article"
        />
      )}

      <h1 className="news-title">{props.article.title}</h1>
      <p className="news-description">{props.article.description}</p>
      <a className="article-url" href={props.article.url} target="_blank" rel="noreferrer">
        Read article
      </a>
      <br />
      <br />
      <br />
      
      <span className="news-source news-infos">
        {props.article.source.name ? props.article.source.name : "Unknown"}
      </span>
    </div>
  );
}

function NewsFeed(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData(props.category);
        setArticles(fetchedData.articles);
        localStorage.setItem("articles", JSON.stringify(fetchedData.articles));
      } catch (error) {
        const cachedData = localStorage.getItem("articles");
        if (cachedData) {
          setArticles(JSON.parse(cachedData));
        }
        console.log(error);
      }
    };
    getData();
  }, [props.category]);

  return (
    <div className={`all-news ${props.hidden ? "hidden" : ""}`}>
      {articles.map((article) => (
        <NewsArticle
          key={article.url}
          article={article}
          darkMode={props.darkMode}
        />
      ))}
    </div>
  );
}

export default NewsFeed;
