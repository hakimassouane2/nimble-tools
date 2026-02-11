import type { Background } from "./types";

export const backgrounds: Background[] = [
  {
    id: "back-out-of-retirement",
    name: { en: "Back Out of Retirement", fr: "De retour de la retraite" },
    description: {
      en: "You've forgotten more than most adventurers these days know!",
      fr: "Vous avez oublié plus que la plupart des aventuriers d'aujourd'hui n'en savent !",
    },
    effects: [
      {
        en: "You may gain 1 Wound to use an ability or cast a spell as if you were 1 level higher.",
        fr: "Vous pouvez recevoir 1 Blessure pour utiliser une capacité ou lancer un sort comme si vous étiez d'1 niveau supérieur.",
      },
      {
        en: "Your age has long since started to show. -1 max Wounds.",
        fr: "Votre âge a commencé à se faire sentir depuis longtemps. -1 Blessure max.",
      },
    ],
  },
  {
    id: "devoted-protector",
    name: { en: "Devoted Protector", fr: "Protecteur dévoué" },
    description: {
      en: "Choose 1 ally in your party. You can survive +3 max Wounds as long as they are nearby.",
      fr: "Choisissez 1 allié dans votre groupe. Vous pouvez survivre à +3 Blessures max tant qu'il est à proximité.",
    },
    effects: [
      {
        en: "+3 max Wounds as long as chosen ally is nearby.",
        fr: "+3 Blessures max tant que l'allié choisi est à proximité.",
      },
      {
        en: "Whenever chosen ally takes a Wound, you also take a Wound.",
        fr: "Chaque fois que l'allié choisi reçoit une Blessure, vous en recevez une aussi.",
      },
    ],
  },
  {
    id: "academy-dropout",
    name: { en: "Academy Dropout", fr: "Savant dissident" },
    description: {
      en: "School just isn't for everyone! You learn by experience in the real world.",
      fr: "L'école, ce n'est pas pour tout le monde ! Vous apprenez par l'expérience dans le vrai monde.",
    },
    effects: [
      {
        en: "Learn any 1 Utility Spell.",
        fr: "Apprenez 1 Sort utilitaire au choix.",
      },
    ],
  },
  {
    id: "made-a-bad-choice",
    name: { en: "Made a BAD Choice", fr: "A fait un MAUVAIS choix" },
    description: {
      en: "Start with extra gold or a magical item, but gain a curse or enemy.",
      fr: "Commencez avec de l'or supplémentaire ou un objet magique, mais gagnez une malédiction ou un ennemi.",
    },
    effects: [
      {
        en: "Start with 500 or 1000 extra gold, OR an uncommon/rare magical item.",
        fr: "Commencez avec 500 ou 1000 pièces d'or supplémentaires, OU un objet magique peu commun/rare.",
      },
      {
        en: "Gain an equally powerful curse or enemy who wants it back.",
        fr: "Gagnez une malédiction ou un ennemi d'une puissance équivalente qui veut le récupérer.",
      },
      {
        en: "Your GM may allow you to choose another background.",
        fr: "Votre MJ peut vous permettre de choisir un autre historique.",
      },
    ],
  },
  {
    id: "haunted-past",
    name: { en: "Haunted Past", fr: "Passé tourmenté" },
    description: {
      en: "You are haunted by voices that occasionally give you cryptic advice.",
      fr: "Vous êtes hanté par des voix qui vous donnent parfois des conseils cryptiques.",
    },
    effects: [
      {
        en: "Cryptic advice from voices (sometimes helpful, sometimes harmful).",
        fr: "Conseils cryptiques des voix (parfois utiles, parfois néfastes).",
      },
      {
        en: "Advantage against fear.",
        fr: "Avantage contre la peur.",
      },
    ],
  },
  {
    id: "ear-to-the-ground",
    name: { en: "Ear to the Ground", fr: "À la page" },
    description: {
      en: "You have a knack for picking up gossip.",
      fr: "Vous avez le don pour capter les potins.",
    },
    effects: [
      {
        en: "Advantage on checks to know or obtain gossip for recent events (less than 1 year).",
        fr: "Avantage aux tests pour connaître ou obtenir des potins sur les événements récents (moins d'1 an).",
      },
    ],
  },
  {
    id: "what-ive-been-around",
    name: { en: "What? I've Been Around.", fr: "Quoi ? J'ai bourlingué." },
    description: {
      en: "1/per location: You happen to know JUST the person who can help.",
      fr: "1/par lieu : Vous connaissez JUSTEMENT la personne qui peut aider.",
    },
    effects: [
      {
        en: "1/per location: You know someone helpful. Roll 1d20 to determine their disposition.",
        fr: "1/par lieu : Vous connaissez quelqu'un d'utile. Lancez 1d20 pour déterminer son attitude.",
      },
      {
        en: "1-5: They want you DEAD. 6-12: You owe them money. 13-19: They can be convinced to help. 20: They are your biggest fan.",
        fr: "1-5 : Ils vous veulent MORT. 6-12 : Vous leur devez de l'argent. 13-19 : Ils peuvent être convaincus d'aider. 20 : Ils sont votre plus grand fan.",
      },
    ],
  },
  {
    id: "acrobat",
    name: { en: "Acrobat", fr: "Acrobate" },
    description: {
      en: "A nimble performer with exceptional agility.",
      fr: "Un artiste agile doté d'une agilité exceptionnelle.",
    },
    effects: [
      {
        en: "Can be thrown by a larger ally, REALLY far.",
        fr: "Peut être lancé par un allié plus grand, VRAIMENT loin.",
      },
      {
        en: "Half damage from falling and forced movement.",
        fr: "Dégâts réduits de moitié par les chutes et le déplacement forcé.",
      },
    ],
  },
  {
    id: "wild-one",
    name: { en: "Wild One", fr: "Sauvageon" },
    description: {
      en: "Wild creatures are less frightened of you and more willing to aid you.",
      fr: "Les créatures sauvages sont moins effrayées par vous et plus disposées à vous aider.",
    },
    effects: [
      {
        en: "+1 Naturecraft.",
        fr: "+1 Survie.",
      },
      {
        en: "While Field Resting, roll your Hit Dice with advantage while in the wild.",
        fr: "Pendant un Repos de terrain, lancez vos Dés de vie avec avantage en pleine nature.",
      },
      {
        en: "Wild creatures are friendlier toward you.",
        fr: "Les créatures sauvages sont plus amicales envers vous.",
      },
    ],
  },
  {
    id: "fey-touched",
    name: { en: "Fey Touched", fr: "Touché par les Fées" },
    description: {
      en: "Touched by fey magic, granting magical resistance but metal vulnerability.",
      fr: "Touché par la magie féérique, conférant une résistance magique mais une vulnérabilité au métal.",
    },
    effects: [
      {
        en: "Half damage from all magical effects.",
        fr: "Dégâts réduits de moitié par tous les effets magiques.",
      },
      {
        en: "Double damage from weapons made of metal (before armor).",
        fr: "Dégâts doublés par les armes en métal (avant l'armure).",
      },
    ],
  },
  {
    id: "survivalist",
    name: { en: "Survivalist", fr: "Survivaliste" },
    description: {
      en: "You never run out of your own personal rations.",
      fr: "Vous ne manquez jamais de vos propres rations.",
    },
    effects: [
      {
        en: "Never run out of personal rations.",
        fr: "Ne manque jamais de rations personnelles.",
      },
      {
        en: "Advantage against poison saves.",
        fr: "Avantage aux jets de sauvegarde contre le poison.",
      },
      {
        en: "+1 max Hit Die.",
        fr: "+1 Dé de vie max.",
      },
    ],
  },
  {
    id: "home-at-sea",
    name: { en: "Home at Sea", fr: "Loup de Mer" },
    description: {
      en: "Most at home on the water.",
      fr: "Le plus à l'aise sur l'eau.",
    },
    effects: [
      {
        en: "Recover twice as many Wounds and HP while resting on a ship or near water.",
        fr: "Récupérez deux fois plus de Blessures et de PV en vous reposant sur un navire ou près de l'eau.",
      },
      {
        en: "Can fill in for a first mate or captain.",
        fr: "Peut remplacer un second ou un capitaine.",
      },
      {
        en: "Advantage on water-related skill checks.",
        fr: "Avantage aux tests de compétence liés à l'eau.",
      },
    ],
  },
  {
    id: "at-home-underground",
    name: { en: "At Home Underground", fr: "À l'aise sous terre" },
    description: {
      en: "You thrive beneath the earth.",
      fr: "Vous vous épanouissez sous la terre.",
    },
    effects: [
      {
        en: "Dig twice as fast as others.",
        fr: "Creusez deux fois plus vite que les autres.",
      },
      {
        en: "Underground safe resting locations count as Lavish lodging.",
        fr: "Les lieux de repos sûrs souterrains comptent comme un hébergement luxueux.",
      },
      {
        en: "Struggle to rest (INT save) while it's raining.",
        fr: "Difficulté à se reposer (jet de sauvegarde INT) quand il pleut.",
      },
    ],
  },
  {
    id: "raised-by-goblins",
    name: { en: "Raised by Goblins", fr: "Élevé par des Gobelins" },
    description: {
      en: "You speak Goblin natively.",
      fr: "Vous parlez le Gobelin nativement.",
    },
    effects: [
      {
        en: "Speak Goblin natively.",
        fr: "Parle le Gobelin nativement.",
      },
      {
        en: "Automatically notice and avoid crudely-made traps.",
        fr: "Remarque et évite automatiquement les pièges grossiers.",
      },
      {
        en: "Advantage to notice and disarm sophisticated traps.",
        fr: "Avantage pour remarquer et désamorcer les pièges sophistiqués.",
      },
    ],
  },
  {
    id: "history-buff",
    name: { en: "History Buff", fr: "Passionné d'histoire" },
    description: {
      en: "A scholar of ancient knowledge.",
      fr: "Un érudit des savoirs anciens.",
    },
    effects: [
      {
        en: "Advantage on all Lore checks for events/items more than 100 years old.",
        fr: "Avantage à tous les tests de Savoir pour les événements/objets de plus de 100 ans.",
      },
    ],
  },
  {
    id: "former-con-artist",
    name: { en: "(Former) Con Artist", fr: "(Ancien) escroc" },
    description: {
      en: "A reformed (or not) swindler with useful contacts.",
      fr: "Un escroc repenti (ou pas) avec des contacts utiles.",
    },
    effects: [
      {
        en: "Forge documents or mimic voices flawlessly.",
        fr: "Forge des documents ou imite des voix à la perfection.",
      },
      {
        en: "Criminal contact in most major cities.",
        fr: "Contact criminel dans la plupart des grandes villes.",
      },
      {
        en: "Reputation often precedes you (must prove trustworthiness).",
        fr: "Votre réputation vous précède souvent (devez prouver votre fiabilité).",
      },
    ],
  },
  {
    id: "secretly-undead",
    name: { en: "(Secretly) Undead", fr: "(Secrètement) Mort-Vivant" },
    description: {
      en: "You harbor a dark secret about your true nature.",
      fr: "Vous gardez un sombre secret sur votre vraie nature.",
    },
    effects: [
      {
        en: "Immune to disease.",
        fr: "Immunisé contre les maladies.",
      },
      {
        en: "Do not need to eat, drink, or breathe.",
        fr: "N'a pas besoin de manger, boire ou respirer.",
      },
      {
        en: "Children, animals, and Celestials are uneasy in your presence.",
        fr: "Les enfants, les animaux et les Célestes sont mal à l'aise en votre présence.",
      },
    ],
  },
  {
    id: "taste-for-the-finer-things",
    name: { en: "Taste for the Finer Things", fr: "Goûts raffinés" },
    description: {
      en: "You know the customs of high society.",
      fr: "Vous connaissez les coutumes de la haute société.",
    },
    effects: [
      {
        en: "Up-to-date knowledge of upper class customs and dress.",
        fr: "Connaissance à jour des coutumes et de la mode de la haute société.",
      },
      {
        en: "May know upper class secrets.",
        fr: "Peut connaître des secrets de la haute société.",
      },
      {
        en: "Advantage on Influence checks with the upper class.",
        fr: "Avantage aux tests d'Influence avec la haute société.",
      },
    ],
  },
  {
    id: "fearless",
    name: { en: "Fearless", fr: "Sans Peur" },
    description: {
      en: "Nothing scares you.",
      fr: "Rien ne vous fait peur.",
    },
    effects: [
      {
        en: "Immune to the Frightened condition.",
        fr: "Immunisé contre l'état Effrayé.",
      },
      {
        en: "+1 Initiative.",
        fr: "+1 Initiative.",
      },
      {
        en: "-1 Armor.",
        fr: "-1 Armure.",
      },
    ],
  },
  {
    id: "so-dumb-im-smart-sometimes",
    name: {
      en: "So Dumb I'm Smart Sometimes",
      fr: "Si bête que j'en suis parfois intelligent",
    },
    description: {
      en: "Your lack of intelligence sometimes works in your favor.",
      fr: "Votre manque d'intelligence joue parfois en votre faveur.",
    },
    effects: [
      {
        en: "Reroll an INT-related skill check, 1/day.",
        fr: "Relancez un test de compétence lié à l'INT, 1/jour.",
      },
      {
        en: "Reroll a failed INT save with advantage, 1/Safe Rest.",
        fr: "Relancez un jet de sauvegarde INT raté avec avantage, 1/Repos sûr.",
      },
    ],
    requirement: { stat: "INT", maxValue: 0 },
  },
  {
    id: "wily-underdog",
    name: { en: "Wily Underdog", fr: "Prétendant rusé" },
    description: {
      en: "Your lack of strength taught you to compensate.",
      fr: "Votre manque de force vous a appris à compenser.",
    },
    effects: [
      {
        en: "Reroll a failed STR-related roll using another stat instead, 1/day.",
        fr: "Relancez un jet lié à la FOR raté en utilisant une autre caractéristique à la place, 1/jour.",
      },
    ],
    requirement: { stat: "STR", maxValue: 0 },
  },
  {
    id: "bumblewise",
    name: { en: "Bumblewise", fr: "Sage maladroit" },
    description: {
      en: "Your clumsiness sometimes becomes brilliance.",
      fr: "Votre maladresse se transforme parfois en génie.",
    },
    effects: [
      {
        en: "A result of 1 or less on any WIL-related roll counts as a natural 20.",
        fr: "Un résultat de 1 ou moins sur tout jet lié à la VOL compte comme un 20 naturel.",
      },
    ],
    requirement: { stat: "WIL", maxValue: 0 },
  },
  {
    id: "accidental-acrobat",
    name: { en: "Accidental Acrobat", fr: "Acrobate Accidentel" },
    description: {
      en: "Your lack of dexterity gives you second chances.",
      fr: "Votre manque de dextérité vous donne des secondes chances.",
    },
    effects: [
      {
        en: "Reroll failed DEX-related rolls.",
        fr: "Relancez les jets liés à la DEX ratés.",
      },
      {
        en: "If the reroll also fails, the consequences are BAD.",
        fr: "Si la relance échoue aussi, les conséquences sont GRAVES.",
      },
    ],
    requirement: { stat: "DEX", maxValue: 0 },
  },
  {
    id: "tradesman-artisan",
    name: { en: "Tradesman/Artisan", fr: "Artisan/Commerçant" },
    description: {
      en: "Choose a profession (Baker, Smith, Stonemason, etc.).",
      fr: "Choisissez une profession (Boulanger, Forgeron, Tailleur de pierre, etc.).",
    },
    effects: [
      {
        en: "Checks related to your chosen profession are made with advantage.",
        fr: "Les tests liés à votre profession choisie sont faits avec avantage.",
      },
      {
        en: "Retain special knowledge related to your profession.",
        fr: "Conservez des connaissances spécialisées liées à votre profession.",
      },
    ],
  },
];
