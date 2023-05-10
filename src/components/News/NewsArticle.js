import React, { useState, useEffect } from "react";
import fetchData from "../../API/fetchData";
import "./NewsArticles.css";

const placeholder ="news-placeholder.png"
  

function NewsArticle({ article, darkMode }) {
  const imageUrl = article.urlToImage ? article.urlToImage : placeholder;

  return (
    <div className={`news ${darkMode ? "dark" : ""}`}>
      <img
        className="article-image"
        src={imageUrl}
        alt="cover of the article"
      />
      <h1 className="news-title">{article.title}</h1>
      <p className="news-description">{article.description}</p>
      <a
        className="article-url"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        Read article
      </a>
      <br />
      <br />
      <br />
      <span className="news-source news-infos">
        {article.source.name || "Unknown"}
      </span>
    </div>
  );
}

function NewsFeed({ category, hidden, darkMode }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchDataAndCache = async () => {
      try {
        const fetchedData = await fetchData(category);
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

    fetchDataAndCache();
  }, [category]);

  return (
    <div className={`all-news ${hidden ? "hidden" : ""}`}>
      {articles.map((article) => (
        <NewsArticle key={article.url} article={article} darkMode={darkMode} />
      ))}
    </div>
  );
}

export default NewsFeed;
