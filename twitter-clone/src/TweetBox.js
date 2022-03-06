import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Saptak Bose",
      username: "CleverSap", 
      verified: true,
      text: tweetMessage,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone2-b8b7b.appspot.com/o/images%2FCleverSap%20Profile.jpg?alt=media&token=d5741b81-46ee-4fb2-8db7-941e2c3e3907",
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/instagram-clone2-b8b7b.appspot.com/o/images%2FCleverSap%20Profile.jpg?alt=media&token=d5741b81-46ee-4fb2-8db7-941e2c3e3907" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
