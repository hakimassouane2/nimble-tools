import type { RulesCategory } from "../types";

export const restingRules: RulesCategory = {
  id: "resting",
  title: { en: "Resting", fr: "Repos" },
  sections: [
    {
      id: "field-rests",
      title: { en: "Field Rests", fr: "Repos de terrain" },
      content: {
        en: "While adventuring, heroes can take Field Rests to regain HP.\n\n**Catch Breath** — At least 10 minutes. Expend any number of Hit Dice (roll + STR each). Regain that many HP.\n\n**Make Camp** — At least 8 hours with food and sleep. Take max value for each Hit Die expended (+ STR each).\n\n**Negative STR?** — Subtract STR from each HD expended.",
        fr: "En aventure, les héros peuvent prendre des Repos de terrain pour récupérer des PV.\n\n**Reprendre son souffle** — Au moins 10 minutes. Dépensez un nombre quelconque de Dés de vie (lancez + FOR chacun). Récupérez autant de PV.\n\n**Établir un camp** — Au moins 8 heures avec nourriture et sommeil. Prenez la valeur maximale pour chaque Dé de vie dépensé (+ FOR chacun).\n\n**FOR négatif ?** — Soustrayez la FOR de chaque DV dépensé.",
      },
    },
    {
      id: "safe-rests",
      title: { en: "Safe Rests", fr: "Repos sûrs" },
      content: {
        en: "Safe Rests take place in a safe location designated by your GM (inn, oasis, cabin, shrine). Camping in the wilderness or dungeon is NOT sufficient.\n\nAfter a Safe Rest, recover all HP, Hit Dice, mana, and heal 1 Wound. Great opportunity for downtime activities.",
        fr: "Les Repos sûrs ont lieu dans un endroit sûr désigné par votre MJ (auberge, oasis, cabane, sanctuaire). Camper dans la nature ou un donjon n'est PAS suffisant.\n\nAprès un Repos sûr, récupérez tous vos PV, Dés de vie, mana, et soignez 1 Blessure. Excellente occasion pour des activités de temps libre.",
      },
    },
    {
      id: "lodging",
      title: { en: "Lodging", fr: "Hébergement" },
      content: {
        en: "**Poor** (5 sp/person/day) — May lead to complications.\n**Comfortable** (2 gp/person/day) — Standard accommodations.\n**Lavish** (10 gp/person/day) — Gain one Temporary Boon the following day.",
        fr: "**Pauvre** (5 pa/personne/jour) — Peut entraîner des complications.\n**Confortable** (2 po/personne/jour) — Hébergement standard.\n**Luxe** (10 po/personne/jour) — Obtenez un Don temporaire le jour suivant.",
      },
    },
    {
      id: "downtime",
      title: { en: "Downtime Activities", fr: "Activités de temps libre" },
      content: {
        en: "Activities during downtime include: Retrain abilities, Gather Information (meet NPCs, collect rumors), Personal Goals, Buy & Sell equipment, Perform for gold/fame, Craft items, Socialize, Invest in businesses, Mentor others, Research mysteries, Serve a patron/deity, Build (home base, business, etc.).",
        fr: "Les activités pendant le temps libre incluent : Réentraîner des capacités, Collecter des informations (rencontrer des PNJ, recueillir des rumeurs), Objectifs personnels, Acheter & Vendre de l'équipement, Se produire pour de l'or/la renommée, Fabriquer des objets, Socialiser, Investir dans des commerces, Former d'autres personnages, Rechercher des mystères, Servir un patron/une divinité, Construire (base, commerce, etc.).",
      },
    },
  ],
};
