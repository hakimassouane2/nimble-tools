import type { Skill } from "./types";

export const skills: Skill[] = [
  {
    id: "arcana",
    name: { en: "Arcana", fr: "" },
    linkedStat: "INT",
    description: {
      en: "Your understanding of magical phenomena, spells, and enchantments. With Arcana, you can identify magical effects, decipher arcane symbols, and discern the properties of magical items. It also grants insights into the abilities and weaknesses of magical beings like Aberrations, Elementals, and Oozes.",
      fr: "",
    },
  },
  {
    id: "examination",
    name: { en: "Examination", fr: "" },
    linkedStat: "INT",
    description: {
      en: "Your aptitude for thorough analysis and deduction. Use Examination to diagnose injuries, determine causes of death, uncover clues, and unravel the workings of traps or mechanical devices. It also grants insights into the abilities and weaknesses of Constructs.",
      fr: "",
    },
  },
  {
    id: "finesse",
    name: { en: "Finesse", fr: "" },
    linkedStat: "DEX",
    description: {
      en: "Your ability to use your hands and feet in careful ways. Use Finesse for activities such as picking locks, disarming traps, piloting vehicles, tinkering, card tricks, stealing or planting items, climbing a mossy wall, or any other task that requires precise, careful movement.",
      fr: "",
    },
  },
  {
    id: "influence",
    name: { en: "Influence", fr: "" },
    linkedStat: "WIL",
    description: {
      en: "Your persuasiveness, charm, and ability to influence others through charisma or cunning. Use Influence to convince or deceive people, negotiate deals, build trust, win allies to your cause, or put on a captivating performance.",
      fr: "",
    },
  },
  {
    id: "insight",
    name: { en: "Insight", fr: "" },
    linkedStat: "WIL",
    description: {
      en: 'Your ability to understand people and situations beyond the obvious. Use Insight to sense motives, detect lies, read hidden emotions, make sense of clues, and when faced with uncertainty — you can think ahead or just "get" what is happening. Insight can be used to retroactively change situations.',
      fr: "",
    },
  },
  {
    id: "lore",
    name: { en: "Lore", fr: "" },
    linkedStat: "INT",
    description: {
      en: "Your understanding of the history of civilization, kingdoms, and religions. Use Lore to recall historical events and grasp the significance of cultural practices. It extends to knowledge of the abilities and behavior of Celestials, Dragons, Fey, Fiends, Giants, Humanoids, and Undead.",
      fr: "",
    },
  },
  {
    id: "might",
    name: { en: "Might", fr: "" },
    linkedStat: "STR",
    description: {
      en: "Your ability to apply strength effectively. Use Might for lifting heavy objects, breaking through obstacles, climbing, swimming, jumping, or performing feats of strength.",
      fr: "",
    },
  },
  {
    id: "naturecraft",
    name: { en: "Naturecraft", fr: "" },
    linkedStat: "WIL",
    description: {
      en: "Your expertise in wilderness survival, navigation, tracking, and the handling of animals. Use Naturecraft to thrive in the wild, identify flora, fauna, and track creatures with precision. It encompasses knowledge of Beasts, Monstrosities, and Plants, providing insights into their behavior, habitats, and characteristics.",
      fr: "",
    },
  },
  {
    id: "perception",
    name: { en: "Perception", fr: "" },
    linkedStat: "WIL",
    description: {
      en: "Your overall ability to notice subtle details in your surroundings. Use Perception to spot hidden objects, detect secret passages, sense subtle environmental changes, and sense when you are being followed or observed. It encompasses your ability to pick up on non-obvious cues and hidden threats.",
      fr: "",
    },
  },
  {
    id: "stealth",
    name: { en: "Stealth", fr: "" },
    linkedStat: "DEX",
    description: {
      en: "Your proficiency in staying unseen and moving quietly. Use Stealth to hide, slip past guards, evade detection, and move without drawing attention.",
      fr: "",
    },
  },
];
