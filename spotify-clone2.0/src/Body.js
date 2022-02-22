import React from "react";
import Header from "./Header";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
  const [{ youtube_english }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img 
          src={youtube_english?.images[0].url}
          alt="" 
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{youtube_english?.name}</h2>
          <p>{youtube_english?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon />
          <FavoriteIcon />
          <MoreHorizIcon />
        </div>
        {/* List of Songs */}
      </div>
    </div>
  );
}

export default Body
