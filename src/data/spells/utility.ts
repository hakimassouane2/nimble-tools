import type { Spell } from "../types";

export const utilitySpells: Spell[] = [
  // ─── Fire Utility ───────────────────────────────────────────────────────────
  {
    id: "firebrand",
    name: { en: "Firebrand", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Touch", fr: "" },
    range: { en: "Touch", fr: "" },
    effects: {
      en: "Touch surface. Mark with symbol/message revealed by command word.",
      fr: "",
    },
  },
  {
    id: "fire-step",
    name: { en: "Fire Step", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 0,
    targetType: { en: "Self", fr: "" },
    range: { en: "Self", fr: "" },
    effects: {
      en: "1 minute casting time. Teleport to a fire source you can see.",
      fr: "",
    },
  },
  {
    id: "kindle",
    name: { en: "Kindle", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Single Target", fr: "" },
    range: { en: "Range 6", fr: "" },
    effects: {
      en: "Conjure minor visual illusion OR ignite small unheld item.",
      fr: "",
    },
  },

  // ─── Ice Utility ────────────────────────────────────────────────────────────
  {
    id: "ice-disk",
    name: { en: "Ice Disk", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 0,
    targetType: { en: "Self", fr: "" },
    range: { en: "Self", fr: "" },
    effects: {
      en: "1 minute casting time. Floating disk carries up to 250 lbs for 1 hour.",
      fr: "",
    },
  },
  {
    id: "chillcraft",
    name: { en: "Chillcraft", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Self/Area", fr: "" },
    range: { en: "Self", fr: "" },
    effects: {
      en: "Freeze/thaw/move water OR conjure sheet of ice.",
      fr: "",
    },
  },
  {
    id: "wintry-scrying",
    name: { en: "Wintry Scrying", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 0,
    targetType: { en: "Self", fr: "" },
    range: { en: "Self", fr: "" },
    effects: {
      en: "10 minutes casting time. Icy mirror shows desired location near same body of water.",
      fr: "",
    },
  },

  // ─── Lightning Utility ──────────────────────────────────────────────────────
  {
    id: "spark-buddy",
    name: { en: "Spark Buddy", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 0,
    targetType: { en: "Summon", fr: "" },
    range: { en: "Self", fr: "" },
    effects: {
      en: "1 minute casting time. Tiny electrical helper for 1 hour, fetches objects/opens doors/illuminates.",
      fr: "",
    },
  },
  {
    id: "spark-step",
    name: { en: "Spark Step", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Self", fr: "" },
    range: { en: "Range 4", fr: "" },
    effects: {
      en: "Teleport to a metal object within Range.",
      fr: "",
    },
  },
  {
    id: "tempests-command",
    name: { en: "Tempest's Command", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "N/A", fr: "" },
    range: { en: "N/A", fr: "" },
    effects: {
      en: "Dispel minor magical effect OR Voice of Thunder (amplified voice 1 min).",
      fr: "",
    },
  },

  // ─── Wind Utility ───────────────────────────────────────────────────────────
  {
    id: "wind-whisper",
    name: { en: "Wind Whisper", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Single Target", fr: "" },
    range: { en: "Range 100 miles", fr: "" },
    effects: {
      en: "Whisper message carried to specified target.",
      fr: "",
    },
  },
  {
    id: "helpful-gust",
    name: { en: "Helpful Gust", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Single Target", fr: "" },
    range: { en: "Reach 6", fr: "" },
    effects: {
      en: "Move Tiny unheld item OR generate illusory scent.",
      fr: "",
    },
  },
  {
    id: "feather-fall",
    name: { en: "Feather Fall", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Single Target", fr: "" },
    range: { en: "Reach 6", fr: "" },
    effects: {
      en: "Reaction: creature floats gently to ground.",
      fr: "",
    },
  },

  // ─── Radiant Utility ────────────────────────────────────────────────────────
  {
    id: "light",
    name: { en: "Light", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Touch", fr: "" },
    range: { en: "Touch", fr: "" },
    effects: {
      en: "Item glows as torch while held.",
      fr: "",
    },
  },
  {
    id: "beautify",
    name: { en: "Beautify", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Touch", fr: "" },
    range: { en: "Touch", fr: "" },
    effects: {
      en: "Clean stains/repair item OR conjure flowers/butterflies.",
      fr: "",
    },
  },
  {
    id: "bond-of-peace",
    name: { en: "Bond of Peace", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Single Target", fr: "" },
    range: { en: "Line of sight", fr: "" },
    effects: {
      en: "Telepathic communication OR calming magic (advantage on soothing).",
      fr: "",
    },
  },

  // ─── Necrotic Utility ───────────────────────────────────────────────────────
  {
    id: "gravecraft",
    name: { en: "Gravecraft", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Touch", fr: "" },
    range: { en: "Touch", fr: "" },
    effects: {
      en: "Gravemark (1 Action): mark soil surface. Gravework (1 min): shape earth.",
      fr: "",
    },
  },
  {
    id: "false-face",
    name: { en: "False Face", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 0,
    targetType: { en: "Self", fr: "" },
    range: { en: "Self", fr: "" },
    effects: {
      en: "1 minute casting time. Change appearance for 10 min (requires piece of target).",
      fr: "",
    },
  },
  {
    id: "thought-leech",
    name: { en: "Thought Leech", fr: "" },
    school: "utility",
    tier: 0,
    castingTime: 1,
    targetType: { en: "Single Target", fr: "" },
    range: { en: "Reach 6", fr: "" },
    effects: {
      en: "Read surface thoughts (creatures can sense it).",
      fr: "",
    },
  },
];
