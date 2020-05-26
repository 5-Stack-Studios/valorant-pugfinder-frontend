import React from "react";

import bindImage from "./assets/bind.png";
import splitImage from "./assets/split.jpg";
import havenImage from "./assets/haven.jpeg";

const mapToImage = {
  bind: bindImage,
  split: splitImage,
  haven: havenImage,
};

const imageBgStyle = (mapImg) => ({
  backgroundImage: `url(${mapImg})`,
  height: "auto",
  width: "80%",
  display: "inline-block"
});

const LobbyCard = ({ map, team1, team2 }) => (
  <>
    <div style={imageBgStyle(mapToImage[map])}></div>
  </>
);

export default LobbyCard;
