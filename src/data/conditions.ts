import type { Condition } from "./types";

export const conditions: Condition[] = [
  {
    id: "blinded",
    name: { en: "Blinded", fr: "" },
    description: { en: "Can't see.", fr: "" },
    effects: [
      { en: "Attacks against you have advantage.", fr: "" },
      { en: "Your attacks have disadvantage.", fr: "" },
    ],
  },
  {
    id: "bloodied",
    name: { en: "Bloodied", fr: "" },
    description: { en: "At half HP or less.", fr: "" },
    effects: [],
  },
  {
    id: "charmed",
    name: { en: "Charmed", fr: "" },
    description: { en: "Sees the charmer as an ally.", fr: "" },
    effects: [
      { en: "Charmer has advantage on social interactions with you.", fr: "" },
    ],
  },
  {
    id: "dazed",
    name: { en: "Dazed", fr: "" },
    description: {
      en: "Heroes: lose 1 action; monsters: can perform one less action on their next turn.",
      fr: "",
    },
    effects: [
      { en: "Heroes: lose 1 action.", fr: "" },
      { en: "Monsters: can perform one less action on their next turn.", fr: "" },
    ],
  },
  {
    id: "dying",
    name: { en: "Dying", fr: "" },
    description: { en: "At 0 HP.", fr: "" },
    effects: [
      { en: "Taking damage while dying causes 2 Wounds.", fr: "" },
      { en: "A crit causes 3 Wounds instead.", fr: "" },
    ],
  },
  {
    id: "frightened",
    name: { en: "Frightened", fr: "" },
    description: {
      en: "Disadvantage on rolls when source of fear is nearby; speed halved when moving closer to it.",
      fr: "",
    },
    effects: [
      { en: "Disadvantage on rolls when source of fear is nearby.", fr: "" },
      { en: "Speed halved when moving closer to source of fear.", fr: "" },
    ],
  },
  {
    id: "grappled",
    name: { en: "Grappled", fr: "" },
    description: { en: "Cannot move.", fr: "" },
    effects: [
      { en: "Cannot move.", fr: "" },
      { en: "Attacks against you have advantage.", fr: "" },
    ],
  },
  {
    id: "restrained",
    name: { en: "Restrained", fr: "" },
    description: {
      en: "Functions like Grappled, but is caused by objects (e.g., chains, rope, roots) and ignores size restrictions.",
      fr: "",
    },
    effects: [
      { en: "Cannot move.", fr: "" },
      { en: "Attacks against you have advantage.", fr: "" },
      {
        en: "Can be ended through any logical means, such as picking a lock or cutting/burning rope.",
        fr: "",
      },
    ],
  },
  {
    id: "hampered",
    name: { en: "Hampered", fr: "" },
    description: {
      en: "Any creature with their actions or movement reduced (e.g., Dazed, Grappled, Prone, Difficult Terrain).",
      fr: "",
    },
    effects: [
      {
        en: "A meta-condition indicating actions or movement are reduced.",
        fr: "",
      },
    ],
  },
  {
    id: "incapacitated",
    name: { en: "Incapacitated", fr: "" },
    description: { en: "Can't do anything.", fr: "" },
    effects: [
      { en: "Attacks against you have advantage.", fr: "" },
      { en: "Melee attacks that hit, crit.", fr: "" },
    ],
  },
  {
    id: "invisible",
    name: { en: "Invisible", fr: "" },
    description: { en: "Cannot be seen.", fr: "" },
    effects: [
      { en: "Your attacks have advantage.", fr: "" },
      { en: "Attacks against you have disadvantage.", fr: "" },
    ],
  },
  {
    id: "petrified",
    name: { en: "Petrified", fr: "" },
    description: {
      en: "Incapacitated. You have all the benefits and drawbacks of being a rock!",
      fr: "",
    },
    effects: [
      { en: "Incapacitated.", fr: "" },
      {
        en: "Immune to most damage except from large explosions, picks, or similar tools.",
        fr: "",
      },
    ],
  },
  {
    id: "poisoned",
    name: { en: "Poisoned", fr: "" },
    description: { en: "Disadvantage on rolls.", fr: "" },
    effects: [{ en: "Disadvantage on rolls.", fr: "" }],
  },
  {
    id: "prone",
    name: { en: "Prone", fr: "" },
    description: {
      en: "Movement costs twice as much, and disadvantage on attacks.",
      fr: "",
    },
    effects: [
      { en: "Movement costs twice as much.", fr: "" },
      { en: "Disadvantage on attacks.", fr: "" },
      { en: "Melee attacks against you have advantage.", fr: "" },
      { en: "Ranged attacks against you have disadvantage.", fr: "" },
      { en: "Spend 3 spaces of your Speed to stand up.", fr: "" },
    ],
  },
  {
    id: "riding",
    name: { en: "Riding", fr: "" },
    description: {
      en: "You move with the creature you are riding.",
      fr: "",
    },
    effects: [
      { en: "You move with the creature you are riding.", fr: "" },
      {
        en: "Any attacks that miss you, strike the creature you are riding.",
        fr: "",
      },
    ],
  },
  {
    id: "slowed",
    name: { en: "Slowed", fr: "" },
    description: { en: "Speed halved during your next turn.", fr: "" },
    effects: [{ en: "Speed halved during your next turn.", fr: "" }],
  },
  {
    id: "taunted",
    name: { en: "Taunted", fr: "" },
    description: {
      en: "Disadvantage on attacks except against the most recent taunter.",
      fr: "",
    },
    effects: [
      {
        en: "Disadvantage on attacks except against the most recent taunter.",
        fr: "",
      },
    ],
  },
  {
    id: "wounded",
    name: { en: "Wounded", fr: "" },
    description: {
      en: "Has any Wounds (typically 6 Wounds and a hero is dead).",
      fr: "",
    },
    effects: [
      { en: "Has any Wounds.", fr: "" },
      { en: "Typically 6 Wounds and a hero is dead.", fr: "" },
    ],
  },
  // Minor statuses
  {
    id: "smoldering",
    name: { en: "Smoldering", fr: "" },
    description: {
      en: "This condition does nothing on its own, though some spells and abilities have additional effects against Smoldering creatures.",
      fr: "",
    },
    effects: [
      { en: "Does nothing on its own.", fr: "" },
      {
        en: "Some fire spells and abilities have additional effects against Smoldering creatures.",
        fr: "",
      },
      { en: "Ends when combat ends.", fr: "" },
    ],
    minor: true,
  },
  {
    id: "charged",
    name: { en: "Charged", fr: "" },
    description: {
      en: "Whenever you take lightning damage you are Charged for 1 minute.",
      fr: "",
    },
    effects: [
      { en: "Does nothing on its own.", fr: "" },
      {
        en: "Some lightning spells and abilities have additional effects against Charged creatures.",
        fr: "",
      },
      { en: "Gained when taking lightning damage, lasts 1 minute.", fr: "" },
      { en: "Ends when combat ends.", fr: "" },
    ],
    minor: true,
  },
  {
    id: "distracted",
    name: { en: "Distracted", fr: "" },
    description: {
      en: "A target is distracted if it is adjacent to or Taunted by an ally, or if it cannot see you.",
      fr: "",
    },
    effects: [
      { en: "Does nothing on its own.", fr: "" },
      {
        en: "Triggered when target is adjacent to or Taunted by an ally, or if it cannot see you.",
        fr: "",
      },
      {
        en: "Some abilities have additional effects against Distracted targets.",
        fr: "",
      },
      { en: "Ends when combat ends.", fr: "" },
    ],
    minor: true,
  },
];
