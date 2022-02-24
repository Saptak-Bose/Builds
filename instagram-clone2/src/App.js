import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "CleverSap", 
      caption: "WOW So nice painting",
      imageUrl: "https://wallpapercave.com/wp/wp6746819.jpg",
    },
    {
      username: "CleverSap", 
      caption: "WOW So nice painting",
      imageUrl: "https://wallpapercave.com/wp/wp6746819.jpg",
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>HELLO Clever Programmers Let's build an Instagram Clone with React🚀!</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
