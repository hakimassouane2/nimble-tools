import type { Background } from "./types";

export const backgrounds: Background[] = [
  {
    id: "back-out-of-retirement",
    name: { en: "Back Out of Retirement", fr: "" },
    description: {
      en: "You've forgotten more than most adventurers these days know!",
      fr: "",
    },
    effects: [
      {
        en: "You may gain 1 Wound to use an ability or cast a spell as if you were 1 level higher.",
        fr: "",
      },
      {
        en: "Your age has long since started to show. -1 max Wounds.",
        fr: "",
      },
    ],
  },
  {
    id: "devoted-protector",
    name: { en: "Devoted Protector", fr: "" },
    description: {
      en: "Choose 1 ally in your party. You can survive +3 max Wounds as long as they are nearby.",
      fr: "",
    },
    effects: [
      {
        en: "+3 max Wounds as long as chosen ally is nearby.",
        fr: "",
      },
      {
        en: "Whenever chosen ally takes a Wound, you also take a Wound.",
        fr: "",
      },
    ],
  },
  {
    id: "academy-dropout",
    name: { en: "Academy Dropout", fr: "" },
    description: {
      en: "School just isn't for everyone! You learn by experience in the real world.",
      fr: "",
    },
    effects: [
      {
        en: "Learn any 1 Utility Spell.",
        fr: "",
      },
    ],
  },
  {
    id: "made-a-bad-choice",
    name: { en: "Made a BAD Choice", fr: "" },
    description: {
      en: "Start with extra gold or a magical item, but gain a curse or enemy.",
      fr: "",
    },
    effects: [
      {
        en: "Start with 500 or 1000 extra gold, OR an uncommon/rare magical item.",
        fr: "",
      },
      {
        en: "Gain an equally powerful curse or enemy who wants it back.",
        fr: "",
      },
      {
        en: "Your GM may allow you to choose another background.",
        fr: "",
      },
    ],
  },
  {
    id: "haunted-past",
    name: { en: "Haunted Past", fr: "" },
    description: {
      en: "You are haunted by voices that occasionally give you cryptic advice.",
      fr: "",
    },
    effects: [
      {
        en: "Cryptic advice from voices (sometimes helpful, sometimes harmful).",
        fr: "",
      },
      {
        en: "Advantage against fear.",
        fr: "",
      },
    ],
  },
  {
    id: "ear-to-the-ground",
    name: { en: "Ear to the Ground", fr: "" },
    description: {
      en: "You have a knack for picking up gossip.",
      fr: "",
    },
    effects: [
      {
        en: "Advantage on checks to know or obtain gossip for recent events (less than 1 year).",
        fr: "",
      },
    ],
  },
  {
    id: "what-ive-been-around",
    name: { en: "What? I've Been Around.", fr: "" },
    description: {
      en: "1/per location: You happen to know JUST the person who can help.",
      fr: "",
    },
    effects: [
      {
        en: "1/per location: You know someone helpful. Roll 1d20 to determine their disposition.",
        fr: "",
      },
      {
        en: "1-5: They want you DEAD. 6-12: You owe them money. 13-19: They can be convinced to help. 20: They are your biggest fan.",
        fr: "",
      },
    ],
  },
  {
    id: "acrobat",
    name: { en: "Acrobat", fr: "" },
    description: {
      en: "A nimble performer with exceptional agility.",
      fr: "",
    },
    effects: [
      {
        en: "Can be thrown by a larger ally, REALLY far.",
        fr: "",
      },
      {
        en: "Half damage from falling and forced movement.",
        fr: "",
      },
    ],
  },
  {
    id: "wild-one",
    name: { en: "Wild One", fr: "" },
    description: {
      en: "Wild creatures are less frightened of you and more willing to aid you.",
      fr: "",
    },
    effects: [
      {
        en: "+1 Naturecraft.",
        fr: "",
      },
      {
        en: "While Field Resting, roll your Hit Dice with advantage while in the wild.",
        fr: "",
      },
      {
        en: "Wild creatures are friendlier toward you.",
        fr: "",
      },
    ],
  },
  {
    id: "fey-touched",
    name: { en: "Fey Touched", fr: "" },
    description: {
      en: "Touched by fey magic, granting magical resistance but metal vulnerability.",
      fr: "",
    },
    effects: [
      {
        en: "Half damage from all magical effects.",
        fr: "",
      },
      {
        en: "Double damage from weapons made of metal (before armor).",
        fr: "",
      },
    ],
  },
  {
    id: "survivalist",
    name: { en: "Survivalist", fr: "" },
    description: {
      en: "You never run out of your own personal rations.",
      fr: "",
    },
    effects: [
      {
        en: "Never run out of personal rations.",
        fr: "",
      },
      {
        en: "Advantage against poison saves.",
        fr: "",
      },
      {
        en: "+1 max Hit Die.",
        fr: "",
      },
    ],
  },
  {
    id: "home-at-sea",
    name: { en: "Home at Sea", fr: "" },
    description: {
      en: "Most at home on the water.",
      fr: "",
    },
    effects: [
      {
        en: "Recover twice as many Wounds and HP while resting on a ship or near water.",
        fr: "",
      },
      {
        en: "Can fill in for a first mate or captain.",
        fr: "",
      },
      {
        en: "Advantage on water-related skill checks.",
        fr: "",
      },
    ],
  },
  {
    id: "at-home-underground",
    name: { en: "At Home Underground", fr: "" },
    description: {
      en: "You thrive beneath the earth.",
      fr: "",
    },
    effects: [
      {
        en: "Dig twice as fast as others.",
        fr: "",
      },
      {
        en: "Underground safe resting locations count as Lavish lodging.",
        fr: "",
      },
      {
        en: "Struggle to rest (INT save) while it's raining.",
        fr: "",
      },
    ],
  },
  {
    id: "raised-by-goblins",
    name: { en: "Raised by Goblins", fr: "" },
    description: {
      en: "You speak Goblin natively.",
      fr: "",
    },
    effects: [
      {
        en: "Speak Goblin natively.",
        fr: "",
      },
      {
        en: "Automatically notice and avoid crudely-made traps.",
        fr: "",
      },
      {
        en: "Advantage to notice and disarm sophisticated traps.",
        fr: "",
      },
    ],
  },
  {
    id: "history-buff",
    name: { en: "History Buff", fr: "" },
    description: {
      en: "A scholar of ancient knowledge.",
      fr: "",
    },
    effects: [
      {
        en: "Advantage on all Lore checks for events/items more than 100 years old.",
        fr: "",
      },
    ],
  },
  {
    id: "former-con-artist",
    name: { en: "(Former) Con Artist", fr: "" },
    description: {
      en: "A reformed (or not) swindler with useful contacts.",
      fr: "",
    },
    effects: [
      {
        en: "Forge documents or mimic voices flawlessly.",
        fr: "",
      },
      {
        en: "Criminal contact in most major cities.",
        fr: "",
      },
      {
        en: "Reputation often precedes you (must prove trustworthiness).",
        fr: "",
      },
    ],
  },
  {
    id: "secretly-undead",
    name: { en: "(Secretly) Undead", fr: "" },
    description: {
      en: "You harbor a dark secret about your true nature.",
      fr: "",
    },
    effects: [
      {
        en: "Immune to disease.",
        fr: "",
      },
      {
        en: "Do not need to eat, drink, or breathe.",
        fr: "",
      },
      {
        en: "Children, animals, and Celestials are uneasy in your presence.",
        fr: "",
      },
    ],
  },
  {
    id: "taste-for-the-finer-things",
    name: { en: "Taste for the Finer Things", fr: "" },
    description: {
      en: "You know the customs of high society.",
      fr: "",
    },
    effects: [
      {
        en: "Up-to-date knowledge of upper class customs and dress.",
        fr: "",
      },
      {
        en: "May know upper class secrets.",
        fr: "",
      },
      {
        en: "Advantage on Influence checks with the upper class.",
        fr: "",
      },
    ],
  },
  {
    id: "fearless",
    name: { en: "Fearless", fr: "" },
    description: {
      en: "Nothing scares you.",
      fr: "",
    },
    effects: [
      {
        en: "Immune to the Frightened condition.",
        fr: "",
      },
      {
        en: "+1 Initiative.",
        fr: "",
      },
      {
        en: "-1 Armor.",
        fr: "",
      },
    ],
  },
  {
    id: "so-dumb-im-smart-sometimes",
    name: { en: "So Dumb I'm Smart Sometimes", fr: "" },
    description: {
      en: "Your lack of intelligence sometimes works in your favor.",
      fr: "",
    },
    effects: [
      {
        en: "Reroll an INT-related skill check, 1/day.",
        fr: "",
      },
      {
        en: "Reroll a failed INT save with advantage, 1/Safe Rest.",
        fr: "",
      },
    ],
    requirement: { stat: "INT", maxValue: 0 },
  },
  {
    id: "wily-underdog",
    name: { en: "Wily Underdog", fr: "" },
    description: {
      en: "Your lack of strength taught you to compensate.",
      fr: "",
    },
    effects: [
      {
        en: "Reroll a failed STR-related roll using another stat instead, 1/day.",
        fr: "",
      },
    ],
    requirement: { stat: "STR", maxValue: 0 },
  },
  {
    id: "bumblewise",
    name: { en: "Bumblewise", fr: "" },
    description: {
      en: "Your clumsiness sometimes becomes brilliance.",
      fr: "",
    },
    effects: [
      {
        en: "A result of 1 or less on any WIL-related roll counts as a natural 20.",
        fr: "",
      },
    ],
    requirement: { stat: "WIL", maxValue: 0 },
  },
  {
    id: "accidental-acrobat",
    name: { en: "Accidental Acrobat", fr: "" },
    description: {
      en: "Your lack of dexterity gives you second chances.",
      fr: "",
    },
    effects: [
      {
        en: "Reroll failed DEX-related rolls.",
        fr: "",
      },
      {
        en: "If the reroll also fails, the consequences are BAD.",
        fr: "",
      },
    ],
    requirement: { stat: "DEX", maxValue: 0 },
  },
  {
    id: "tradesman-artisan",
    name: { en: "Tradesman/Artisan", fr: "" },
    description: {
      en: "Choose a profession (Baker, Smith, Stonemason, etc.).",
      fr: "",
    },
    effects: [
      {
        en: "Checks related to your chosen profession are made with advantage.",
        fr: "",
      },
      {
        en: "Retain special knowledge related to your profession.",
        fr: "",
      },
    ],
  },
];
