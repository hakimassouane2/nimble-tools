import type { HeroClass } from "../types";

// ─── Shadowmancer ───────────────────────────────────────────────────────────

export const shadowmancer: HeroClass = {
  id: "shadowmancer",
  name: { en: "Shadowmancer", fr: "" },
  description: {
    en: "Summon hordes of expendable shadow minions and wield necrotic power stolen from ancient patrons. Choose between the Pact of the Red Dragon and the Pact of the Abyssal Depths.",
    fr: "",
  },
  complexity: 3,
  keyStats: ["INT", "DEX"],
  hitDie: "1d8",
  startingHp: 13,
  saves: { strong: "INT", weak: "WIL" },
  armorProficiency: [{ en: "Cloth Armor", fr: "" }],
  weaponProficiency: [
    { en: "Blades", fr: "" },
    { en: "Wands", fr: "" },
  ],
  startingGear: [
    { en: "Adventurer's Garb", fr: "" },
    { en: "Sickle", fr: "" },
    { en: "Shovel", fr: "" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Conduit of Shadow", fr: "" },
      description: {
        en: "Your Patron grants you knowledge of Shadow Blast (necrotic cantrip, Range 8, 1d12+KEY, +1d12 every 5 levels) and Summon Shadows (summon and command shadow minions with 1 HP each, max INT or LVL minions).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Master of Darkness", fr: "" },
      description: {
        en: "Your Patron grants you knowledge of Necrotic cantrips and tier 1 spells.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Pilfered Power", fr: "" },
      description: {
        en: "Steal power from your patron to cast tiered spells at the highest tier unlocked. You can do this DEX times before your patron retaliates with half your max HP in damage. Resets on Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "The Pact is Sealed", fr: "" },
      description: {
        en: "Choose a subclass and 1 Lesser Shadow Invocation. You may supplicate your Patron on a Safe Rest to change your Shadowmancer options.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "A Gift from the Master", fr: "" },
      description: {
        en: "Choose 1 Greater Shadow Invocation.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Tier 2 Spells", fr: "" },
      description: {
        en: "You may now cast tier 2 spells; all of your spells are cast at this tier.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 6,
      name: { en: "A Gift from the Master (2)", fr: "" },
      description: {
        en: "Choose a 2nd Greater Shadow Invocation.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Shadowmastery", fr: "" },
      description: { en: "Choose 1 Necrotic Utility Spell.", fr: "" },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Shadowmancer subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Tier 3 Spells", fr: "" },
      description: {
        en: "You may now cast tier 3 spells; all of your spells are cast at this tier.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 8,
      name: { en: "Lesser Invocation", fr: "" },
      description: {
        en: "Choose a 2nd Lesser Shadow Invocation.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Shadowmastery (2)", fr: "" },
      description: { en: "Choose a 2nd Necrotic Utility Spell.", fr: "" },
      type: "core",
    },
    {
      level: 9,
      name: { en: "A Gift from the Master (3)", fr: "" },
      description: {
        en: "Choose a 3rd Greater Shadow Invocation.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Tier 4 Spells", fr: "" },
      description: {
        en: "You may now cast tier 4 spells; all of your spells are cast at this tier.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Shadowmancer subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Lesser Invocation (2)", fr: "" },
      description: {
        en: "Choose a 3rd Lesser Shadow Invocation.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Greedy Pact", fr: "" },
      description: {
        en: "When you would take damage from Pilfered Power, make a STR save: 1-9 suffer damage as normal, 10-19 suffer only 10 HP, 20+ suffer no damage and cast the spell as if 1 tier higher.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Tier 5 Spells", fr: "" },
      description: {
        en: "You may now cast tier 5 spells; all of your spells are cast at this tier.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "A Gift from the Master (4)", fr: "" },
      description: {
        en: "Choose a 4th Greater Shadow Invocation.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 14,
      name: { en: "Shadowmastery (3)", fr: "" },
      description: {
        en: "You know all Necrotic Utility Spells.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Shadowmancer subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Tier 6 Spells", fr: "" },
      description: {
        en: "You may now cast tier 6 spells; all of your spells are cast at this tier.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Dire Shadows", fr: "" },
      description: {
        en: "Attacks against your shadow minions are made with disadvantage. They take no damage from successful saves.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or WIL.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "A Gift from the Master (5)", fr: "" },
      description: {
        en: "Choose a 5th Greater Shadow Invocation.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "" },
      description: { en: "Choose an Epic Boon.", fr: "" },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Tier 7 Spells", fr: "" },
      description: {
        en: "You may now cast tier 7 spells; all of your spells are cast at this tier.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Eldritch Usurper", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. Whenever you summon a single shadow minion, summon 2 instead. They die only when they receive 12 or more damage at one time.",
        fr: "",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
  ],
  subclasses: [
    {
      id: "pact-of-the-red-dragon",
      name: { en: "Pact of the Red Dragon", fr: "" },
      description: {
        en: "Your patron grants you fire magic, transforming your shadow minions into flaming dragon wyrmling shadows.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Draconic Crimson Rite", fr: "" },
          description: {
            en: "Your Patron grants you knowledge of Fire spells. Your shadow minions become flaming dragon wyrmling shadows. Shadow Blast and minions can deal fire or necrotic damage and inflict Smoldering on crits.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "We'll ALL Burn!", fr: "" },
          description: {
            en: "You may cast Pyroclasm without Pilfering Power by including yourself in the damage. You have advantage on the save. Choose 1 Fire Utility Spell.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Heart of Burning Fire", fr: "" },
          description: {
            en: "Regain 1 use of Pilfered Power each time you roll Initiative. This expires at the end of combat if unused.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Enveloped by the Master", fr: "" },
          description: {
            en: "Gain 1d4 Wounds to cast Dragonform.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "pact-of-the-abyssal-depths",
      name: { en: "Pact of the Abyssal Depths", fr: "" },
      description: {
        en: "Your patron grants you ice magic and the ability to breathe underwater, turning your shadow minions into beings of nightfrost.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Master of Nightfrost", fr: "" },
          description: {
            en: "Your Patron grants you knowledge of Ice spells. Gain underwater breathing. Shadow minions become beings of nightfrost. Shadow Blast and minions can deal cold or necrotic damage, and crits grant INT+LVL temp HP.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Shadowfrost", fr: "" },
          description: {
            en: "Your Shadow Blast also Slows. You can cast Cryosleep or Rimeblades without Pilfering Power by expending 10 temp HP. Choose 1 Ice Utility Spell.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Glacial Resilience", fr: "" },
          description: {
            en: "(1/Safe Rest) Reaction when attacked or gaining a condition: gain 10xLVL temp HP and end all negative conditions on yourself. Remaining temp HP are lost at end of your next turn.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Cryomancer's Reprisal", fr: "" },
          description: {
            en: "Pay half your max HP to cast any Ice spell. After casting, gain an invisible aura: the next creature that hits you with a melee attack this encounter takes cold damage equal to half the HP you spent.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "reaver",
      name: { en: "Reaver", fr: "" },
      description: {
        en: "Cut off from your patron, you lose Shadow Blast and Pilfered Power but gain the magical Bonescythe, a melee weapon of sinew and bone infused with shadowy magic.",
        fr: "",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Hollow One", fr: "" },
          description: {
            en: "You lose Shadow Blast and Pilfered Power. Gain the Bonescythe (2d12 slashing+DEX necrotic, Reach 2, shatters after a hit). Invocations affecting Shadow Blast affect Bonescythe instead. +1 damage die every 5 levels.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Shadow Exploit", fr: "" },
          description: {
            en: "Sacrifice a shadow minion to cast a spell at the highest tier unlocked. Each subsequent spell this encounter costs 1 additional minion.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Martyr Spawn", fr: "" },
          description: {
            en: "Whenever you Defend, you can sacrifice a shadow minion to take no damage.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Grim Harrow", fr: "" },
          description: {
            en: "When you strike with your Bonescythe, you may divide the dice amongst any number of adjacent targets within Reach.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Reap", fr: "" },
          description: {
            en: "When your Bonescythe crits or kills a creature, summon a shadow minion for free.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "My Blood, My Power", fr: "" },
          description: {
            en: "You may take 1 Wound to cast a tiered spell you know at the highest tier unlocked.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Otherworldly Might", fr: "" },
          description: {
            en: "Advantage on concentration checks if you have any shadow minions.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "I'm the Patron Now!", fr: "" },
          description: {
            en: "Summon 2 shadow minions for free when you roll Initiative.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Shadow Invocations", fr: "" },
    selectAtLevels: [3, 4, 6, 8, 9, 11, 14, 18],
    abilities: [
      {
        name: { en: "Abhorrent Speech", fr: "" },
        description: {
          en: "You can communicate with horrible creatures (aberrations, undead, etc.).",
          fr: "",
        },
      },
      {
        name: { en: "Beguiling Influence", fr: "" },
        description: {
          en: "(1/day) You may reroll an Influence check.",
          fr: "",
        },
      },
      {
        name: { en: "Blood Sight", fr: "" },
        description: {
          en: "(1/day) You may reroll an Examination check. You can also detect traces of blood on a surface, even after it has been cleaned.",
          fr: "",
        },
      },
      {
        name: { en: "Devoted Acolyte", fr: "" },
        description: {
          en: "Learn 2 of: Celestial, Draconic, Deep Speak, Infernal, or Primordial. Advantage on Lore checks related to those languages.",
          fr: "",
        },
      },
      {
        name: { en: "Eldritch Sense", fr: "" },
        description: {
          en: "You can sense the presence of any shapechanger or creature concealed by magic within 6 spaces.",
          fr: "",
        },
      },
      {
        name: { en: "Gaze of Two Minds", fr: "" },
        description: {
          en: "Touch a willing creature and perceive through its senses instead of your own while concentrating.",
          fr: "",
        },
      },
      {
        name: { en: "Knowledge from Beyond", fr: "" },
        description: {
          en: "Whenever you fail an Insight or Arcana check, you may suffer 1 Wound to succeed instead.",
          fr: "",
        },
      },
      {
        name: { en: "My Favored Pet", fr: "" },
        description: {
          en: "One shadow minion can tolerate you outside of combat and perform menial tasks a below-average commoner could.",
          fr: "",
        },
      },
      {
        name: { en: "Voice of the Dark", fr: "" },
        description: {
          en: "You can communicate telepathically with a humanoid within 6 spaces.",
          fr: "",
        },
      },
      {
        name: { en: "Whispers of the Grave", fr: "" },
        description: {
          en: "(1/day) You can ask a dead creature 3 yes/no questions. It can never be questioned this way again.",
          fr: "",
        },
      },
      {
        name: { en: "Armor of Shadows", fr: "" },
        description: {
          en: "Reduce all damage you receive by an amount equal to the number of minions you have.",
          fr: "",
        },
      },
      {
        name: { en: "Fiendish Boon", fr: "" },
        description: {
          en: "Increase your DEX or INT by 1. You have 1 fewer maximum Hit Dice.",
          fr: "",
        },
      },
      {
        name: { en: "Hungering Shadows", fr: "" },
        description: {
          en: "Whenever one of your shadows would crit, the next tiered spell you cast this encounter does not cost a use of Pilfered Power.",
          fr: "",
        },
      },
      {
        name: { en: "One with Shadows", fr: "" },
        description: {
          en: "Action: When in dim light or darkness, become Invisible until you move or attack.",
          fr: "",
        },
      },
      {
        name: { en: "Repelling Blast", fr: "" },
        description: {
          en: "When you hit a Medium or smaller creature with Shadow Blast, push them up to 2 spaces away.",
          fr: "",
        },
      },
      {
        name: { en: "Shadow Magus", fr: "" },
        description: {
          en: "Your minions gain +4 Reach and deal d10 damage instead.",
          fr: "",
        },
      },
      {
        name: { en: "Shadow Spear", fr: "" },
        description: {
          en: "Your Shadow Blast targets twice as far, ignores cover, and you may attack Prone targets with advantage.",
          fr: "",
        },
      },
      {
        name: { en: "Shadow Rush", fr: "" },
        description: {
          en: "When your shadow minions attack, instead of rolling damage, you may have any of them deal the max amount, then die.",
          fr: "",
        },
      },
      {
        name: { en: "Shadow Warp", fr: "" },
        description: {
          en: "Action: Switch places with a creature within 12 spaces that has been dealt necrotic damage this turn.",
          fr: "",
        },
      },
      {
        name: { en: "Swarming Shadows", fr: "" },
        description: {
          en: "Whenever one of your shadows would crit, summon another shadow minion adjacent to the target.",
          fr: "",
        },
      },
      {
        name: { en: "Vengeful Blast", fr: "" },
        description: {
          en: "Whenever a minion dies, you may cast Shadow Blast as a reaction (even if you already cast it this turn).",
          fr: "",
        },
      },
    ],
  },
};

// ─── Shepherd ───────────────────────────────────────────────────────────────

export const shepherd: HeroClass = {
  id: "shepherd",
  name: { en: "Shepherd", fr: "" },
  description: {
    en: "Master of life and death who leads a faithful Lifebinding Spirit companion. Choose between the nurturing Luminary of Mercy and the ruinous Luminary of Malice.",
    fr: "",
  },
  complexity: 2,
  keyStats: ["WIL", "STR"],
  hitDie: "1d10",
  startingHp: 17,
  saves: { strong: "WIL", weak: "DEX" },
  armorProficiency: [
    { en: "Mail Armor", fr: "" },
    { en: "Shields", fr: "" },
  ],
  weaponProficiency: [
    { en: "STR Weapons", fr: "" },
    { en: "Wands", fr: "" },
  ],
  startingGear: [
    { en: "Rusty Mail", fr: "" },
    { en: "Mace", fr: "" },
    { en: "Wooden Buckler", fr: "" },
    { en: "Bell", fr: "" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Keeper of Life & Death", fr: "" },
      description: {
        en: "You know Radiant and Necrotic cantrips.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Searing Light", fr: "" },
      description: {
        en: "(WIL times/Safe Rest) Action: Heal WIL d8 HP to a Dying creature within Reach 6, or inflict WIL d8 radiant damage to an undead or Bloodied enemy within Reach 6.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Unlock Tier 1 Spells", fr: "" },
      description: {
        en: "Unlock tier 1 Radiant and Necrotic spells. Gain a mana pool equal to (WILx3)+LVL that recharges on a Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Lifebinding Spirit", fr: "" },
      description: {
        en: "Summon an immune-to-harm spirit companion that attacks for 1d6+WIL radiant damage (ignoring armor) or heals for the same amount within Reach 4. Upcasting increments its die size and healing uses.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Shepherd subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Master of Twilight", fr: "" },
      description: {
        en: "Choose 1 Necrotic and 1 Radiant Utility Spell.",
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
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Sacred Grace", fr: "" },
      description: {
        en: "Choose 2 Sacred Graces. You may change your Shepherd options after serving others or tending a sacred place during a Safe Rest.",
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
      name: { en: "Master of Twilight (2)", fr: "" },
      description: {
        en: "Choose a 2nd Necrotic and Radiant Utility Spell.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Shepherd subclass feature.",
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
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Sacred Grace (2)", fr: "" },
      description: { en: "Choose a 3rd Sacred Grace.", fr: "" },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
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
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Shepherd subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Master of Twilight (3)", fr: "" },
      description: {
        en: "You know all Necrotic and Radiant Utility Spells.",
        fr: "",
      },
      type: "core",
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
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Sacred Grace (3)", fr: "" },
      description: { en: "Choose a 4th Sacred Grace.", fr: "" },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
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
      level: 15,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Shepherd subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
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
      description: { en: "+1 WIL or STR.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Revitalizing Blessing", fr: "" },
      description: {
        en: "(1/round) Whenever you roll a 6 or higher on one or more healing die, the target may recover one Wound.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 INT or DEX.", fr: "" },
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
      description: { en: "Choose an Epic Boon.", fr: "" },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Twilight Sage", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. Your Lifebinding Spirit rolls twice as many dice.",
        fr: "",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
  ],
  subclasses: [
    {
      id: "luminary-of-mercy",
      name: { en: "Luminary of Mercy", fr: "" },
      description: {
        en: "A nurturing healer who amplifies restorative abilities and channels conduits of radiant light to mend the wounded.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Merciful Healing", fr: "" },
          description: {
            en: "When your effects heal a Dying creature, they are healed for twice as much. (1/round) Your Lifebinding Spirit can act for free while you are Dying.",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Life is Beautiful", fr: "" },
          description: {
            en: "Harmless and lovely creatures such as butterflies and hummingbirds are attracted to your presence. Flowers bloom more vibrantly near you.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Conduit of Light", fr: "" },
          description: {
            en: "When your effects would heal HP, you may expend 1 use of Searing Light to heal (or damage, ignoring armor) another target within 6 spaces for the same amount.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Powerful Healer", fr: "" },
          description: {
            en: "(WIL times/Safe Rest) Whenever you would roll dice to heal, you may instead heal the max amount you could roll, or give that many temp HP.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Empowered Conduit", fr: "" },
          description: {
            en: "Your Conduit of Light may target 1 additional creature. Regain 1 charge of Searing Light when you roll Initiative (expires at end of combat).",
            fr: "",
          },
        },
      ],
    },
    {
      id: "luminary-of-malice",
      name: { en: "Luminary of Malice", fr: "" },
      description: {
        en: "A ruinous wielder of death energy who reaps souls and thrives on the edge between life and oblivion.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Soul Reaper", fr: "" },
          description: {
            en: "When you use Searing Light to harm an enemy, a 2nd enemy within range takes the same amount of damage (ignoring armor).",
            fr: "",
          },
        },
        {
          level: 3,
          name: { en: "Harbinger of Decay", fr: "" },
          description: {
            en: "Vibrant colors and lovely smells are suppressed near you. Foods spoil rapidly in your presence. You may shift your Lifebinding Spirit into a deathly form with necrotic damage.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Veilwalker's Blessing", fr: "" },
          description: {
            en: "(1/Safe Rest) Reaction when you would drop to 0 HP: drop to 1 HP instead and force an enemy within 6 spaces to make a STR save. On failure, they become Bloodied, or if already Bloodied, drop to 0 HP.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Deathbringer's Touch", fr: "" },
          description: {
            en: "Your first melee attack each round against a Bloodied creature is an automatic critical hit. Your Lifebinding Spirit deals additional damage equal to your STR.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Conduit of Death", fr: "" },
          description: {
            en: "Your Veilwalker's Blessing recharges when you roll Initiative. This charge is lost if unspent at the end of combat.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Sacred Graces", fr: "" },
    selectAtLevels: [5, 9, 13],
    abilities: [
      {
        name: { en: "Assist Me, My Friend!", fr: "" },
        description: {
          en: "Whenever you make your first melee attack each round, you may add your Lifebinding Spirit's damage to the attack.",
          fr: "",
        },
      },
      {
        name: { en: "Empowered Companion", fr: "" },
        description: {
          en: "When you spend mana to summon your Lifebinding Spirit, cast it as if you spent 1 additional mana (ignoring tier restrictions). Maximum die size is now a d20.",
          fr: "",
        },
      },
      {
        name: { en: "Guiding Spirit", fr: "" },
        description: {
          en: "When your Lifebinding Spirit rolls a 6 or higher on its damage die, the target glows with radiant light. The next attack against that target has advantage.",
          fr: "",
        },
      },
      {
        name: { en: "Hasty Companion", fr: "" },
        description: {
          en: "+4 Reach for your Lifebinding Spirit. It can also act for free when summoned.",
          fr: "",
        },
      },
      {
        name: { en: "Illuminate Soul", fr: "" },
        description: {
          en: "Action: A creature within 6 spaces glows with radiant light. For 1 round, attacks against them are made with your choice of advantage or disadvantage. WIL times per Safe Rest.",
          fr: "",
        },
      },
      {
        name: { en: "Light Bearer", fr: "" },
        description: {
          en: "Regain 1 use of Searing Light when you roll Initiative (expires at end of combat if unspent).",
          fr: "",
        },
      },
      {
        name: { en: "Not Beyond MY Reach", fr: "" },
        description: {
          en: "You may target creatures dead less than 1 round for healing. For every 10 HP healed, you may recover 1 Wound instead (must heal at least 1 Wound to revive).",
          fr: "",
        },
      },
      {
        name: { en: "Vengeful Spirit", fr: "" },
        description: {
          en: "Action: Your Lifebinding Spirit sacrifices itself to become a vortex of radiant light, damaging all enemies within 3 spaces of you (ignoring armor and cover) at end of your turn for rounds equal to remaining healing charges.",
          fr: "",
        },
      },
    ],
  },
};

// ─── Songweaver ─────────────────────────────────────────────────────────────

export const songweaver: HeroClass = {
  id: "songweaver",
  name: { en: "Songweaver", fr: "" },
  description: {
    en: "An inspiring presence with sharp wit and a sharper tongue. Use powerful charisma and lyrical weaponry to dominate enemies and bolster allies.",
    fr: "",
  },
  complexity: 3,
  keyStats: ["WIL", "INT"],
  hitDie: "1d8",
  startingHp: 13,
  saves: { strong: "WIL", weak: "STR" },
  armorProficiency: [
    { en: "Cloth", fr: "" },
    { en: "Leather", fr: "" },
  ],
  weaponProficiency: [
    { en: "DEX Weapons", fr: "" },
    { en: "Wands", fr: "" },
  ],
  startingGear: [
    { en: "Adventurer's Garb", fr: "" },
    { en: "Instrument", fr: "" },
    { en: "Dagger", fr: "" },
    { en: "Mirror", fr: "" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Wind Spellcasting", fr: "" },
      description: {
        en: "You know cantrips from the Wind school and 1 other school of your choice. You also know Vicious Mockery (Wind cantrip, Range 12, 1d4+INT psychic ignoring armor, Taunts on hit, +2 damage every 5 levels).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Songweaver's Inspiration", fr: "" },
      description: {
        en: "(2xWIL times/Safe Rest) Free Reaction: Allow an ally to reroll a single die related to an attack or save (must keep either result).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Unlock Tier 1 Spells", fr: "" },
      description: {
        en: "Unlock tier 1 spells in your known schools. Gain a mana pool equal to (INTx3)+LVL that recharges on a Safe Rest.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Jack of All Trades", fr: "" },
      description: {
        en: "When you Safe Rest, you may move a skill point as if you just leveled up.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Song of Rest", fr: "" },
      description: {
        en: "(1/day) When you Field Rest, play a song to allow anyone spending Hit Dice to heal additional HP equal to your WIL.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "" },
      description: {
        en: "Choose a Songweaver subclass.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Quick Wit", fr: "" },
      description: {
        en: "When you roll Initiative, regain 2 spent uses of Songweaver's Inspiration (these expire at the end of combat if unused).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Windbag", fr: "" },
      description: {
        en: "Choose 1 Utility Spell from each spell school you know.",
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
      description: { en: "+1 WIL or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Lyrical Weaponry", fr: "" },
      description: {
        en: "Choose 1 ability from the Lyrical Weaponry list.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "A \"People\" Person", fr: "" },
      description: {
        en: "Choose 2 friends you know from your travels. You can temporarily summon them via song (1/Safe Rest each).",
        fr: "",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "" },
      description: { en: "+1 STR or DEX.", fr: "" },
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
      name: { en: "Windbag (2)", fr: "" },
      description: {
        en: "Choose a 2nd Utility Spell from each spell school you know.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Songweaver subclass feature.",
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
      description: { en: "+1 WIL or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Lyrical Weaponry (2)", fr: "" },
      description: {
        en: "Choose a 2nd ability from the Lyrical Weaponry list.",
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
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Songweaver subclass feature.",
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
      description: { en: "+1 WIL or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Lyrical Weaponry (3)", fr: "" },
      description: {
        en: "Choose a 3rd ability from the Lyrical Weaponry list.",
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
      name: { en: "Windbag (3)", fr: "" },
      description: {
        en: "You know all Utility Spells from the spell schools you know.",
        fr: "",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass Feature", fr: "" },
      description: {
        en: "Gain your Songweaver subclass feature.",
        fr: "",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
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
      description: { en: "+1 WIL or INT.", fr: "" },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Lyrical Weaponry (4)", fr: "" },
      description: {
        en: "Choose a 4th ability from the Lyrical Weaponry list.",
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
      description: { en: "Choose an Epic Boon.", fr: "" },
      type: "core",
    },
    {
      level: 20,
      name: { en: "I'm So Famous!", fr: "" },
      description: {
        en: "+1 to any 2 of your stats. Your Songweaver's Inspiration cannot fail (your target succeeds).",
        fr: "",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "" },
      description: { en: "Your cantrips grow stronger.", fr: "" },
      type: "core",
    },
  ],
  subclasses: [
    {
      id: "herald-of-snark",
      name: { en: "Herald of Snark", fr: "" },
      description: {
        en: "A sharp-tongued provocateur who weaponizes mockery and chaos to dominate the battlefield.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Opportunistic Snark", fr: "" },
          description: {
            en: "Reaction when an enemy within Range 12 misses an attack: cast Vicious Mockery at them for double damage.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Fight Picker", fr: "" },
          description: {
            en: "(1/turn) When an enemy is damaged by your Vicious Mockery, you may have one of your allies Taunt them until the end of their turn instead.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Chord of Chaos", fr: "" },
          description: {
            en: "(1/encounter) Action: Move all creatures within hearing of your song up to 3 spaces, as long as they don't move into an obviously dangerous place.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Words Like Swords", fr: "" },
          description: {
            en: "Your Vicious Mockery damage becomes 1d6+INT+WIL.",
            fr: "",
          },
        },
      ],
    },
    {
      id: "herald-of-courage",
      name: { en: "Herald of Courage", fr: "" },
      description: {
        en: "An uplifting champion whose inspiring presence empowers allies to feats of legendary heroism.",
        fr: "",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Inspiring Presence", fr: "" },
          description: {
            en: "Whenever you use Songweaver's Inspiration, your allies within 12 spaces who can hear you gain WIL temp HP.",
            fr: "",
          },
        },
        {
          level: 7,
          name: { en: "Unfailing Courage", fr: "" },
          description: {
            en: "Your Songweaver's Inspiration allows your target to roll with advantage.",
            fr: "",
          },
        },
        {
          level: 11,
          name: { en: "Fire in my Bones", fr: "" },
          description: {
            en: "Your Songweaver's Inspiration also grants your target 1 additional action.",
            fr: "",
          },
        },
        {
          level: 15,
          name: { en: "Chorus of Champions", fr: "" },
          description: {
            en: "(1/encounter) Free Reaction: Give all party members 1 action.",
            fr: "",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Lyrical Weaponry", fr: "" },
    selectAtLevels: [4, 9, 13, 17],
    abilities: [
      {
        name: { en: "Heroic Ballad", fr: "" },
        description: {
          en: "+2 max Songweaver's Inspiration charges. When used to reroll an ally's attack, also grants +WIL damage on the attack.",
          fr: "",
        },
      },
      {
        name: { en: "Inspiring Anthem", fr: "" },
        description: {
          en: "(1/encounter) Action: Grant all friendly Dying creatures who can hear you 1 HP and 1 action.",
          fr: "",
        },
      },
      {
        name: { en: "Not My Beautiful Faaace!", fr: "" },
        description: {
          en: "(1/encounter) When you Defend, force the attacker to choose another target on a failed WIL save. If they fail by 5+, they attack themselves. On save, they attack you with disadvantage.",
          fr: "",
        },
      },
      {
        name: { en: "Rhapsody of the Normal", fr: "" },
        description: {
          en: "When you roll 4+ on Vicious Mockery, spend a Songweaver's Inspiration charge to suppress the target's special abilities until end of their next turn, reducing them to basic attacks only.",
          fr: "",
        },
      },
      {
        name: { en: "Song of Domination", fr: "" },
        description: {
          en: "(1/encounter) 2 actions: All enemies within 6 spaces who hear your tune must make a WIL save. On failure, you move them up to 6 spaces and they cannot move on their next turn.",
          fr: "",
        },
      },
    ],
  },
};
