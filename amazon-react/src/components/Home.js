import React from "react";
import "./Home.css";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Slideshow />
      </div>
    </div>
  );
}

export default Home;
