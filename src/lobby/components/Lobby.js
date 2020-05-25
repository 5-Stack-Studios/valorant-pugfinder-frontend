import React from "react";

import LobbyCard from "./LobbyCard";
import RoleQueue from "./RoleQueue";

/**
 * A component representing a single lobby in the UI.
 * @param {*} param0
 */
const Lobby = ({}) => (
  <div>
    <LobbyCard />
    <RoleQueue />
    {/* Add Chat component */}
  </div>
);
