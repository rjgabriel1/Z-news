import React, { useState } from "react";
import Header from "./components/Header";
import "./app.css";
import NewsArticle from "./components/NewsArticle";
import articles from "./articles";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <hr></hr>
      <div className={`all-news ${darkMode ? "dark" : ""}`}>
        {articles.map((article) => {
          return (
            <NewsArticle
              key={article.url}
              cover={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
              author={article.author}
              // source={article.source.name}
              darkMode={darkMode}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
