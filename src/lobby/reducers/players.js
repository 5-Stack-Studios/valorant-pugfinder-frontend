import * as PLAYERS from "../constants/players";

export const queue = (state = { ...PLAYERS.QUEUE_DEFAULT }, action) => {
  switch (action.type) {
    case PLAYERS.CHANGE_SELF_ROLES.SUCCESS:
      const { roles, playerId } = action.payload;

      const newQueue = { ...state };
      Object.keys(state).forEach((agent) => {
        if (roles.includes(agent) && !newQueue[agent].includes(playerId)) {
          // Add the player to the queue
          newQueue[agent] = [...newQueue[agent], playerId];
        } else if (!roles.includes(agent)) {
          // Remove the player from the queue
          newQueue[agent] = newQueue[agent].filter((id) => id !== playerId);
        }
      });
      return newQueue;
    default:
      return state;
  }
};
