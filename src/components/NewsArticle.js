import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";

function NewsArticle(props) {
  const coverPlaceHolder =
    "https://firehouseshelter.com/wp-content/themes/kronos/assets/images/news-placeholder.jpg";
  return (
    <div className={`news ${props.darkMode ? "dark" : ""}`}>
      {props.cover ? (
        <img src={props.cover} alt="cover of the article"></img>
      ) : (
        <img src={coverPlaceHolder} alt="cover of the article"></img>
      )}

      <h1 className="news-title">{props.title}</h1>
      <p className="news-description">
        {props.description}
        <Link href={props.url} className="article-url">
          {" "}
          <LinkIcon fontSize="small" />{" "}
        </Link>
      </p>

      <span className="news-author news-infos">
        {props.author ? props.author : "Unknown author"}
      </span>
      {/* <br />
      <span className="news-source news-infos">[{props.source}]</span> */}
    </div>
  );
}

export default NewsArticle;
