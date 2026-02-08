import type { RulesCategory } from "../types";

export const combatRules: RulesCategory = {
  id: "combat",
  title: { en: "Combat", fr: "" },
  sections: [
    {
      id: "heroic-actions",
      title: { en: "Heroic Actions", fr: "" },
      content: {
        en: "On your turn, heroes get **3 actions** to attack, move, cast spells, etc. Generally doing any single thing costs 1 action. All 3 actions recharge at the end of your turn.\n\n**Attack** — Roll the die listed on the spell, weapon, or ability and deal that much damage. Roll a 1 = miss. The leftmost die is the Primary Die, determining hit or miss.\n\n**Exploding Critical Hits** — Rolling max on a Primary Die is a crit. Roll the Primary Die again and add to total. Repeat on max. Crits ignore monster armor.\n\n**Rushed Attacks** — Additional attacks after the first impose cumulative disadvantage.\n\n**Cast Spell** — Requires 1 hand free (or focus), ability to speak, and may require mana. Mana cost equals spell tier; cantrips cost 0. Upcasting: spend additional mana up to your highest unlocked tier.\n\n**Move** — Move up to your speed (6 spaces unless noted). Can be broken up with other actions. Difficult Terrain halves speed. Climbing counts as Difficult Terrain.\n\n**Assess** — DC 12 skill check to: Ask a Question about enemies/environment, Create an Opening (+1 to next Primary Die vs target), or Anticipate Danger (-1 to Primary Dice against you). Cannot use same skill twice in one encounter.\n\n**Free Actions** — Simple tasks (open door, shout, drop item, end concentration) for free 1/turn.",
        fr: "",
      },
    },
    {
      id: "heroic-reactions",
      title: { en: "Heroic Reactions", fr: "" },
      content: {
        en: "Reactions cost 1 action and are performed when it is not your turn. Each reaction max 1/round.\n\n**Defend** — Reduce damage from any single attack by your Armor.\n\n**Interpose** — If a creature within 2 spaces would be struck, push them out and become the new target. Can Interpose AND Defend together if you have enough actions.\n\n**Opportunity Attack** — Melee attack with disadvantage against an adjacent enemy moving away. Only heroes can make opportunity attacks.\n\n**Help** — Grant an ally advantage on a roll (limit: one Help per roll). GM may call for a skill check.",
        fr: "",
      },
    },
    {
      id: "initiative",
      title: { en: "Initiative & Turn Order", fr: "" },
      content: {
        en: "**Starting Combat** — Roll 1d20 + Initiative bonus (typically DEX).\n- Single digit: start with 1 action\n- 2 digits: start with 2 actions\n- 20+: start with all 3 actions\n- At end of turn, gain all 3 actions back.\n\n**Surprise** — GM may grant advantage on Initiative or skip rolling entirely.\n\n**Turn Order** — Heroes go first by default. Players ready first go first, play proceeds clockwise. Monsters act last (some fast ones may act sooner).\n\n**Turns, Rounds, & Encounters** — A Turn is ~6 seconds. A Round is all players and monsters acting. An Encounter is all rounds in a combat.",
        fr: "",
      },
    },
    {
      id: "monsters-armor",
      title: { en: "Monsters & Armor", fr: "" },
      content: {
        en: "Most monsters are **unarmored**. **Medium Armor**: take damage from only the dice rolled, ignoring modifiers. **Heavy Armor**: take only half dice damage, ignoring modifiers. Crits and vulnerabilities ignore monster armor.\n\n**Minions** — 1 HP, die from any damage, cannot crit. Move and attack together. Defend against them as a single attack. Overflow damage may hit adjacent minions.",
        fr: "",
      },
    },
  ],
};
