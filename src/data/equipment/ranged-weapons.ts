import type { RangedWeapon } from "../types";

export const rangedWeapons: RangedWeapon[] = [
  {
    id: "sling",
    name: { en: "Sling", fr: "Fronde" },
    damage: "1d4+DEX Bludgeoning",
    properties: "2-handed, Range 12, Vicious",
    cost: "4 gp",
  },
  {
    id: "javelins",
    name: { en: "Javelins", fr: "Javelots" },
    damage: "1d6+STR Piercing",
    properties: "Range 8, Stack of 4",
    cost: "20 gp",
  },
  {
    id: "throwing-hammers",
    name: { en: "Throwing Hammers", fr: "Marteaux de lancer" },
    damage: "1d8+STR Bludgeoning",
    properties: "Range 4, Stack of 3",
    cost: "25 gp",
  },
  {
    id: "shortbow",
    name: { en: "Shortbow", fr: "Arc court" },
    damage: "1d6+DEX Piercing",
    properties: "2-handed, Range 12",
    cost: "25 gp",
  },
  {
    id: "longbow",
    name: { en: "Longbow", fr: "Arc long" },
    damage: "1d8+DEX Piercing",
    properties: "2-handed, Range 16 (Req. 1 STR)",
    cost: "30 gp",
  },
  {
    id: "crossbow",
    name: { en: "Crossbow", fr: "Arbalète" },
    damage: "4d4+DEX Piercing",
    properties: "2-handed, Load: 1 action, Range 8",
    cost: "60 gp",
  },
  {
    id: "handheld-ballista",
    name: { en: "Handheld Ballista", fr: "Baliste portative" },
    damage: "1d20+DEX Piercing",
    properties: "2-handed, Load: 2 actions, Range 8 (Req. 2 STR)",
    cost: "120 gp",
  },
];
