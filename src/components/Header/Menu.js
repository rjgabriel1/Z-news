import React from "react";
import "./Menu.css";
import { Button, Link } from "@mui/material";


export default function Heading() {
  return (
    <>
      <div className="head">
        <div className="nav-items">
          <Link to='/'><Button variant="text" className="item">Hotspots</Button></Link>
          <Link><Button variant="text" className="item">Technology</Button></Link>
          <Link><Button variant="text" className="item">Theater</Button></Link>
        </div>
      </div>
    </>
  );
}
