import React from "react";
import Header from "./components/Header";
import "./components/app.css";
import NewsArticle from "./components/NewsArticle";
import articles from "./articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <hr></hr>
      <div className="all-news">
        {articles.map((article) => {
          return (
            <NewsArticle
              key={article.url}
              cover={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
              author={article.author}
              source={article.source.name}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
