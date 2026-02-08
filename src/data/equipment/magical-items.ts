import type { MagicalItem, Wand } from "../types";

export const magicalItems: MagicalItem[] = [
  {
    id: "weapon-of-many-hands",
    name: { en: "Weapon of Many Hands", fr: "" },
    rarity: "uncommon",
    description: {
      en: "This weapon shifts and writhes as if alive. When attuned, it grants the wielder additional arms to fight with.",
      fr: "",
    },
    effects: {
      en: "Grants additional arms to the wielder (varies by weapon type).",
      fr: "",
    },
  },
  {
    id: "harbinger-and-sovereign",
    name: { en: "Harbinger & Sovereign", fr: "" },
    rarity: "legendary",
    description: {
      en: "A set of 2 matching glaives, forged from the same cursed ore. They hum when brought close together.",
      fr: "",
    },
    effects: {
      en: "Set of 2 matching glaives. Grants +4 extra arms when both are wielded.",
      fr: "",
    },
  },
  {
    id: "weapon-of-animosity",
    name: { en: "Weapon of Animosity", fr: "" },
    rarity: "uncommon",
    description: {
      en: "This weapon seethes with barely contained rage. It rewards aggression but punishes failure.",
      fr: "",
    },
    effects: {
      en: "Deal an extra damage die on hit, but take damage on a miss.",
      fr: "",
    },
  },
  {
    id: "weapon-of-slaying",
    name: { en: "Weapon of Slaying", fr: "" },
    rarity: "uncommon",
    description: {
      en: "Etched with runes targeting a specific creature type, this weapon is a bane to its chosen foe.",
      fr: "",
    },
    effects: {
      en: "Deal an extra damage die against a specific creature type.",
      fr: "",
    },
  },
  {
    id: "gnatbane-weapon",
    name: { en: "Gnatbane Weapon", fr: "" },
    rarity: "uncommon",
    description: {
      en: "This weapon hums faintly and tracks tiny movements with uncanny precision.",
      fr: "",
    },
    effects: {
      en: "Does not miss Small or Tiny creatures.",
      fr: "",
    },
  },
  {
    id: "weapon-of-wounding",
    name: { en: "Weapon of Wounding", fr: "" },
    rarity: "uncommon",
    description: {
      en: "A cruel weapon with serrated edges that bites into the wielder's hand as deeply as it cuts the enemy.",
      fr: "",
    },
    effects: {
      en: "Suffer 1d6 damage to deal 2x additional damage on your attack.",
      fr: "",
    },
  },
  {
    id: "vindication",
    name: { en: "Vindication", fr: "" },
    rarity: "legendary",
    description: {
      en: "A massive weapon of terrible power that demands perfection from its wielder.",
      fr: "",
    },
    effects: {
      en: "Deal +1d12 damage on hit, but take damage on a miss.",
      fr: "",
    },
  },
  {
    id: "trinket-of-ill-omen",
    name: { en: "Trinket of Ill Omen", fr: "" },
    rarity: "rare",
    description: {
      en: "A small, unsettling charm that radiates misfortune. It weakens your defenses but strengthens your magic.",
      fr: "",
    },
    effects: {
      en: "-1 to all saves, but +1 to your save DC.",
      fr: "",
    },
  },
  {
    id: "mindlink-daggers",
    name: { en: "Mindlink Daggers", fr: "" },
    rarity: "rare",
    description: {
      en: "A pair of daggers connected by an invisible psychic thread. Holders can share thoughts telepathically.",
      fr: "",
    },
    effects: {
      en: "Holders of each dagger can share thoughts telepathically with each other.",
      fr: "",
    },
  },
  {
    id: "bloodstained-quill",
    name: { en: "Bloodstained Quill", fr: "" },
    rarity: "uncommon",
    description: {
      en: "A quill permanently stained with crimson ink. When touched to parchment near a corpse, it writes their final thoughts.",
      fr: "",
    },
    effects: {
      en: "Write the last words of a dead creature.",
      fr: "",
    },
  },
  {
    id: "eyes-of-the-street",
    name: { en: "Eyes of the Street", fr: "" },
    rarity: "uncommon",
    description: {
      en: "A pair of mismatched glass eyes. When held, you can see through the senses of nearby rats and pigeons.",
      fr: "",
    },
    effects: {
      en: "See through the senses of nearby rats and pigeons.",
      fr: "",
    },
  },
  {
    id: "handwraps-of-force",
    name: { en: "Handwraps of Force", fr: "" },
    rarity: "rare",
    description: {
      en: "Cloth wraps imbued with kinetic energy. Each strike sends a shockwave that can push enemies or propel you.",
      fr: "",
    },
    effects: {
      en: "Push enemies on unarmed strike. Can also propel yourself.",
      fr: "",
    },
  },
  {
    id: "resolute-fangs-golden-bastion",
    name: { en: "Resolute Fangs Golden Bastion", fr: "" },
    rarity: "legendary",
    description: {
      en: "A shield of immense power, forged by the Resolute Fangs. It gleams with golden light and locks onto enemies.",
      fr: "",
    },
    effects: {
      en: "+8 Armor shield. When you use Defend, you also Grapple the attacker.",
      fr: "",
    },
  },
  {
    id: "key-of-doors",
    name: { en: "Key of Doors", fr: "" },
    rarity: "very-rare",
    description: {
      en: "An ornate skeleton key that remembers every door it has opened. It can open a passage to any previously visited doorway.",
      fr: "",
    },
    effects: {
      en: "Open any door to create a passage to a previously visited doorway.",
      fr: "",
    },
  },
  {
    id: "grim-coronet",
    name: { en: "Grim Coronet", fr: "" },
    rarity: "rare",
    description: {
      en: "A dark iron crown that refuses to let its wearer go gently. Death is delayed, but never denied.",
      fr: "",
    },
    effects: {
      en: "Gain 3 extra actions before dying when reduced to 0 HP.",
      fr: "",
    },
  },
  {
    id: "pocket-cauldron",
    name: { en: "Pocket Cauldron", fr: "" },
    rarity: "rare",
    description: {
      en: "A tiny cauldron that expands when placed on a fire. It can brew one of three elixirs during a Safe Rest.",
      fr: "",
    },
    effects: {
      en: "Brew 1 of 3 elixirs during a Safe Rest.",
      fr: "",
    },
  },
  {
    id: "phoenix-helm",
    name: { en: "Phoenix Helm", fr: "" },
    rarity: "legendary",
    description: {
      en: "A helm shaped like a phoenix's head. When the wearer dies, they explode in a burst of flame and are reborn.",
      fr: "",
    },
    effects: {
      en: "On death, explode in flames and revive with HP.",
      fr: "",
    },
  },
  {
    id: "ball-of-spiders",
    name: { en: "Ball of Spiders", fr: "" },
    rarity: "uncommon",
    description: {
      en: "A writhing ball of enchanted spiders held together by silk. When thrown, they scatter and terrify everything nearby.",
      fr: "",
    },
    effects: {
      en: "Throw to Frighten all creatures in a 2x2 area.",
      fr: "",
    },
  },
  {
    id: "skitter-shoes",
    name: { en: "Skitter Shoes", fr: "" },
    rarity: "rare",
    description: {
      en: "Boots with tiny insectoid legs along the soles. They cling to any surface, allowing the wearer to walk on walls and ceilings.",
      fr: "",
    },
    effects: {
      en: "Walk on walls and ceilings at half speed.",
      fr: "",
    },
  },
  {
    id: "button-of-protection",
    name: { en: "Button of Protection", fr: "" },
    rarity: "rare",
    description: {
      en: "A small, unassuming button that pulses with protective magic. Press it at just the right moment to deflect an attack.",
      fr: "",
    },
    effects: {
      en: "Use a Reaction to cause one attack targeting you to miss.",
      fr: "",
    },
  },
];

export const wands: Wand[] = [
  {
    id: "wand-of-firestep",
    name: { en: "Wand of Firestep", fr: "" },
    rarity: "uncommon",
    charges: 3,
    rechargeMethod: { en: "Heat in a forge then quench in oil.", fr: "" },
    spell: { en: "Firestep (Cantrip)", fr: "" },
    description: {
      en: "A charred wooden wand that is warm to the touch. It flickers with embers when waved.",
      fr: "",
    },
  },
  {
    id: "wand-of-dread-visage",
    name: { en: "Wand of Dread Visage", fr: "" },
    rarity: "uncommon",
    charges: 2,
    rechargeMethod: { en: "Place in a corpse until only bones remain.", fr: "" },
    spell: { en: "Dread Visage (Tier 2)", fr: "" },
    description: {
      en: "A bone-white wand carved from a femur. Shadows seem to gather around its tip.",
      fr: "",
    },
  },
  {
    id: "wand-of-fly",
    name: { en: "Wand of Fly", fr: "" },
    rarity: "uncommon",
    charges: 2,
    rechargeMethod: { en: "Give to a wild bird and retrieve it.", fr: "" },
    spell: { en: "Fly (Tier 3)", fr: "" },
    description: {
      en: "A light wand made from a hollow reed. Feathers sprout from it when activated.",
      fr: "",
    },
  },
  {
    id: "wand-of-glacier-strike",
    name: { en: "Wand of Glacier Strike", fr: "" },
    rarity: "very-rare",
    charges: 1,
    rechargeMethod: { en: "Leave at the bottom of a lake until it freezes and thaws.", fr: "" },
    spell: { en: "Glacier Strike (Tier 8)", fr: "" },
    description: {
      en: "A translucent blue wand of solid ice that never melts. The air around it is frigid.",
      fr: "",
    },
  },
  {
    id: "wand-of-ride-the-lightning",
    name: { en: "Wand of Ride the Lightning", fr: "" },
    rarity: "very-rare",
    charges: 2,
    rechargeMethod: { en: "Place at the highest point and wait for 3 thunderstorms.", fr: "" },
    spell: { en: "Ride the Lightning (Tier 6)", fr: "" },
    description: {
      en: "A copper wand that crackles with static. Hair stands on end when it is nearby.",
      fr: "",
    },
  },
  {
    id: "wand-of-barrier-of-wind",
    name: { en: "Wand of Barrier of Wind", fr: "" },
    rarity: "rare",
    charges: 3,
    rechargeMethod: { en: "Hang with wind chimes for 3 days.", fr: "" },
    spell: { en: "Barrier of Wind (Tier 2)", fr: "" },
    description: {
      en: "A slender wand of polished bamboo. A gentle breeze follows it wherever it goes.",
      fr: "",
    },
  },
  {
    id: "wand-of-sacrifice",
    name: { en: "Wand of Sacrifice", fr: "" },
    rarity: "very-rare",
    charges: 1,
    rechargeMethod: { en: "Plant in a garden until flowers bloom around it.", fr: "" },
    spell: { en: "Sacrifice (Tier 6)", fr: "" },
    description: {
      en: "A wand of living wood that weeps sap. It feels warm and sorrowful to hold.",
      fr: "",
    },
  },
  {
    id: "elderwyrms-majesty",
    name: { en: "Elderwyrm's Majesty", fr: "" },
    rarity: "legendary",
    charges: 1,
    rechargeMethod: { en: "Gift it to an ancient dragon and ask for it back.", fr: "" },
    spell: { en: "Dragonform (Tier 9)", fr: "" },
    description: {
      en: "A massive wand of petrified dragonbone, thrumming with primal power. Scales grow on the hand that holds it.",
      fr: "",
    },
  },
  {
    id: "heartwood-splinter-of-the-tree-of-life",
    name: { en: "Heartwood Splinter of the Tree of Life", fr: "" },
    rarity: "legendary",
    charges: 1,
    rechargeMethod: { en: "Sing a sacred hymn over it for 100 years.", fr: "" },
    spell: { en: "Redeem (Tier 9)", fr: "" },
    description: {
      en: "A sliver of golden wood radiating warmth and life. Flowers bloom where its shadow falls.",
      fr: "",
    },
  },
];
