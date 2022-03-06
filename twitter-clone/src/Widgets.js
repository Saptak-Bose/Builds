import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening ?</h2>

        <TwitterTweetEmbed tweetId={"1498703685991514113"} />

        <h2>Whom to follow...</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="imjadeja"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/imjadeja/status/1493522063570907141"}
          options={{ text: "#OUT", via: "imjadeja" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
