import type { HeroClass } from "../types";

// ─── Stormshifter ───────────────────────────────────────────────────────────

export const stormshifter: HeroClass = {
  id: "stormshifter",
  name: { en: "Stormshifter", fr: "" },
  description: {
    en: "A master of storm and fang who wields lightning and tempests, shapeshifting into fearsome beasts while casting powerful nature spells.",
    fr: "",
  },
  complexity: 3,
  keyStats: ["WIL", "DEX"],
  hitDie: "1d8",
  startingHp: 13,
  saves: {
    strong: "WIL",
    weak: "STR",
  },
  armorProficiency: [
    { en: "Cloth Armor", fr: "" },
    { en: "Leather Armor", fr: "" },
  ],
  weaponProficiency: [
    { en: "Staves", fr: "" },
    { en: "Wands", fr: "" },
  ],
  startingGear: [
    { en: "Cheap Hides", fr: "" },
    { en: "Staff", fr: "" },
    { en: "Strange Plant", fr: "" },
  ],
  abilities: [
    // Level 1
    {
      level: 1,
      name: { en: "Master of Storms", fr: "" },
      description: {
        en: "You know cantrips from the Lightning and Wind schools.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Beastshift", fr: "" },
      description: {
        en: "Action: Transform into a harmless beast that can speak with animals. Lasts until you drop to 0 HP, cast a spell, or end it on your turn. You have DEX charges, resetting on a Safe Rest. Tiny beasts give attackers disadvantage, but ANY damage ends that form.",
        fr: "",
      },
      type: "core",
    },
    // Level 2
    {
      level: 2,
      name: { en: "Direbeast Form", fr: "" },
      description: {
        en: "You can Beastshift into a Fearsome Beast (Large). Gain DEX+LVL temp HP, the Gore attack (1d6+LVL damage, gain LVL temp HP on hit), and Fearsome (spend 1 mana to force reroll when you Interpose or Defend).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Unlock Tier 1 Spells", fr: "" },
      description: {
        en: "Unlock tier 1 Wind and Lightning spells. Gain a mana pool equal to (WIL x 3) + LVL that recharges on a Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    // Level 3
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Stormshifter subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Direbeast Form (2)", fr: "" },
      description: {
        en: "You can Beastshift into a Beast of the Pack (Medium). Gain +DEX speed, Supercharge, and Thunderfang (1d4+LVL piercing). Crits or kills grant cumulative +1d4 lightning damage to Thunderfang.",
        fr: "",
      },
      type: "core",
    },
    // Level 4
    {
      level: 4,
      name: { en: "Tier 2 Spells", fr: "" },
      description: {
        en: "You may now cast tier 2 spells and upcast spells at tier 2.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 WIL or DEX.",
        fr: "",
      },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Stormcaller", fr: "" },
      description: {
        en: "Learn a Utility Spell from each spell school you know.",
        fr: "",
      },
      type: "core",
    },
    // Level 5
    {
      level: 5,
      name: { en: "Direbeast Form (3)", fr: "" },
      description: {
        en: "You can Beastshift into a Beast of Nightmares (Tiny). Gain Sting (1d4 piercing + 3xLVL acid damage ignoring armor) and Silent But Deadly (speed 2, cannot Defend or Interpose, invisible until conspicuous).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: {
        en: "Your cantrips grow stronger.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 STR or INT.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 6
    {
      level: 6,
      name: { en: "Chimeric Boon", fr: "" },
      description: {
        en: "Choose 2 Chimeric Boons. When you shapeshift into a Direbeast form, you may apply 1 Chimeric Boon you know.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Expert Shifter", fr: "" },
      description: {
        en: "Gain 1 additional use of Beastshift per Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Tier 3 Spells", fr: "" },
      description: {
        en: "You may now cast tier 3 spells and upcast spells at tier 3.",
        fr: "",
      },
      type: "core",
    },
    // Level 7
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Stormshifter subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Stormcaller (2)", fr: "" },
      description: {
        en: "Learn a 2nd Utility Spell from each spell school you know.",
        fr: "",
      },
      type: "core",
    },
    // Level 8
    {
      level: 8,
      name: { en: "Tier 4 Spells", fr: "" },
      description: {
        en: "You may now cast tier 4 spells and upcast spells at tier 4.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 WIL or DEX.",
        fr: "",
      },
      type: "stat-increase",
    },
    {
      level: 8,
      name: { en: "Stormborn", fr: "" },
      description: {
        en: "Gain resistance to lightning damage. (1/day) Gain advantage on a Naturecraft or Concentration check.",
        fr: "",
      },
      type: "core",
    },
    // Level 9
    {
      level: 9,
      name: { en: "Chimeric Boon (2)", fr: "" },
      description: {
        en: "Choose a 3rd Chimeric Boon.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Expert Shifter (2)", fr: "" },
      description: {
        en: "Gain 1 additional use of Beastshift per Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 STR or INT.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 10
    {
      level: 10,
      name: { en: "Tier 5 Spells", fr: "" },
      description: {
        en: "You may now cast tier 5 spells and upcast spells at tier 5.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: {
        en: "Your cantrips grow stronger.",
        fr: "",
      },
      type: "core",
    },
    // Level 11
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Stormshifter subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // Level 12
    {
      level: 12,
      name: { en: "Tier 6 Spells", fr: "" },
      description: {
        en: "You may now cast tier 6 spells and upcast spells at tier 6.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 WIL or DEX.",
        fr: "",
      },
      type: "stat-increase",
    },
    {
      level: 12,
      name: { en: "Chimeric Boon (3)", fr: "" },
      description: {
        en: "Select a 4th Chimeric Boon.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Expert Shifter (3)", fr: "" },
      description: {
        en: "Gain 1 additional use of Beastshift per Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    // Level 13
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 STR or INT.",
        fr: "",
      },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Stormborn (2)", fr: "" },
      description: {
        en: "Deal max damage on a Wind spell by spending a Beastshift charge instead of rolling. When you end Beastshift, you may cast a cantrip for free.",
        fr: "",
      },
      type: "core",
    },
    // Level 14
    {
      level: 14,
      name: { en: "Tier 7 Spells", fr: "" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "",
      },
      type: "core",
    },
    // Level 15
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Stormshifter subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: {
        en: "Your cantrips grow stronger.",
        fr: "",
      },
      type: "core",
    },
    // Level 16
    {
      level: 16,
      name: { en: "Tier 8 Spells", fr: "" },
      description: {
        en: "You may now cast tier 8 spells and upcast spells at tier 8.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 WIL or DEX.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 17
    {
      level: 17,
      name: { en: "Chimeric Boon (4)", fr: "" },
      description: {
        en: "Select a 5th Chimeric Boon.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 STR or INT.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 18
    {
      level: 18,
      name: { en: "Tier 9 Spells", fr: "" },
      description: {
        en: "You may now cast tier 9 spells and upcast spells at tier 9.",
        fr: "",
      },
      type: "core",
    },
    // Level 19
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    // Level 20
    {
      level: 20,
      name: { en: "Archdruid", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. (1/encounter) Cast a spell up to tier 4 for free when you enter or leave a Beastshift form.",
        fr: "",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: {
        en: "Your cantrips grow stronger.",
        fr: "",
      },
      type: "core",
    },
  ],
  subclasses: [
    // ── Circle of Sky & Storm (standard) ──
    {
      id: "circle-of-sky-and-storm",
      name: { en: "Circle of Sky & Storm", fr: "" },
      description: {
        en: "A caster-focused subclass that deepens your spell repertoire and lets you cast while Beastshifted, unleashing the full fury of nature's elements.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Deepening Study", fr: "" },
          description: {
            en: "Choose the Ice or Radiant school to learn.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Creature of the Fey", fr: "" },
          description: {
            en: "You may cast spells while Beastshifted.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Attuned to Nature", fr: "" },
          description: {
            en: "(1/day) Add LVL to any skill check related to nature or weather.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Raging Tempest", fr: "" },
          description: {
            en: "When you crit with a tiered spell, cast a cantrip for free from a school you know and haven't cast from this turn.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Primordial Force", fr: "" },
          description: {
            en: "Spending 2+ mana on a spell grants a bonus effect based on school: Ice grants WIL temp HP, Lightning deals additional WIL damage, Radiant heals a creature within 6 spaces WIL HP, Wind grants flying speed and 6 free movement.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Master of Storm", fr: "" },
          description: {
            en: "Concentrate on 1 lightning spell and 1 wind spell simultaneously. (1/Safe Rest) Cast Ride the Lightning for 0 mana.",
            fr: "",
          },
        },
      ],
    },
    // ── Circle of Fang & Claw (standard) ──
    {
      id: "circle-of-fang-and-claw",
      name: { en: "Circle of Fang & Claw", fr: "" },
      description: {
        en: "A shapeshifting-focused subclass that lets you shift forms rapidly and unleash devastating beast attacks in close combat.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Swiftshift", fr: "" },
          description: {
            en: "On Initiative, Beastshift or move for free. While transformed, shift between Direbeast forms for free (or as a reaction for 1 mana), but free shifts grant no temp HP.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Windborne Protector", fr: "" },
          description: {
            en: "(1/encounter) Reaction: when an enemy attacks, spend 2 mana to shift into a Fearsome Beast, then Interpose from up to 12 spaces away and Defend for free.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Friend of Beasts", fr: "" },
          description: {
            en: "Beasts will not attack you until you first harm them. You may transform into harmless beasts without spending a Beastshift charge.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Unleash the Beast", fr: "" },
          description: {
            en: "(1/encounter) When you miss, you can crit instead.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Storm Wake", fr: "" },
          description: {
            en: "(1/encounter) Action: Spend 3 mana to shift into a Beast of the Pack, teleport in a line up to 12 spaces, dealing WIL d8 lightning damage to chosen adjacent creatures.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Master of Forms", fr: "" },
          description: {
            en: "Your shapeshift forms can have 2 Chimeric Boons at a time.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Venomous Gaze", fr: "" },
          description: {
            en: "(1/encounter) Action: Spend 2 mana to shift into a Beast of Nightmares. Entice a creature within 12 spaces to move 2xWIL spaces closer on a failed WIL save (disadvantage, repeats). If they reach you, Sting for free.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Master of Forms (2)", fr: "" },
          description: {
            en: "Beastshift 2 additional times per Safe Rest. Choose 2 additional Chimeric Boons. Direbeast forms can have 3 at a time.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Chimeric Boons", fr: "" },
    selectAtLevels: [6, 9, 12, 17],
    abilities: [
      {
        name: { en: "Beast of the Sea", fr: "" },
        description: {
          en: "Can move, breathe, and fight underwater without penalty.",
          fr: "",
        },
      },
      {
        name: { en: "Climber", fr: "" },
        description: {
          en: "Can walk across walls and ceilings; ignores difficult terrain.",
          fr: "",
        },
      },
      {
        name: { en: "Fleet Footed", fr: "" },
        description: {
          en: "+2 speed. Advantage on Stealth checks and against the Grappled condition.",
          fr: "",
        },
      },
      {
        name: { en: "Earthwalker", fr: "" },
        description: {
          en: "+2 armor. Can burrow through dirt and unworked rock at half speed, leaving a tunnel behind. Advantage against Prone.",
          fr: "",
        },
      },
      {
        name: { en: "Keen Senses", fr: "" },
        description: {
          en: "Advantage on Perception and Assess checks. Unaffected by Blinded.",
          fr: "",
        },
      },
      {
        name: { en: "Leader of the Pack", fr: "" },
        description: {
          en: "Advantage against fear and charm effects for yourself and allies within 6 spaces.",
          fr: "",
        },
      },
      {
        name: { en: "Phasebeast", fr: "" },
        description: {
          en: "When shifting between this form and your normal form, teleport up to 6 spaces to a place you can see.",
          fr: "",
        },
      },
      {
        name: { en: "Prehensile Tail", fr: "" },
        description: {
          en: "Creatures you hit in melee that are your size or smaller are Grappled. Hitting a larger creature lets you move with it.",
          fr: "",
        },
      },
      {
        name: { en: "Winged", fr: "" },
        description: {
          en: "Gain a flying speed. Forced movement moves you twice as far while flying.",
          fr: "",
        },
      },
    ],
  },
};

// ─── Zephyr ─────────────────────────────────────────────────────────────────

export const zephyr: HeroClass = {
  id: "zephyr",
  name: { en: "Zephyr", fr: "" },
  description: {
    en: "A martial artist who hones their body into a blur of motion, using speed as both weapon and shield while delivering devastating unarmed strikes.",
    fr: "",
  },
  complexity: 2,
  keyStats: ["DEX", "STR"],
  hitDie: "1d8",
  startingHp: 13,
  saves: {
    strong: "DEX",
    weak: "INT",
  },
  armorProficiency: [{ en: "None", fr: "" }],
  weaponProficiency: [{ en: "Melee", fr: "" }],
  startingGear: [
    { en: "Staff", fr: "" },
    { en: "Traveling Robes & Sandals", fr: "" },
  ],
  abilities: [
    // Level 1
    {
      level: 1,
      name: { en: "Iron Defense", fr: "" },
      description: {
        en: "Your armor equals DEX+STR as long as you are unarmored.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Swift Fists", fr: "" },
      description: {
        en: "Your unarmed strikes are not subject to disadvantage from Rushed Attacks, and their damage is 1d4+STR.",
        fr: "",
      },
      type: "core",
    },
    // Level 2
    {
      level: 2,
      name: { en: "Swift Feet", fr: "" },
      description: {
        en: "While unarmored, gain +2 speed and +LVL Initiative.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Burst of Speed", fr: "" },
      description: {
        en: "On Initiative, gain DEX Bursts of Speed. (1/turn) Spend 1 to use: Slipstream (Defend, attack misses), Whirling Defense (Defend, apply armor to all attacks this round), Swiftstrike (attack ignoring Rushed Attack disadvantage), or Windstep (move ignoring difficult terrain).",
        fr: "",
      },
      type: "core",
    },
    // Level 3
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Zephyr subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Kinetic Momentum", fr: "" },
      description: {
        en: "Whenever you gain a Wound, gain a Burst of Speed.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Ethereal Projection", fr: "" },
      description: {
        en: "(1/day) Meditate for 10 minutes to project an ethereal version of yourself up to 30 ft. away, passing through solid objects. Lasts up to 10 minutes; visible but cannot interact physically.",
        fr: "",
      },
      type: "core",
    },
    // Level 4
    {
      level: 4,
      name: { en: "Unyielding Resolve", fr: "" },
      description: {
        en: "Ignore the first Wound you would suffer each encounter. When-Wounded abilities still trigger.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 DEX or STR.",
        fr: "",
      },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Martial Master", fr: "" },
      description: {
        en: "Choose a Martial Arts ability.",
        fr: "",
      },
      type: "core",
    },
    // Level 5
    {
      level: 5,
      name: { en: "Reverberating Strikes", fr: "" },
      description: {
        en: "Add LVL bludgeoning damage to all of your melee attacks.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 INT or WIL.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 6
    {
      level: 6,
      name: { en: "Martial Master (2)", fr: "" },
      description: {
        en: "Choose a 2nd Martial Arts Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Infuse Strength", fr: "" },
      description: {
        en: "Action: Make an unarmed strike against an ally to heal them instead of harming. Expend any number of Hit Dice and heal them as during a Field Rest (roll + STR each).",
        fr: "",
      },
      type: "core",
    },
    // Level 7
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Zephyr subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // Level 8
    {
      level: 8,
      name: { en: "Martial Master (3)", fr: "" },
      description: {
        en: "Choose a 3rd Martial Arts Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 DEX or STR.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 9
    {
      level: 9,
      name: { en: "Swift Feet (2)", fr: "" },
      description: {
        en: "Gain an additional +2 speed while unarmored.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 INT or WIL.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 10
    {
      level: 10,
      name: { en: "Martial Master (4)", fr: "" },
      description: {
        en: "Choose a 4th Martial Arts Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Unyielding Resolve (2)", fr: "" },
      description: {
        en: "Ignore the first 2 Wounds you would suffer each encounter.",
        fr: "",
      },
      type: "core",
    },
    // Level 11
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Zephyr subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // Level 12
    {
      level: 12,
      name: { en: "Martial Master (5)", fr: "" },
      description: {
        en: "Choose a 5th Martial Arts Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 DEX or STR.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 13
    {
      level: 13,
      name: { en: "Iron Defense (2)", fr: "" },
      description: {
        en: "Your armor is doubled while unarmored.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 INT or WIL.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 14
    {
      level: 14,
      name: { en: "Martial Master (6)", fr: "" },
      description: {
        en: "Choose a 6th Martial Arts Ability.",
        fr: "",
      },
      type: "core",
    },
    // Level 15
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Zephyr subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    // Level 16
    {
      level: 16,
      name: { en: "Martial Master (7)", fr: "" },
      description: {
        en: "Choose a 7th Martial Arts Ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: {
        en: "+1 DEX or STR.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 17
    {
      level: 17,
      name: { en: "Unyielding Resolve (3)", fr: "" },
      description: {
        en: "Ignore the first 3 Wounds you would suffer each encounter. You have advantage on STR saves while Dying.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: {
        en: "+1 INT or WIL.",
        fr: "",
      },
      type: "stat-increase",
    },
    // Level 18
    {
      level: 18,
      name: { en: "Martial Master (8)", fr: "" },
      description: {
        en: "Choose an 8th Martial Arts Ability.",
        fr: "",
      },
      type: "core",
    },
    // Level 19
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    // Level 20
    {
      level: 20,
      name: { en: "Windborne", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. +1 additional Burst of Speed on Initiative. Permanently gain 1 action (while Dying, max 2 actions).",
        fr: "",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Way of Pain (standard) ──
    {
      id: "way-of-pain",
      name: { en: "Way of Pain", fr: "" },
      description: {
        en: "A retaliatory fighting style that turns incoming damage into a weapon, punishing enemies who dare to strike you.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Bring the Pain", fr: "" },
          description: {
            en: "(1/round) Turn any melee attack against you into a crit. When crit, reduce damage by half; the attacker takes the same damage you took (ignoring armor). Suffer 1 Wound to double the damage the enemy takes.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Share My Pain", fr: "" },
          description: {
            en: "Your Swiftstrike can also target a 2nd creature within Reach 2.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Pain Sharpens the Mind", fr: "" },
          description: {
            en: "While Bloodied, gain advantage on the first attack you make each turn and on all saves.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Echoed Agony", fr: "" },
          description: {
            en: "Your Swiftstrike can also target a 3rd creature within Reach 4.",
            fr: "",
          },
        },
      ],
    },
    // ── Way of Flame (standard) ──
    {
      id: "way-of-flame",
      name: { en: "Way of Flame", fr: "" },
      description: {
        en: "An explosive fighting style that channels inner fire through Wounds, dealing fire damage to nearby enemies and leaving them Smoldering.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Exploding Soul", fr: "" },
          description: {
            en: "(1/round) On your turn, you may suffer a Wound. Whenever you gain a Wound, deal STR+Wounds damage to chosen creatures within 2 spaces (ignoring armor) and give them Smoldering.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Blazing Speed", fr: "" },
          description: {
            en: "Gain +2 speed while using Windstep. After ceasing Windstep movement, enemies you passed through take STR+DEX fire damage. Smoldering enemies take double, ending the condition.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Chain Reaction", fr: "" },
          description: {
            en: "(1/turn) When you crit, deal STR+Wounds fire damage to chosen creatures within 2 spaces of your target. Repeat for undamaged creatures within 2 spaces of any already damaged.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Burning Soul", fr: "" },
          description: {
            en: "Double any fire damage you deal.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Martial Arts Abilities", fr: "" },
    selectAtLevels: [4, 6, 8, 10, 12, 14, 16, 18],
    abilities: [
      {
        name: { en: "Airshift", fr: "" },
        description: {
          en: "You cannot be Grappled while conscious. While moving, travel across all terrain as normal ground, ignoring all ill effects (walls, ceilings, water, lava, etc.).",
          fr: "",
        },
      },
      {
        name: { en: "Blur", fr: "" },
        description: {
          en: "(1/encounter) When you Defend, first move up to half your speed away, taking no damage if now out of range or in Full Cover.",
          fr: "",
        },
      },
      {
        name: { en: "Bodily Discipline", fr: "" },
        description: {
          en: "Spend 1 action to end any non-Wound condition on yourself.",
          fr: "",
        },
      },
      {
        name: { en: "Enduring Soul", fr: "" },
        description: {
          en: "Each time you roll Initiative, gain Hit Dice equal to the actions you get on your first turn. These expire at the end of combat if unused.",
          fr: "",
        },
      },
      {
        name: { en: "I Jump On His Back!", fr: "" },
        description: {
          en: "While using Windstep, move into the space of a creature your size or larger to jump on its back. Gain advantage on melee attacks against it; damage you avoid is dealt to it instead.",
          fr: "",
        },
      },
      {
        name: { en: "Kinetic Barrage", fr: "" },
        description: {
          en: "Whenever you miss an attack, gain a cumulative +STR bonus to all damage for the rest of the encounter.",
          fr: "",
        },
      },
      {
        name: { en: "Mighty Soul", fr: "" },
        description: {
          en: "You cannot be moved against your will. When you would fail a saving throw, gain a Wound to add your STR to the result. Repeatable.",
          fr: "",
        },
      },
      {
        name: { en: "Quickstrike", fr: "" },
        description: {
          en: "When you Interpose, first make an unarmed strike against the enemy for free.",
          fr: "",
        },
      },
      {
        name: { en: "Use Momentum", fr: "" },
        description: {
          en: "When you avoid all damage from a melee attack, swap places with the attacker and redirect the hit to another target within reach.",
          fr: "",
        },
      },
      {
        name: { en: "Vital Rejuvenation", fr: "" },
        description: {
          en: "When you receive healing for the first time on a turn, heal another target within 6 spaces HP equal to your STR.",
          fr: "",
        },
      },
      {
        name: { en: "Windstrider", fr: "" },
        description: {
          en: "If you move through a willing creature's space while using Windstep, they can move with you and choose any adjacent space along your path to end in.",
          fr: "",
        },
      },
    ],
  },
};
