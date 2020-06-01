import React from "react";

import LobbyCard from "./LobbyCard";
import RoleQueue from "./RoleQueue";

/**
 * A component representing a single lobby in the UI.
 * @param {*} param0
 */
const Lobby = (lobby) => (
  <div>
    <LobbyCard {...lobby} />
    <RoleQueue />
    {/* Add Chat component */}
  </div>
);

export default Lobby;
