import { CHANGE_SELF_ROLES, CHANGE_LINEUP } from "../constants/players";

import { makeActionFunction } from "../../common/actionUtils";

export const changeSelfRoleRequest = makeActionFunction(
  CHANGE_SELF_ROLES.REQUEST,
  "roles",
  "lobbyId",
  "userId"
);

export const changeSelfRoleSuccess = makeActionFunction(
  CHANGE_SELF_ROLES.SUCCESS,
  "roles",
  "lobbyId",
  "userId"
);

export const changeSelfRoleFailure = makeActionFunction(
  CHANGE_SELF_ROLES.FAILURE,
  "lobbyId",
  "userId"
);

export const changeLineupRequest = makeActionFunction(
  CHANGE_LINEUP.REQUEST,
  // A list of lobby player objects
  // Player: { name: "xxxxxx", role: "xxxxx" }
  "lineup",
  // A string representing the lobby the lineup is
  // changing for
  "lobbyId"
);

export const changeLineupSuccess = makeActionFunction(
  CHANGE_LINEUP.SUCCESS,
  // A list of player objects
  // Player: { name: "xxxxxx", role: "xxxxx" }
  "lineup",
  // A string representing the lobby the lineup is
  // changing for
  "lobbyId"
);
