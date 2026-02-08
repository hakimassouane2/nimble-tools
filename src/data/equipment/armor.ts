import type { ArmorItem } from "../types";

export const armor: ArmorItem[] = [
  // ─── Cloth ──────────────────────────────────────────────────────────────────
  {
    id: "adventurers-garb",
    name: { en: "Adventurer's Garb", fr: "Tenue d'aventurier" },
    category: "cloth",
    armorValue: "2+DEX",
    cost: "10 gp",
  },
  {
    id: "minor-enchantment",
    name: { en: "Minor Enchantment", fr: "Enchantement mineur" },
    category: "cloth",
    armorValue: "3+DEX",
    cost: "100 gp",
  },
  {
    id: "major-enchantment",
    name: { en: "Major Enchantment", fr: "Enchantement majeur" },
    category: "cloth",
    armorValue: "4+DEX",
    cost: "1,000 gp",
  },
  {
    id: "epic-enchantment",
    name: { en: "Epic Enchantment", fr: "Enchantement épique" },
    category: "cloth",
    armorValue: "5+DEX",
    cost: "10,000 gp",
  },

  // ─── Leather ────────────────────────────────────────────────────────────────
  {
    id: "cheap-hides",
    name: { en: "Cheap Hides", fr: "Gambison" },
    category: "leather",
    armorValue: "3+DEX",
    cost: "5 gp",
  },
  {
    id: "ox-hide",
    name: { en: "Ox Hide", fr: "Peau de boeuf" },
    category: "leather",
    armorValue: "4+DEX",
    cost: "45 gp",
  },
  {
    id: "hard-leather",
    name: { en: "Hard Leather", fr: "Cuir clouté" },
    category: "leather",
    armorValue: "5+DEX",
    strReq: 1,
    cost: "300 gp",
  },
  {
    id: "wyrmhide",
    name: { en: "Wyrmhide", fr: "Cuir de wyrm" },
    category: "leather",
    armorValue: "6+DEX",
    strReq: 1,
    cost: "2,000 gp",
  },

  // ─── Mail ───────────────────────────────────────────────────────────────────
  {
    id: "rusty-mail",
    name: { en: "Rusty Mail", fr: "Mailles rouillées" },
    category: "mail",
    armorValue: "6+DEX (max 2)",
    cost: "15 gp",
  },
  {
    id: "chain-shirt",
    name: { en: "Chain Shirt", fr: "Chemise de mailles" },
    category: "mail",
    armorValue: "9+DEX (max 2)",
    strReq: 2,
    cost: "60 gp",
  },
  {
    id: "scale-mail",
    name: { en: "Scale Mail", fr: "Armure d'écailles" },
    category: "mail",
    armorValue: "12+DEX (max 2)",
    strReq: 3,
    cost: "700 gp",
  },
  {
    id: "dragonscale",
    name: { en: "Dragonscale", fr: "Mailles en écailles de dragon" },
    category: "mail",
    armorValue: "15+DEX (max 2)",
    strReq: 4,
    cost: "3,000 gp",
  },

  // ─── Plate ──────────────────────────────────────────────────────────────────
  {
    id: "rusty-plate",
    name: { en: "Rusty Plate", fr: "Armure de plates rouillée" },
    category: "plate",
    armorValue: "10",
    strReq: 2,
    cost: "25 gp",
  },
  {
    id: "half-plate",
    name: { en: "Half Plate", fr: "Armure demi-plates" },
    category: "plate",
    armorValue: "14",
    strReq: 3,
    cost: "200 gp",
  },
  {
    id: "full-plate",
    name: { en: "Full Plate", fr: "Armure de plates complète" },
    category: "plate",
    armorValue: "18",
    strReq: 4,
    cost: "2,000 gp",
  },
  {
    id: "mithril-plate",
    name: { en: "Mithril Plate", fr: "Armure de plates en mithril" },
    category: "plate",
    armorValue: "22",
    strReq: 5,
    cost: "5,000 gp",
  },

  // ─── Shield ─────────────────────────────────────────────────────────────────
  {
    id: "wooden-buckler",
    name: { en: "Wooden Buckler", fr: "Targe en bois" },
    category: "shield",
    armorValue: "2",
    cost: "5 gp",
  },
  {
    id: "iron-shield",
    name: { en: "Iron Shield", fr: "Bouclier de fer" },
    category: "shield",
    armorValue: "4",
    strReq: 2,
    cost: "80 gp",
  },
  {
    id: "tower-shield",
    name: { en: "Tower Shield", fr: "Pavois" },
    category: "shield",
    armorValue: "6",
    strReq: 3,
    cost: "1,500 gp",
  },
  {
    id: "dragon-shield",
    name: { en: "Dragon Shield", fr: "Bouclier draconique" },
    category: "shield",
    armorValue: "8",
    strReq: 3,
    cost: "9,000 gp",
  },
];
