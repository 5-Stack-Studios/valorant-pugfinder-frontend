import { makeActionStrings } from "../../common/actionUtils.js";

export const CHANGE_SELF_ROLES = makeActionStrings("CHANGE_SELF_ROLES");
export const CHANGE_READY_STATE = makeActionStrings("CHANGE_READY_STATE");
export const CHANGE_LINEUP = makeActionStrings("CHANGE_LINEUP");

export const AGENTS = [
  "breach",
  "brimstone",
  "cypher",
  "jett",
  "omen",
  "phoenix",
  "raze",
  "reyna",
  "sage",
  "sova",
  "viper",
];

export const QUEUE_DEFAULT = AGENTS.map((agent) => [agent, []]).reduce(
  (prev, curr) => {
    const [key, val] = curr;
    prev[key] = val;
    return prev;
  },
  {}
);
