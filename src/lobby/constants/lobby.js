import { makeActionStrings } from "../../common/actionUtils.js";

import bindImage from "../components/assets/bind.png";
import splitImage from "../components/assets/split.jpg";
import havenImage from "../components/assets/haven.jpeg";
import ascentImage from "../components/assets/ascent.png";

export const CREATE_LOBBY = makeActionStrings("CREATE_LOBBY");
export const CLOSE_LOBBY = makeActionStrings("CLOSE_LOBBY");

export const MAPS = [
  "bind",
  "split",
  "haven",
  "ascent"
]

export const MAP_TO_IMAGE = {
  bind: bindImage,
  split: splitImage,
  haven: havenImage,
  ascent: ascentImage,
};