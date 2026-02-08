import type { Condition } from "./types";

export const conditions: Condition[] = [
  {
    id: "blinded",
    name: { en: "Blinded", fr: "Aveuglé" },
    description: { en: "Can't see.", fr: "Ne peut pas voir." },
    effects: [
      { en: "Attacks against you have advantage.", fr: "Les attaques contre vous ont l'Avantage." },
      { en: "Your attacks have disadvantage.", fr: "Vos attaques ont le Désavantage." },
    ],
  },
  {
    id: "bloodied",
    name: { en: "Bloodied", fr: "Ensanglanté" },
    description: { en: "At half HP or less.", fr: "À la moitié des PV ou moins." },
    effects: [],
  },
  {
    id: "charmed",
    name: { en: "Charmed", fr: "Charmé" },
    description: { en: "Sees the charmer as an ally.", fr: "Considère le charmeur comme un allié." },
    effects: [
      { en: "Charmer has advantage on social interactions with you.", fr: "Le charmeur a l'Avantage sur les interactions sociales avec vous." },
    ],
  },
  {
    id: "dazed",
    name: { en: "Dazed", fr: "Hébété" },
    description: {
      en: "Heroes: lose 1 action; monsters: can perform one less action on their next turn.",
      fr: "Héros : perdent 1 action ; monstres : peuvent effectuer une action de moins lors de leur prochain tour.",
    },
    effects: [
      { en: "Heroes: lose 1 action.", fr: "Héros : perdent 1 action." },
      { en: "Monsters: can perform one less action on their next turn.", fr: "Monstres : peuvent effectuer une action de moins lors de leur prochain tour." },
    ],
  },
  {
    id: "dying",
    name: { en: "Dying", fr: "Mourant" },
    description: { en: "At 0 HP.", fr: "À 0 PV." },
    effects: [
      { en: "Taking damage while dying causes 2 Wounds.", fr: "Subir des dégâts en étant Mourant inflige 2 Blessures." },
      { en: "A crit causes 3 Wounds instead.", fr: "Un Coup critique inflige 3 Blessures à la place." },
    ],
  },
  {
    id: "frightened",
    name: { en: "Frightened", fr: "Effrayé" },
    description: {
      en: "Disadvantage on rolls when source of fear is nearby; speed halved when moving closer to it.",
      fr: "Désavantage aux jets quand la source de peur est à proximité ; Vitesse réduite de moitié lorsque vous vous en approchez.",
    },
    effects: [
      { en: "Disadvantage on rolls when source of fear is nearby.", fr: "Désavantage aux jets quand la source de peur est à proximité." },
      { en: "Speed halved when moving closer to source of fear.", fr: "Vitesse réduite de moitié lorsque vous vous approchez de la source de peur." },
    ],
  },
  {
    id: "grappled",
    name: { en: "Grappled", fr: "Empoigné" },
    description: { en: "Cannot move.", fr: "Ne peut pas se déplacer." },
    effects: [
      { en: "Cannot move.", fr: "Ne peut pas se déplacer." },
      { en: "Attacks against you have advantage.", fr: "Les attaques contre vous ont l'Avantage." },
    ],
  },
  {
    id: "restrained",
    name: { en: "Restrained", fr: "Entravé" },
    description: {
      en: "Functions like Grappled, but is caused by objects (e.g., chains, rope, roots) and ignores size restrictions.",
      fr: "Fonctionne comme Empoigné, mais est causé par des objets (ex. : chaînes, cordes, racines) et ignore les restrictions de taille.",
    },
    effects: [
      { en: "Cannot move.", fr: "Ne peut pas se déplacer." },
      { en: "Attacks against you have advantage.", fr: "Les attaques contre vous ont l'Avantage." },
      {
        en: "Can be ended through any logical means, such as picking a lock or cutting/burning rope.",
        fr: "Peut être annulé par tout moyen logique, comme crocheter une serrure ou couper/brûler une corde.",
      },
    ],
  },
  {
    id: "hampered",
    name: { en: "Hampered", fr: "Entravé" },
    description: {
      en: "Any creature with their actions or movement reduced (e.g., Dazed, Grappled, Prone, Difficult Terrain).",
      fr: "Toute créature dont les actions ou le déplacement sont réduits (ex. : Hébété, Empoigné, À terre, Terrain difficile).",
    },
    effects: [
      {
        en: "A meta-condition indicating actions or movement are reduced.",
        fr: "Une méta-condition indiquant que les actions ou le déplacement sont réduits.",
      },
    ],
  },
  {
    id: "incapacitated",
    name: { en: "Incapacitated", fr: "Neutralisé" },
    description: { en: "Can't do anything.", fr: "Ne peut rien faire." },
    effects: [
      { en: "Attacks against you have advantage.", fr: "Les attaques contre vous ont l'Avantage." },
      { en: "Melee attacks that hit, crit.", fr: "Les attaques de mêlée qui touchent sont des Coups critiques." },
    ],
  },
  {
    id: "invisible",
    name: { en: "Invisible", fr: "Invisible" },
    description: { en: "Cannot be seen.", fr: "Ne peut pas être vu." },
    effects: [
      { en: "Your attacks have advantage.", fr: "Vos attaques ont l'Avantage." },
      { en: "Attacks against you have disadvantage.", fr: "Les attaques contre vous ont le Désavantage." },
    ],
  },
  {
    id: "petrified",
    name: { en: "Petrified", fr: "Pétrifié" },
    description: {
      en: "Incapacitated. You have all the benefits and drawbacks of being a rock!",
      fr: "Neutralisé. Vous avez tous les avantages et inconvénients d'être un rocher !",
    },
    effects: [
      { en: "Incapacitated.", fr: "Neutralisé." },
      {
        en: "Immune to most damage except from large explosions, picks, or similar tools.",
        fr: "Immunisé contre la plupart des dégâts, sauf ceux provenant de grandes explosions, de pioches ou d'outils similaires.",
      },
    ],
  },
  {
    id: "poisoned",
    name: { en: "Poisoned", fr: "Empoisonné" },
    description: { en: "Disadvantage on rolls.", fr: "Désavantage aux jets." },
    effects: [{ en: "Disadvantage on rolls.", fr: "Désavantage aux jets." }],
  },
  {
    id: "prone",
    name: { en: "Prone", fr: "À terre" },
    description: {
      en: "Movement costs twice as much, and disadvantage on attacks.",
      fr: "Le déplacement coûte deux fois plus, et Désavantage aux attaques.",
    },
    effects: [
      { en: "Movement costs twice as much.", fr: "Le déplacement coûte deux fois plus." },
      { en: "Disadvantage on attacks.", fr: "Désavantage aux attaques." },
      { en: "Melee attacks against you have advantage.", fr: "Les attaques de mêlée contre vous ont l'Avantage." },
      { en: "Ranged attacks against you have disadvantage.", fr: "Les attaques à distance contre vous ont le Désavantage." },
      { en: "Spend 3 spaces of your Speed to stand up.", fr: "Dépensez 3 cases de votre Vitesse pour vous relever." },
    ],
  },
  {
    id: "riding",
    name: { en: "Riding", fr: "Monté" },
    description: {
      en: "You move with the creature you are riding.",
      fr: "Vous vous déplacez avec la créature que vous montez.",
    },
    effects: [
      { en: "You move with the creature you are riding.", fr: "Vous vous déplacez avec la créature que vous montez." },
      {
        en: "Any attacks that miss you, strike the creature you are riding.",
        fr: "Toute attaque qui vous rate frappe la créature que vous montez.",
      },
    ],
  },
  {
    id: "slowed",
    name: { en: "Slowed", fr: "Ralenti" },
    description: { en: "Speed halved during your next turn.", fr: "Vitesse réduite de moitié lors de votre prochain tour." },
    effects: [{ en: "Speed halved during your next turn.", fr: "Vitesse réduite de moitié lors de votre prochain tour." }],
  },
  {
    id: "taunted",
    name: { en: "Taunted", fr: "Provoqué" },
    description: {
      en: "Disadvantage on attacks except against the most recent taunter.",
      fr: "Désavantage aux attaques sauf contre le provocateur le plus récent.",
    },
    effects: [
      {
        en: "Disadvantage on attacks except against the most recent taunter.",
        fr: "Désavantage aux attaques sauf contre le provocateur le plus récent.",
      },
    ],
  },
  {
    id: "wounded",
    name: { en: "Wounded", fr: "Blessé" },
    description: {
      en: "Has any Wounds (typically 6 Wounds and a hero is dead).",
      fr: "Possède des Blessures (généralement 6 Blessures et le héros meurt).",
    },
    effects: [
      { en: "Has any Wounds.", fr: "Possède des Blessures." },
      { en: "Typically 6 Wounds and a hero is dead.", fr: "Généralement 6 Blessures et le héros meurt." },
    ],
  },
  // Minor statuses
  {
    id: "smoldering",
    name: { en: "Smoldering", fr: "Incandescent" },
    description: {
      en: "This condition does nothing on its own, though some spells and abilities have additional effects against Smoldering creatures.",
      fr: "Cet état ne fait rien en soi, mais certains sorts et capacités ont des effets supplémentaires contre les créatures Incandescentes.",
    },
    effects: [
      { en: "Does nothing on its own.", fr: "Ne fait rien en soi." },
      {
        en: "Some fire spells and abilities have additional effects against Smoldering creatures.",
        fr: "Certains sorts et capacités de feu ont des effets supplémentaires contre les créatures Incandescentes.",
      },
      { en: "Ends when combat ends.", fr: "Prend fin quand le combat se termine." },
    ],
    minor: true,
  },
  {
    id: "charged",
    name: { en: "Charged", fr: "Surchargé" },
    description: {
      en: "Whenever you take lightning damage you are Charged for 1 minute.",
      fr: "Chaque fois que vous subissez des dégâts de foudre, vous devenez Surchargé pendant 1 minute.",
    },
    effects: [
      { en: "Does nothing on its own.", fr: "Ne fait rien en soi." },
      {
        en: "Some lightning spells and abilities have additional effects against Charged creatures.",
        fr: "Certains sorts et capacités de foudre ont des effets supplémentaires contre les créatures Surchargées.",
      },
      { en: "Gained when taking lightning damage, lasts 1 minute.", fr: "Obtenu en subissant des dégâts de foudre, dure 1 minute." },
      { en: "Ends when combat ends.", fr: "Prend fin quand le combat se termine." },
    ],
    minor: true,
  },
  {
    id: "distracted",
    name: { en: "Distracted", fr: "Distrait" },
    description: {
      en: "A target is distracted if it is adjacent to or Taunted by an ally, or if it cannot see you.",
      fr: "Une cible est Distraite si elle est adjacente à un allié ou Provoquée par un allié, ou si elle ne peut pas vous voir.",
    },
    effects: [
      { en: "Does nothing on its own.", fr: "Ne fait rien en soi." },
      {
        en: "Triggered when target is adjacent to or Taunted by an ally, or if it cannot see you.",
        fr: "Déclenché quand la cible est adjacente à un allié ou Provoquée par un allié, ou si elle ne peut pas vous voir.",
      },
      {
        en: "Some abilities have additional effects against Distracted targets.",
        fr: "Certaines capacités ont des effets supplémentaires contre les cibles Distraites.",
      },
      { en: "Ends when combat ends.", fr: "Prend fin quand le combat se termine." },
    ],
    minor: true,
  },
];
