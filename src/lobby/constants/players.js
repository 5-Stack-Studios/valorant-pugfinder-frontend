import { makeActionStrings } from "../../common/actionUtils.js";

import reynaPortrait from "../components/assets/agents/reyna.png";
import breachPortrait from "../components/assets/agents/breach.png";
import brimstonePortrait from "../components/assets/agents/brimstone.png";
import cypherPortrait from "../components/assets/agents/cypher.png";
import jettPortrait from "../components/assets/agents/jett.png";
import razePortrait from "../components/assets/agents/raze.png";
import sagePortrait from "../components/assets/agents/sage.png";
import sovaPortrait from "../components/assets/agents/sova.png";
import omenPortrait from "../components/assets/agents/omen.png";
import phoenixPortrait from "../components/assets/agents/phoenix.png";
import viperPortrait from "../components/assets/agents/viper.png";

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

export const AGENTS_TO_PORTRAITS = {
  breach: breachPortrait,
  brimstone: brimstonePortrait,
  cypher: cypherPortrait,
  jett: jettPortrait,
  omen: omenPortrait,
  phoenix: phoenixPortrait,
  raze: razePortrait,
  reyna: reynaPortrait,
  sage: sagePortrait,
  sova: sovaPortrait,
  viper: viperPortrait,
};

export const QUEUE_DEFAULT = AGENTS.map((agent) => [agent, []]).reduce(
  (prev, curr) => {
    const [key, val] = curr;
    prev[key] = val;
    return prev;
  },
  {}
);
