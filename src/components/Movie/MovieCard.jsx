import { Button } from "@mui/material";
import React from "react";

export default function MovieCard(props) {
  return (
    <>
      <div className="movie-card">
        <img className="movie-backdrop" />
        <h1 className="movie-title"></h1>
        <p className="movie-overview"></p>
        <span className="movie-ratings"></span>
        <Button>Watch trailer</Button>
      </div>
    </>
  );
}
