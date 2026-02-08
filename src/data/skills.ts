import type { Skill } from "./types";

export const skills: Skill[] = [
  {
    id: "arcana",
    name: { en: "Arcana", fr: "Arcanes" },
    linkedStat: "INT",
    description: {
      en: "Your understanding of magical phenomena, spells, and enchantments. With Arcana, you can identify magical effects, decipher arcane symbols, and discern the properties of magical items. It also grants insights into the abilities and weaknesses of magical beings like Aberrations, Elementals, and Oozes.",
      fr: "Votre compréhension des phénomènes magiques, des sorts et des enchantements. Grâce aux Arcanes, vous pouvez identifier les effets magiques, déchiffrer les symboles arcaniques et discerner les propriétés des objets magiques. Cette compétence vous donne également un aperçu des capacités et des faiblesses des êtres magiques tels que les Aberrations, les Élémentaires et les Vases.",
    },
  },
  {
    id: "examination",
    name: { en: "Examination", fr: "Examen" },
    linkedStat: "INT",
    description: {
      en: "Your aptitude for thorough analysis and deduction. Use Examination to diagnose injuries, determine causes of death, uncover clues, and unravel the workings of traps or mechanical devices. It also grants insights into the abilities and weaknesses of Constructs.",
      fr: "Votre aptitude à l'analyse approfondie et à la déduction. Utilisez l'Examen pour diagnostiquer des blessures, déterminer les causes d'un décès, découvrir des indices et comprendre le fonctionnement des pièges ou des dispositifs mécaniques. Cette compétence vous donne également un aperçu des capacités et des faiblesses des Créatures artificielles.",
    },
  },
  {
    id: "finesse",
    name: { en: "Finesse", fr: "Finesse" },
    linkedStat: "DEX",
    description: {
      en: "Your ability to use your hands and feet in careful ways. Use Finesse for activities such as picking locks, disarming traps, piloting vehicles, tinkering, card tricks, stealing or planting items, climbing a mossy wall, or any other task that requires precise, careful movement.",
      fr: "Votre capacité à utiliser vos mains et vos pieds avec précision. Utilisez la Finesse pour des activités telles que crocheter des serrures, désamorcer des pièges, piloter des véhicules, bricoler, faire des tours de cartes, voler ou dissimuler des objets, escalader un mur moussu, ou toute autre tâche nécessitant des mouvements précis et minutieux.",
    },
  },
  {
    id: "influence",
    name: { en: "Influence", fr: "Influence" },
    linkedStat: "WIL",
    description: {
      en: "Your persuasiveness, charm, and ability to influence others through charisma or cunning. Use Influence to convince or deceive people, negotiate deals, build trust, win allies to your cause, or put on a captivating performance.",
      fr: "Votre pouvoir de persuasion, votre charme et votre capacité à influencer les autres par le charisme ou la ruse. Utilisez l'Influence pour convaincre ou tromper les gens, négocier des accords, instaurer la confiance, rallier des alliés à votre cause ou offrir une performance captivante.",
    },
  },
  {
    id: "insight",
    name: { en: "Insight", fr: "Perspicacité" },
    linkedStat: "WIL",
    description: {
      en: 'Your ability to understand people and situations beyond the obvious. Use Insight to sense motives, detect lies, read hidden emotions, make sense of clues, and when faced with uncertainty — you can think ahead or just "get" what is happening. Insight can be used to retroactively change situations.',
      fr: "Votre capacité à comprendre les gens et les situations au-delà des apparences. Utilisez la Perspicacité pour déceler les motivations, détecter les mensonges, lire les émotions cachées, interpréter les indices, et face à l'incertitude — vous pouvez anticiper ou simplement « saisir » ce qui se passe. La Perspicacité peut être utilisée pour modifier rétroactivement des situations.",
    },
  },
  {
    id: "lore",
    name: { en: "Lore", fr: "Connaissances" },
    linkedStat: "INT",
    description: {
      en: "Your understanding of the history of civilization, kingdoms, and religions. Use Lore to recall historical events and grasp the significance of cultural practices. It extends to knowledge of the abilities and behavior of Celestials, Dragons, Fey, Fiends, Giants, Humanoids, and Undead.",
      fr: "Votre connaissance de l'histoire des civilisations, des royaumes et des religions. Utilisez les Connaissances pour vous remémorer des événements historiques et saisir l'importance des pratiques culturelles. Cela s'étend au savoir sur les capacités et le comportement des Célestes, des Dragons, des Fées, des Fiélons, des Géants, des Humanoïdes et des Morts-vivants.",
    },
  },
  {
    id: "might",
    name: { en: "Might", fr: "Puissance" },
    linkedStat: "STR",
    description: {
      en: "Your ability to apply strength effectively. Use Might for lifting heavy objects, breaking through obstacles, climbing, swimming, jumping, or performing feats of strength.",
      fr: "Votre capacité à appliquer efficacement votre force. Utilisez la Puissance pour soulever des objets lourds, enfoncer des obstacles, escalader, nager, sauter ou accomplir des exploits de force.",
    },
  },
  {
    id: "naturecraft",
    name: { en: "Naturecraft", fr: "Nature" },
    linkedStat: "WIL",
    description: {
      en: "Your expertise in wilderness survival, navigation, tracking, and the handling of animals. Use Naturecraft to thrive in the wild, identify flora, fauna, and track creatures with precision. It encompasses knowledge of Beasts, Monstrosities, and Plants, providing insights into their behavior, habitats, and characteristics.",
      fr: "Votre expertise en survie en milieu sauvage, en navigation, en pistage et en dressage d'animaux. Utilisez Nature pour prospérer dans la nature, identifier la flore et la faune, et pister des créatures avec précision. Cela englobe la connaissance des Bêtes, des Monstruosités et des Plantes, offrant un aperçu de leur comportement, de leurs habitats et de leurs caractéristiques.",
    },
  },
  {
    id: "perception",
    name: { en: "Perception", fr: "Perception" },
    linkedStat: "WIL",
    description: {
      en: "Your overall ability to notice subtle details in your surroundings. Use Perception to spot hidden objects, detect secret passages, sense subtle environmental changes, and sense when you are being followed or observed. It encompasses your ability to pick up on non-obvious cues and hidden threats.",
      fr: "Votre capacité générale à remarquer les détails subtils de votre environnement. Utilisez la Perception pour repérer des objets cachés, détecter des passages secrets, percevoir des changements environnementaux subtils et sentir quand vous êtes suivi ou observé. Cela englobe votre capacité à capter des indices non évidents et des menaces dissimulées.",
    },
  },
  {
    id: "stealth",
    name: { en: "Stealth", fr: "Discrétion" },
    linkedStat: "DEX",
    description: {
      en: "Your proficiency in staying unseen and moving quietly. Use Stealth to hide, slip past guards, evade detection, and move without drawing attention.",
      fr: "Votre maîtrise de l'art de rester invisible et de vous déplacer silencieusement. Utilisez la Discrétion pour vous cacher, vous faufiler devant les gardes, échapper à la détection et vous déplacer sans attirer l'attention.",
    },
  },
];
