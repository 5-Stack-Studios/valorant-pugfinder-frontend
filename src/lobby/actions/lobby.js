import { 
    CREATE_LOBBY,
} from "../constants/lobby";

import { makeActionFunction } from "../../common/actionUtils";

/**
 * Creates an action attempting to create a lobby
 * @param {String} userId the creator of the lobby
 * @param {Object} lobbyParams the settings for the lobby
 */
export const createLobbyRequest = makeActionFunction(
    CREATE_LOBBY.REQUEST,
    'userId',
    'lobbyParams'
);

/**
 * Creates a success action for after lobby is created
 * @param {Object} lobbyData the returned lobby data
 */
export const createLobbySuccess = makeActionFunction(
    CREATE_LOBBY.SUCCESS,
    'lobbyData',
);

// TODO: Brainstorm a better way to get error in here
/**
 * Creates a failure action for when the lobby failed
 * to create
 * @param {String} userId
 */
export const createLobbyFailure = makeActionFunction(
    CREATE_LOBBY.FAILURE,
    'userId',
    'error'
);

/**
 * Fires off a lobby creation request to the server
 * @param {String} userId the creator of the lobby
 * @param {Object} lobbyParams the settings for the lobby
 */
export const fetchQuestion = (userId, lobbyParams) => dispatch => {
    // TODO: Implement with axios
};