import type { HeroClass } from "../types";

// ─── Berserker ──────────────────────────────────────────────────────────────

export const berserker: HeroClass = {
  id: "berserker",
  name: { en: "Berserker", fr: "Barbare" },
  description: {
    en: "An unstoppable force of wrath and ruin. The longer a fight goes on, the more your Rage intensifies, fueling devastating attacks through Fury Dice.",
    fr: "Une force imparable de colère et de destruction. Plus un combat dure, plus votre Rage s'intensifie, alimentant des attaques dévastatrices grâce aux Dés de fureur.",
  },
  complexity: 2,
  keyStats: ["STR", "DEX"],
  hitDie: "1d12",
  startingHp: 20,
  saves: { strong: "STR", weak: "INT" },
  armorProficiency: [{ en: "None", fr: "Aucun" }],
  weaponProficiency: [{ en: "All STR weapons", fr: "Toutes les armes de FOR" }],
  startingGear: [
    { en: "Battleaxe", fr: "Hache d'armes" },
    { en: "Rations (meat)", fr: "Rations (viande)" },
    { en: "Rope (50 ft.)", fr: "Corde" },
  ],
  abilities: [
    // ── Level 1 ──
    {
      level: 1,
      name: { en: "Rage", fr: "Rage" },
      description: {
        en: "(1/turn) Action: Roll a Fury Die (1d4) and set it aside. Add it to every STR attack you make. You can have a max of KEY Fury Dice; they are lost when your Rage ends.",
        fr: "(1/tour) Action : Lancez un Dé de fureur (1d4) et mettez-le de côté. Ajoutez-le à chaque attaque de FOR que vous effectuez. Vous pouvez avoir un maximum de CLÉ Dés de fureur ; ils sont perdus lorsque votre Rage prend fin.",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "That All You Got?!", fr: "C'est tout c'que t'as ?!" },
      description: {
        en: "When you are attacked, you may expend 1 or more Fury Dice to reduce the damage taken by STR+DEX for each die spent.",
        fr: "Lorsque vous êtes attaqué, vous pouvez dépenser 1 ou plusieurs Dés de fureur pour réduire les dégâts subis de FOR+DEX par dé dépensé.",
      },
      type: "core",
    },
    // ── Level 2 ──
    {
      level: 2,
      name: { en: "Intensifying Fury", fr: "Fureur grandissante" },
      description: {
        en: "If you are Raging at the beginning of your turn, roll 1 Fury Die for free.",
        fr: "Si vous êtes en Rage au début de votre tour, lancez 1 Dé de fureur gratuitement.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "One with the Ancients", fr: "Guidé par les anciens" },
      description: {
        en: "(1/Safe Rest) When faced with a decision about direction or course of action, call upon your ancestors to guide you toward the most dangerous or challenging path.",
        fr: "(1/Repos sûr) Face à une décision de direction ou de ligne de conduite, invoquez vos ancêtres pour qu'ils vous guident vers le chemin le plus dangereux ou le plus périlleux.",
      },
      type: "core",
    },
    // ── Level 3 ──
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Berserker subclass.",
        fr: "Choisissez une sous-classe de Barbare.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Bloodlust", fr: "Soif de sang" },
      description: {
        en: "Expend 1 or more Fury Dice on your turn, move DEX spaces per die spent for free.",
        fr: "Dépensez 1 ou plusieurs Dés de fureur pendant votre tour, déplacez-vous de DEX cases par dé dépensé gratuitement.",
      },
      type: "core",
    },
    // ── Level 4 ──
    {
      level: 4,
      name: { en: "Enduring Rage", fr: "Rage persistante" },
      description: {
        en: "While Dying, you Rage automatically for free at the beginning of your turn, have a max of 2 actions instead of 1, and ignore the STR saves to make attacks.",
        fr: "En état Mourant, vous entrez en Rage automatiquement et gratuitement au début de votre tour, avez un maximum de 2 actions au lieu de 1, et ignorez les jets de sauvegarde de FOR pour attaquer.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Savage Arsenal", fr: "Arsenal sauvage" },
      description: {
        en: "Choose 1 ability from the Savage Arsenal.",
        fr: "Choisissez 1 capacité de l'Arsenal sauvage.",
      },
      type: "core",
    },
    // ── Level 5 ──
    {
      level: 5,
      name: { en: "Rage (2)", fr: "Rage (2)" },
      description: {
        en: "Whenever you Rage, gain 2 Fury Dice instead.",
        fr: "Chaque fois que vous entrez en Rage, gagnez 2 Dés de fureur au lieu de 1.",
      },
      type: "core",
    },
    {
      level: 5,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    // ── Level 6 ──
    {
      level: 6,
      name: { en: "Savage Arsenal (2)", fr: "Arsenal sauvage (2)" },
      description: {
        en: "Choose a 2nd Savage Arsenal ability.",
        fr: "Choisissez une 2e capacité de l'Arsenal sauvage.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Intensifying Fury (2)", fr: "Fureur grandissante (2)" },
      description: {
        en: "Your Fury Dice are now d6s.",
        fr: "Vos Dés de fureur sont désormais des d6.",
      },
      type: "core",
    },
    // ── Level 7 ──
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Berserker subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Barbare.",
      },
      type: "subclass",
    },
    // ── Level 8 ──
    {
      level: 8,
      name: { en: "Savage Arsenal (3)", fr: "Arsenal sauvage (3)" },
      description: {
        en: "Choose a 3rd Savage Arsenal ability.",
        fr: "Choisissez une 3e capacité de l'Arsenal sauvage.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    // ── Level 9 ──
    {
      level: 9,
      name: { en: "Intensifying Fury (3)", fr: "Fureur grandissante (3)" },
      description: {
        en: "Your Fury Dice are now d8s.",
        fr: "Vos Dés de fureur sont désormais des d8.",
      },
      type: "core",
    },
    {
      level: 9,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    // ── Level 10 ──
    {
      level: 10,
      name: { en: "Savage Arsenal (4)", fr: "Arsenal sauvage (4)" },
      description: {
        en: "Choose a 4th Savage Arsenal ability.",
        fr: "Choisissez une 4e capacité de l'Arsenal sauvage.",
      },
      type: "core",
    },
    // ── Level 11 ──
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Berserker subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Barbare.",
      },
      type: "subclass",
    },
    // ── Level 12 ──
    {
      level: 12,
      name: { en: "Savage Arsenal (5)", fr: "Arsenal sauvage (5)" },
      description: {
        en: "Choose a 5th Savage Arsenal ability.",
        fr: "Choisissez une 5e capacité de l'Arsenal sauvage.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    // ── Level 13 ──
    {
      level: 13,
      name: { en: "Intensifying Fury (4)", fr: "Fureur grandissante (4)" },
      description: {
        en: "Your Fury Dice are now d10s.",
        fr: "Vos Dés de fureur sont désormais des d10.",
      },
      type: "core",
    },
    {
      level: 13,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    // ── Level 14 ──
    {
      level: 14,
      name: { en: "Savage Arsenal (6)", fr: "Arsenal sauvage (6)" },
      description: {
        en: "Choose a 6th Savage Arsenal ability.",
        fr: "Choisissez une 6e capacité de l'Arsenal sauvage.",
      },
      type: "core",
    },
    // ── Level 15 ──
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Berserker subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Barbare.",
      },
      type: "subclass",
    },
    // ── Level 16 ──
    {
      level: 16,
      name: { en: "Savage Arsenal (7)", fr: "Arsenal sauvage (7)" },
      description: {
        en: "Choose a 7th Savage Arsenal ability.",
        fr: "Choisissez une 7e capacité de l'Arsenal sauvage.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    // ── Level 17 ──
    {
      level: 17,
      name: { en: "Intensifying Fury (5)", fr: "Fureur grandissante (5)" },
      description: {
        en: "Your Fury Dice are now d12s.",
        fr: "Vos Dés de fureur sont désormais des d12.",
      },
      type: "core",
    },
    {
      level: 17,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    // ── Level 18 ──
    {
      level: 18,
      name: { en: "Deep Rage", fr: "Rage profonde" },
      description: {
        en: "Dropping to 0 HP does not cause your Rage to end.",
        fr: "Tomber à 0 PV ne met pas fin à votre Rage.",
      },
      type: "core",
    },
    // ── Level 19 ──
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    // ── Level 20 ──
    {
      level: 20,
      name: { en: "Boundless Rage", fr: "Rage sans borne" },
      description: {
        en: "+1 to any 2 of your stats. Anytime you roll less than 6 on a Fury Die, change it to 6 instead.",
        fr: "+1 à 2 stats de votre choix. Chaque fois que vous obtenez moins de 6 sur un Dé de fureur, changez le résultat en 6.",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Path of the Mountainheart ──
    {
      id: "path-of-the-mountainheart",
      name: {
        en: "Path of the Mountainheart",
        fr: "Voie du coeur de la montagne",
      },
      description: {
        en: "An indomitable path focused on endurance, resilience, and surviving what should kill you.",
        fr: "Une voie indomptable axée sur l'endurance, la résilience et la capacité de survivre à ce qui devrait vous tuer.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Stone's Resilience", fr: "Résilience de la roche" },
          description: {
            en: "Whenever you expend Fury Dice to reduce incoming damage, add the value of the die to the amount reduced.",
            fr: "Chaque fois que vous dépensez des Dés de fureur pour réduire les dégâts reçus, ajoutez la valeur du dé au montant réduit.",
          },
        },
        {
          level: 3,
          name: { en: "Mountainous Tenacity", fr: "Ténacité montagnarde" },
          description: {
            en: "Whenever you expend Hit Dice to recover HP, for every 10 HP you would recover, you may heal 1 Wound instead.",
            fr: "Chaque fois que vous dépensez des Dés de vie pour récupérer des PV, pour chaque tranche de 10 PV récupérés, vous pouvez soigner 1 Blessure à la place.",
          },
        },
        {
          level: 7,
          name: { en: "Unbreakable", fr: "Incassable" },
          description: {
            en: "(1/encounter) While Raging, if you would suffer your last Wound or other negative condition of your choice, you don't.",
            fr: "(1/rencontre) En Rage, si vous devez subir votre dernière Blessure ou une autre condition négative de votre choix, vous ne la subissez pas.",
          },
        },
        {
          level: 11,
          name: { en: "Titan's Fury", fr: "Fureur du titan" },
          description: {
            en: "After you miss an attack or are crit by an enemy, Rage for free.",
            fr: "Après avoir raté une attaque ou subi un coup critique d'un ennemi, entrez en Rage gratuitement.",
          },
        },
        {
          level: 15,
          name: { en: "Mountain's Endurance", fr: "Endurance de la montagne" },
          description: {
            en: "While Dying, if an attack against you would be a crit, the attack is rerolled instead (when-crit abilities still trigger).",
            fr: "En état Mourant, si une attaque contre vous serait un coup critique, l'attaque est relancée à la place (les capacités déclenchées par un critique s'activent quand même).",
          },
        },
      ],
    },
    // ── Path of the Red Mist ──
    {
      id: "path-of-the-red-mist",
      name: { en: "Path of the Red Mist", fr: "Voie de la brume écarlate" },
      description: {
        en: "A frenzied path focused on relentless offense, blood frenzy, and unstoppable brutality.",
        fr: "Une voie frénétique axée sur l'offensive implacable, la frénésie sanglante et la brutalité inarrêtable.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Blood Frenzy", fr: "Frénésie sanglante" },
          description: {
            en: "(1/turn) While Raging, whenever you crit or kill an enemy, change 1 Fury Die to the maximum.",
            fr: "(1/tour) En Rage, chaque fois que vous faites un coup critique ou tuez un ennemi, passez 1 Dé de fureur à sa valeur maximale.",
          },
        },
        {
          level: 3,
          name: { en: "Savage Awareness", fr: "Conscience sauvage" },
          description: {
            en: "Advantage on Perception checks to notice or track blood. Blindsight 2 while Raging: ignore the Blinded condition and see through darkness and Invisibility within that Range.",
            fr: "Avantage aux jets de Perception pour remarquer ou suivre le sang. Vision aveugle 2 en Rage : ignorez la condition Aveuglé et voyez à travers les ténèbres et l'Invisibilité dans cette Portée.",
          },
        },
        {
          level: 7,
          name: { en: "Unstoppable Brutality", fr: "Brutalité imparable" },
          description: {
            en: "While Raging, you may gain 1 Wound to reroll any attack or save.",
            fr: "En Rage, vous pouvez subir 1 Blessure pour relancer n'importe quelle attaque ou jet de sauvegarde.",
          },
        },
        {
          level: 11,
          name: { en: "Opportunistic Frenzy", fr: "Frénésie opportuniste" },
          description: {
            en: "While Raging, you can make opportunity attacks without disadvantage, and you may make them whenever an enemy enters your melee weapon's reach.",
            fr: "En Rage, vous pouvez effectuer des attaques d'opportunité sans désavantage, et vous pouvez les effectuer chaque fois qu'un ennemi entre dans l'allonge de votre arme de mêlée.",
          },
        },
        {
          level: 15,
          name: { en: "Onslaught", fr: "Assaut" },
          description: {
            en: "While Raging, gain +2 speed. (1/round) You may move for free.",
            fr: "En Rage, gagnez +2 vitesse. (1/round) Vous pouvez vous déplacer gratuitement.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Savage Arsenal", fr: "Arsenal sauvage" },
    selectAtLevels: [4, 6, 8, 10, 12, 14, 16],
    abilities: [
      {
        name: { en: "Death Blow", fr: "Coup mortel" },
        description: {
          en: "After you deal damage from a crit, you may expend any number of Fury Dice. Sum the dice and deal double that amount of damage.",
          fr: "Après avoir infligé des dégâts sur un coup critique, vous pouvez dépenser n'importe quel nombre de Dés de fureur. Additionnez les dés et infligez le double de ce montant en dégâts.",
        },
      },
      {
        name: { en: "Deathless Rage", fr: "Rage immortelle" },
        description: {
          en: "(1/turn) While Dying, you may suffer 1 Wound to gain 1 action.",
          fr: "(1/tour) En état Mourant, vous pouvez subir 1 Blessure pour gagner 1 action.",
        },
      },
      {
        name: { en: "Eager for Battle", fr: "Impatience du combat" },
        description: {
          en: "Gain advantage on Initiative. Move 2x DEX spaces for free on your first turn each encounter.",
          fr: "Gagnez l'avantage sur l'Initiative. Déplacez-vous de 2x DEX cases gratuitement lors de votre premier tour de chaque rencontre.",
        },
      },
      {
        name: { en: "Into the Fray", fr: "Dans la mêlée" },
        description: {
          en: "Action: Leap up to 2x DEX spaces toward an enemy. If you land adjacent to at least 2 enemies, make an attack against 1 of them for free.",
          fr: "Action : Bondissez jusqu'à 2x DEX cases vers un ennemi. Si vous atterrissez adjacent à au moins 2 ennemis, effectuez une attaque contre l'un d'eux gratuitement.",
        },
      },
      {
        name: { en: "Mighty Endurance", fr: "Endurance surhumaine" },
        description: {
          en: "You can now survive an additional 4 Wounds before death.",
          fr: "Vous pouvez désormais survivre à 4 Blessures supplémentaires avant de mourir.",
        },
      },
      {
        name: { en: "MORE BLOOD!", fr: "ENCORE DU SANG !" },
        description: {
          en: "Whenever an enemy crits you, gain 1 Fury Die.",
          fr: "Chaque fois qu'un ennemi vous inflige un coup critique, gagnez 1 Dé de fureur.",
        },
      },
      {
        name: { en: "Rampage", fr: "Massacre" },
        description: {
          en: "(1/turn) After you land a hit, you may treat your next attack this turn as if you rolled that same amount instead of rolling again.",
          fr: "(1/tour) Après avoir touché, vous pouvez traiter votre prochaine attaque ce tour comme si vous aviez obtenu le même résultat au lieu de relancer.",
        },
      },
      {
        name: { en: "Swift Fury", fr: "Fureur prompte" },
        description: {
          en: "Whenever you gain one or more Fury Dice, move up to DEX spaces for free, ignoring difficult terrain.",
          fr: "Chaque fois que vous gagnez un ou plusieurs Dés de fureur, déplacez-vous jusqu'à DEX cases gratuitement, en ignorant le terrain difficile.",
        },
      },
      {
        name: { en: "Thunderous Steps", fr: "Pas tonnants" },
        description: {
          en: "After moving at least 4 spaces while Raging, deal STR Bludgeoning damage to all adjacent creatures where you stop.",
          fr: "Après vous être déplacé d'au moins 4 cases en Rage, infligez FOR dégâts contondants à toutes les créatures adjacentes à l'endroit où vous vous arrêtez.",
        },
      },
      {
        name: { en: "Unstoppable Force", fr: "Force innarrêtable" },
        description: {
          en: "While Dying and Raging, taking damage causes 1 Wound (instead of 2) and critical hits inflict 2 Wounds (instead of 3).",
          fr: "En état Mourant et en Rage, subir des dégâts inflige 1 Blessure (au lieu de 2) et les coups critiques infligent 2 Blessures (au lieu de 3).",
        },
      },
      {
        name: { en: "Whirlwind", fr: "Tourbillon" },
        description: {
          en: "2 actions: Attack ALL targets within your melee weapon's reach.",
          fr: "2 actions : Attaquez TOUTES les cibles à l'allonge de votre arme de mêlée.",
        },
      },
      {
        name: { en: "You're Next!", fr: "À ton tour !" },
        description: {
          en: "Action: While Raging, make a Might skill check to demoralize an enemy within Reach 12 (DC: their current HP). On success, they immediately flee the battle.",
          fr: "Action : En Rage, effectuez un jet de compétence de Puissance pour démoraliser un ennemi à Allonge 12 (SD : ses PV actuels). En cas de réussite, il fuit immédiatement le combat.",
        },
      },
    ],
  },
};

// ─── The Cheat ──────────────────────────────────────────────────────────────

export const cheat: HeroClass = {
  id: "the-cheat",
  name: { en: "The Cheat", fr: "Roublard" },
  description: {
    en: "A sneaky, backstabbing, dirty-fighting rogue. Break the rules, manipulate dice rolls, and deliver devastating Sneak Attacks from the shadows.",
    fr: "Un voleur sournois, traître et bagarreur. Brisez les règles, manipulez les jets de dés et portez des Attaques sournoises dévastatrices depuis les ombres.",
  },
  complexity: 1,
  keyStats: ["DEX", "INT"],
  hitDie: "1d6",
  startingHp: 10,
  saves: { strong: "DEX", weak: "WIL" },
  armorProficiency: [{ en: "Leather Armor", fr: "Armure de cuir" }],
  weaponProficiency: [{ en: "DEX Weapons", fr: "Armes de DEX" }],
  startingGear: [
    { en: "2 Daggers", fr: "2 Dagues" },
    { en: "Sling", fr: "Fronde" },
    { en: "Cheap Hides", fr: "Gambison" },
    { en: "Chalk", fr: "Craie" },
  ],
  abilities: [
    // ── Level 1 ──
    {
      level: 1,
      name: { en: "Sneak Attack", fr: "Attaque sournoise" },
      description: {
        en: "(1/turn) When you crit, deal +1d6 damage.",
        fr: "(1/tour) Quand vous faites un coup critique, infligez +1d6 dégâts.",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Vicious Opportunist", fr: "Opportuniste vicieux" },
      description: {
        en: "(1/turn) When you hit a Distracted target with a melee attack, you may change the Primary Die roll to whatever you like (changing it to the max value counts as a crit).",
        fr: "(1/tour) Lorsque vous touchez une cible Distraite avec une attaque de mêlée, vous pouvez changer le résultat du Dé primaire à la valeur de votre choix (le changer à la valeur maximale compte comme un coup critique).",
      },
      type: "core",
    },
    // ── Level 2 ──
    {
      level: 2,
      name: { en: "Cheat", fr: "Roublard" },
      description: {
        en: "(1/round) Move or Hide for free. (1/day) Change any skill check to 10+INT. If you roll less than 10 on Initiative, change it to 10. Advantage on skill checks in games, competitions, or wagers.",
        fr: "(1/round) Déplacez-vous ou Cachez-vous gratuitement. (1/jour) Changez n'importe quel jet de compétence en 10+INT. Si vous obtenez moins de 10 à l'Initiative, changez le résultat en 10. Avantage aux jets de compétence lors de jeux, compétitions ou paris.",
      },
      type: "core",
    },
    // ── Level 3 ──
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Cheat subclass.",
        fr: "Choisissez une sous-classe de Roublard.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Sneak Attack (2)", fr: "Attaque sournoise (2)" },
      description: {
        en: "Your Sneak Attack becomes 1d8.",
        fr: "Votre Attaque sournoise devient 1d8.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Thieves' Cant", fr: "Argot des voleurs" },
      description: {
        en: "You learn the secret language of rogues and scoundrels.",
        fr: "Vous apprenez le langage secret des voleurs et des scélérats.",
      },
      type: "core",
    },
    // ── Level 4 ──
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Underhanded Ability", fr: "Combines" },
      description: {
        en: "Choose an Underhanded Ability.",
        fr: "Choisissez une Combine.",
      },
      type: "core",
    },
    // ── Level 5 ──
    {
      level: 5,
      name: { en: "Twist the Blade", fr: "Remuer le couteau" },
      description: {
        en: "Action: Change one of your Sneak Attack dice to whatever you like.",
        fr: "Action : Changez l'un de vos dés d'Attaque sournoise à la valeur de votre choix.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Quick Read", fr: "Analyse express" },
      description: {
        en: "(1/encounter) Advantage on an Assess check. (1/day) Advantage on an Examination check.",
        fr: "(1/rencontre) Avantage sur un jet d'Évaluation. (1/jour) Avantage sur un jet d'Investigation.",
      },
      type: "core",
    },
    {
      level: 5,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    // ── Level 6 ──
    {
      level: 6,
      name: { en: "Underhanded Ability (2)", fr: "Combines (2)" },
      description: {
        en: "Choose a 2nd Underhanded Ability.",
        fr: "Choisissez une 2e Combine.",
      },
      type: "core",
    },
    {
      level: 6,
      name: {
        en: "THAT'S Not What Happened!",
        fr: "C'est PAS ce qui s'est passé !",
      },
      description: {
        en: "(1/Safe Rest) Action: After a Distracted enemy attacks you, change the Primary Die roll to whatever you like (changing it to the minimum counts as a miss).",
        fr: "(1/Repos sûr) Action : Après qu'un ennemi Distrait vous attaque, changez le résultat du Dé primaire à la valeur de votre choix (le changer au minimum compte comme un échec).",
      },
      type: "core",
    },
    // ── Level 7 ──
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Cheat subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Roublard.",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Sneak Attack (3)", fr: "Attaque sournoise (3)" },
      description: {
        en: "Your Sneak Attack becomes 2d8.",
        fr: "Votre Attaque sournoise devient 2d8.",
      },
      type: "core",
    },
    // ── Level 8 ──
    {
      level: 8,
      name: { en: "Underhanded Ability (3)", fr: "Combines (3)" },
      description: {
        en: "Choose a 3rd Underhanded Ability.",
        fr: "Choisissez une 3e Combine.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    // ── Level 9 ──
    {
      level: 9,
      name: { en: "Sneak Attack (4)", fr: "Attaque sournoise (4)" },
      description: {
        en: "Your Sneak Attack becomes 2d10.",
        fr: "Votre Attaque sournoise devient 2d10.",
      },
      type: "core",
    },
    {
      level: 9,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    // ── Level 10 ──
    {
      level: 10,
      name: { en: "Underhanded Ability (4)", fr: "Combines (4)" },
      description: {
        en: "Choose a 4th Underhanded Ability.",
        fr: "Choisissez une 4e Combine.",
      },
      type: "core",
    },
    // ── Level 11 ──
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Cheat subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Roublard.",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Sneak Attack (5)", fr: "Attaque sournoise (5)" },
      description: {
        en: "Your Sneak Attack becomes 2d12.",
        fr: "Votre Attaque sournoise devient 2d12.",
      },
      type: "core",
    },
    // ── Level 12 ──
    {
      level: 12,
      name: { en: "Underhanded Ability (5)", fr: "Combines (5)" },
      description: {
        en: "Choose a 5th Underhanded Ability.",
        fr: "Choisissez une 5e Combine.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    // ── Level 13 ──
    {
      level: 13,
      name: { en: "Twist the Blade (2)", fr: "Remuer le couteau (2)" },
      description: {
        en: "(1/turn) You can Twist the Blade for free.",
        fr: "(1/tour) Vous pouvez Remuer le couteau gratuitement.",
      },
      type: "core",
    },
    {
      level: 13,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    // ── Level 14 ──
    {
      level: 14,
      name: { en: "Underhanded Ability (6)", fr: "Combines (6)" },
      description: {
        en: "Choose a 6th Underhanded Ability.",
        fr: "Choisissez une 6e Combine.",
      },
      type: "core",
    },
    // ── Level 15 ──
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Cheat subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Roublard.",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Sneak Attack (6)", fr: "Attaque sournoise (6)" },
      description: {
        en: "Your Sneak Attack becomes 2d20.",
        fr: "Votre Attaque sournoise devient 2d20.",
      },
      type: "core",
    },
    // ── Level 16 ──
    {
      level: 16,
      name: { en: "Underhanded Ability (7)", fr: "Combines (7)" },
      description: {
        en: "Choose a 7th Underhanded Ability.",
        fr: "Choisissez une 7e Combine.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    // ── Level 17 ──
    {
      level: 17,
      name: { en: "Sneak Attack (7)", fr: "Attaque sournoise (7)" },
      description: {
        en: "Your Sneak Attack becomes 3d20.",
        fr: "Votre Attaque sournoise devient 3d20.",
      },
      type: "core",
    },
    {
      level: 17,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    // ── Level 18 ──
    {
      level: 18,
      name: { en: "Underhanded Ability (8)", fr: "Combines (8)" },
      description: {
        en: "Choose an 8th Underhanded Ability.",
        fr: "Choisissez une 8e Combine.",
      },
      type: "core",
    },
    // ── Level 19 ──
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    // ── Level 20 ──
    {
      level: 20,
      name: { en: "Supreme Execution", fr: "Exécution suprême" },
      description: {
        en: "+1 to any 2 of your stats. When you attack with a blade, you do not require targets to be Distracted to trigger Vicious Opportunist.",
        fr: "+1 à 2 stats de votre choix. Lorsque vous attaquez avec une lame, vous n'avez pas besoin que les cibles soient Distraites pour déclencher Opportuniste vicieux.",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Tools of the Silent Blade ──
    {
      id: "tools-of-the-silent-blade",
      name: {
        en: "Tools of the Silent Blade",
        fr: "Outils de la lame silencieuse",
      },
      description: {
        en: "A murderous path focused on stealth kills, invisibility, and eliminating targets without a trace.",
        fr: "Une voie meurtrière axée sur les assassinats furtifs, l'invisibilité et l'élimination des cibles sans laisser de trace.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: {
            en: "Amidst All This Commotion...",
            fr: "Au milieu de toute cette agitation",
          },
          description: {
            en: "If a creature dies while you Sneak Attack them, you may turn Invisible until you attack again or until the beginning of your next turn.",
            fr: "Si une créature meurt suite à votre Attaque sournoise, vous pouvez devenir Invisible jusqu'à ce que vous attaquiez à nouveau ou jusqu'au début de votre prochain tour.",
          },
        },
        {
          level: 3,
          name: { en: "Leave No Trace", fr: "Passage sans trace" },
          description: {
            en: "Advantage on Stealth checks when you are at full health.",
            fr: "Avantage aux jets de Discrétion lorsque vous êtes à PV maximum.",
          },
        },
        {
          level: 7,
          name: { en: "Cunning Strike", fr: "Frappe amère" },
          description: {
            en: "(2/encounter) When you land a Sneak Attack, force the target to make a STR save (DC 10+INT). On failure, your Sneak Attack dice deal maximum damage instead of rolling.",
            fr: "(2/rencontre) Lorsque vous réussissez une Attaque sournoise, forcez la cible à effectuer un JdS de FOR (SD 10+INT). En cas d'échec, vos dés d'Attaque sournoise infligent leurs dégâts maximaux au lieu d'être lancés.",
          },
        },
        {
          level: 11,
          name: { en: "Professional Skulker", fr: "Cambrioleur professionnel" },
          description: {
            en: "Gain a climbing speed and advantage on Stealth checks (replaces Leave No Trace).",
            fr: "Gagnez une vitesse d'escalade et l'avantage aux jets de Discrétion (remplace Passage sans trace).",
          },
        },
        {
          level: 15,
          name: { en: "KILL", fr: "TUE" },
          description: {
            en: "When you crit an enemy with fewer max HP than you, it dies.",
            fr: "Lorsque vous infligez un coup critique à un ennemi ayant moins de PV max que vous, il meurt.",
          },
        },
      ],
    },
    // ── Tools of the Scoundrel ──
    {
      id: "tools-of-the-scoundrel",
      name: { en: "Tools of the Scoundrel", fr: "Outils du scélérat" },
      description: {
        en: "A trickster path focused on dirty fighting, smooth talking, and surviving through cunning.",
        fr: "Une voie de fripon axée sur les coups bas, le baratin et la survie par la ruse.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Low Blow", fr: "Coup bas" },
          description: {
            en: "When you Sneak Attack, spend 2 additional actions to Incapacitate your target for their next turn on a failed STR save (DC 10+INT). Save or fail, they are Taunted by you.",
            fr: "Lors d'une Attaque sournoise, dépensez 2 actions supplémentaires pour Neutraliser votre cible pour son prochain tour sur un JdS de FOR raté (SD 10+INT). Réussite ou échec, elle est Provoquée par vous.",
          },
        },
        {
          level: 3,
          name: { en: "Sweet Talk", fr: "Flatterie" },
          description: {
            en: "Gain advantage on all Influence checks with NPCs you've just met for the first time. Lasts until you fail an Influence check with them or until you meet a 2nd time.",
            fr: "Gagnez l'avantage sur tous les jets d'Influence avec les PNJ que vous rencontrez pour la première fois. Dure jusqu'à ce que vous échouiez un jet d'Influence avec eux ou jusqu'à votre 2e rencontre.",
          },
        },
        {
          level: 7,
          name: { en: "Pocket Sand", fr: "Sable de poche" },
          description: {
            en: "(2/encounter) When you Defend against a melee attack, Blind the attacker until the start of their next turn and force them to reroll the attack.",
            fr: "(2/rencontre) Lorsque vous vous Défendez contre une attaque de mêlée, Aveuglez l'attaquant jusqu'au début de son prochain tour et forcez-le à relancer l'attaque.",
          },
        },
        {
          level: 11,
          name: { en: "Escape Plan", fr: "Plan B" },
          description: {
            en: "(1/Safe Rest) When you would drop to 0 HP or gain a Wound, you don't. Instead, turn Invisible for 1 minute or until you attack.",
            fr: "(1/Repos sûr) Lorsque vous devriez tomber à 0 PV ou subir une Blessure, vous ne le faites pas. À la place, devenez Invisible pendant 1 minute ou jusqu'à ce que vous attaquiez.",
          },
        },
        {
          level: 15,
          name: {
            en: "Heads I Win, Tails You Lose",
            fr: "Pile, je gagne. Face, tu perds.",
          },
          description: {
            en: "(1/encounter) Attacks you make this round don't miss, you crit on 1 less than normally needed, and you gain LVL temp HP.",
            fr: "(1/rencontre) Les attaques que vous effectuez ce round ne ratent pas, vous faites un coup critique avec 1 de moins que le seuil normal, et vous gagnez NIV PV temporaires.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Underhanded Abilities", fr: "Combines" },
    selectAtLevels: [4, 6, 8, 10, 12, 14, 16, 18],
    abilities: [
      {
        name: { en: '"Creative" Accounting', fr: 'Comptabilité "créative"' },
        description: {
          en: "Steal up to INT actions from your next turn (gain up to INT actions now; next turn, subtract the number stolen). Cannot use 2 turns in a row.",
          fr: "Volez jusqu'à INT actions de votre prochain tour (gagnez jusqu'à INT actions maintenant ; au prochain tour, soustrayez le nombre volé). Ne peut pas être utilisé 2 tours de suite.",
        },
      },
      {
        name: { en: "Exploit Weakness", fr: "Frappe chirurgicale" },
        description: {
          en: "Action: Make a contested INT check against an enemy. If you win, you can use Vicious Opportunist against them even if they are not Distracted. Lasts 1 minute or until used on another target.",
          fr: "Action : Effectuez un jet d'INT opposé contre un ennemi. Si vous gagnez, vous pouvez utiliser Opportuniste vicieux contre lui même s'il n'est pas Distrait. Dure 1 minute ou jusqu'à utilisation sur une autre cible.",
        },
      },
      {
        name: { en: "Feinting Attack", fr: "Feinte" },
        description: {
          en: "If you miss for the 2nd time in a single round, you may change the primary die roll to any result instead.",
          fr: "Si vous ratez pour la 2e fois dans un même round, vous pouvez changer le résultat du dé primaire à la valeur de votre choix.",
        },
      },
      {
        name: { en: "How'd YOU Get Here?!", fr: "Comment t'es arrivé là ?!" },
        description: {
          en: '2 actions: "Teleport" up to 4 spaces away, adjacent to a Distracted target, and make a melee attack. If you crit, you may teleport again.',
          fr: '2 actions : "Téléportez-vous" jusqu\'à 4 cases, adjacent à une cible Distraite, et effectuez une attaque de mêlée. Si vous faites un coup critique, vous pouvez vous téléporter à nouveau.',
        },
      },
      {
        name: { en: "I'm Outta Here!", fr: "Je me casse !" },
        description: {
          en: "When an ally within 4 spaces is crit, turn invisible until the end of your next turn and move up to half your speed for free.",
          fr: "Lorsqu'un allié à 4 cases ou moins subit un coup critique, devenez invisible jusqu'à la fin de votre prochain tour et déplacez-vous jusqu'à la moitié de votre vitesse gratuitement.",
        },
      },
      {
        name: { en: "Misdirection", fr: "Détournement" },
        description: {
          en: "Gain INT armor. Whenever you Defend, you may halve the damage instead.",
          fr: "Gagnez INT armure. Chaque fois que vous vous Défendez, vous pouvez réduire les dégâts de moitié à la place.",
        },
      },
      {
        name: { en: "Steal Tempo", fr: "Mener la danse" },
        description: {
          en: "When you land a critical hit for the second time on a turn, your target loses 1 action and you gain 1 action.",
          fr: "Lorsque vous infligez un coup critique pour la deuxième fois dans un tour, votre cible perd 1 action et vous gagnez 1 action.",
        },
      },
      {
        name: {
          en: "Sunder Armor (Medium)",
          fr: "Briser l'armure (intermédiaire)",
        },
        description: {
          en: "Action: When you crit an enemy with medium armor, sunder their armor. Until the start of your next turn, ALL melee attacks against that target ignore its armor.",
          fr: "Action : Lorsque vous infligez un coup critique à un ennemi en armure intermédiaire, brisez son armure. Jusqu'au début de votre prochain tour, TOUTES les attaques de mêlée contre cette cible ignorent son armure.",
        },
      },
      {
        name: { en: "Sunder Armor (Heavy)", fr: "Briser l'armure (lourde)" },
        description: {
          en: "Requires Sunder Armor (Medium). Your Sunder Armor ability now also applies to enemies wearing heavy armor.",
          fr: "Requiert Briser l'armure (intermédiaire). Votre capacité Briser l'armure s'applique désormais aussi aux ennemis portant une armure lourde.",
        },
      },
      {
        name: { en: "Trickshot", fr: "Tir de bande" },
        description: {
          en: "When you throw a dagger, it returns at the end of your turn. On a hit, it ricochets to another creature within 2 spaces, dealing half damage.",
          fr: "Lorsque vous lancez une dague, elle revient à la fin de votre tour. En cas de touche, elle ricoche vers une autre créature à 2 cases ou moins, infligeant la moitié des dégâts.",
        },
      },
    ],
  },
};

// ─── Commander ──────────────────────────────────────────────────────────────

export const commander: HeroClass = {
  id: "commander",
  name: { en: "Commander", fr: "Guerrier" },
  description: {
    en: "A battlefield tactician, leader, and weapon master. Issue powerful orders to allies, wield all martial weapons with deadly efficiency, and lead your party to triumph through cunning strategy.",
    fr: "Un tacticien du champ de bataille, meneur et maître d'armes. Donnez des ordres puissants à vos alliés, maniez toutes les armes martiales avec une efficacité mortelle et menez votre groupe à la victoire grâce à une stratégie ingénieuse.",
  },
  complexity: 2,
  keyStats: ["STR", "INT"],
  hitDie: "1d10",
  startingHp: 17,
  saves: { strong: "STR", weak: "DEX" },
  armorProficiency: [
    { en: "Mail Armor", fr: "Armure de mailles" },
    { en: "Shields", fr: "Boucliers" },
  ],
  weaponProficiency: [
    { en: "All Martial Weapons", fr: "Toutes les armes martiales" },
  ],
  startingGear: [
    { en: "Short Sword", fr: "Épée courte" },
    { en: "Javelins", fr: "Javelots" },
    { en: "Rusty Mail", fr: "Mailles rouillées" },
  ],
  abilities: [
    // ── Level 1 ──
    {
      level: 1,
      name: { en: "Coordinated Strike!", fr: "Frappe coordonnée !" },
      description: {
        en: "Gain the Coordinated Strike! Commander's Order. (1/round) Free action: you and an ally within 6 spaces both immediately make a weapon attack or cast a cantrip for free. Usable INT times per Safe Rest.",
        fr: "Gagnez l'ordre de Guerrier Frappe coordonnée ! (1/round) Action gratuite : vous et un allié à 6 cases ou moins effectuez immédiatement une attaque d'arme ou lancez un cantrip gratuitement. Utilisable INT fois par Repos sûr.",
      },
      type: "core",
    },
    // ── Level 2 ──
    {
      level: 2,
      name: { en: "Commander's Orders", fr: "Ordres du Guerrier" },
      description: {
        en: "Choose 2 Commander's Orders.",
        fr: "Choisissez 2 Ordres du Guerrier.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Field Medic", fr: "Médecin de terrain" },
      description: {
        en: "Roll 1 additional die for any health potion you administer. When you or an ally spends Hit Dice to recover HP after at least ten minutes of examination, add your Examination bonus to HP recovered.",
        fr: "Lancez 1 dé supplémentaire pour toute potion de soin que vous administrez. Lorsque vous ou un allié dépensez des Dés de vie pour récupérer des PV après au moins dix minutes d'investigation, ajoutez votre bonus d'Investigation aux PV récupérés.",
      },
      type: "core",
    },
    // ── Level 3 ──
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Commander subclass.",
        fr: "Choisissez une sous-classe de Guerrier.",
      },
      type: "subclass",
    },
    // ── Level 4 ──
    {
      level: 4,
      name: {
        en: "Fit for Any Battlefield",
        fr: "Prêt pour tout champ de bataille",
      },
      description: {
        en: "Choose a Combat Tactic. When you roll Initiative, gain STR Combat Dice (d6). (1/attack) Expend a Combat Die to perform a special maneuver. Combat Dice are lost when combat ends.",
        fr: "Choisissez une Tactique de combat. Lorsque vous lancez l'Initiative, gagnez FOR Dés de combat (d6). (1/attaque) Dépensez un Dé de combat pour effectuer une manœuvre spéciale. Les Dés de combat sont perdus à la fin du combat.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    // ── Level 5 ──
    {
      level: 5,
      name: { en: "Master Commander", fr: "Commandant émérite" },
      description: {
        en: "When you roll Initiative, regain 1 spent use of Coordinated Strike (lost if not spent that encounter). Attacks from Coordinated Strikes also ignore disadvantage.",
        fr: "Lorsque vous lancez l'Initiative, récupérez 1 utilisation dépensée de Frappe coordonnée (perdue si non utilisée lors de cette rencontre). Les attaques issues des Frappes coordonnées ignorent aussi le désavantage.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Combat Tactics", fr: "Tactiques de combat" },
      description: {
        en: "Your Combat Dice are now d8s.",
        fr: "Vos Dés de combat sont désormais des d8.",
      },
      type: "core",
    },
    {
      level: 5,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    // ── Level 6 ──
    {
      level: 6,
      name: {
        en: "Fit for Any Battlefield (2)",
        fr: "Prêt pour tout champ de bataille (2)",
      },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "Choisissez une autre Capacité de combat ou gagnez +1 Dé de combat max.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Weapon Mastery", fr: "Maîtrise des armes" },
      description: {
        en: "You may sheathe and draw a different weapon 2x/round for free. Choose a weapon type to specialize in (Slashing, Bludgeoning, or Piercing).",
        fr: "Vous pouvez rengainer et dégainer une arme différente 2x/round gratuitement. Choisissez un type d'arme dans lequel vous spécialiser (Tranchant, Contondant ou Perforant).",
      },
      type: "core",
    },
    // ── Level 7 ──
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Commander subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Guerrier.",
      },
      type: "subclass",
    },
    // ── Level 8 ──
    {
      level: 8,
      name: {
        en: "Fit for Any Battlefield (3)",
        fr: "Prêt pour tout champ de bataille (3)",
      },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "Choisissez une autre Capacité de combat ou gagnez +1 Dé de combat max.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    // ── Level 9 ──
    {
      level: 9,
      name: { en: "Master Commander (2)", fr: "Commandant émérite (2)" },
      description: {
        en: "+1 use of Coordinated Strike per Safe Rest.",
        fr: "+1 utilisation de Frappe coordonnée par Repos sûr.",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Combat Tactics (2)", fr: "Tactiques de combat (2)" },
      description: {
        en: "Your Combat Dice are now d10s.",
        fr: "Vos Dés de combat sont désormais des d10.",
      },
      type: "core",
    },
    {
      level: 9,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    // ── Level 10 ──
    {
      level: 10,
      name: {
        en: "Fit for Any Battlefield (4)",
        fr: "Prêt pour tout champ de bataille (4)",
      },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "Choisissez une autre Capacité de combat ou gagnez +1 Dé de combat max.",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Weapon Mastery (2)", fr: "Maîtrise des armes (2)" },
      description: {
        en: "Choose a 2nd weapon type to specialize in.",
        fr: "Choisissez un 2e type d'arme dans lequel vous spécialiser.",
      },
      type: "core",
    },
    // ── Level 11 ──
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Commander subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Guerrier.",
      },
      type: "subclass",
    },
    // ── Level 12 ──
    {
      level: 12,
      name: {
        en: "Fit for Any Battlefield (5)",
        fr: "Prêt pour tout champ de bataille (5)",
      },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "Choisissez une autre Capacité de combat ou gagnez +1 Dé de combat max.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    // ── Level 13 ──
    {
      level: 13,
      name: { en: "Master Commander (3)", fr: "Commandant émérite (3)" },
      description: {
        en: "+1 use of Coordinated Strike per Safe Rest.",
        fr: "+1 utilisation de Frappe coordonnée par Repos sûr.",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Combat Tactics (3)", fr: "Tactiques de combat (3)" },
      description: {
        en: "Your Combat Dice are now d12s.",
        fr: "Vos Dés de combat sont désormais des d12.",
      },
      type: "core",
    },
    {
      level: 13,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    // ── Level 14 ──
    {
      level: 14,
      name: { en: "Weapon Mastery (3)", fr: "Maîtrise des armes (3)" },
      description: {
        en: "You have complete mastery of all weapon types.",
        fr: "Vous maîtrisez parfaitement tous les types d'armes.",
      },
      type: "core",
    },
    // ── Level 15 ──
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Commander subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Guerrier.",
      },
      type: "subclass",
    },
    // ── Level 16 ──
    {
      level: 16,
      name: {
        en: "Fit for Any Battlefield (6)",
        fr: "Prêt pour tout champ de bataille (6)",
      },
      description: {
        en: "Choose another Combat Ability or gain +1 max Combat Dice.",
        fr: "Choisissez une autre Capacité de combat ou gagnez +1 Dé de combat max.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    // ── Level 17 ──
    {
      level: 17,
      name: { en: "Master Commander (4)", fr: "Commandant émérite (4)" },
      description: {
        en: "+1 use of Coordinated Strike per Safe Rest.",
        fr: "+1 utilisation de Frappe coordonnée par Repos sûr.",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Combat Tactics (4)", fr: "Tactiques de combat (4)" },
      description: {
        en: "Your Combat Dice are now d20s.",
        fr: "Vos Dés de combat sont désormais des d20.",
      },
      type: "core",
    },
    {
      level: 17,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    // ── Level 18 ──
    {
      level: 18,
      name: { en: "Unparalleled Tactics", fr: "Tactiques inégalées" },
      description: {
        en: "The first time each encounter you use Coordinated Strike, an ally who can hear you also gains 1 action to use on their next turn.",
        fr: "La première fois que vous utilisez Frappe coordonnée lors de chaque rencontre, un allié qui peut vous entendre gagne aussi 1 action à utiliser lors de son prochain tour.",
      },
      type: "core",
    },
    // ── Level 19 ──
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    // ── Level 20 ──
    {
      level: 20,
      name: { en: "Captain of Legions", fr: "Guerrier des légions" },
      description: {
        en: "+1 to any 2 of your stats. The first time each encounter you use Coordinated Strike, EVERY ally within 12 spaces gains +1 action (replaces Unparalleled Tactics).",
        fr: "+1 à 2 stats de votre choix. La première fois que vous utilisez Frappe coordonnée lors de chaque rencontre, TOUS les alliés à 12 cases ou moins gagnent +1 action (remplace Tactiques inégalées).",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Champion of the Bulwark ──
    {
      id: "champion-of-the-bulwark",
      name: { en: "Champion of the Bulwark", fr: "Champion du rempart" },
      description: {
        en: "An unassailable defender focused on armor mastery, shield expertise, and protecting allies.",
        fr: "Un défenseur inexpugnable axé sur la maîtrise des armures, l'expertise au bouclier et la protection des alliés.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Armor Master", fr: "Maître des armures" },
          description: {
            en: "You are proficient with plate armor.",
            fr: "Vous maîtrisez l'armure de plates.",
          },
        },
        {
          level: 3,
          name: { en: "Shield Expert", fr: "Expert du bouclier" },
          description: {
            en: "While wearing a shield, you may Defend 2x each round. The first time each round you block all damage from an attack, make an opportunity attack against the attacker for free.",
            fr: "Avec un bouclier équipé, vous pouvez vous Défendre 2x par round. La première fois chaque round que vous bloquez tous les dégâts d'une attaque, effectuez une attaque d'opportunité contre l'attaquant gratuitement.",
          },
        },
        {
          level: 7,
          name: { en: "Juggernaut", fr: "Mastodonte" },
          description: {
            en: "When you use Coordinated Strike, deal extra damage equal to your armor, and you can add 1 to your primary die.",
            fr: "Lorsque vous utilisez Frappe coordonnée, infligez des dégâts supplémentaires égaux à votre armure, et vous pouvez ajouter 1 à votre dé primaire.",
          },
        },
        {
          level: 11,
          name: { en: "Taunting Strike", fr: "Frappe provoquante" },
          description: {
            en: "(1/turn) You may Taunt a creature you hit until the end of their next turn.",
            fr: "(1/tour) Vous pouvez Provoquer une créature que vous touchez jusqu'à la fin de son prochain tour.",
          },
        },
        {
          level: 15,
          name: { en: "Shield Wall", fr: "Mur de bouclier" },
          description: {
            en: "Allies within 2 spaces gain ALL the benefits of the shield you have equipped.",
            fr: "Les alliés à 2 cases ou moins bénéficient de TOUS les avantages du bouclier que vous avez équipé.",
          },
        },
      ],
    },
    // ── Champion of the Vanguard ──
    {
      id: "champion-of-the-vanguard",
      name: { en: "Champion of the Vanguard", fr: "Champion de l'avant-garde" },
      description: {
        en: "A relentless offensive leader focused on aggressive positioning, coordinated assaults, and battlefield momentum.",
        fr: "Un meneur offensif implacable axé sur le positionnement agressif, les assauts coordonnés et l'élan sur le champ de bataille.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Advance!", fr: "En avant !" },
          description: {
            en: "(1/round) After you move toward an enemy, gain advantage on the first melee attack against it. When you use Coordinated Strike, you and all allies within 12 spaces can first move up to half their speed for free.",
            fr: "(1/round) Après vous être déplacé vers un ennemi, gagnez l'avantage sur la première attaque de mêlée contre lui. Lorsque vous utilisez Frappe coordonnée, vous et tous les alliés à 12 cases ou moins pouvez d'abord vous déplacer jusqu'à la moitié de votre vitesse gratuitement.",
          },
        },
        {
          level: 7,
          name: { en: "Experienced Commander", fr: "Commandant expérimenté" },
          description: {
            en: "Your Coordinated Strike may target 1 additional ally. Gain +1 use of Coordinated Strike per Safe Rest.",
            fr: "Votre Frappe coordonnée peut cibler 1 allié supplémentaire. Gagnez +1 utilisation de Frappe coordonnée par Repos sûr.",
          },
        },
        {
          level: 11,
          name: {
            en: "Survey the Battlefield",
            fr: "Analyse du champ de bataille",
          },
          description: {
            en: "When you roll Initiative, regain 1 use of Coordinated Strike. +1 max Combat Dice.",
            fr: "Lorsque vous lancez l'Initiative, récupérez 1 utilisation de Frappe coordonnée. +1 Dé de combat max.",
          },
        },
        {
          level: 15,
          name: { en: "As One!", fr: "Tous ensemble !" },
          description: {
            en: "Attacks made with your Coordinated Strike grant advantage and ignore all disadvantage. Your chosen allies gain 1 additional action on their next turn.",
            fr: "Les attaques effectuées via votre Frappe coordonnée octroient l'avantage et ignorent tout désavantage. Vos alliés choisis gagnent 1 action supplémentaire lors de leur prochain tour.",
          },
        },
      ],
    },
    // ── Spellblade (Story-Based) ──
    {
      id: "spellblade",
      name: { en: "Spellblade", fr: "Sorcelame" },
      description: {
        en: "A story-based subclass where steel meets spell. You lose Weapon Mastery and Combat Tactics, but gain mana, spells, and magically empowered Commander's Orders.",
        fr: "Une sous-classe narrative où l'acier rencontre le sort. Vous perdez Maîtrise des armes et Tactiques de combat, mais gagnez du mana, des sorts et des Ordres du Guerrier imprégnés de magie.",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Arcane Command", fr: "Ordre arcanique" },
          description: {
            en: "You lose Weapon Mastery and Combat Tactics but gain INT mana when you roll Initiative (lost when combat ends). Whenever you could choose a Combat Tactic or Weapon Mastery, instead choose a Commander's Order or a tier 1 spell. Your Commander's Orders are empowered with magical variants.",
            fr: "Vous perdez Maîtrise des armes et Tactiques de combat mais gagnez INT mana lorsque vous lancez l'Initiative (perdu à la fin du combat). Chaque fois que vous pourriez choisir une Tactique de combat ou Maîtrise des armes, choisissez plutôt un Ordre du Guerrier ou un sort de rang 1. Vos Ordres du Guerrier sont dotés de variantes magiques.",
          },
        },
        {
          level: 3,
          name: { en: "Firebrand", fr: "Porte-flamme" },
          description: {
            en: "When you roll Initiative, cast Enchant Weapon for free (can be upcast by spending additional mana).",
            fr: "Lorsque vous lancez l'Initiative, lancez Enchantement d'arme gratuitement (peut être surclassé en dépensant du mana supplémentaire).",
          },
        },
        {
          level: 3,
          name: { en: "Deep Knowledge (1)", fr: "Savoir profond (1)" },
          description: {
            en: "Choose any tier 1 (or lower) spell and any Utility Spell.",
            fr: "Choisissez n'importe quel sort de rang 1 (ou inférieur) et n'importe quel Sort utilitaire.",
          },
        },
        {
          level: 7,
          name: { en: "Deep Knowledge (2)", fr: "Savoir profond (2)" },
          description: {
            en: "Choose any tier 2 (or lower) spell and any Utility Spell.",
            fr: "Choisissez n'importe quel sort de rang 2 (ou inférieur) et n'importe quel Sort utilitaire.",
          },
        },
        {
          level: 11,
          name: { en: "Deep Knowledge (3)", fr: "Savoir profond (3)" },
          description: {
            en: "Choose any tier 3 (or lower) spell and any Utility Spell.",
            fr: "Choisissez n'importe quel sort de rang 3 (ou inférieur) et n'importe quel Sort utilitaire.",
          },
        },
        {
          level: 15,
          name: { en: "Deep Knowledge (4)", fr: "Savoir profond (4)" },
          description: {
            en: "Choose any tier 4 (or lower) spell and any Utility Spell.",
            fr: "Choisissez n'importe quel sort de rang 4 (ou inférieur) et n'importe quel Sort utilitaire.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Commander's Orders", fr: "Ordres du Guerrier" },
    selectAtLevels: [2],
    picksAtLevel: { 2: 2 },
    abilities: [
      {
        name: { en: "Face Me!", fr: "Par ici !" },
        description: {
          en: "Reaction (after an ally is crit within 12 spaces): Taunt that enemy until you drop to 0 HP.",
          fr: "Réaction (après qu'un allié subit un coup critique à 12 cases ou moins) : Provoquez cet ennemi jusqu'à ce que vous tombiez à 0 PV.",
        },
      },
      {
        name: { en: "Hold the Line!", fr: "Tenez bon !" },
        description: {
          en: "(1/encounter) Reaction (when an ally drops to 0 HP): Command them to continue the fight! Set their HP to 3x your LVL.",
          fr: "(1/rencontre) Réaction (quand un allié tombe à 0 PV) : Ordonnez-lui de continuer le combat ! Fixez ses PV à 3x votre NIV.",
        },
      },
      {
        name: {
          en: "I Can Do This ALL DAY!",
          fr: "J'peux faire ça TOUTE LA JOURNÉE !",
        },
        description: {
          en: "(1/encounter) Reaction (when you would drop to 0 HP): Expend any number of Hit Dice and set your HP to the sum rolled instead (do not add STR).",
          fr: "(1/rencontre) Réaction (quand vous devriez tomber à 0 PV) : Dépensez n'importe quel nombre de Dés de vie et fixez vos PV à la somme obtenue (n'ajoutez pas la FOR).",
        },
      },
      {
        name: { en: "Move it! Move it!", fr: "Bougez ! Bougez !" },
        description: {
          en: "When you roll Initiative, give yourself and an ally advantage on the roll and +3 speed for 1 round.",
          fr: "Lorsque vous lancez l'Initiative, donnez-vous ainsi qu'à un allié l'avantage sur le jet et +3 vitesse pendant 1 round.",
        },
      },
      {
        name: { en: "Reposition!", fr: "Repositionnement !" },
        description: {
          en: "Action/Reaction (on an ally's turn): Command 1 ally to move up to their speed (or 2 allies up to half their speed) for free.",
          fr: "Action/Réaction (lors du tour d'un allié) : Ordonnez à 1 allié de se déplacer jusqu'à sa vitesse (ou 2 alliés jusqu'à la moitié de leur vitesse) gratuitement.",
        },
      },
    ],
  },
};
