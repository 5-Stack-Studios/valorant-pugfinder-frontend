import * as reducers from "../reducers/players";
import * as PLAYERS from "../constants/players";

describe("queue reducer", () => {
  it("should append player to queue for selected roles", () => {
    const changedQueue = { ...PLAYERS.QUEUE_DEFAULT };
    changedQueue["omen"] = ["abcd"];
    changedQueue["raze"] = ["abcd"];
    expect(
      reducers.queue(undefined, {
        type: PLAYERS.CHANGE_SELF_ROLES.SUCCESS,
        payload: { roles: ["omen", "raze"], playerId: "abcd" },
      })
    ).toEqual(changedQueue);
  });

  it("should not duplicate player in queue", () => {
    const initialQueue = { ...PLAYERS.QUEUE_DEFAULT };
    initialQueue["jett"] = ["abcd"];
    const changedQueue = { ...PLAYERS.QUEUE_DEFAULT };
    changedQueue["jett"] = ["abcd"];
    changedQueue["cypher"] = ["abcd"];
    expect(
      reducers.queue(initialQueue, {
        type: PLAYERS.CHANGE_SELF_ROLES.SUCCESS,
        payload: { roles: ["cypher", "jett"], playerId: "abcd" },
      })
    ).toEqual(changedQueue);
  });

  it("should remove the player from a non-present role", () => {
    const initialQueue = { ...PLAYERS.QUEUE_DEFAULT };
    initialQueue["breach"] = ["abcd"];
    initialQueue["brimstone"] = ["abcd", "defg"];

    const changedQueue = { ...PLAYERS.QUEUE_DEFAULT };
    changedQueue["breach"] = ["abcd"];
    changedQueue["brimstone"] = ["defg"];

    expect(
      reducers.queue(initialQueue, {
        type: PLAYERS.CHANGE_SELF_ROLES.SUCCESS,
        payload: { roles: ["breach"], playerId: "abcd" },
      })
    ).toEqual(changedQueue);
  });
});
