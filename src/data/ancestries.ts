import type { Ancestry } from "./types";

export const ancestries: Ancestry[] = [
  // ─── Common Ancestries ──────────────────────────────────────────────────────

  {
    id: "human",
    name: { en: "Human", fr: "Humain" },
    size: "Medium",
    category: "common",
    trait: {
      name: { en: "Tenacious", fr: "Tenace" },
      description: {
        en: "+1 to all skills and Initiative.",
        fr: "+1 à toutes les compétences et à l'Initiative.",
      },
    },
    modifiers: {
      other: [
        { en: "+1 to all skills", fr: "+1 à toutes les compétences" },
        { en: "+1 Initiative", fr: "+1 Initiative" },
      ],
    },
  },
  {
    id: "dwarf",
    name: { en: "Dwarf", fr: "Nain" },
    size: "Medium",
    category: "common",
    trait: {
      name: { en: "Stout", fr: "Robuste" },
      description: {
        en: "+2 max Hit Dice, +1 max Wounds, -1 Speed. You know Dwarvish if your INT is not negative.",
        fr: "+2 Dés de vie max, +1 Blessure max, -1 Vitesse. Vous connaissez le Nanique si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      speed: -1,
      languages: [{ en: "Dwarvish", fr: "Nanique" }],
      other: [
        { en: "+2 max Hit Dice", fr: "+2 Dés de vie max" },
        { en: "+1 max Wounds", fr: "+1 Blessure max" },
      ],
    },
  },
  {
    id: "elf",
    name: { en: "Elf", fr: "Elfe" },
    size: "Medium",
    category: "common",
    trait: {
      name: { en: "Lithe", fr: "Svelte" },
      description: {
        en: "Advantage on Initiative, +1 Speed. You know Elvish if your INT is not negative.",
        fr: "Avantage à l'Initiative, +1 Vitesse. Vous connaissez l'Elfique si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      speed: 1,
      languages: [{ en: "Elvish", fr: "Elfique" }],
      other: [{ en: "Advantage on Initiative", fr: "Avantage à l'Initiative" }],
    },
  },
  {
    id: "halfling",
    name: { en: "Halfling", fr: "Halfelin" },
    size: "Small",
    category: "common",
    trait: {
      name: { en: "Elusive", fr: "Insaisissable" },
      description: {
        en: "+1 to Stealth. If you fail a save, you can succeed instead, 1/Safe Rest.",
        fr: "+1 en Discrétion. Si vous ratez un jet de sauvegarde, vous pouvez réussir à la place, 1/Repos sûr.",
      },
    },
    modifiers: {
      other: [
        { en: "+1 Stealth", fr: "+1 Discrétion" },
        { en: "Auto-succeed a failed save 1/Safe Rest", fr: "Réussir automatiquement un jet de sauvegarde raté 1/Repos sûr" },
      ],
    },
  },
  {
    id: "gnome",
    name: { en: "Gnome", fr: "Gnome" },
    size: "Small",
    category: "common",
    trait: {
      name: { en: "Optimistic", fr: "Optimiste" },
      description: {
        en: "Allow an ally within Reach 6 to reroll any single die, resets when healed to your max HP. -1 Speed. You know Dwarvish if your INT is not negative (but you call it Gnomish, of course).",
        fr: "Permettez à un allié à Allonge 6 de relancer un dé, se réinitialise quand vous êtes soigné à vos PV max. -1 Vitesse. Vous connaissez le Nanique si votre INT n'est pas négative (mais vous l'appelez le Gnomique, bien sûr).",
      },
    },
    modifiers: {
      speed: -1,
      languages: [{ en: "Dwarvish/Gnomish", fr: "Nanique/Gnomique" }],
      other: [
        { en: "Ally reroll ability (resets when healed to max HP)", fr: "Relance d'un allié (se réinitialise quand soigné aux PV max)" },
      ],
    },
  },

  // ─── Exotic Ancestries ──────────────────────────────────────────────────────

  {
    id: "bunbun",
    name: { en: "Bunbun", fr: "Pinpin" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Bunny Legs", fr: "Pattes de lapin" },
      description: {
        en: "Before Interposing or after Defending (after damage), hop up to your Speed in any direction for free, 1/encounter.",
        fr: "Avant de vous Interposer ou après avoir Défendu (après les dégâts), bondissez jusqu'à votre Vitesse dans n'importe quelle direction gratuitement, 1/rencontre.",
      },
    },
    modifiers: {
      other: [{ en: "Free hop movement up to Speed 1/encounter", fr: "Bond gratuit jusqu'à la Vitesse 1/rencontre" }],
    },
  },
  {
    id: "dragonborn",
    name: { en: "Dragonborn", fr: "Sangdragon" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Draconic Heritage", fr: "Héritage draconique" },
      description: {
        en: "+1 Armor. When you attack: deal an additional LVL+KEY damage (ignoring armor) divided as you choose among any of your targets; recharges whenever you Safe Rest or gain a Wound. You know Draconic if your INT is not negative.",
        fr: "+1 Armure. Quand vous attaquez : infligez NIV+CLÉ dégâts supplémentaires (ignorant l'armure) répartis comme vous le souhaitez parmi vos cibles ; se recharge à chaque Repos sûr ou quand vous recevez une Blessure. Vous connaissez le Draconique si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      armor: 1,
      languages: [{ en: "Draconic", fr: "Draconique" }],
      other: [
        {
          en: "Bonus LVL+KEY damage on attack (recharges on Safe Rest or gaining a Wound)",
          fr: "Dégâts bonus NIV+CLÉ en attaque (se recharge au Repos sûr ou en recevant une Blessure)",
        },
      ],
    },
  },
  {
    id: "fiendkin",
    name: { en: "Fiendkin", fr: "Fiélon" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Flameborn", fr: "Né des flammes" },
      description: {
        en: "1 of your neutral saves is advantaged instead. You know Infernal if your INT is not negative.",
        fr: "1 de vos jets de sauvegarde neutres est avantagé à la place. Vous connaissez l'Infernal si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      languages: [{ en: "Infernal", fr: "Infernal" }],
      other: [{ en: "One neutral save becomes advantaged", fr: "Un jet de sauvegarde neutre devient avantagé" }],
    },
  },
  {
    id: "goblin",
    name: { en: "Goblin", fr: "Gobelin" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Skedaddle", fr: "Détaleur" },
      description: {
        en: "Can move 2 spaces for free after you become the target of an attack or negative effect (after damage, ignoring difficult terrain). You know Goblin if your INT is not negative.",
        fr: "Peut se déplacer de 2 cases gratuitement après être devenu la cible d'une attaque ou d'un effet négatif (après les dégâts, en ignorant le terrain difficile). Vous connaissez le Gobelin si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      languages: [{ en: "Goblin", fr: "Gobelin" }],
      other: [{ en: "Free 2-space movement when targeted", fr: "Déplacement gratuit de 2 cases quand ciblé" }],
    },
  },
  {
    id: "kobold",
    name: { en: "Kobold", fr: "Kobold" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Wily", fr: "Rusé" },
      description: {
        en: "Force an enemy to reroll a non-critical attack against you, 1/encounter. +3 to Influence friendly characters. Advantage on skill checks related to dragons. You know Draconic if your INT is not negative.",
        fr: "Forcez un ennemi à relancer une attaque non critique contre vous, 1/rencontre. +3 en Influence sur les personnages amicaux. Avantage aux tests de compétence liés aux dragons. Vous connaissez le Draconique si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      languages: [{ en: "Draconic", fr: "Draconique" }],
      other: [
        { en: "Enemy reroll non-crit attack 1/encounter", fr: "Relance d'attaque non critique ennemie 1/rencontre" },
        { en: "+3 Influence (friendly)", fr: "+3 Influence (amical)" },
        { en: "Advantage on dragon-related checks", fr: "Avantage aux tests liés aux dragons" },
      ],
    },
  },
  {
    id: "orc",
    name: { en: "Orc", fr: "Orc" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Relentless", fr: "Implacable" },
      description: {
        en: "When you would drop to 0 HP, you may set your HP to LVL instead, 1/Safe Rest. +1 Might. You know Goblin if your INT is not negative (but you call it Orcish, of course).",
        fr: "Quand vous tomberiez à 0 PV, vous pouvez fixer vos PV à NIV à la place, 1/Repos sûr. +1 Puissance. Vous connaissez le Gobelin si votre INT n'est pas négative (mais vous l'appelez l'Orquien, bien sûr).",
      },
    },
    modifiers: {
      languages: [{ en: "Goblin/Orcish", fr: "Gobelin/Orquien" }],
      other: [
        { en: "Avoid 0 HP (set to LVL) 1/Safe Rest", fr: "Éviter 0 PV (fixé à NIV) 1/Repos sûr" },
        { en: "+1 Might", fr: "+1 Puissance" },
      ],
    },
  },
  {
    id: "birdfolk",
    name: { en: "Birdfolk", fr: "Avien" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Hollow Bones", fr: "Os creux" },
      description: {
        en: "You have a fly Speed as long as you are wearing armor no heavier than Leather. Crits against you are Vicious (the attacker rolls 1 additional die). Forced movement moves you twice as far.",
        fr: "Vous avez une Vitesse de vol tant que vous portez une armure pas plus lourde que le Cuir. Les coups critiques contre vous sont Vicieux (l'attaquant lance 1 dé supplémentaire). Le déplacement forcé vous déplace deux fois plus loin.",
      },
    },
    modifiers: {
      other: [
        { en: "Fly Speed (max Leather armor)", fr: "Vitesse de vol (armure Cuir max)" },
        { en: "Crits against you are Vicious", fr: "Les coups critiques contre vous sont Vicieux" },
        { en: "Forced movement doubled", fr: "Déplacement forcé doublé" },
      ],
    },
  },
  {
    id: "celestial",
    name: { en: "Celestial", fr: "Céleste" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Highborn", fr: "Noble naissance" },
      description: {
        en: "Your disadvantaged save is Neutral instead. You know Celestial if your INT isn't negative.",
        fr: "Votre jet de sauvegarde désavantagé est Neutre à la place. Vous connaissez le Céleste si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      languages: [{ en: "Celestial", fr: "Céleste" }],
      other: [{ en: "Disadvantaged save becomes Neutral", fr: "Le jet de sauvegarde désavantagé devient Neutre" }],
    },
  },
  {
    id: "changeling",
    name: { en: "Changeling", fr: "Changelin" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "New Place, New Face", fr: "Nouveau lieu, nouveau visage" },
      description: {
        en: "+2 shifting skill points. You may take on the appearance of any ancestry. When you do, you may place your 2 shifting skill points into any 1 skill. 1/day.",
        fr: "+2 points de compétence changeants. Vous pouvez prendre l'apparence de n'importe quelle ascendance. Ce faisant, vous pouvez placer vos 2 points de compétence changeants dans n'importe quelle compétence. 1/jour.",
      },
    },
    modifiers: {
      other: [
        { en: "+2 shifting skill points", fr: "+2 points de compétence changeants" },
        { en: "Change appearance 1/day", fr: "Changer d'apparence 1/jour" },
      ],
    },
  },
  {
    id: "crystalborn",
    name: { en: "Crystalborn", fr: "Cristallin" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Reflective Aura", fr: "Aura réfléchissante" },
      description: {
        en: "When you Defend, gain KEY armor and deal KEY damage back to the attacker. 1/encounter.",
        fr: "Quand vous Défendez, gagnez CLÉ en armure et infligez CLÉ dégâts en retour à l'attaquant. 1/rencontre.",
      },
    },
    modifiers: {
      other: [
        {
          en: "+KEY armor and damage reflection on Defend 1/encounter",
          fr: "+CLÉ armure et renvoi de dégâts en Défense 1/rencontre",
        },
      ],
    },
  },
  {
    id: "dryad-shroomling",
    name: { en: "Dryad/Shroomling", fr: "Dryade/Champignon" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Danger Pollen/Spores", fr: "Pollen/Spores dangereux" },
      description: {
        en: "Whenever an enemy causes you one or more Wounds, you excrete soporific spores: all adjacent enemies are Dazed. You know Elvish if your INT is not negative.",
        fr: "Chaque fois qu'un ennemi vous inflige une ou plusieurs Blessures, vous sécrétez des spores soporifiques : tous les ennemis adjacents sont Hébétés. Vous connaissez l'Elfique si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      languages: [{ en: "Elvish", fr: "Elfique" }],
      other: [{ en: "Daze adjacent enemies when you take Wounds", fr: "Hébéter les ennemis adjacents quand vous recevez des Blessures" }],
    },
  },
  {
    id: "half-giant",
    name: { en: "Half-Giant", fr: "Demi-géant" },
    size: "Large",
    category: "exotic",
    trait: {
      name: { en: "Strength of Stone", fr: "Force de la pierre" },
      description: {
        en: "Force an enemy to reroll a crit against you, 1/encounter. +2 Might. You know Dwarvish if your INT is not negative.",
        fr: "Forcez un ennemi à relancer un coup critique contre vous, 1/rencontre. +2 Puissance. Vous connaissez le Nanique si votre INT n'est pas négative.",
      },
    },
    modifiers: {
      languages: [{ en: "Dwarvish", fr: "Nanique" }],
      other: [
        { en: "Force enemy crit reroll 1/encounter", fr: "Forcer la relance d'un coup critique ennemi 1/rencontre" },
        { en: "+2 Might", fr: "+2 Puissance" },
      ],
    },
  },
  {
    id: "minotaur-beastfolk",
    name: { en: "Minotaur/Beastfolk", fr: "Minotaure/Animorphe" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Charge", fr: "Charge" },
      description: {
        en: "When you move at least 4 spaces, you can push a creature in your path. Medium: 1 space; Small/Tiny: up to 2 spaces. 1/turn.",
        fr: "Quand vous vous déplacez d'au moins 4 cases, vous pouvez pousser une créature sur votre chemin. Moyenne : 1 case ; Petite/Minuscule : jusqu'à 2 cases. 1/tour.",
      },
    },
    modifiers: {
      other: [{ en: "Push creatures when moving 4+ spaces 1/turn", fr: "Pousser des créatures en se déplaçant de 4+ cases 1/tour" }],
    },
  },
  {
    id: "oozeling-construct",
    name: { en: "Oozeling/Construct", fr: "Gélatineux/Automate" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Odd Constitution", fr: "Constitution atypique" },
      description: {
        en: "Increment your Hit Dice one step (d6 > d8 > d10 > d12 > d20); they always heal you for the maximum amount. Magical healing always heals you for the minimum amount.",
        fr: "Augmentez vos Dés de vie d'un cran (d6 > d8 > d10 > d12 > d20) ; ils vous soignent toujours du montant maximum. Les soins magiques vous soignent toujours du montant minimum.",
      },
    },
    modifiers: {
      other: [
        { en: "Hit Dice upgraded one step and always heal max", fr: "Dés de vie augmentés d'un cran et soignent toujours le max" },
        { en: "Magical healing always heals min", fr: "Les soins magiques soignent toujours le min" },
      ],
    },
  },
  {
    id: "planarbeing",
    name: { en: "Planarbeing", fr: "Être planaire" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Planeshift", fr: "Transfert planaire" },
      description: {
        en: "Whenever you Defend, you can gain 1 Wound to temporarily phase out of the material plane and ignore the damage. -2 max Wounds.",
        fr: "Chaque fois que vous Défendez, vous pouvez recevoir 1 Blessure pour temporairement quitter le plan matériel et ignorer les dégâts. -2 Blessures max.",
      },
    },
    modifiers: {
      other: [
        { en: "Phase out on Defend (costs 1 Wound)", fr: "Déphasage en Défense (coûte 1 Blessure)" },
        { en: "-2 max Wounds", fr: "-2 Blessures max" },
      ],
    },
  },
  {
    id: "ratfolk",
    name: { en: "Ratfolk", fr: "Homme-rat" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Scurry", fr: "Trottiner" },
      description: {
        en: "Gain +2 armor if you moved on your last turn.",
        fr: "Gagnez +2 en armure si vous vous êtes déplacé lors de votre dernier tour.",
      },
    },
    modifiers: {
      armor: 2,
      other: [{ en: "+2 Armor (conditional: must have moved)", fr: "+2 Armure (conditionnel : doit s'être déplacé)" }],
    },
  },
  {
    id: "stoatling",
    name: { en: "Stoatling", fr: "Herminidé" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Small But Ferocious", fr: "Petit mais féroce" },
      description: {
        en: "Whenever you make a single-target attack against a creature larger than you, roll 1 additional d6 for each size category it is larger. They do the same.",
        fr: "Chaque fois que vous faites une attaque à cible unique contre une créature plus grande que vous, lancez 1d6 supplémentaire par catégorie de taille de différence. Elles font de même.",
      },
    },
    modifiers: {
      other: [
        {
          en: "+1d6 per size difference vs larger creatures (mutual)",
          fr: "+1d6 par différence de taille contre les créatures plus grandes (mutuel)",
        },
      ],
    },
  },
  {
    id: "turtlefolk",
    name: { en: "Turtlefolk", fr: "Tortéen" },
    size: "Medium",
    category: "exotic",
    trait: {
      name: { en: "Slow & Steady", fr: "Lent mais sûr" },
      description: {
        en: "+4 Armor, -2 speed.",
        fr: "+4 Armure, -2 Vitesse.",
      },
    },
    modifiers: {
      speed: -2,
      armor: 4,
    },
  },
  {
    id: "wyrdling",
    name: { en: "Wyrdling", fr: "Wyrdien" },
    size: "Small",
    category: "exotic",
    trait: {
      name: { en: "Chaotic Surge", fr: "Vague chaotique" },
      description: {
        en: "Whenever you or a willing ally within Reach 6 casts a tiered spell, you may allow them to roll on the Chaos Table. 1/encounter.",
        fr: "Chaque fois que vous ou un allié consentant à Allonge 6 lance un sort à palier, vous pouvez lui permettre de lancer sur la Table du Chaos. 1/rencontre.",
      },
    },
    modifiers: {
      other: [{ en: "Chaos Table on tiered spell 1/encounter", fr: "Table du Chaos sur sort à palier 1/rencontre" }],
    },
  },
];
