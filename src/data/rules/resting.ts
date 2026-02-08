import type { RulesCategory } from "../types";

export const restingRules: RulesCategory = {
  id: "resting",
  title: { en: "Resting", fr: "" },
  sections: [
    {
      id: "field-rests",
      title: { en: "Field Rests", fr: "" },
      content: {
        en: "While adventuring, heroes can take Field Rests to regain HP.\n\n**Catch Breath** — At least 10 minutes. Expend any number of Hit Dice (roll + STR each). Regain that many HP.\n\n**Make Camp** — At least 8 hours with food and sleep. Take max value for each Hit Die expended (+ STR each).\n\n**Negative STR?** — Subtract STR from each HD expended.",
        fr: "",
      },
    },
    {
      id: "safe-rests",
      title: { en: "Safe Rests", fr: "" },
      content: {
        en: "Safe Rests take place in a safe location designated by your GM (inn, oasis, cabin, shrine). Camping in the wilderness or dungeon is NOT sufficient.\n\nAfter a Safe Rest, recover all HP, Hit Dice, mana, and heal 1 Wound. Great opportunity for downtime activities.",
        fr: "",
      },
    },
    {
      id: "lodging",
      title: { en: "Lodging", fr: "" },
      content: {
        en: "**Poor** (5 sp/person/day) — May lead to complications.\n**Comfortable** (2 gp/person/day) — Standard accommodations.\n**Lavish** (10 gp/person/day) — Gain one Temporary Boon the following day.",
        fr: "",
      },
    },
    {
      id: "downtime",
      title: { en: "Downtime Activities", fr: "" },
      content: {
        en: "Activities during downtime include: Retrain abilities, Gather Information (meet NPCs, collect rumors), Personal Goals, Buy & Sell equipment, Perform for gold/fame, Craft items, Socialize, Invest in businesses, Mentor others, Research mysteries, Serve a patron/deity, Build (home base, business, etc.).",
        fr: "",
      },
    },
  ],
};
