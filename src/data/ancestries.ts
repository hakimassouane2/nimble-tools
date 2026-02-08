import type { Ancestry } from "./types";

export const ancestries: Ancestry[] = [
  // ─── Common Ancestries ──────────────────────────────────────────────────────

  {
    id: "human",
    name: { en: "Human", fr: "" },
    size: "Medium",
    category: "common",
    trait: {
      name: { en: "Tenacious", fr: "" },
      description: {
        en: "+1 to all skills and Initiative.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        { en: "+1 to all skills", fr: "" },
        { en: "+1 Initiative", fr: "" },
      ],
    },
  },
  {
    id: "dwarf",
    name: { en: "Dwarf", fr: "" },
    size: "Medium",
    category: "common",
    trait: {
      name: { en: "Stout", fr: "" },
      description: {
        en: "+2 max Hit Dice, +1 max Wounds, -1 Speed. You know Dwarvish if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      speed: -1,
      languages: [{ en: "Dwarvish", fr: "" }],
      other: [
        { en: "+2 max Hit Dice", fr: "" },
        { en: "+1 max Wounds", fr: "" },
      ],
    },
  },
  {
    id: "elf",
    name: { en: "Elf", fr: "" },
    size: "Medium",
    category: "common",
    trait: {
      name: { en: "Lithe", fr: "" },
      description: {
        en: "Advantage on Initiative, +1 Speed. You know Elvish if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      speed: 1,
      languages: [{ en: "Elvish", fr: "" }],
      other: [{ en: "Advantage on Initiative", fr: "" }],
    },
  },
  {
    id: "halfling",
    name: { en: "Halfling", fr: "" },
    size: "Small",
    category: "common",
    trait: {
      name: { en: "Elusive", fr: "" },
      description: {
        en: "+1 to Stealth. If you fail a save, you can succeed instead, 1/Safe Rest.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        { en: "+1 Stealth", fr: "" },
        { en: "Auto-succeed a failed save 1/Safe Rest", fr: "" },
      ],
    },
  },
  {
    id: "gnome",
    name: { en: "Gnome", fr: "" },
    size: "Small",
    category: "common",
    trait: {
      name: { en: "Optimistic", fr: "" },
      description: {
        en: "Allow an ally within Reach 6 to reroll any single die, resets when healed to your max HP. -1 Speed. You know Dwarvish if your INT is not negative (but you call it Gnomish, of course).",
        fr: "",
      },
    },
    modifiers: {
      speed: -1,
      languages: [{ en: "Dwarvish/Gnomish", fr: "" }],
      other: [
        { en: "Ally reroll ability (resets when healed to max HP)", fr: "" },
      ],
    },
  },

  // ─── Exotic Ancestries ──────────────────────────────────────────────────────

  {
    id: "bunbun",
    name: { en: "Bunbun", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Bunny Legs", fr: "" },
      description: {
        en: "Before Interposing or after Defending (after damage), hop up to your Speed in any direction for free, 1/encounter.",
        fr: "",
      },
    },
    modifiers: {
      other: [{ en: "Free hop movement up to Speed 1/encounter", fr: "" }],
    },
  },
  {
    id: "dragonborn",
    name: { en: "Dragonborn", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Draconic Heritage", fr: "" },
      description: {
        en: "+1 Armor. When you attack: deal an additional LVL+KEY damage (ignoring armor) divided as you choose among any of your targets; recharges whenever you Safe Rest or gain a Wound. You know Draconic if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      armor: 1,
      languages: [{ en: "Draconic", fr: "" }],
      other: [
        {
          en: "Bonus LVL+KEY damage on attack (recharges on Safe Rest or gaining a Wound)",
          fr: "",
        },
      ],
    },
  },
  {
    id: "fiendkin",
    name: { en: "Fiendkin", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Flameborn", fr: "" },
      description: {
        en: "1 of your neutral saves is advantaged instead. You know Infernal if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      languages: [{ en: "Infernal", fr: "" }],
      other: [{ en: "One neutral save becomes advantaged", fr: "" }],
    },
  },
  {
    id: "goblin",
    name: { en: "Goblin", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Skedaddle", fr: "" },
      description: {
        en: "Can move 2 spaces for free after you become the target of an attack or negative effect (after damage, ignoring difficult terrain). You know Goblin if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      languages: [{ en: "Goblin", fr: "" }],
      other: [{ en: "Free 2-space movement when targeted", fr: "" }],
    },
  },
  {
    id: "kobold",
    name: { en: "Kobold", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Wily", fr: "" },
      description: {
        en: "Force an enemy to reroll a non-critical attack against you, 1/encounter. +3 to Influence friendly characters. Advantage on skill checks related to dragons. You know Draconic if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      languages: [{ en: "Draconic", fr: "" }],
      other: [
        { en: "Enemy reroll non-crit attack 1/encounter", fr: "" },
        { en: "+3 Influence (friendly)", fr: "" },
        { en: "Advantage on dragon-related checks", fr: "" },
      ],
    },
  },
  {
    id: "orc",
    name: { en: "Orc", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Relentless", fr: "" },
      description: {
        en: "When you would drop to 0 HP, you may set your HP to LVL instead, 1/Safe Rest. +1 Might. You know Goblin if your INT is not negative (but you call it Orcish, of course).",
        fr: "",
      },
    },
    modifiers: {
      languages: [{ en: "Goblin/Orcish", fr: "" }],
      other: [
        { en: "Avoid 0 HP (set to LVL) 1/Safe Rest", fr: "" },
        { en: "+1 Might", fr: "" },
      ],
    },
  },
  {
    id: "birdfolk",
    name: { en: "Birdfolk", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Hollow Bones", fr: "" },
      description: {
        en: "You have a fly Speed as long as you are wearing armor no heavier than Leather. Crits against you are Vicious (the attacker rolls 1 additional die). Forced movement moves you twice as far.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        { en: "Fly Speed (max Leather armor)", fr: "" },
        { en: "Crits against you are Vicious", fr: "" },
        { en: "Forced movement doubled", fr: "" },
      ],
    },
  },
  {
    id: "celestial",
    name: { en: "Celestial", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Highborn", fr: "" },
      description: {
        en: "Your disadvantaged save is Neutral instead. You know Celestial if your INT isn't negative.",
        fr: "",
      },
    },
    modifiers: {
      languages: [{ en: "Celestial", fr: "" }],
      other: [{ en: "Disadvantaged save becomes Neutral", fr: "" }],
    },
  },
  {
    id: "changeling",
    name: { en: "Changeling", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "New Place, New Face", fr: "" },
      description: {
        en: "+2 shifting skill points. You may take on the appearance of any ancestry. When you do, you may place your 2 shifting skill points into any 1 skill. 1/day.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        { en: "+2 shifting skill points", fr: "" },
        { en: "Change appearance 1/day", fr: "" },
      ],
    },
  },
  {
    id: "crystalborn",
    name: { en: "Crystalborn", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Reflective Aura", fr: "" },
      description: {
        en: "When you Defend, gain KEY armor and deal KEY damage back to the attacker. 1/encounter.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        {
          en: "+KEY armor and damage reflection on Defend 1/encounter",
          fr: "",
        },
      ],
    },
  },
  {
    id: "dryad-shroomling",
    name: { en: "Dryad/Shroomling", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Danger Pollen/Spores", fr: "" },
      description: {
        en: "Whenever an enemy causes you one or more Wounds, you excrete soporific spores: all adjacent enemies are Dazed. You know Elvish if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      languages: [{ en: "Elvish", fr: "" }],
      other: [{ en: "Daze adjacent enemies when you take Wounds", fr: "" }],
    },
  },
  {
    id: "half-giant",
    name: { en: "Half-Giant", fr: "" },
    size: "Large",
    category: "exotic",
    trait: {
      name: { en: "Strength of Stone", fr: "" },
      description: {
        en: "Force an enemy to reroll a crit against you, 1/encounter. +2 Might. You know Dwarvish if your INT is not negative.",
        fr: "",
      },
    },
    modifiers: {
      languages: [{ en: "Dwarvish", fr: "" }],
      other: [
        { en: "Force enemy crit reroll 1/encounter", fr: "" },
        { en: "+2 Might", fr: "" },
      ],
    },
  },
  {
    id: "minotaur-beastfolk",
    name: { en: "Minotaur/Beastfolk", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Charge", fr: "" },
      description: {
        en: "When you move at least 4 spaces, you can push a creature in your path. Medium: 1 space; Small/Tiny: up to 2 spaces. 1/turn.",
        fr: "",
      },
    },
    modifiers: {
      other: [{ en: "Push creatures when moving 4+ spaces 1/turn", fr: "" }],
    },
  },
  {
    id: "oozeling-construct",
    name: { en: "Oozeling/Construct", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Odd Constitution", fr: "" },
      description: {
        en: "Increment your Hit Dice one step (d6 > d8 > d10 > d12 > d20); they always heal you for the maximum amount. Magical healing always heals you for the minimum amount.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        { en: "Hit Dice upgraded one step and always heal max", fr: "" },
        { en: "Magical healing always heals min", fr: "" },
      ],
    },
  },
  {
    id: "planarbeing",
    name: { en: "Planarbeing", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Planeshift", fr: "" },
      description: {
        en: "Whenever you Defend, you can gain 1 Wound to temporarily phase out of the material plane and ignore the damage. -2 max Wounds.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        { en: "Phase out on Defend (costs 1 Wound)", fr: "" },
        { en: "-2 max Wounds", fr: "" },
      ],
    },
  },
  {
    id: "ratfolk",
    name: { en: "Ratfolk", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Scurry", fr: "" },
      description: {
        en: "Gain +2 armor if you moved on your last turn.",
        fr: "",
      },
    },
    modifiers: {
      armor: 2,
      other: [{ en: "+2 Armor (conditional: must have moved)", fr: "" }],
    },
  },
  {
    id: "stoatling",
    name: { en: "Stoatling", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Small But Ferocious", fr: "" },
      description: {
        en: "Whenever you make a single-target attack against a creature larger than you, roll 1 additional d6 for each size category it is larger. They do the same.",
        fr: "",
      },
    },
    modifiers: {
      other: [
        {
          en: "+1d6 per size difference vs larger creatures (mutual)",
          fr: "",
        },
      ],
    },
  },
  {
    id: "turtlefolk",
    name: { en: "Turtlefolk", fr: "" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Slow & Steady", fr: "" },
      description: {
        en: "+4 Armor, -2 speed.",
        fr: "",
      },
    },
    modifiers: {
      speed: -2,
      armor: 4,
    },
  },
  {
    id: "wyrdling",
    name: { en: "Wyrdling", fr: "" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Chaotic Surge", fr: "" },
      description: {
        en: "Whenever you or a willing ally within Reach 6 casts a tiered spell, you may allow them to roll on the Chaos Table. 1/encounter.",
        fr: "",
      },
    },
    modifiers: {
      other: [{ en: "Chaos Table on tiered spell 1/encounter", fr: "" }],
    },
  },
];
