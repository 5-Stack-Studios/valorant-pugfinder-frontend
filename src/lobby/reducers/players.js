import * as PLAYERS from "../constants/players";

export const queue = (state = { ...PLAYERS.QUEUE_DEFAULT }, action) => {
  switch (action.type) {
    case PLAYERS.CHANGE_SELF_ROLES.SUCCESS:
      const { roles, player } = action.payload;

      const newQueue = { ...state };

      return newQueue;
    case PLAYERS.CHANGE_LINEUP.SUCCESS:
      const playerList = [...action.payload.team1, ...action.payload.team2];
      const inLineup = (playerList, player) => {
        const playerListID = playerList.map(({ id }) => id);
        return playerListID.includes(player.id);
      };
      return Object.fromEntries(
        Object.entries(state).map(([queueRole, players]) => {
          return [
            queueRole,
            players.map((player) => ({
              ...player,
              selected: inLineup(playerList, player),
            })),
          ];
        })
      );
    default:
      return state;
  }
};
