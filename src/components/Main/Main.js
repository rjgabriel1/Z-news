import React, { useState } from "react";
import "./Menu.css";

import NewsFeed from "../News/NewsArticle";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function Main({ darkMode, handleThemeChange }) {
  const [category, setCategory] = useState("");
  const logo = "Z.ico";
  const handleLinkClick = (event) => {
    const category = event.target.textContent;
    setCategory(category.toLowerCase());
  };

  return (
    <>
      <div className={`heading ${darkMode ? "dark" : ""}`}>
        <div>
          <img id="logo" src={logo} alt="logo" />
        </div>

        <div className="nav-items">
          <button className="nav-link" onClick={handleLinkClick}>
            News
          </button>
          <button className="nav-link" onClick={handleLinkClick}>
            Technology
          </button>
          <button className="nav-link" onClick={handleLinkClick}>
            Cinema
          </button>
          <button className="nav-link" onClick={handleLinkClick}>
            Sport
          </button>
          <button className="nav-link" onClick={handleLinkClick}>
            Travel
          </button>
        </div>

        <ThemeSwitcher
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />
      </div>
      <div className="category-heading">
        <h4>Category &gt; {category ? category : "All"}</h4>
      </div>
      {category === "cinema" ? (
        <h1 className="movie">Movie</h1>
      ) : (
        <NewsFeed darkMode={darkMode} category={category} />
      )}
      {/* <NewsFeed darkMode={darkMode} category={category} /> */}
    </>
    
  );
}
