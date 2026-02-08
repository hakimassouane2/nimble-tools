import type { HeroClass } from "../types";

// ─── Berserker ──────────────────────────────────────────────────────────────

export const berserker: HeroClass = {
  id: "berserker",
  name: { en: "Berserker", fr: "" },
  description: {
    en: "An unstoppable force of wrath and ruin. The longer a fight goes on, the more your Rage intensifies, fueling devastating attacks through Fury Dice.",
    fr: "",
  },
  complexity: 2,
  keyStats: ["STR", "DEX"],
  hitDie: "1d12",
  startingHp: 20,
  saves: { strong: "STR", weak: "INT" },
  armorProficiency: [{ en: "None", fr: "" }],
  weaponProficiency: [{ en: "All STR weapons", fr: "" }],
  startingGear: [
    { en: "Battleaxe", fr: "" },
    { en: "Rations (meat)", fr: "" },
    { en: "Rope (50 ft.)", fr: "" },
  ],
  abilities: [
    // ── Level 1 ──
    {
      level: 1,
      name: { en: "Rage", fr: "" },
      description: {
        en: "(1/turn) Action: Roll a Fury Die (1d4) and set it aside. Add it to every STR attack you make. You can have a max of KEY Fury Dice; they are lost when your Rage ends.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "That All You Got?!", fr: "" },
      description: {
        en: "When you are attacked, you may expend 1 or more Fury Dice to reduce the damage taken by STR+DEX for each die spent.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 2 ──
    {
      level: 2,
      name: { en: "Intensifying Fury", fr: "" },
      description: {
        en: "If you are Raging at the beginning of your turn, roll 1 Fury Die for free.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "One with the Ancients", fr: "" },
      description: {
        en: "(1/Safe Rest) When faced with a decision about direction or course of action, call upon your ancestors to guide you toward the most dangerous or challenging path.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 3 ──
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Berserker subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Bloodlust", fr: "" },
      description: {
        en: "Expend 1 or more Fury Dice on your turn, move DEX spaces per die spent for free.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 4 ──
    {
      level: 4,
      name: { en: "Enduring Rage", fr: "" },
      description: {
        en: "While Dying, you Rage automatically for free at the beginning of your turn, have a max of 2 actions instead of 1, and ignore the STR saves to make attacks.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Savage Arsenal", fr: "" },
      description: {
        en: "Choose 1 ability from the Savage Arsenal.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 5 ──
    {
      level: 5,
      name: { en: "Rage (2)", fr: "" },
      description: {
        en: "Whenever you Rage, gain 2 Fury Dice instead.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 6 ──
    {
      level: 6,
      name: { en: "Savage Arsenal (2)", fr: "" },
      description: {
        en: "Choose a 2nd Savage Arsenal ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Intensifying Fury (2)", fr: "" },
      description: {
        en: "Your Fury Dice are now d6s.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 7 ──
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Berserker subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // ── Level 8 ──
    {
      level: 8,
      name: { en: "Savage Arsenal (3)", fr: "" },
      description: {
        en: "Choose a 3rd Savage Arsenal ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 9 ──
    {
      level: 9,
      name: { en: "Intensifying Fury (3)", fr: "" },
      description: {
        en: "Your Fury Dice are now d8s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 10 ──
    {
      level: 10,
      name: { en: "Savage Arsenal (4)", fr: "" },
      description: {
        en: "Choose a 4th Savage Arsenal ability.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 11 ──
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Berserker subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // ── Level 12 ──
    {
      level: 12,
      name: { en: "Savage Arsenal (5)", fr: "" },
      description: {
        en: "Choose a 5th Savage Arsenal ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 13 ──
    {
      level: 13,
      name: { en: "Intensifying Fury (4)", fr: "" },
      description: {
        en: "Your Fury Dice are now d10s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 14 ──
    {
      level: 14,
      name: { en: "Savage Arsenal (6)", fr: "" },
      description: {
        en: "Choose a 6th Savage Arsenal ability.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 15 ──
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Berserker subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // ── Level 16 ──
    {
      level: 16,
      name: { en: "Savage Arsenal (7)", fr: "" },
      description: {
        en: "Choose a 7th Savage Arsenal ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 17 ──
    {
      level: 17,
      name: { en: "Intensifying Fury (5)", fr: "" },
      description: {
        en: "Your Fury Dice are now d12s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 18 ──
    {
      level: 18,
      name: { en: "Deep Rage", fr: "" },
      description: {
        en: "Dropping to 0 HP does not cause your Rage to end.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 19 ──
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 20 ──
    {
      level: 20,
      name: { en: "Boundless Rage", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. Anytime you roll less than 6 on a Fury Die, change it to 6 instead.",
        fr: "",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Path of the Mountainheart ──
    {
      id: "path-of-the-mountainheart",
      name: { en: "Path of the Mountainheart", fr: "" },
      description: {
        en: "An indomitable path focused on endurance, resilience, and surviving what should kill you.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Stone's Resilience", fr: "" },
          description: {
            en: "Whenever you expend Fury Dice to reduce incoming damage, add the value of the die to the amount reduced.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Mountainous Tenacity", fr: "" },
          description: {
            en: "Whenever you expend Hit Dice to recover HP, for every 10 HP you would recover, you may heal 1 Wound instead.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Unbreakable", fr: "" },
          description: {
            en: "(1/encounter) While Raging, if you would suffer your last Wound or other negative condition of your choice, you don't.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Titan's Fury", fr: "" },
          description: {
            en: "After you miss an attack or are crit by an enemy, Rage for free.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Mountain's Endurance", fr: "" },
          description: {
            en: "While Dying, if an attack against you would be a crit, the attack is rerolled instead (when-crit abilities still trigger).",
            fr: "",
          },
        },
      ],
    },
    // ── Path of the Red Mist ──
    {
      id: "path-of-the-red-mist",
      name: { en: "Path of the Red Mist", fr: "" },
      description: {
        en: "A frenzied path focused on relentless offense, blood frenzy, and unstoppable brutality.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Blood Frenzy", fr: "" },
          description: {
            en: "(1/turn) While Raging, whenever you crit or kill an enemy, change 1 Fury Die to the maximum.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Savage Awareness", fr: "" },
          description: {
            en: "Advantage on Perception checks to notice or track blood. Blindsight 2 while Raging: ignore the Blinded condition and see through darkness and Invisibility within that Range.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Unstoppable Brutality", fr: "" },
          description: {
            en: "While Raging, you may gain 1 Wound to reroll any attack or save.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Opportunistic Frenzy", fr: "" },
          description: {
            en: "While Raging, you can make opportunity attacks without disadvantage, and you may make them whenever an enemy enters your melee weapon's reach.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Onslaught", fr: "" },
          description: {
            en: "While Raging, gain +2 speed. (1/round) You may move for free.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Savage Arsenal", fr: "" },
    selectAtLevels: [4, 6, 8, 10, 12, 14, 16],
    abilities: [
      {
        name: { en: "Death Blow", fr: "" },
        description: {
          en: "After you deal damage from a crit, you may expend any number of Fury Dice. Sum the dice and deal double that amount of damage.",
          fr: "",
        },
      },
      {
        name: { en: "Deathless Rage", fr: "" },
        description: {
          en: "(1/turn) While Dying, you may suffer 1 Wound to gain 1 action.",
          fr: "",
        },
      },
      {
        name: { en: "Eager for Battle", fr: "" },
        description: {
          en: "Gain advantage on Initiative. Move 2x DEX spaces for free on your first turn each encounter.",
          fr: "",
        },
      },
      {
        name: { en: "Into the Fray", fr: "" },
        description: {
          en: "Action: Leap up to 2x DEX spaces toward an enemy. If you land adjacent to at least 2 enemies, make an attack against 1 of them for free.",
          fr: "",
        },
      },
      {
        name: { en: "Mighty Endurance", fr: "" },
        description: {
          en: "You can now survive an additional 4 Wounds before death.",
          fr: "",
        },
      },
      {
        name: { en: "MORE BLOOD!", fr: "" },
        description: {
          en: "Whenever an enemy crits you, gain 1 Fury Die.",
          fr: "",
        },
      },
      {
        name: { en: "Rampage", fr: "" },
        description: {
          en: "(1/turn) After you land a hit, you may treat your next attack this turn as if you rolled that same amount instead of rolling again.",
          fr: "",
        },
      },
      {
        name: { en: "Swift Fury", fr: "" },
        description: {
          en: "Whenever you gain one or more Fury Dice, move up to DEX spaces for free, ignoring difficult terrain.",
          fr: "",
        },
      },
      {
        name: { en: "Thunderous Steps", fr: "" },
        description: {
          en: "After moving at least 4 spaces while Raging, deal STR Bludgeoning damage to all adjacent creatures where you stop.",
          fr: "",
        },
      },
      {
        name: { en: "Unstoppable Force", fr: "" },
        description: {
          en: "While Dying and Raging, taking damage causes 1 Wound (instead of 2) and critical hits inflict 2 Wounds (instead of 3).",
          fr: "",
        },
      },
      {
        name: { en: "Whirlwind", fr: "" },
        description: {
          en: "2 actions: Attack ALL targets within your melee weapon's reach.",
          fr: "",
        },
      },
      {
        name: { en: "You're Next!", fr: "" },
        description: {
          en: "Action: While Raging, make a Might skill check to demoralize an enemy within Reach 12 (DC: their current HP). On success, they immediately flee the battle.",
          fr: "",
        },
      },
    ],
  },
};

// ─── The Cheat ──────────────────────────────────────────────────────────────

export const cheat: HeroClass = {
  id: "the-cheat",
  name: { en: "The Cheat", fr: "" },
  description: {
    en: "A sneaky, backstabbing, dirty-fighting rogue. Break the rules, manipulate dice rolls, and deliver devastating Sneak Attacks from the shadows.",
    fr: "",
  },
  complexity: 1,
  keyStats: ["DEX", "INT"],
  hitDie: "1d6",
  startingHp: 10,
  saves: { strong: "DEX", weak: "WIL" },
  armorProficiency: [{ en: "Leather Armor", fr: "" }],
  weaponProficiency: [{ en: "DEX Weapons", fr: "" }],
  startingGear: [
    { en: "2 Daggers", fr: "" },
    { en: "Sling", fr: "" },
    { en: "Cheap Hides", fr: "" },
    { en: "Chalk", fr: "" },
  ],
  abilities: [
    // ── Level 1 ──
    {
      level: 1,
      name: { en: "Sneak Attack", fr: "" },
      description: {
        en: "(1/turn) When you crit, deal +1d6 damage.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Vicious Opportunist", fr: "" },
      description: {
        en: "(1/turn) When you hit a Distracted target with a melee attack, you may change the Primary Die roll to whatever you like (changing it to the max value counts as a crit).",
        fr: "",
      },
      type: "core",
    },
    // ── Level 2 ──
    {
      level: 2,
      name: { en: "Cheat", fr: "" },
      description: {
        en: "(1/round) Move or Hide for free. (1/day) Change any skill check to 10+INT. If you roll less than 10 on Initiative, change it to 10. Advantage on skill checks in games, competitions, or wagers.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 3 ──
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Cheat subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Sneak Attack (2)", fr: "" },
      description: {
        en: "Your Sneak Attack becomes 1d8.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Thieves' Cant", fr: "" },
      description: {
        en: "You learn the secret language of rogues and scoundrels.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 4 ──
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Underhanded Ability", fr: "" },
      description: {
        en: "Choose an Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 5 ──
    {
      level: 5,
      name: { en: "Twist the Blade", fr: "" },
      description: {
        en: "Action: Change one of your Sneak Attack dice to whatever you like.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Quick Read", fr: "" },
      description: {
        en: "(1/encounter) Advantage on an Assess check. (1/day) Advantage on an Examination check.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 6 ──
    {
      level: 6,
      name: { en: "Underhanded Ability (2)", fr: "" },
      description: {
        en: "Choose a 2nd Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "THAT'S Not What Happened!", fr: "" },
      description: {
        en: "(1/Safe Rest) Action: After a Distracted enemy attacks you, change the Primary Die roll to whatever you like (changing it to the minimum counts as a miss).",
        fr: "",
      },
      type: "core",
    },
    // ── Level 7 ──
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Cheat subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Sneak Attack (3)", fr: "" },
      description: {
        en: "Your Sneak Attack becomes 2d8.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 8 ──
    {
      level: 8,
      name: { en: "Underhanded Ability (3)", fr: "" },
      description: {
        en: "Choose a 3rd Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 9 ──
    {
      level: 9,
      name: { en: "Sneak Attack (4)", fr: "" },
      description: {
        en: "Your Sneak Attack becomes 2d10.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 10 ──
    {
      level: 10,
      name: { en: "Underhanded Ability (4)", fr: "" },
      description: {
        en: "Choose a 4th Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 11 ──
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Cheat subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Sneak Attack (5)", fr: "" },
      description: {
        en: "Your Sneak Attack becomes 2d12.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 12 ──
    {
      level: 12,
      name: { en: "Underhanded Ability (5)", fr: "" },
      description: {
        en: "Choose a 5th Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 13 ──
    {
      level: 13,
      name: { en: "Twist the Blade (2)", fr: "" },
      description: {
        en: "(1/turn) You can Twist the Blade for free.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 14 ──
    {
      level: 14,
      name: { en: "Underhanded Ability (6)", fr: "" },
      description: {
        en: "Choose a 6th Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 15 ──
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Cheat subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Sneak Attack (6)", fr: "" },
      description: {
        en: "Your Sneak Attack becomes 2d20.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 16 ──
    {
      level: 16,
      name: { en: "Underhanded Ability (7)", fr: "" },
      description: {
        en: "Choose a 7th Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 17 ──
    {
      level: 17,
      name: { en: "Sneak Attack (7)", fr: "" },
      description: {
        en: "Your Sneak Attack becomes 3d20.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 18 ──
    {
      level: 18,
      name: { en: "Underhanded Ability (8)", fr: "" },
      description: {
        en: "Choose an 8th Underhanded Ability.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 19 ──
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 20 ──
    {
      level: 20,
      name: { en: "Supreme Execution", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. When you attack with a blade, you do not require targets to be Distracted to trigger Vicious Opportunist.",
        fr: "",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Tools of the Silent Blade ──
    {
      id: "tools-of-the-silent-blade",
      name: { en: "Tools of the Silent Blade", fr: "" },
      description: {
        en: "A murderous path focused on stealth kills, invisibility, and eliminating targets without a trace.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Amidst All This Commotion...", fr: "" },
          description: {
            en: "If a creature dies while you Sneak Attack them, you may turn Invisible until you attack again or until the beginning of your next turn.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Leave No Trace", fr: "" },
          description: {
            en: "Advantage on Stealth checks when you are at full health.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Cunning Strike", fr: "" },
          description: {
            en: "(2/encounter) When you land a Sneak Attack, force the target to make a STR save (DC 10+INT). On failure, your Sneak Attack dice deal maximum damage instead of rolling.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Professional Skulker", fr: "" },
          description: {
            en: "Gain a climbing speed and advantage on Stealth checks (replaces Leave No Trace).",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "KILL", fr: "" },
          description: {
            en: "When you crit an enemy with fewer max HP than you, it dies.",
            fr: "",
          },
        },
      ],
    },
    // ── Tools of the Scoundrel ──
    {
      id: "tools-of-the-scoundrel",
      name: { en: "Tools of the Scoundrel", fr: "" },
      description: {
        en: "A trickster path focused on dirty fighting, smooth talking, and surviving through cunning.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Low Blow", fr: "" },
          description: {
            en: "When you Sneak Attack, spend 2 additional actions to Incapacitate your target for their next turn on a failed STR save (DC 10+INT). Save or fail, they are Taunted by you.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Sweet Talk", fr: "" },
          description: {
            en: "Gain advantage on all Influence checks with NPCs you've just met for the first time. Lasts until you fail an Influence check with them or until you meet a 2nd time.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Pocket Sand", fr: "" },
          description: {
            en: "(2/encounter) When you Defend against a melee attack, Blind the attacker until the start of their next turn and force them to reroll the attack.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Escape Plan", fr: "" },
          description: {
            en: "(1/Safe Rest) When you would drop to 0 HP or gain a Wound, you don't. Instead, turn Invisible for 1 minute or until you attack.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Heads I Win, Tails You Lose", fr: "" },
          description: {
            en: "(1/encounter) Attacks you make this round don't miss, you crit on 1 less than normally needed, and you gain LVL temp HP.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Underhanded Abilities", fr: "" },
    selectAtLevels: [4, 6, 8, 10, 12, 14, 16, 18],
    abilities: [
      {
        name: { en: '"Creative" Accounting', fr: "" },
        description: {
          en: "Steal up to INT actions from your next turn (gain up to INT actions now; next turn, subtract the number stolen). Cannot use 2 turns in a row.",
          fr: "",
        },
      },
      {
        name: { en: "Exploit Weakness", fr: "" },
        description: {
          en: "Action: Make a contested INT check against an enemy. If you win, you can use Vicious Opportunist against them even if they are not Distracted. Lasts 1 minute or until used on another target.",
          fr: "",
        },
      },
      {
        name: { en: "Feinting Attack", fr: "" },
        description: {
          en: "If you miss for the 2nd time in a single round, you may change the primary die roll to any result instead.",
          fr: "",
        },
      },
      {
        name: { en: "How'd YOU Get Here?!", fr: "" },
        description: {
          en: '2 actions: "Teleport" up to 4 spaces away, adjacent to a Distracted target, and make a melee attack. If you crit, you may teleport again.',
          fr: "",
        },
      },
      {
        name: { en: "I'm Outta Here!", fr: "" },
        description: {
          en: "When an ally within 4 spaces is crit, turn invisible until the end of your next turn and move up to half your speed for free.",
          fr: "",
        },
      },
      {
        name: { en: "Misdirection", fr: "" },
        description: {
          en: "Gain INT armor. Whenever you Defend, you may halve the damage instead.",
          fr: "",
        },
      },
      {
        name: { en: "Steal Tempo", fr: "" },
        description: {
          en: "When you land a critical hit for the second time on a turn, your target loses 1 action and you gain 1 action.",
          fr: "",
        },
      },
      {
        name: { en: "Sunder Armor (Medium)", fr: "" },
        description: {
          en: "Action: When you crit an enemy with medium armor, sunder their armor. Until the start of your next turn, ALL melee attacks against that target ignore its armor.",
          fr: "",
        },
      },
      {
        name: { en: "Sunder Armor (Heavy)", fr: "" },
        description: {
          en: "Requires Sunder Armor (Medium). Your Sunder Armor ability now also applies to enemies wearing heavy armor.",
          fr: "",
        },
      },
      {
        name: { en: "Trickshot", fr: "" },
        description: {
          en: "When you throw a dagger, it returns at the end of your turn. On a hit, it ricochets to another creature within 2 spaces, dealing half damage.",
          fr: "",
        },
      },
    ],
  },
};

// ─── Commander ──────────────────────────────────────────────────────────────

export const commander: HeroClass = {
  id: "commander",
  name: { en: "Commander", fr: "" },
  description: {
    en: "A battlefield tactician, leader, and weapon master. Issue powerful orders to allies, wield all martial weapons with deadly efficiency, and lead your party to triumph through cunning strategy.",
    fr: "",
  },
  complexity: 2,
  keyStats: ["STR", "INT"],
  hitDie: "1d10",
  startingHp: 17,
  saves: { strong: "STR", weak: "DEX" },
  armorProficiency: [
    { en: "Mail Armor", fr: "" },
    { en: "Shields", fr: "" },
  ],
  weaponProficiency: [{ en: "All Martial Weapons", fr: "" }],
  startingGear: [
    { en: "Short Sword", fr: "" },
    { en: "Javelins", fr: "" },
    { en: "Rusty Mail", fr: "" },
  ],
  abilities: [
    // ── Level 1 ──
    {
      level: 1,
      name: { en: "Coordinated Strike!", fr: "" },
      description: {
        en: "Gain the Coordinated Strike! Commander's Order. (1/round) Free action: you and an ally within 6 spaces both immediately make a weapon attack or cast a cantrip for free. Usable INT times per Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 2 ──
    {
      level: 2,
      name: { en: "Commander's Orders", fr: "" },
      description: {
        en: "Choose 2 Commander's Orders.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Field Medic", fr: "" },
      description: {
        en: "Roll 1 additional die for any health potion you administer. When you or an ally spends Hit Dice to recover HP after at least ten minutes of examination, add your Examination bonus to HP recovered.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 3 ──
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Commander subclass.",
        fr: "",
      },
      type: "subclass",
    },
    // ── Level 4 ──
    {
      level: 4,
      name: { en: "Fit for Any Battlefield", fr: "" },
      description: {
        en: "Choose a Combat Tactic. When you roll Initiative, gain STR Combat Dice (d6). (1/attack) Expend a Combat Die to perform a special maneuver. Combat Dice are lost when combat ends.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 5 ──
    {
      level: 5,
      name: { en: "Master Commander", fr: "" },
      description: {
        en: "When you roll Initiative, regain 1 spent use of Coordinated Strike (lost if not spent that encounter). Attacks from Coordinated Strikes also ignore disadvantage.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Combat Tactics", fr: "" },
      description: {
        en: "Your Combat Dice are now d8s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 6 ──
    {
      level: 6,
      name: { en: "Fit for Any Battlefield (2)", fr: "" },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Weapon Mastery", fr: "" },
      description: {
        en: "You may sheathe and draw a different weapon 2x/round for free. Choose a weapon type to specialize in (Slashing, Bludgeoning, or Piercing).",
        fr: "",
      },
      type: "core",
    },
    // ── Level 7 ──
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Commander subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // ── Level 8 ──
    {
      level: 8,
      name: { en: "Fit for Any Battlefield (3)", fr: "" },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 9 ──
    {
      level: 9,
      name: { en: "Master Commander (2)", fr: "" },
      description: {
        en: "+1 use of Coordinated Strike per Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Combat Tactics (2)", fr: "" },
      description: {
        en: "Your Combat Dice are now d10s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 10 ──
    {
      level: 10,
      name: { en: "Fit for Any Battlefield (4)", fr: "" },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Weapon Mastery (2)", fr: "" },
      description: {
        en: "Choose a 2nd weapon type to specialize in.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 11 ──
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Commander subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // ── Level 12 ──
    {
      level: 12,
      name: { en: "Fit for Any Battlefield (5)", fr: "" },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 13 ──
    {
      level: 13,
      name: { en: "Master Commander (3)", fr: "" },
      description: {
        en: "+1 use of Coordinated Strike per Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Combat Tactics (3)", fr: "" },
      description: {
        en: "Your Combat Dice are now d12s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 14 ──
    {
      level: 14,
      name: { en: "Weapon Mastery (3)", fr: "" },
      description: {
        en: "You have complete mastery of all weapon types.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 15 ──
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Commander subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // ── Level 16 ──
    {
      level: 16,
      name: { en: "Fit for Any Battlefield (6)", fr: "" },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 17 ──
    {
      level: 17,
      name: { en: "Master Commander (4)", fr: "" },
      description: {
        en: "+1 use of Coordinated Strike per Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Combat Tactics (4)", fr: "" },
      description: {
        en: "Your Combat Dice are now d20s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    // ── Level 18 ──
    {
      level: 18,
      name: { en: "Unparalleled Tactics", fr: "" },
      description: {
        en: "The first time each encounter you use Coordinated Strike, an ally who can hear you also gains 1 action to use on their next turn.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 19 ──
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    // ── Level 20 ──
    {
      level: 20,
      name: { en: "Captain of Legions", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. The first time each encounter you use Coordinated Strike, EVERY ally within 12 spaces gains +1 action (replaces Unparalleled Tactics).",
        fr: "",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Champion of the Bulwark ──
    {
      id: "champion-of-the-bulwark",
      name: { en: "Champion of the Bulwark", fr: "" },
      description: {
        en: "An unassailable defender focused on armor mastery, shield expertise, and protecting allies.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Armor Master", fr: "" },
          description: {
            en: "You are proficient with plate armor.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Shield Expert", fr: "" },
          description: {
            en: "While wearing a shield, you may Defend 2x each round. The first time each round you block all damage from an attack, make an opportunity attack against the attacker for free.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Juggernaut", fr: "" },
          description: {
            en: "When you use Coordinated Strike, deal extra damage equal to your armor, and you can add 1 to your primary die.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Taunting Strike", fr: "" },
          description: {
            en: "(1/turn) You may Taunt a creature you hit until the end of their next turn.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Shield Wall", fr: "" },
          description: {
            en: "Allies within 2 spaces gain ALL the benefits of the shield you have equipped.",
            fr: "",
          },
        },
      ],
    },
    // ── Champion of the Vanguard ──
    {
      id: "champion-of-the-vanguard",
      name: { en: "Champion of the Vanguard", fr: "" },
      description: {
        en: "A relentless offensive leader focused on aggressive positioning, coordinated assaults, and battlefield momentum.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Advance!", fr: "" },
          description: {
            en: "(1/round) After you move toward an enemy, gain advantage on the first melee attack against it. When you use Coordinated Strike, you and all allies within 12 spaces can first move up to half their speed for free.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Experienced Commander", fr: "" },
          description: {
            en: "Your Coordinated Strike may target 1 additional ally. Gain +1 use of Coordinated Strike per Safe Rest.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Survey the Battlefield", fr: "" },
          description: {
            en: "When you roll Initiative, regain 1 use of Coordinated Strike. +1 max Combat Dice.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "As One!", fr: "" },
          description: {
            en: "Attacks made with your Coordinated Strike grant advantage and ignore all disadvantage. Your chosen allies gain 1 additional action on their next turn.",
            fr: "",
          },
        },
      ],
    },
    // ── Spellblade (Story-Based) ──
    {
      id: "spellblade",
      name: { en: "Spellblade", fr: "" },
      description: {
        en: "A story-based subclass where steel meets spell. You lose Weapon Mastery and Combat Tactics, but gain mana, spells, and magically empowered Commander's Orders.",
        fr: "",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Arcane Command", fr: "" },
          description: {
            en: "You lose Weapon Mastery and Combat Tactics but gain INT mana when you roll Initiative (lost when combat ends). Whenever you could choose a Combat Tactic or Weapon Mastery, instead choose a Commander's Order or a tier 1 spell. Your Commander's Orders are empowered with magical variants.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Firebrand", fr: "" },
          description: {
            en: "When you roll Initiative, cast Enchant Weapon for free (can be upcast by spending additional mana).",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Deep Knowledge (1)", fr: "" },
          description: {
            en: "Choose any tier 1 (or lower) spell and any Utility Spell.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Deep Knowledge (2)", fr: "" },
          description: {
            en: "Choose any tier 2 (or lower) spell and any Utility Spell.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Deep Knowledge (3)", fr: "" },
          description: {
            en: "Choose any tier 3 (or lower) spell and any Utility Spell.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Deep Knowledge (4)", fr: "" },
          description: {
            en: "Choose any tier 4 (or lower) spell and any Utility Spell.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Commander's Orders", fr: "" },
    selectAtLevels: [2],
    abilities: [
      {
        name: { en: "Face Me!", fr: "" },
        description: {
          en: "Reaction (after an ally is crit within 12 spaces): Taunt that enemy until you drop to 0 HP.",
          fr: "",
        },
      },
      {
        name: { en: "Hold the Line!", fr: "" },
        description: {
          en: "(1/encounter) Reaction (when an ally drops to 0 HP): Command them to continue the fight! Set their HP to 3x your LVL.",
          fr: "",
        },
      },
      {
        name: { en: "I Can Do This ALL DAY!", fr: "" },
        description: {
          en: "(1/encounter) Reaction (when you would drop to 0 HP): Expend any number of Hit Dice and set your HP to the sum rolled instead (do not add STR).",
          fr: "",
        },
      },
      {
        name: { en: "Move it! Move it!", fr: "" },
        description: {
          en: "When you roll Initiative, give yourself and an ally advantage on the roll and +3 speed for 1 round.",
          fr: "",
        },
      },
      {
        name: { en: "Reposition!", fr: "" },
        description: {
          en: "Action/Reaction (on an ally's turn): Command 1 ally to move up to their speed (or 2 allies up to half their speed) for free.",
          fr: "",
        },
      },
    ],
  },
};
