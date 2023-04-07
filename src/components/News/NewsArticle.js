import React, { useState, useEffect } from "react";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";
import fetchData from "../../fetchData";

function NewsArticle(props) {
  const coverPlaceHolder =
    "https://firehouseshelter.com/wp-content/themes/kronos/assets/images/news-placeholder.jpg";
  return (
    <div className={`news ${props.darkMode ? "dark" : ""}`}>
      {props.article.urlToImage ? (
        <img src={props.article.urlToImage} alt="cover of the article" />
      ) : (
        <img src={coverPlaceHolder} alt="cover of the article" />
      )}

      <h1 className="news-title">{props.article.title}</h1>
      <p className="news-description">
        {props.article.description}
        <Link href={props.article.url} className="article-url">
          {" "}
          <LinkIcon fontSize="small" />{" "}
        </Link>
      </p>

      <span className="news-author news-infos">
        {props.article.author ? props.article.author : "Unknown author"}
      </span>
    </div>
  );
}

function MyComponent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setArticles(fetchedData.articles);
    };
    getData();
  }, []);

  return (
    <div className="all-news">
      {articles.map((article) => (
        <NewsArticle key={article.id} article={article} />
      ))}
    </div>
  );
}

export default MyComponent;
