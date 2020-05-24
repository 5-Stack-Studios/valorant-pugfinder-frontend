import * as reducers from '../reducers/lobby';
import * as LOBBY from '../constants/lobby';

describe('lobbies reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.lobbies(undefined, {})).toEqual([]);
  });

  it('should be able to add one lobby', () => {
    expect(
      reducers.lobbies(undefined, {
        type: LOBBY.CREATE_LOBBY.SUCCESS,
        payload: {
          lobbyData: {
            owner: '1',
            map: 'bind',
            id: 'abcd123'
          }
        }
      })
    ).toEqual([
      {
        team1: [],
        team2: [],
        captains: [],
        map: 'bind',
        owner: '1',
        id: 'abcd123',
        queue: {
            // TODO: define game roles in a constant/get from Riot
        }
      }
    ]);
  })
})