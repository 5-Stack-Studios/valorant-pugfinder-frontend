import React from 'react';
import "./PlayerSlot.css";
/**
 * A small, rectangular div that shows the player's name and role
 * Should look somewhat like the role select screen in Valorant.
 * @param {Object} player the player. contains name and role
 * 
 */
const PlayerSlot = ({playerName, selectedRole}) => (
    <div className="player-slot">
        <h2>{playerName}</h2>
        <div className = "character-selected">
            <h3>{selectedRole}</h3>
        </div>
    </div>
    //Put character image and map image here
);

export default PlayerSlot;