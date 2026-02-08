import type { RulesCategory } from "../types";

export const coreMechanics: RulesCategory = {
  id: "core-mechanics",
  title: { en: "Core Mechanics", fr: "" },
  sections: [
    {
      id: "skill-checks",
      title: { en: "Skill Checks & Saves", fr: "" },
      content: {
        en: "**Skill Checks** — Roll 1d20 + skill bonus (max +12). Meet or exceed DC to succeed. Roll 1 always fails, 20 always succeeds.\n\n**DC Scale:**\n- Easy (DC 8)\n- Medium (DC 12)\n- Challenging (DC 15)\n- Very Difficult (DC 18)\n- Extremely Difficult (DC 20+)\n\n**Saves** — Roll 1d20 + relevant stat. You can choose to fail any save.\n- STR: Resist forced movement, restraint, poison, extreme temperatures\n- DEX: Dive for cover, stay on feet on ice\n- INT: See through tricks and illusions\n- WIL: Resist charm or fear\n\nHero save DC is typically 10+KEY. Each hero has 1 advantaged save, 1 disadvantaged save, and 2 neutral saves.",
        fr: "",
      },
    },
    {
      id: "advantage-disadvantage",
      title: { en: "Advantage & Disadvantage", fr: "" },
      content: {
        en: "**Advantage** — Roll 1 additional die and remove the lowest. Multiple instances: roll extra die for each, remove lowest.\n\n**Disadvantage** — Roll 1 additional die and remove the highest. Multiple instances: roll extra die for each, remove highest.\n\nEach instance of advantage cancels one instance of disadvantage before rolling.",
        fr: "",
      },
    },
    {
      id: "hp-dying-wounds",
      title: { en: "Hit Points, Dying & Wounds", fr: "" },
      content: {
        en: "**Hit Points (HP)** — Damage reduces HP (min 0). At 0 HP: gain 1 Wound and the Dying condition until healed.\n\n**While Dying:** Limited to 1 action. Attacking/casting causes 1 Wound (DC 10 STR save to avoid). Taking damage causes 2 Wounds (crit: 3).\n\n**Wounds** — Serious injuries. Recover 1/Safe Rest typically.\n\n**Death** — 6 Wounds = death. Revival is rare and costly.\n\n**Temporary HP** — Reduced first when taking damage. Don't combine (keep one). Expire after Safe Rest.",
        fr: "",
      },
    },
    {
      id: "speed-range",
      title: { en: "Speed & Range", fr: "" },
      content: {
        en: "**Speed** — Default 6 spaces. Move through ally spaces freely. Move through enemy spaces as difficult terrain.\n\n**Range & Reach** — Default Reach 1 if unspecified. In melee: Ranged attacks have disadvantage. Long Range: gain disadvantage for +2 Range (max +6).\n\n**Falling & Forced Movement** — Stopped by obstacle: 1d6 per space shortened. Hit another creature: split damage. Falling: 1d6 per 10 ft (2 spaces).",
        fr: "",
      },
    },
    {
      id: "concentration",
      title: { en: "Concentration", fr: "" },
      content: {
        en: "Only 1 concentration activity at a time. On crit while concentrating: DC 10 STR save or concentration breaks. Automatically broken at 0 HP or when incapacitated.",
        fr: "",
      },
    },
    {
      id: "cover-hiding",
      title: { en: "Cover & Hiding", fr: "" },
      content: {
        en: "**Cover** — Mostly obscured: disadvantage on attacks against you.\n\n**Full Cover** — Completely obscured: cannot be targeted.\n\n**Hiding** — Requires Cover + action + DC 15 Stealth check (auto-succeed with Full Cover). First attack from hiding has advantage. If the kill is unseen, stay hidden.",
        fr: "",
      },
    },
    {
      id: "grappling",
      title: { en: "Grappling", fr: "" },
      content: {
        en: "Requires Reach and 1 free arm. Target makes STR or DEX save (DC 10+STR or DEX):\n- Your size or smaller: Grappled\n- Larger than you: you gain Riding condition\n\nEnded by: forced movement, incapacitation, or successful STR/DEX save (costs 1 action).",
        fr: "",
      },
    },
    {
      id: "size",
      title: { en: "Size Categories", fr: "" },
      content: {
        en: "**Tiny** — Pocket-sized (many fit in 1 space)\n**Small** — Backpack-sized (2 fit in 1 space)\n**Medium** — Human-sized (1 per space)\n**Large** — Bear-sized (2x2 area)\n**Huge** — Small house (3x3 area)\n**Gargantuan** — Castle keep (4x4+)",
        fr: "",
      },
    },
    {
      id: "inventory",
      title: { en: "Inventory Slots", fr: "" },
      content: {
        en: "Each hero has **10+STR inventory slots**.\n- 1 slot: one-handed weapon, shield, worn armor, javelin stack, 500 gp, or 2 potions\n- 2 slots: 2-handed weapon, unworn armor, bulky items\n- Small related items can be grouped\n\n**Currency:** 10 silver (sp) = 1 gold (gp). 1 sp ≈ humble meal; 1 gp ≈ sumptuous feast.",
        fr: "",
      },
    },
  ],
};
