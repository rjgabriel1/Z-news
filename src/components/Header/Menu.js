import React, { useState } from "react";
import "./Menu.css";
import { Button, Link } from "@mui/material";
import NewsFeed from "../News/NewsArticle";

export default function Menu() {
  const [category, setCategory] = useState("Hotspots");

  const handleLinkClick = (event) => {
    const category = event.target.textContent;
    setCategory(category);
  };

  return (
    <>
      <div className="head">
        <div className="nav-items">
          <Link to="/" onClick={handleLinkClick}>
            <Button variant="text" className="item">
              Hotspots
            </Button>
          </Link>
          <Link onClick={handleLinkClick}>
            <Button variant="text" className="item">
              Technology
            </Button>
          </Link>
          <Link onClick={handleLinkClick}>
            <Button variant="text" className="item">
              Cinema
            </Button>
          </Link>

          <Link onClick={handleLinkClick}>
            <Button variant="text" className="item">
              Sport
            </Button>
          </Link>
        </div>
      </div>
      <NewsFeed category={category} />
    </>
  );
}
