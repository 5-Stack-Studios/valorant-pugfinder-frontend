import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PlayerSlot from "./PlayerSlot";

import bindImage from "./assets/bind.png";
import splitImage from "./assets/split.jpg";
import havenImage from "./assets/haven.jpeg";

import "./LobbyCard.css";

const mapToImage = {
  bind: bindImage,
  split: splitImage,
  haven: havenImage,
};

const imageBgStyle = (mapImg) => ({
  backgroundImage: `url(${mapImg})`,
  height: "80%",
  width: "100%",
  display: "inline-block",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const LobbyCard = ({ map, team1, team2, owner, captains }) => (
  <div className="lobby-card">
    <div className="lobby-card-header" style={imageBgStyle(mapToImage[map])}>
      <h2 className="lobby-map-name lobby-header-text">{map || "unknown"}</h2>
      <p>Owned by {owner || "unknown"}</p>
      {captains.length > 0 && <p>Captains: {captains.join(", ")}</p>}
    </div>
    <div className="lobby-card-lineup">
      <Container fluid className="px-0">
        {team1.map((p1, i) => (
          <Row noGutters>
            <Col md={6}>
              <div className="player-slot-box">
                {p1 && <PlayerSlot {...p1} />}
              </div>
            </Col>
            <Col md={6}>
              <div className="player-slot-box">
                {team2[i] && <PlayerSlot {...team2[i]} />}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  </div>
);

export default LobbyCard;
