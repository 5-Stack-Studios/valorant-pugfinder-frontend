import * as LOBBY from "../constants/lobby";

const lobbyDefaultState = {
  team1: [],
  team2: [],
  captains: [],
  map: "haven",
  owner: null,
  id: null,
  queue: {
    // TODO: define game roles in a constant/get from Riot
  },
};

export const lobbies = (state = [], action) => {
  switch (action.type) {
    case LOBBY.CREATE_LOBBY.SUCCESS:
      return [
        ...state,
        {
          ...lobbyDefaultState,
          ...action.payload.lobbyData,
        },
      ];
    case LOBBY.CLOSE_LOBBY.SUCCESS:
      return state.filter((lobby) => lobby.id !== action.payload.lobbyId);
    default:
      return state;
  }
};
