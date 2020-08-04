import React from 'react';
import "./PlayerSlot.css";
import { AGENTS_TO_PORTRAITS } from "../constants/players";
/**
 * A small, rectangular div that shows the player's name and role
 * Should look somewhat like the role select screen in Valorant.
 * @param {Object} player the player. contains name and role
 * 
 */
const PlayerSlot = ({name, selectedRole, team}) => (
    <div className={`player-slot ${team}`}>
        <h3 className="player-name">{name}</h3>
        <div className = "character-selected">
            <img alt='agent portrait' src={AGENTS_TO_PORTRAITS[selectedRole]}></img>
        </div>
    </div>
    //Put character image and map image here
);

export default PlayerSlot;