import type { HeroClass } from "../types";

// ─── Hunter ─────────────────────────────────────────────────────────────────

export const hunter: HeroClass = {
  id: "hunter",
  name: { en: "Hunter", fr: "" },
  description: {
    en: "A relentless tracker and master of the wild who marks prey and harnesses the Thrill of the Hunt to outwit targets with traps, arrows, and lethal efficiency.",
    fr: "",
  },
  complexity: 2,
  keyStats: ["DEX", "WIL"],
  hitDie: "1d8",
  startingHp: 13,
  saves: { strong: "DEX", weak: "INT" },
  armorProficiency: [{ en: "Leather Armor", fr: "" }],
  weaponProficiency: [{ en: "DEX Weapons", fr: "" }],
  startingGear: [
    { en: "Shortbow", fr: "" },
    { en: "Cheap Hides", fr: "" },
    { en: "Dagger", fr: "" },
    { en: "Hunting Trap", fr: "" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Hunter's Mark", fr: "" },
      description: {
        en: "Action: Mark a visible creature as your quarry for 1 day (or until you mark another). It can't hide from you, and your attacks against it gain advantage OR +LVL damage.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Forager", fr: "" },
      description: {
        en: "Gain advantage on skill checks to find food and water in the wild.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Thrill of the Hunt", fr: "" },
      description: {
        en: "Choose 2 Thrill of the Hunt abilities. Gain a charge when your quarry dies, or you hit your quarry in melee or crit at range.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Roll & Strike", fr: "" },
      description: {
        en: "Action: If you have no TotH charges, move up to your speed toward your quarry. If you end adjacent, make a free melee attack.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Hunter subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Tracker's Intuition", fr: "" },
      description: {
        en: "Discern past encounter events by studying tracks and environmental clues, determining creature types, numbers, direction, key actions, and time elapsed.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Thrill of the Hunt (2)", fr: "" },
      description: {
        en: "Choose a 3rd Thrill of the Hunt ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Explorer of the Wilds", fr: "" },
      description: {
        en: "+2 speed; gain a climbing speed.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Hunter's Resolve", fr: "" },
      description: {
        en: "When you have no TotH charges, gain Hunter's Resolve until end of turn: treat all creatures as your quarry for movement and melee attacks.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Final Takedown", fr: "" },
      description: {
        en: "Action: Spend 1 TotH charge to make a melee attack against your Bloodied quarry. It becomes a crit with doubled Hunter's Mark damage. If they survive, they crit you back.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 6,
      name: { en: "Versatile Bowmaster", fr: "" },
      description: {
        en: "When attacking with a Longbow, roll 2d4 instead of 1d8; or with a Crossbow, 2d8 instead of 4d4.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Thrill of the Hunt (3)", fr: "" },
      description: {
        en: "Choose a 4th Thrill of the Hunt ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Hunter subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 8,
      name: { en: "Thrill of the Hunt (4)", fr: "" },
      description: {
        en: "Choose a 5th Thrill of the Hunt ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "No Escape", fr: "" },
      description: {
        en: "When you see allies make an opportunity attack, you may also make a ranged opportunity attack against the same target.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Veteran Stalker", fr: "" },
      description: {
        en: "Gain a TotH charge whenever you are first Bloodied in an encounter and for every Wound you gain.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Keen Eye, Steady Hand", fr: "" },
      description: {
        en: "Add WIL to your ranged weapon damage.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Hunter subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 12,
      name: { en: "Thrill of the Hunt (5)", fr: "" },
      description: {
        en: "Choose a 6th Thrill of the Hunt ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Keen Sight", fr: "" },
      description: {
        en: "Advantage on Perception checks.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Thrill of the Hunt (6)", fr: "" },
      description: {
        en: "Choose a 7th Thrill of the Hunt ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Hunter subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 DEX or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Peerless Hunter", fr: "" },
      description: {
        en: "You can Defend against your quarry for free.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Wild Endurance", fr: "" },
      description: {
        en: "Gain 1 Thrill of the Hunt charge at the start of your turns.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Nemesis", fr: "" },
      description: {
        en: "+1 to any 2 stats. Your Hunter's Mark can target any number of creatures simultaneously.",
        fr: "",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    {
      id: "keeper-of-the-shadowpath",
      name: { en: "Keeper of the Shadowpath", fr: "" },
      description: {
        en: "A stealthy predator who ambushes foes, tracks with supernatural skill, and hunts in packs to overwhelm quarry.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Ambusher", fr: "" },
          description: {
            en: "When you roll Initiative, use Hunter's Mark for free. Gain advantage on the first attack you make each encounter.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Skilled Tracker", fr: "" },
          description: {
            en: "Advantage on skill checks to track creatures.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Skilled Navigator", fr: "" },
          description: {
            en: "You cannot become lost by nonmagical means.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Primal Predator", fr: "" },
          description: {
            en: "(1/encounter) Your weapon attacks ignore cover and armor this turn.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Pack Hunter", fr: "" },
          description: {
            en: "When you mark a creature, you may also mark another creature within 6 spaces of them for free.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Apex Predator", fr: "" },
          description: {
            en: "Use Primal Predator twice per encounter. Gain 1 TotH charge when you roll Initiative.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "keeper-of-the-wild-heart",
      name: { en: "Keeper of the Wild Heart", fr: "" },
      description: {
        en: "A resilient survivalist who gains extra vitality, crafts healing salves, and becomes nearly impossible to pin down.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Impressive Form", fr: "" },
          description: {
            en: "+5 max HP. Upgrade your Hit Dice to d10s.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "I Have the High Ground", fr: "" },
          description: {
            en: "When you roll Initiative or gain TotH charges, move up to half your speed for free, ignoring difficult terrain.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Resourceful Herbalist", fr: "" },
          description: {
            en: "During a Safe Rest near plants or fungi, spend a day to craft Healing Salves equal to your WIL. Action: Heal yourself or an adjacent creature WIL d6 HP. They expire on Safe Rest.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Ha! I'm Over Here!", fr: "" },
          description: {
            en: "(1/Safe Rest) If an attack would drop you to 0 HP, instead move up to your speed away and take no damage.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Unparalleled Survivalist", fr: "" },
          description: {
            en: "Gain +WIL armor. When attacking with a ranged weapon, you may first move half your speed for free.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "beastmaster",
      name: { en: "Beastmaster", fr: "" },
      description: {
        en: "A story-based subclass where you bond with an animal companion. Instead of your first 2 TotH abilities, select Go for the Throat! and Protect Me! Your companion's HP and movement are abstracted.",
        fr: "",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Beastmaster", fr: "" },
          description: {
            en: "Choose a Small, Medium, or Large animal companion. Replace your first 2 TotH abilities with Go for the Throat! and Protect Me! abilities scaled to companion size.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Small Companion", fr: "" },
          description: {
            en: "Keen Eyes: Mark for free 1/encounter. Protect Me! 1/encounter: Defend causes attack to miss, move half speed. Go for the Throat! 1/encounter, 1 TotH: companion attacks for 1d4+LVL ignoring armor.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Medium Companion", fr: "" },
          description: {
            en: "Req. Level 3. Ferocious: on crit, companion attacks for LVL damage ignoring armor, move 2 spaces free. Protect Me!: companion attacks for 1d4+LVL when you Defend. Go for the Throat! 1/encounter, 1 TotH, action: 1d8+(3xLVL) ignoring armor.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Large Companion", fr: "" },
          description: {
            en: "Req. Level 3. Alpha Protector: first attack damage each round is halved. Protect Me! 1/encounter: after gaining a Wound, companion whisks you 12 spaces. Go for the Throat! 1/encounter, 2 TotH, 2 actions: 1d12+(4xLVL) ignoring armor, excess damage splashes.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Companion Growth", fr: "" },
          description: {
            en: "Companion abilities scale up. Small: Keen Eyes 2/encounter, Protect Me! 2/encounter. Medium: Ferocious move becomes 4 spaces. Large: Protect Me! whisks before gaining the Wound.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Companion Mastery", fr: "" },
          description: {
            en: "Companion abilities scale further. Small: Keen Eyes 3/encounter, Go for the Throat! 2/encounter 1/round. Medium: Go for the Throat! 2/encounter. Large: Go for the Throat! 2/encounter.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Companion Apex", fr: "" },
          description: {
            en: "Companion abilities reach peak power. Small: Go for the Throat! 3/encounter 1/round. Medium: Ferocious move becomes 6 spaces. Large: Protect Me! 2/encounter.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Thrill of the Hunt", fr: "" },
    selectAtLevels: [2, 4, 6, 8, 12, 14],
    abilities: [
      {
        name: { en: "Addling Arrow", fr: "" },
        description: {
          en: "Action: Ranged weapon attack. The next attack the target makes must be against the closest other creature, chosen at random.",
          fr: "",
        },
      },
      {
        name: { en: "Come Get Some!", fr: "" },
        description: {
          en: "Action: Attack a target. It is Taunted by you until the end of their next turn.",
          fr: "",
        },
      },
      {
        name: { en: "Decoy", fr: "" },
        description: {
          en: "When you Defend: The attack misses instead, and you move up to half your speed away.",
          fr: "",
        },
      },
      {
        name: { en: "Fleet Feet", fr: "" },
        description: {
          en: "Move up to your speed for free, ignoring difficult terrain.",
          fr: "",
        },
      },
      {
        name: { en: "Grease Trap", fr: "" },
        description: {
          en: "(1/encounter) Reaction when an enemy moves adjacent to you or an ally within 6 spaces: Target falls Prone, is vulnerable to fire, and treated as Smoldering.",
          fr: "",
        },
      },
      {
        name: { en: "Hail of Arrows", fr: "" },
        description: {
          en: "(Half range) 2 actions: Shoot all creatures in a 3x3 area. Their speed is halved until end of their next turn.",
          fr: "",
        },
      },
      {
        name: { en: "Heavy Shot", fr: "" },
        description: {
          en: "(Half range) Action: Ranged weapon attack that pushes the target (4 spaces small, 2 medium, 1 large).",
          fr: "",
        },
      },
      {
        name: { en: "Incendiary Shot", fr: "" },
        description: {
          en: "(Half range) Action: Ranged weapon attack, add WIL d8 fire damage.",
          fr: "",
        },
      },
      {
        name: { en: "Multishot", fr: "" },
        description: {
          en: "(Half range) Action: Attack your quarry with a ranged weapon and hit a 2nd target within 2 spaces for the same damage.",
          fr: "",
        },
      },
      {
        name: { en: "Pinning Shot", fr: "" },
        description: {
          en: "3 actions: Shoot your quarry. They are Restrained until they escape (DC 10+WIL).",
          fr: "",
        },
      },
      {
        name: { en: "Snare Trap", fr: "" },
        description: {
          en: "(1/encounter) Reaction when an enemy moves adjacent to you or an ally within 6 spaces: Move them back 1 space, they are Restrained until they escape (DC 10+WIL).",
          fr: "",
        },
      },
      {
        name: { en: "Sharpshooter", fr: "" },
        description: {
          en: "Action: If you haven't moved this turn and your quarry is 4+ spaces away, attack for double damage.",
          fr: "",
        },
      },
      {
        name: { en: "Vital Shot", fr: "" },
        description: {
          en: "(Half range) Action: If your quarry is Hampered, ranged attacks ignore armor. If unarmored, double Hunter's Mark bonus damage.",
          fr: "",
        },
      },
      {
        name: { en: "Wild Instinct", fr: "" },
        description: {
          en: "(1/round) If you have no TotH charges, assess for free with advantage.",
          fr: "",
        },
      },
    ],
  },
};

// ─── Mage ───────────────────────────────────────────────────────────────────

export const mage: HeroClass = {
  id: "mage",
  name: { en: "Mage", fr: "" },
  description: {
    en: "A scholarly spellcaster who commands elemental magic through Fire, Ice, and Lightning, shaping spells with powerful Spellshaper enhancements.",
    fr: "",
  },
  complexity: 3,
  keyStats: ["INT", "WIL"],
  hitDie: "1d6",
  startingHp: 10,
  saves: { strong: "INT", weak: "STR" },
  armorProficiency: [{ en: "Cloth Armor", fr: "" }],
  weaponProficiency: [
    { en: "Blades", fr: "" },
    { en: "Staves", fr: "" },
    { en: "Wands", fr: "" },
  ],
  startingGear: [
    { en: "Adventurer's Garb", fr: "" },
    { en: "Staff", fr: "" },
    { en: "Soap", fr: "" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Elemental Spellcasting", fr: "" },
      description: {
        en: "You know Fire, Ice, and Lightning cantrips.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Unlock Tier 1 Spells", fr: "" },
      description: {
        en: "Unlock tier 1 Fire, Ice, and Lightning spells. Gain a mana pool equal to (INT x 3) + LVL, recharging on a Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Talented Researcher", fr: "" },
      description: {
        en: "Advantage on Arcana or Lore checks when you have access to many books and time to study.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Mage subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Elemental Mastery", fr: "" },
      description: {
        en: "Learn the Utility Spells from 1 spell school you know.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Spellshaper", fr: "" },
      description: {
        en: "Gain the ability to enhance spells by spending additional mana. Choose 2 Spellshaper abilities.",
        fr: "",
      },
      type: "core",
    },
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
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Elemental Surge", fr: "" },
      description: {
        en: "When you roll Initiative, regain WIL mana (expires at end of combat if unused).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
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
      level: 6,
      name: { en: "Tier 3 Spells", fr: "" },
      description: {
        en: "You may now cast tier 3 spells and upcast spells at tier 3.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Elemental Mastery (2)", fr: "" },
      description: {
        en: "Learn the Utility Spells from a 2nd spell school you know.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Mage subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
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
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Spellshaper (2)", fr: "" },
      description: {
        en: "Choose 1 additional Spellshaper ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Elemental Surge (2)", fr: "" },
      description: {
        en: "Your Elemental Surge now regains WIL+1d4 mana.",
        fr: "",
      },
      type: "core",
    },
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
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Mage subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
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
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Spellshaper (3)", fr: "" },
      description: {
        en: "Choose 1 additional Spellshaper ability.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Tier 7 Spells", fr: "" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 14,
      name: { en: "Elemental Mastery (3)", fr: "" },
      description: {
        en: "Learn the Utility Spells from a 3rd spell school you know.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Mage subclass feature.",
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
      description: { en: "+1 INT or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Elemental Surge (3)", fr: "" },
      description: {
        en: "Your Elemental Surge now regains WIL+2d4 mana.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Tier 9 Spells", fr: "" },
      description: {
        en: "You may now cast tier 9 spells and upcast spells at tier 9.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Archmage", fr: "" },
      description: {
        en: "+1 to any 2 stats. The first tiered spell you cast each encounter costs 1 action less and 5 fewer mana.",
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
    {
      id: "invoker-of-control",
      name: { en: "Invoker of Control", fr: "" },
      description: {
        en: "A disciplined mage who stitches the fraying edges of magic together, demanding control over elemental forces through sheer willpower.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Force of Will", fr: "" },
          description: {
            en: "(1/round) On your turn, Demand Control: choose 1 option from the Control Table you haven't chosen yet. Resets on Initiative or when all options used once.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Deny Fate", fr: "" },
          description: {
            en: "When you miss with a spell or an effect you cause is saved against, you MUST Demand Control.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "At Any Cost", fr: "" },
          description: {
            en: "Learn 1 cantrip and 1 tiered spell from the Necrotic school.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Nullify", fr: "" },
          description: {
            en: "(1/encounter) Ignore all disadvantage and negative effects on your next action this turn, then Demand Control.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Steel Will", fr: "" },
          description: {
            en: "(1/Safe Rest) When you would fail a save, succeed instead. Reroll 1s on Elemental Surge dice once.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Supreme Control", fr: "" },
          description: {
            en: "When you Demand Control, you may trigger the selected option twice. You may Demand Control as a Reaction.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "invoker-of-chaos",
      name: { en: "Invoker of Chaos", fr: "" },
      description: {
        en: "A wild mage who leans into the unpredictable forces of magic, spending less mana at the risk of chaotic side effects.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Force of Chaos", fr: "" },
          description: {
            en: "When casting a spell, you can spend 1 less mana. When you do this or crit, Invoke Chaos by rolling on the secret Chaos Table.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Tempest Mage", fr: "" },
          description: {
            en: "Learn 1 cantrip and 1 tiered spell from the Wind school.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Chaos Lash", fr: "" },
          description: {
            en: "(1/encounter) Reaction when an enemy moves adjacent: push them 2 spaces, on failed WIL save also knock Prone. Invoke Chaos.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Thrive in Chaos", fr: "" },
          description: {
            en: "When you Invoke Chaos, roll twice and cause both effects. (1/Safe Rest) You may choose which roll to use instead.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Master of Chaos", fr: "" },
          description: {
            en: "When you Invoke Chaos, roll with advantage.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Spellshaper", fr: "" },
    selectAtLevels: [4, 9, 13],
    abilities: [
      {
        name: { en: "Dimensional Compression", fr: "" },
        description: {
          en: "(1+ mana) +4 range to a spell for each additional mana spent.",
          fr: "",
        },
      },
      {
        name: { en: "Echo Casting", fr: "" },
        description: {
          en: "(2x mana, min 1) When casting a tiered single-target spell, cast a copy on a 2nd target for free.",
          fr: "",
        },
      },
      {
        name: { en: "Elemental Destruction", fr: "" },
        description: {
          en: "(1+ mana) After hitting with a spell, spend up to WIL mana to reroll 1 die per mana spent.",
          fr: "",
        },
      },
      {
        name: { en: "Elemental Transmutation", fr: "" },
        description: {
          en: "(1 mana) Change a spell's damage type to Fire, Ice, Lightning, Necrotic, or Radiant.",
          fr: "",
        },
      },
      {
        name: { en: "Extra-Dimensional Vision", fr: "" },
        description: {
          en: "(2 mana) Ignore line of sight for a spell. It phases through barriers to reach a known target within range.",
          fr: "",
        },
      },
      {
        name: { en: "Methodical Spellweaver", fr: "" },
        description: {
          en: "(-2 mana) Spend 1 additional action to reduce a spell's mana cost by 2 (min 1).",
          fr: "",
        },
      },
      {
        name: { en: "Precise Casting", fr: "" },
        description: {
          en: "(1+ mana) Choose 1 creature per mana spent to be unaffected by a spell you cast.",
          fr: "",
        },
      },
      {
        name: { en: "Stretch Time", fr: "" },
        description: {
          en: "(2 mana) Reduce the action cost of a spell by 1 (min 1).",
          fr: "",
        },
      },
    ],
  },
};

// ─── Oathsworn ──────────────────────────────────────────────────────────────

export const oathsworn: HeroClass = {
  id: "oathsworn",
  name: { en: "Oathsworn", fr: "" },
  description: {
    en: "A zealous holy warrior who channels radiant power through sacred oaths, shielding allies and smiting evil with divine judgment.",
    fr: "",
  },
  complexity: 2,
  keyStats: ["STR", "WIL"],
  hitDie: "1d10",
  startingHp: 17,
  saves: { strong: "STR", weak: "DEX" },
  armorProficiency: [{ en: "All Armor", fr: "" }],
  weaponProficiency: [{ en: "STR Weapons", fr: "" }],
  startingGear: [
    { en: "Mace", fr: "" },
    { en: "Rusty Mail", fr: "" },
    { en: "Wooden Buckler", fr: "" },
    { en: "Manacles", fr: "" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Radiant Judgment", fr: "" },
      description: {
        en: "When an enemy attacks you and you have no Judgment Dice, roll 2d6. On your next melee hit this encounter, deal that much additional radiant damage. Dice are expended on hit or miss.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Lay on Hands", fr: "" },
      description: {
        en: "Gain a healing pool equal to 5 x LVL, recharging on Safe Rest. Action: Touch a target and spend any amount to restore that many HP.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Radiant Spellcasting", fr: "" },
      description: {
        en: "Learn Radiant cantrips and tier 1 Radiant spells. Gain a mana pool equal to WIL + LVL, recharging on Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Zealot", fr: "" },
      description: {
        en: "On melee attacks, spend mana (up to highest spell tier) to add per mana: Condemning Strike (+5 radiant damage) or Blessed Aim (-1 target armor step).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Paragon of Virtue", fr: "" },
      description: {
        en: "Advantage on Influence checks when forthrightly telling the truth, disadvantage when misleading.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Commit yourself to an Oath and gain its benefits.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Radiant Judgment (2)", fr: "" },
      description: {
        en: "Your Judgment Dice are upgraded to d8s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Sacred Decree", fr: "" },
      description: {
        en: "Learn 1 Sacred Decree from the ability pool.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "My Life, for My Friends", fr: "" },
      description: {
        en: "You can Interpose for free.",
        fr: "",
      },
      type: "core",
    },
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
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Radiant Judgment (3)", fr: "" },
      description: {
        en: "Your Judgment Dice are upgraded to d10s.",
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
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
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
    {
      level: 6,
      name: { en: "Sacred Decree (2)", fr: "" },
      description: {
        en: "Learn a 2nd Sacred Decree.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Oathsworn subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Master of Radiance", fr: "" },
      description: {
        en: "Choose 1 Radiant Utility Spell.",
        fr: "",
      },
      type: "core",
    },
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
      name: { en: "Radiant Judgment (4)", fr: "" },
      description: {
        en: "Your Judgment Dice are upgraded to d12s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Sacred Decree (3)", fr: "" },
      description: {
        en: "Learn a 3rd Sacred Decree.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
    },
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
    {
      level: 10,
      name: { en: "Radiant Judgment (5)", fr: "" },
      description: {
        en: "Your Judgment Dice are upgraded to d20s.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Oathsworn subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Master of Radiance (2)", fr: "" },
      description: {
        en: "Choose a 2nd Radiant Utility Spell.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Sacred Decree (4)", fr: "" },
      description: {
        en: "Learn a 4th Sacred Decree.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Tier 6 Spells", fr: "" },
      description: {
        en: "You may now cast tier 6 spells and upcast spells at tier 6.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Sacred Decree (5)", fr: "" },
      description: {
        en: "Learn a 5th Sacred Decree.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 14,
      name: { en: "Radiant Judgment (6)", fr: "" },
      description: {
        en: "Whenever you roll Judgment Dice, roll 1 more die.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Gain your Oathsworn subclass feature.",
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
    {
      level: 16,
      name: { en: "Sacred Decree (6)", fr: "" },
      description: {
        en: "Learn a 6th Sacred Decree.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Tier 7 Spells", fr: "" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 DEX or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Unending Judgment", fr: "" },
      description: {
        en: "While you have no Judgment Dice, gain +5 damage to melee attacks.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Glorious Paragon", fr: "" },
      description: {
        en: "+1 to any 2 stats. Defend for free whenever you Interpose.",
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
    {
      id: "oath-of-vengeance",
      name: { en: "Oath of Vengeance", fr: "" },
      description: {
        en: "An aggressive oath-keeper whose zealous aura empowers Judgment Dice, punishing those who harm allies with righteous fury.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Aura of Zeal", fr: "" },
          description: {
            en: "Roll 1 more Judgment Die. Gain an aura (Reach 4). Radiant Judgment also triggers when an ally in your aura is attacked while you have no Judgment Dice.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Avenger", fr: "" },
          description: {
            en: "When you or an ally in your aura gain Wounds, set that many Judgment Dice to max. Then move up to half your speed for free.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Unerring Judgment", fr: "" },
          description: {
            en: "Increase primary die rolls on melee attacks by 1 while you have Judgment Dice.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Maximum Judgment", fr: "" },
          description: {
            en: "Whenever you are attacked, set a Judgment Die to its max.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "oath-of-refuge",
      name: { en: "Oath of Refuge", fr: "" },
      description: {
        en: "A protective oath-keeper whose aura shields allies, allowing Interposition from a distance and granting divine resilience.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Aura of Refuge", fr: "" },
          description: {
            en: "Your shields gain +WIL armor and count as your spellcasting focus. Gain an aura (Reach 4); you can Interpose for allies anywhere within your aura.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Face Me, Foul Creature!", fr: "" },
          description: {
            en: "When you Interpose, the attacking enemy is Taunted by you until the end of their next turn.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Glorious Reprieve", fr: "" },
          description: {
            en: "You and allies in your aura cannot drop below 1 HP. When this triggers, they gain 1 Wound instead (heroes still die at max Wounds).",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Divine Grace", fr: "" },
          description: {
            en: "You are resistant to all damage while Interposing.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "oathbreaker",
      name: { en: "Oathbreaker", fr: "" },
      description: {
        en: "A story-based subclass for a fallen Oathsworn seeking redemption. You lose some Radiant spells but gain Necrotic ones, and your aura shifts to one of suffering and sacrifice.",
        fr: "",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Dark Benediction", fr: "" },
          description: {
            en: "Lose Radiant spells True Strike, Heal, and Warding Bond. Gain Necrotic spells Entice, Shadowtrap, and Dread Visage. Utility Spell choices may be Radiant or Necrotic.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Paragon of Power", fr: "" },
          description: {
            en: "Replaces Paragon of Virtue. Advantage on Might checks to intimidate others.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Aura of Suffering", fr: "" },
          description: {
            en: "Gain an aura (Reach 4) and Interpose within it. Radiant Judgment no longer triggers when attacked; instead triggers when you could Interpose but don't.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "We All Suffer", fr: "" },
          description: {
            en: "+2 max Wounds. When an ally in your aura would gain Wounds or fail a save, you may suffer the effect instead and trigger Radiant Judgment.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Bring Me Your Pain", fr: "" },
          description: {
            en: "Reaction when a willing ally in your aura would drop to 0 HP: Switch HP with them, dropping to 0 HP and gaining the Wound instead.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Torment", fr: "" },
          description: {
            en: "Lay on Hands heals you for double and others for half. When dealing damage, expend Lay on Hands points to add that much damage (ignoring armor).",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Exploit", fr: "" },
          description: {
            en: "Reaction when an ally in your aura Defends: Expend Judgment Dice to force an enemy in your aura to Interpose (cannot interpose against its own attack).",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Bloody Terror", fr: "" },
          description: {
            en: "Attacks against you gain 1 instance of disadvantage for each Wound you have (max 3).",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Sacred Decrees", fr: "" },
    selectAtLevels: [3, 6, 9, 12, 14, 16],
    abilities: [
      {
        name: { en: "Blinding Aura", fr: "" },
        description: {
          en: "(1/Safe Rest) Action: Enemies in your aura are Blinded until end of their next turn.",
          fr: "",
        },
      },
      {
        name: { en: "Courage!", fr: "" },
        description: {
          en: "(1/encounter) When you or an ally in your aura would drop to 0 HP, set their HP to 1 instead.",
          fr: "",
        },
      },
      {
        name: { en: "Explosive Judgment", fr: "" },
        description: {
          en: "(1/encounter) 2 actions: Expend your Judgment Dice, dealing that much radiant damage to all enemies in your aura.",
          fr: "",
        },
      },
      {
        name: { en: "Improved Aura", fr: "" },
        description: {
          en: "+2 aura Reach.",
          fr: "",
        },
      },
      {
        name: { en: "Radiant Aura", fr: "" },
        description: {
          en: "Action: End any single harmful condition or effect on yourself or a willing creature in your aura. Usable WIL times per Safe Rest.",
          fr: "",
        },
      },
      {
        name: { en: "Reliable Justice", fr: "" },
        description: {
          en: "When rolling Judgment Dice, roll with advantage (roll one extra, drop the lowest).",
          fr: "",
        },
      },
      {
        name: { en: "Shining Mandate", fr: "" },
        description: {
          en: "First time each round you are attacked while you have Judgment Dice, an ally in your aura rolls one and applies it to their next attack. Advantage on checks to see through illusions.",
          fr: "",
        },
      },
      {
        name: { en: "Stand Fast, Friends!", fr: "" },
        description: {
          en: "On Initiative, grant allies temp HP equal to STR+WIL. You and allies in your aura have advantage against fear and forced movement/Prone effects.",
          fr: "",
        },
      },
      {
        name: { en: "Unstoppable Protector", fr: "" },
        description: {
          en: "+1 speed. You may Interpose even while restrained, stunned, or incapacitated. If you Interpose for a non-combatant NPC, you may Interpose again this round.",
          fr: "",
        },
      },
      {
        name: { en: "Well Armored", fr: "" },
        description: {
          en: "When you Interpose, gain temp HP equal to your STR.",
          fr: "",
        },
      },
    ],
  },
};
