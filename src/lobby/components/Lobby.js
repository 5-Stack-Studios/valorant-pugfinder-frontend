import React from "react";

import LobbyCard from "./LobbyCard";
import RoleQueue from "./RoleQueue";

/**
 * A component representing a single lobby in the UI.
 * @param {*} param0
 */
const Lobby = (x) => (
  <div>
      {console.log(x)}
    <LobbyCard map={x.map} team1={x.team1} team2={x.team2} />
    <RoleQueue />
    {/* Add Chat component */}
  </div>
);

export default Lobby;
