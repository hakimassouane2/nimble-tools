import { berserker, cheat, commander } from "./berserker-cheat-commander";
import { hunter, mage, oathsworn } from "./hunter-mage-oathsworn";
import { shadowmancer, shepherd, songweaver } from "./shadowmancer-shepherd-songweaver";
import { stormshifter, zephyr } from "./stormshifter-zephyr";
import type { HeroClass } from "../types";

export const heroClasses: HeroClass[] = [
  berserker,
  cheat,
  commander,
  hunter,
  mage,
  oathsworn,
  shadowmancer,
  shepherd,
  songweaver,
  stormshifter,
  zephyr,
];
