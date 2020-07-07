import * as PLAYERS from "../constants/players";

export const queue = (state = { ...PLAYERS.QUEUE_DEFAULT }, action) => {
  switch (action.type) {
    case PLAYERS.CHANGE_SELF_ROLES.SUCCESS:
      const { roles, player } = action.payload;

      const newQueue = { ...state };
      
      return newQueue;
    case PLAYERS.CHANGE_LINEUP.SUCCESS:
      // TODO: This part of the reducer should
      // mark players in the queue who are selected as such.
      // Check the actions/players.js file to see
      // what is in the action payload that you can
      // use to update this
      return state; // temporary return; please replace
    default:
      return state;
  }
};
