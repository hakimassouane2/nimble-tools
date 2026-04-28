import type { HeroClass } from "../types";

// ─── Shadowmancer ───────────────────────────────────────────────────────────

export const shadowmancer: HeroClass = {
  id: "shadowmancer",
  name: { en: "Shadowmancer", fr: "Occultiste" },
  description: {
    en: "Summon hordes of expendable shadow minions and wield necrotic power stolen from ancient patrons. Choose between the Pact of the Red Dragon and the Pact of the Abyssal Depths.",
    fr: "Invoquez des hordes de serviteurs d'ombre sacrifiables et maniez le pouvoir nécrotique dérobé à d'anciens patrons. Choisissez entre le Pacte du dragon rouge et le Pacte des profondeurs abyssales.",
  },
  complexity: 3,
  keyStats: ["INT", "DEX"],
  hitDie: "1d8",
  startingHp: 13,
  saves: { strong: "INT", weak: "WIL" },
  armorProficiency: [{ en: "Cloth Armor", fr: "Armure de tissu" }],
  weaponProficiency: [
    { en: "Blades", fr: "Lames" },
    { en: "Wands", fr: "Baguettes" },
  ],
  startingGear: [
    { en: "Adventurer's Garb", fr: "Tenue d'aventurier" },
    { en: "Sickle", fr: "Faucille" },
    { en: "Shovel", fr: "Pelle" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Conduit of Shadow", fr: "Réceptacle des ombres" },
      description: {
        en: "Your Patron grants you knowledge of Shadow Blast (necrotic cantrip, Range 8, 1d12+KEY, +1d12 every 5 levels) and Summon Shadows (summon and command shadow minions with 1 HP each, max INT or LVL minions).",
        fr: "Votre Patron vous accorde la connaissance du Tir d'ombre (cantrip nécrotique, Portée 8, 1d12+CLÉ, +1d12 tous les 5 niveaux) et d'Invocation d'ombres (invoquez et commandez des serviteurs d'ombre avec 1 PV chacun, max INT ou NIV serviteurs).",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Master of Darkness", fr: "Maître des ténèbres" },
      description: {
        en: "Your Patron grants you knowledge of Necrotic cantrips and tier 1 spells.",
        fr: "Votre Patron vous accorde la connaissance des cantrips nécrotiques et des sorts de rang 1.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Pilfered Power", fr: "Pouvoir dérobé" },
      description: {
        en: "Steal power from your patron to cast tiered spells at the highest tier unlocked. You can do this DEX times before your patron retaliates with half your max HP in damage. Resets on Safe Rest.",
        fr: "Dérobez du pouvoir à votre patron pour lancer des sorts au rang le plus élevé débloqué. Vous pouvez le faire DEX fois avant que votre patron ne riposte en infligeant la moitié de vos PV max en dégâts. Se réinitialise lors d'un Repos sûr.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "The Pact is Sealed", fr: "Le pacte est SCELLÉ" },
      description: {
        en: "Choose a subclass and 1 Lesser Shadow Invocation. You may supplicate your Patron on a Safe Rest to change your Shadowmancer options.",
        fr: "Choisissez une sous-classe et 1 Invocation d'ombre mineure. Vous pouvez supplier votre Patron lors d'un Repos sûr pour changer vos options d'Occultiste.",
      },
      type: "subclass",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "A Gift from the Master", fr: "Un don du maître" },
      description: {
        en: "Choose 1 Greater Shadow Invocation.",
        fr: "Choisissez 1 Invocation d'ombre majeure.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Tier 2 Spells", fr: "Sorts de rang 2" },
      description: {
        en: "You may now cast tier 2 spells; all of your spells are cast at this tier.",
        fr: "Vous pouvez désormais lancer des sorts de rang 2 ; tous vos sorts sont lancés à ce rang.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 6,
      name: { en: "A Gift from the Master (2)", fr: "Un don du maître (2)" },
      description: {
        en: "Choose a 2nd Greater Shadow Invocation.",
        fr: "Choisissez une 2e Invocation d'ombre majeure.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Shadowmastery", fr: "Maîtrise des ombres" },
      description: { en: "Choose 1 Necrotic Utility Spell.", fr: "Choisissez 1 Sort utilitaire nécrotique." },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Shadowmancer subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe d'Occultiste.",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Tier 3 Spells", fr: "Sorts de rang 3" },
      description: {
        en: "You may now cast tier 3 spells; all of your spells are cast at this tier.",
        fr: "Vous pouvez désormais lancer des sorts de rang 3 ; tous vos sorts sont lancés à ce rang.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 8,
      name: { en: "Lesser Invocation", fr: "Invocation mineure" },
      description: {
        en: "Choose a 2nd Lesser Shadow Invocation.",
        fr: "Choisissez une 2e Invocation d'ombre mineure.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Shadowmastery (2)", fr: "Maîtrise des ombres (2)" },
      description: { en: "Choose a 2nd Necrotic Utility Spell.", fr: "Choisissez un 2e Sort utilitaire nécrotique." },
      type: "core",
    },
    {
      level: 9,
      name: { en: "A Gift from the Master (3)", fr: "Un don du maître (3)" },
      description: {
        en: "Choose a 3rd Greater Shadow Invocation.",
        fr: "Choisissez une 3e Invocation d'ombre majeure.",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Tier 4 Spells", fr: "Sorts de rang 4" },
      description: {
        en: "You may now cast tier 4 spells; all of your spells are cast at this tier.",
        fr: "Vous pouvez désormais lancer des sorts de rang 4 ; tous vos sorts sont lancés à ce rang.",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Shadowmancer subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe d'Occultiste.",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Lesser Invocation (2)", fr: "Invocation mineure (2)" },
      description: {
        en: "Choose a 3rd Lesser Shadow Invocation.",
        fr: "Choisissez une 3e Invocation d'ombre mineure.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Greedy Pact", fr: "Pacte d'avarice" },
      description: {
        en: "When you would take damage from Pilfered Power, make a STR save: 1-9 suffer damage as normal, 10-19 suffer only 10 HP, 20+ suffer no damage and cast the spell as if 1 tier higher.",
        fr: "Lorsque vous devriez subir des dégâts de Pouvoir dérobé, faites un JdS de FOR : 1-9 subissez les dégâts normalement, 10-19 ne subissez que 10 PV, 20+ ne subissez aucun dégât et lancez le sort comme s'il était d'1 rang supérieur.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Tier 5 Spells", fr: "Sorts de rang 5" },
      description: {
        en: "You may now cast tier 5 spells; all of your spells are cast at this tier.",
        fr: "Vous pouvez désormais lancer des sorts de rang 5 ; tous vos sorts sont lancés à ce rang.",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "A Gift from the Master (4)", fr: "Un don du maître (4)" },
      description: {
        en: "Choose a 4th Greater Shadow Invocation.",
        fr: "Choisissez une 4e Invocation d'ombre majeure.",
      },
      type: "core",
    },
    {
      level: 14,
      name: { en: "Shadowmastery (3)", fr: "Maîtrise des ombres (3)" },
      description: {
        en: "You know all Necrotic Utility Spells.",
        fr: "Vous connaissez tous les Sorts utilitaires nécrotiques.",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Shadowmancer subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe d'Occultiste.",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Tier 6 Spells", fr: "Sorts de rang 6" },
      description: {
        en: "You may now cast tier 6 spells; all of your spells are cast at this tier.",
        fr: "Vous pouvez désormais lancer des sorts de rang 6 ; tous vos sorts sont lancés à ce rang.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Dire Shadows", fr: "Ombres redoutables" },
      description: {
        en: "Attacks against your shadow minions are made with disadvantage. They take no damage from successful saves.",
        fr: "Les attaques contre vos serviteurs d'ombre sont effectuées avec Désavantage. Ils ne subissent aucun dégât en cas de jet de sauvegarde réussi.",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "A Gift from the Master (5)", fr: "Un don du maître (5)" },
      description: {
        en: "Choose a 5th Greater Shadow Invocation.",
        fr: "Choisissez une 5e Invocation d'ombre majeure.",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: { en: "Choose an Epic Boon.", fr: "Choisissez une Grâce épique." },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Tier 7 Spells", fr: "Sorts de rang 7" },
      description: {
        en: "You may now cast tier 7 spells; all of your spells are cast at this tier.",
        fr: "Vous pouvez désormais lancer des sorts de rang 7 ; tous vos sorts sont lancés à ce rang.",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Eldritch Usurper", fr: "Usurpateur eldritch" },
      description: {
        en: "+1 to any 2 of your stats. Whenever you summon a single shadow minion, summon 2 instead. They die only when they receive 12 or more damage at one time.",
        fr: "+1 à 2 caractéristiques de votre choix. Chaque fois que vous invoquez un seul serviteur d'ombre, invoquez-en 2 à la place. Ils ne meurent que s'ils reçoivent 12 dégâts ou plus en une seule fois.",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
  ],
  subclasses: [
    {
      id: "pact-of-the-red-dragon",
      name: { en: "Pact of the Red Dragon", fr: "Pacte du dragon rouge" },
      description: {
        en: "Your patron grants you fire magic, transforming your shadow minions into flaming dragon wyrmling shadows.",
        fr: "Votre patron vous accorde la magie du feu, transformant vos serviteurs d'ombre en ombres de jeunes dragons enflammés.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Draconic Crimson Rite", fr: "Rituel du dragon écarlate" },
          description: {
            en: "Your Patron grants you knowledge of Fire spells. Your shadow minions become flaming dragon wyrmling shadows. Shadow Blast and minions can deal fire or necrotic damage and inflict Smoldering on crits.",
            fr: "Votre Patron vous accorde la connaissance des sorts de Feu. Vos serviteurs d'ombre deviennent des ombres de jeunes dragons enflammés. Le Tir d'ombre et les serviteurs peuvent infliger des dégâts de feu ou nécrotiques et infligent Brûlure en cas de coup critique.",
          },
        },
        {
          level: 7,
          name: { en: "We'll ALL Burn!", fr: "On brûlera TOUS !" },
          description: {
            en: "You may cast Pyroclasm without Pilfering Power by including yourself in the damage. You have advantage on the save. Choose 1 Fire Utility Spell.",
            fr: "Vous pouvez lancer Pyroclasme sans utiliser Pouvoir dérobé en vous incluant dans les dégâts. Vous avez l'Avantage sur le jet de sauvegarde. Choisissez 1 Sort utilitaire de Feu.",
          },
        },
        {
          level: 11,
          name: { en: "Heart of Burning Fire", fr: "Coeur du brasier" },
          description: {
            en: "Regain 1 use of Pilfered Power each time you roll Initiative. This expires at the end of combat if unused.",
            fr: "Récupérez 1 utilisation de Pouvoir dérobé chaque fois que vous lancez l'Initiative. Elle expire à la fin du combat si elle n'est pas utilisée.",
          },
        },
        {
          level: 15,
          name: { en: "Enveloped by the Master", fr: "Étreinte du Maître" },
          description: {
            en: "Gain 1d4 Wounds to cast Dragonform.",
            fr: "Recevez 1d4 Blessures pour lancer Forme draconique.",
          },
        },
      ],
    },
    {
      id: "pact-of-the-abyssal-depths",
      name: { en: "Pact of the Abyssal Depths", fr: "Pacte des profondeurs abyssales" },
      description: {
        en: "Your patron grants you ice magic and the ability to breathe underwater, turning your shadow minions into beings of nightfrost.",
        fr: "Votre patron vous accorde la magie de glace et la capacité de respirer sous l'eau, transformant vos serviteurs d'ombre en créatures de givre nocturne.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Master of Nightfrost", fr: "Maître de la nuit glaciale" },
          description: {
            en: "Your Patron grants you knowledge of Ice spells. Gain underwater breathing. Shadow minions become beings of nightfrost. Shadow Blast and minions can deal cold or necrotic damage, and crits grant INT+LVL temp HP.",
            fr: "Votre Patron vous accorde la connaissance des sorts de Glace. Vous gagnez la respiration aquatique. Les serviteurs d'ombre deviennent des créatures de givre nocturne. Le Tir d'ombre et les serviteurs peuvent infliger des dégâts de froid ou nécrotiques, et les coups critiques octroient INT+NIV PV temporaires.",
          },
        },
        {
          level: 7,
          name: { en: "Shadowfrost", fr: "Ombreglace" },
          description: {
            en: "Your Shadow Blast also Slows. You can cast Cryosleep or Rimeblades without Pilfering Power by expending 10 temp HP. Choose 1 Ice Utility Spell.",
            fr: "Votre Tir d'ombre inflige aussi Ralenti. Vous pouvez lancer Cryosommeil ou Lames de givre sans utiliser Pouvoir dérobé en dépensant 10 PV temporaires. Choisissez 1 Sort utilitaire de Glace.",
          },
        },
        {
          level: 11,
          name: { en: "Glacial Resilience", fr: "Résilience glaciale" },
          description: {
            en: "(1/Safe Rest) Reaction when attacked or gaining a condition: gain 10xLVL temp HP and end all negative conditions on yourself. Remaining temp HP are lost at end of your next turn.",
            fr: "(1/Repos sûr) Réaction lorsque vous êtes attaqué ou recevez un état : gagnez 10xNIV PV temporaires et mettez fin à tous les états négatifs sur vous-même. Les PV temporaires restants sont perdus à la fin de votre prochain tour.",
          },
        },
        {
          level: 15,
          name: { en: "Cryomancer's Reprisal", fr: "Représailles du cryomancien" },
          description: {
            en: "Pay half your max HP to cast any Ice spell. After casting, gain an invisible aura: the next creature that hits you with a melee attack this encounter takes cold damage equal to half the HP you spent.",
            fr: "Payez la moitié de vos PV max pour lancer n'importe quel sort de Glace. Après l'incantation, gagnez une aura invisible : la prochaine créature qui vous touche avec une attaque de mêlée cette rencontre subit des dégâts de froid égaux à la moitié des PV dépensés.",
          },
        },
      ],
    },
    {
      id: "reaver",
      name: { en: "Reaver", fr: "Faucheur" },
      description: {
        en: "Cut off from your patron, you lose Shadow Blast and Pilfered Power but gain the magical Bonescythe, a melee weapon of sinew and bone infused with shadowy magic.",
        fr: "Coupé de votre patron, vous perdez Tir d'ombre et Pouvoir dérobé mais gagnez la Faux d'os magique, une arme de mêlée faite de tendons et d'os imprégnée de magie d'ombre.",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Hollow One", fr: "Creux" },
          description: {
            en: "You lose Shadow Blast and Pilfered Power. Gain the Bonescythe (2d12 slashing+DEX necrotic, Reach 2, shatters after a hit). Invocations affecting Shadow Blast affect Bonescythe instead. +1 damage die every 5 levels.",
            fr: "Vous perdez Tir d'ombre et Pouvoir dérobé. Vous gagnez la Faux d'os (2d12 tranchant+DEX nécrotique, Allonge 2, se brise après une touche). Les invocations affectant le Tir d'ombre affectent la Faux d'os à la place. +1 dé de dégâts tous les 5 niveaux.",
          },
        },
        {
          level: 3,
          name: { en: "Shadow Exploit", fr: "Exploitation d'ombre" },
          description: {
            en: "Sacrifice a shadow minion to cast a spell at the highest tier unlocked. Each subsequent spell this encounter costs 1 additional minion.",
            fr: "Sacrifiez un serviteur d'ombre pour lancer un sort au rang le plus élevé débloqué. Chaque sort suivant cette rencontre coûte 1 serviteur supplémentaire.",
          },
        },
        {
          level: 3,
          name: { en: "Martyr Spawn", fr: "Rejeton martyr" },
          description: {
            en: "Whenever you Defend, you can sacrifice a shadow minion to take no damage.",
            fr: "Chaque fois que vous Défendez, vous pouvez sacrifier un serviteur d'ombre pour ne subir aucun dégât.",
          },
        },
        {
          level: 7,
          name: { en: "Grim Harrow", fr: "Herse sinistre" },
          description: {
            en: "When you strike with your Bonescythe, you may divide the dice amongst any number of adjacent targets within Reach.",
            fr: "Lorsque vous frappez avec votre Faux d'os, vous pouvez répartir les dés entre autant de cibles adjacentes que vous le souhaitez dans votre Allonge.",
          },
        },
        {
          level: 7,
          name: { en: "Reap", fr: "Récolte" },
          description: {
            en: "When your Bonescythe crits or kills a creature, summon a shadow minion for free.",
            fr: "Lorsque votre Faux d'os réalise un coup critique ou tue une créature, invoquez un serviteur d'ombre gratuitement.",
          },
        },
        {
          level: 11,
          name: { en: "My Blood, My Power", fr: "Mon sang, mon pouvoir" },
          description: {
            en: "You may take 1 Wound to cast a tiered spell you know at the highest tier unlocked.",
            fr: "Vous pouvez recevoir 1 Blessure pour lancer un sort que vous connaissez au rang le plus élevé débloqué.",
          },
        },
        {
          level: 11,
          name: { en: "Otherworldly Might", fr: "Puissance d'outre-monde" },
          description: {
            en: "Advantage on concentration checks if you have any shadow minions.",
            fr: "Avantage sur les jets de Concentration si vous avez des serviteurs d'ombre.",
          },
        },
        {
          level: 15,
          name: { en: "I'm the Patron Now!", fr: "C'est moi le Patron maintenant !" },
          description: {
            en: "Summon 2 shadow minions for free when you roll Initiative.",
            fr: "Invoquez 2 serviteurs d'ombre gratuitement lorsque vous lancez l'Initiative.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Shadow Invocations", fr: "Invocations d'ombre" },
    selectAtLevels: [3, 4, 6, 8, 9, 11, 14, 18],
    abilities: [
      {
        name: { en: "Abhorrent Speech", fr: "Dialecte innomable" },
        description: {
          en: "You can communicate with horrible creatures (aberrations, undead, etc.).",
          fr: "Vous pouvez communiquer avec des créatures horribles (aberrations, morts-vivants, etc.).",
        },
      },
      {
        name: { en: "Beguiling Influence", fr: "Influence envoûtante" },
        description: {
          en: "(1/day) You may reroll an Influence check.",
          fr: "(1/jour) Vous pouvez relancer un jet d'Influence.",
        },
      },
      {
        name: { en: "Blood Sight", fr: "Vision du sang" },
        description: {
          en: "(1/day) You may reroll an Examination check. You can also detect traces of blood on a surface, even after it has been cleaned.",
          fr: "(1/jour) Vous pouvez relancer un jet d'Investigation. Vous pouvez également détecter des traces de sang sur une surface, même après qu'elle a été nettoyée.",
        },
      },
      {
        name: { en: "Devoted Acolyte", fr: "Acolyte dévoué" },
        description: {
          en: "Learn 2 of: Celestial, Draconic, Deep Speak, Infernal, or Primordial. Advantage on Lore checks related to those languages.",
          fr: "Apprenez 2 langues parmi : Céleste, Draconique, Langue des profondeurs, Infernal ou Primordial. Avantage sur les jets de Savoir liés à ces langues.",
        },
      },
      {
        name: { en: "Eldritch Sense", fr: "Sens eldritch" },
        description: {
          en: "You can sense the presence of any shapechanger or creature concealed by magic within 6 spaces.",
          fr: "Vous pouvez percevoir la présence de tout métamorphe ou créature dissimulée par la magie dans un rayon de 6 cases.",
        },
      },
      {
        name: { en: "Gaze of Two Minds", fr: "Regard des deux esprits" },
        description: {
          en: "Touch a willing creature and perceive through its senses instead of your own while concentrating.",
          fr: "Touchez une créature consentante et percevez à travers ses sens au lieu des vôtres tant que vous maintenez la Concentration.",
        },
      },
      {
        name: { en: "Knowledge from Beyond", fr: "Connaissances d'outre-monde" },
        description: {
          en: "Whenever you fail an Insight or Arcana check, you may suffer 1 Wound to succeed instead.",
          fr: "Chaque fois que vous ratez un jet d'Intuition ou d'Arcanes, vous pouvez subir 1 Blessure pour réussir à la place.",
        },
      },
      {
        name: { en: "My Favored Pet", fr: "Mon jouet favori" },
        description: {
          en: "One shadow minion can tolerate you outside of combat and perform menial tasks a below-average commoner could.",
          fr: "Un serviteur d'ombre peut vous tolérer en dehors du combat et effectuer des tâches subalternes qu'un roturier médiocre pourrait accomplir.",
        },
      },
      {
        name: { en: "Voice of the Dark", fr: "Voix des ombres" },
        description: {
          en: "You can communicate telepathically with a humanoid within 6 spaces.",
          fr: "Vous pouvez communiquer par télépathie avec un humanoïde dans un rayon de 6 cases.",
        },
      },
      {
        name: { en: "Whispers of the Grave", fr: "Murmures de la tombe" },
        description: {
          en: "(1/day) You can ask a dead creature 3 yes/no questions. It can never be questioned this way again.",
          fr: "(1/jour) Vous pouvez poser 3 questions oui/non à une créature morte. Elle ne peut plus jamais être interrogée de cette manière.",
        },
      },
      {
        name: { en: "Armor of Shadows", fr: "Armure d'ombres" },
        description: {
          en: "Reduce all damage you receive by an amount equal to the number of minions you have.",
          fr: "Réduisez tous les dégâts que vous recevez d'un montant égal au nombre de serviteurs que vous avez.",
        },
      },
      {
        name: { en: "Fiendish Boon", fr: "Grâce infernale" },
        description: {
          en: "Increase your DEX or INT by 1. You have 1 fewer maximum Hit Dice.",
          fr: "Augmentez votre DEX ou INT de 1. Vous avez 1 Dé de vie maximum en moins.",
        },
      },
      {
        name: { en: "Hungering Shadows", fr: "Ombres affamées" },
        description: {
          en: "Whenever one of your shadows would crit, the next tiered spell you cast this encounter does not cost a use of Pilfered Power.",
          fr: "Chaque fois qu'une de vos ombres réalise un coup critique, le prochain sort que vous lancez cette rencontre ne coûte pas d'utilisation de Pouvoir dérobé.",
        },
      },
      {
        name: { en: "One with Shadows", fr: "Un avec les ombres" },
        description: {
          en: "Action: When in dim light or darkness, become Invisible until you move or attack.",
          fr: "Action : En lumière tamisée ou dans l'obscurité, devenez Invisible jusqu'à ce que vous vous déplaciez ou attaquiez.",
        },
      },
      {
        name: { en: "Repelling Blast", fr: "Décharge repoussante" },
        description: {
          en: "When you hit a Medium or smaller creature with Shadow Blast, push them up to 2 spaces away.",
          fr: "Lorsque vous touchez une créature de taille Moyenne ou inférieure avec le Tir d'ombre, repoussez-la jusqu'à 2 cases.",
        },
      },
      {
        name: { en: "Shadow Magus", fr: "Mage des ombres" },
        description: {
          en: "Your minions gain +4 Reach and deal d10 damage instead.",
          fr: "Vos serviteurs gagnent +4 Allonge et infligent des dégâts de d10 à la place.",
        },
      },
      {
        name: { en: "Shadow Spear", fr: "Lance d'ombre" },
        description: {
          en: "Your Shadow Blast targets twice as far, ignores cover, and you may attack Prone targets with advantage.",
          fr: "Votre Tir d'ombre cible deux fois plus loin, ignore les abris, et vous pouvez attaquer les cibles À terre avec Avantage.",
        },
      },
      {
        name: { en: "Shadow Rush", fr: "Ruée d'ombre" },
        description: {
          en: "When your shadow minions attack, instead of rolling damage, you may have any of them deal the max amount, then die.",
          fr: "Lorsque vos serviteurs d'ombre attaquent, au lieu de lancer les dégâts, vous pouvez faire en sorte que n'importe lequel d'entre eux inflige le montant maximum, puis meure.",
        },
      },
      {
        name: { en: "Shadow Warp", fr: "Distorsion de l'ombre" },
        description: {
          en: "Action: Switch places with a creature within 12 spaces that has been dealt necrotic damage this turn.",
          fr: "Action : Échangez votre place avec une créature dans un rayon de 12 cases ayant subi des dégâts nécrotiques ce tour.",
        },
      },
      {
        name: { en: "Swarming Shadows", fr: "Essaim d'ombres" },
        description: {
          en: "Whenever one of your shadows would crit, summon another shadow minion adjacent to the target.",
          fr: "Chaque fois qu'une de vos ombres réalise un coup critique, invoquez un autre serviteur d'ombre adjacent à la cible.",
        },
      },
      {
        name: { en: "Vengeful Blast", fr: "Décharge vengeresse" },
        description: {
          en: "Whenever a minion dies, you may cast Shadow Blast as a reaction (even if you already cast it this turn).",
          fr: "Chaque fois qu'un serviteur meurt, vous pouvez lancer Tir d'ombre en réaction (même si vous l'avez déjà lancé ce tour).",
        },
      },
    ],
  },
};

// ─── Shepherd ───────────────────────────────────────────────────────────────

export const shepherd: HeroClass = {
  id: "shepherd",
  name: { en: "Shepherd", fr: "Clerc" },
  description: {
    en: "Master of life and death who leads a faithful Lifebinding Spirit companion. Choose between the nurturing Luminary of Mercy and the ruinous Luminary of Malice.",
    fr: "Maître de la vie et de la mort qui guide un fidèle Esprit compagnon. Choisissez entre l'Astre de la miséricorde nourricier et l'Astre de la malice destructeur.",
  },
  complexity: 2,
  keyStats: ["WIL", "STR"],
  hitDie: "1d10",
  startingHp: 17,
  saves: { strong: "WIL", weak: "DEX" },
  armorProficiency: [
    { en: "Mail Armor", fr: "Armure de mailles" },
    { en: "Shields", fr: "Boucliers" },
  ],
  weaponProficiency: [
    { en: "STR Weapons", fr: "Armes de FOR" },
    { en: "Wands", fr: "Baguettes" },
  ],
  startingGear: [
    { en: "Rusty Mail", fr: "Mailles rouillées" },
    { en: "Mace", fr: "Masse" },
    { en: "Wooden Buckler", fr: "Targe en bois" },
    { en: "Bell", fr: "Cloche" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Keeper of Life & Death", fr: "Gardien de la vie et de la mort" },
      description: {
        en: "You know Radiant and Necrotic cantrips.",
        fr: "Vous connaissez les cantrips Radiants et Nécrotiques.",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Searing Light", fr: "Lumière ardente" },
      description: {
        en: "(WIL times/Safe Rest) Action: Heal WIL d8 HP to a Dying creature within Reach 6, or inflict WIL d8 radiant damage to an undead or Bloodied enemy within Reach 6.",
        fr: "(VOL fois/Repos sûr) Action : Soignez VOL d8 PV à une créature Mourante dans une Allonge de 6, ou infligez VOL d8 dégâts radiants à un mort-vivant ou un ennemi Ensanglanté dans une Allonge de 6.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Unlock Tier 1 Spells", fr: "Mana et Sorts de rang 1" },
      description: {
        en: "Unlock tier 1 Radiant and Necrotic spells. Gain a mana pool equal to (WILx3)+LVL that recharges on a Safe Rest.",
        fr: "Débloquez les sorts de rang 1 Radiants et Nécrotiques. Gagnez une réserve de mana égale à (VOLx3)+NIV qui se recharge lors d'un Repos sûr.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Lifebinding Spirit", fr: "Esprit compagnon" },
      description: {
        en: "Summon an immune-to-harm spirit companion that attacks for 1d6+WIL radiant damage (ignoring armor) or heals for the same amount within Reach 4. Upcasting increments its die size and healing uses.",
        fr: "Invoquez un esprit compagnon immunisé aux dégâts qui attaque pour 1d6+VOL dégâts radiants (ignorant l'armure) ou soigne du même montant dans une Allonge de 4. L'incantation supérieure augmente la taille du dé et les utilisations de soin.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Shepherd subclass.",
        fr: "Choisissez une sous-classe de Clerc.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Master of Twilight", fr: "Maître du crépuscule" },
      description: {
        en: "Choose 1 Necrotic and 1 Radiant Utility Spell.",
        fr: "Choisissez 1 Sort utilitaire nécrotique et 1 Sort utilitaire radiant.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Tier 2 Spells", fr: "Sorts de rang 2" },
      description: {
        en: "You may now cast tier 2 spells and upcast spells at tier 2.",
        fr: "Vous pouvez désormais lancer des sorts de rang 2 et surcaster des sorts au rang 2.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Sacred Grace", fr: "Grâce sacrée" },
      description: {
        en: "Choose 2 Sacred Graces. You may change your Shepherd options after serving others or tending a sacred place during a Safe Rest.",
        fr: "Choisissez 2 Grâces sacrées. Vous pouvez changer vos options de Clerc après avoir servi autrui ou entretenu un lieu sacré lors d'un Repos sûr.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Tier 3 Spells", fr: "Sorts de rang 3" },
      description: {
        en: "You may now cast tier 3 spells and upcast spells at tier 3.",
        fr: "Vous pouvez désormais lancer des sorts de rang 3 et surcaster des sorts au rang 3.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Master of Twilight (2)", fr: "Maître du crépuscule (2)" },
      description: {
        en: "Choose a 2nd Necrotic and Radiant Utility Spell.",
        fr: "Choisissez un 2e Sort utilitaire nécrotique et radiant.",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Shepherd subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Clerc.",
      },
      type: "subclass",
    },
    {
      level: 8,
      name: { en: "Tier 4 Spells", fr: "Sorts de rang 4" },
      description: {
        en: "You may now cast tier 4 spells and upcast spells at tier 4.",
        fr: "Vous pouvez désormais lancer des sorts de rang 4 et surcaster des sorts au rang 4.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Sacred Grace (2)", fr: "Grâce sacrée (2)" },
      description: { en: "Choose a 3rd Sacred Grace.", fr: "Choisissez une 3e Grâce sacrée." },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Tier 5 Spells", fr: "Sorts de rang 5" },
      description: {
        en: "You may now cast tier 5 spells and upcast spells at tier 5.",
        fr: "Vous pouvez désormais lancer des sorts de rang 5 et surcaster des sorts au rang 5.",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Shepherd subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Clerc.",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Master of Twilight (3)", fr: "Maître du crépuscule (3)" },
      description: {
        en: "You know all Necrotic and Radiant Utility Spells.",
        fr: "Vous connaissez tous les Sorts utilitaires nécrotiques et radiants.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Tier 6 Spells", fr: "Sorts de rang 6" },
      description: {
        en: "You may now cast tier 6 spells and upcast spells at tier 6.",
        fr: "Vous pouvez désormais lancer des sorts de rang 6 et surcaster des sorts au rang 6.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Sacred Grace (3)", fr: "Grâce sacrée (3)" },
      description: { en: "Choose a 4th Sacred Grace.", fr: "Choisissez une 4e Grâce sacrée." },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Tier 7 Spells", fr: "Sorts de rang 7" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "Vous pouvez désormais lancer des sorts de rang 7 et surcaster des sorts au rang 7.",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Shepherd subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Clerc.",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Tier 8 Spells", fr: "Sorts de rang 8" },
      description: {
        en: "You may now cast tier 8 spells and upcast spells at tier 8.",
        fr: "Vous pouvez désormais lancer des sorts de rang 8 et surcaster des sorts au rang 8.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or STR.", fr: "+1 VOL ou FOR." },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Revitalizing Blessing", fr: "Bénédiction revitalisante" },
      description: {
        en: "(1/round) Whenever you roll a 6 or higher on one or more healing die, the target may recover one Wound.",
        fr: "(1/round) Chaque fois que vous obtenez 6 ou plus sur un ou plusieurs dés de soin, la cible peut récupérer une Blessure.",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 INT or DEX.", fr: "+1 INT ou DEX." },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Tier 9 Spells", fr: "Sorts de rang 9" },
      description: {
        en: "You may now cast tier 9 spells and upcast spells at tier 9.",
        fr: "Vous pouvez désormais lancer des sorts de rang 9 et surcaster des sorts au rang 9.",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: { en: "Choose an Epic Boon.", fr: "Choisissez une Grâce épique." },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Twilight Sage", fr: "Sage du crépuscule" },
      description: {
        en: "+1 to any 2 of your stats. Your Lifebinding Spirit rolls twice as many dice.",
        fr: "+1 à 2 caractéristiques de votre choix. Votre Esprit compagnon lance deux fois plus de dés.",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
  ],
  subclasses: [
    {
      id: "luminary-of-mercy",
      name: { en: "Luminary of Mercy", fr: "Astre de la miséricorde" },
      description: {
        en: "A nurturing healer who amplifies restorative abilities and channels conduits of radiant light to mend the wounded.",
        fr: "Un guérisseur bienveillant qui amplifie les capacités de restauration et canalise des conduits de lumière radiante pour soigner les blessés.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Merciful Healing", fr: "Soin miséricordieux" },
          description: {
            en: "When your effects heal a Dying creature, they are healed for twice as much. (1/round) Your Lifebinding Spirit can act for free while you are Dying.",
            fr: "Lorsque vos effets soignent une créature Mourante, elle est soignée pour le double. (1/round) Votre Esprit compagnon peut agir gratuitement tant que vous êtes Mourant.",
          },
        },
        {
          level: 3,
          name: { en: "Life is Beautiful", fr: "La vie est belle" },
          description: {
            en: "Harmless and lovely creatures such as butterflies and hummingbirds are attracted to your presence. Flowers bloom more vibrantly near you.",
            fr: "Des créatures inoffensives et charmantes comme des papillons et des colibris sont attirées par votre présence. Les fleurs s'épanouissent avec plus d'éclat près de vous.",
          },
        },
        {
          level: 7,
          name: { en: "Conduit of Light", fr: "Porteur de lumière" },
          description: {
            en: "When your effects would heal HP, you may expend 1 use of Searing Light to heal (or damage, ignoring armor) another target within 6 spaces for the same amount.",
            fr: "Lorsque vos effets soignent des PV, vous pouvez dépenser 1 utilisation de Lumière ardente pour soigner (ou infliger des dégâts, ignorant l'armure) une autre cible dans un rayon de 6 cases pour le même montant.",
          },
        },
        {
          level: 11,
          name: { en: "Powerful Healer", fr: "Guérisseur puissant" },
          description: {
            en: "(WIL times/Safe Rest) Whenever you would roll dice to heal, you may instead heal the max amount you could roll, or give that many temp HP.",
            fr: "(VOL fois/Repos sûr) Chaque fois que vous devriez lancer des dés pour soigner, vous pouvez à la place soigner le montant maximum possible, ou octroyer autant de PV temporaires.",
          },
        },
        {
          level: 15,
          name: { en: "Empowered Conduit", fr: "Don de la lumière" },
          description: {
            en: "Your Conduit of Light may target 1 additional creature. Regain 1 charge of Searing Light when you roll Initiative (expires at end of combat).",
            fr: "Votre Porteur de lumière peut cibler 1 créature supplémentaire. Récupérez 1 charge de Lumière ardente lorsque vous lancez l'Initiative (expire à la fin du combat).",
          },
        },
      ],
    },
    {
      id: "luminary-of-malice",
      name: { en: "Luminary of Malice", fr: "Astre de la malice" },
      description: {
        en: "A ruinous wielder of death energy who reaps souls and thrives on the edge between life and oblivion.",
        fr: "Un manipulateur funeste d'énergie mortelle qui fauche les âmes et prospère à la frontière entre la vie et l'oubli.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Soul Reaper", fr: "Faucheur d'âmes" },
          description: {
            en: "When you use Searing Light to harm an enemy, a 2nd enemy within range takes the same amount of damage (ignoring armor).",
            fr: "Lorsque vous utilisez Lumière ardente pour blesser un ennemi, un 2e ennemi à portée subit le même montant de dégâts (ignorant l'armure).",
          },
        },
        {
          level: 3,
          name: { en: "Harbinger of Decay", fr: "Augure de putréfaction" },
          description: {
            en: "Vibrant colors and lovely smells are suppressed near you. Foods spoil rapidly in your presence. You may shift your Lifebinding Spirit into a deathly form with necrotic damage.",
            fr: "Les couleurs vives et les odeurs agréables sont atténuées près de vous. La nourriture pourrit rapidement en votre présence. Vous pouvez transformer votre Esprit compagnon en une forme mortelle infligeant des dégâts nécrotiques.",
          },
        },
        {
          level: 7,
          name: { en: "Veilwalker's Blessing", fr: "Bénédiction du marche-voile" },
          description: {
            en: "(1/Safe Rest) Reaction when you would drop to 0 HP: drop to 1 HP instead and force an enemy within 6 spaces to make a STR save. On failure, they become Bloodied, or if already Bloodied, drop to 0 HP.",
            fr: "(1/Repos sûr) Réaction lorsque vous tomberiez à 0 PV : tombez à 1 PV à la place et forcez un ennemi dans un rayon de 6 cases à faire un JdS de FOR. En cas d'échec, il devient Ensanglanté, ou s'il est déjà Ensanglanté, il tombe à 0 PV.",
          },
        },
        {
          level: 11,
          name: { en: "Deathbringer's Touch", fr: "Toucher du porte-mort" },
          description: {
            en: "Your first melee attack each round against a Bloodied creature is an automatic critical hit. Your Lifebinding Spirit deals additional damage equal to your STR.",
            fr: "Votre première attaque de mêlée chaque round contre une créature Ensanglantée est automatiquement un coup critique. Votre Esprit compagnon inflige des dégâts supplémentaires égaux à votre FOR.",
          },
        },
        {
          level: 15,
          name: { en: "Conduit of Death", fr: "Porteur de mort" },
          description: {
            en: "Your Veilwalker's Blessing recharges when you roll Initiative. This charge is lost if unspent at the end of combat.",
            fr: "Votre Bénédiction du marche-voile se recharge lorsque vous lancez l'Initiative. Cette charge est perdue si elle n'est pas utilisée à la fin du combat.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Sacred Graces", fr: "Grâces sacrées" },
    selectAtLevels: [5, 9, 13],
    picksAtLevel: { 5: 2 },
    abilities: [
      {
        name: { en: "Assist Me, My Friend!", fr: "Aide-moi, mon ami !" },
        description: {
          en: "Whenever you make your first melee attack each round, you may add your Lifebinding Spirit's damage to the attack.",
          fr: "Chaque fois que vous effectuez votre première attaque de mêlée chaque round, vous pouvez ajouter les dégâts de votre Esprit compagnon à l'attaque.",
        },
      },
      {
        name: { en: "Empowered Companion", fr: "Compagnon renforcé" },
        description: {
          en: "When you spend mana to summon your Lifebinding Spirit, cast it as if you spent 1 additional mana (ignoring tier restrictions). Maximum die size is now a d20.",
          fr: "Lorsque vous dépensez du mana pour invoquer votre Esprit compagnon, lancez-le comme si vous aviez dépensé 1 mana supplémentaire (ignorant les restrictions de rang). La taille maximale du dé est désormais un d20.",
        },
      },
      {
        name: { en: "Guiding Spirit", fr: "Esprit guide" },
        description: {
          en: "When your Lifebinding Spirit rolls a 6 or higher on its damage die, the target glows with radiant light. The next attack against that target has advantage.",
          fr: "Lorsque votre Esprit compagnon obtient 6 ou plus sur son dé de dégâts, la cible brille d'une lumière radiante. La prochaine attaque contre cette cible bénéficie de l'Avantage.",
        },
      },
      {
        name: { en: "Hasty Companion", fr: "Compagnon empressé" },
        description: {
          en: "+4 Reach for your Lifebinding Spirit. It can also act for free when summoned.",
          fr: "+4 Allonge pour votre Esprit compagnon. Il peut également agir gratuitement lorsqu'il est invoqué.",
        },
      },
      {
        name: { en: "Illuminate Soul", fr: "Illumination de l'âme" },
        description: {
          en: "Action: A creature within 6 spaces glows with radiant light. For 1 round, attacks against them are made with your choice of advantage or disadvantage. WIL times per Safe Rest.",
          fr: "Action : Une créature dans un rayon de 6 cases brille d'une lumière radiante. Pendant 1 round, les attaques contre elle sont effectuées avec l'Avantage ou le Désavantage (votre choix). VOL fois par Repos sûr.",
        },
      },
      {
        name: { en: "Light Bearer", fr: "Porteur de lumière" },
        description: {
          en: "Regain 1 use of Searing Light when you roll Initiative (expires at end of combat if unspent).",
          fr: "Récupérez 1 utilisation de Lumière ardente lorsque vous lancez l'Initiative (expire à la fin du combat si non utilisée).",
        },
      },
      {
        name: { en: "Not Beyond MY Reach", fr: "Reste avec moi !" },
        description: {
          en: "You may target creatures dead less than 1 round for healing. For every 10 HP healed, you may recover 1 Wound instead (must heal at least 1 Wound to revive).",
          fr: "Vous pouvez cibler des créatures mortes depuis moins d'1 round pour les soigner. Pour chaque 10 PV soignés, vous pouvez récupérer 1 Blessure à la place (il faut soigner au moins 1 Blessure pour réanimer).",
        },
      },
      {
        name: { en: "Vengeful Spirit", fr: "Esprit vengeur" },
        description: {
          en: "Action: Your Lifebinding Spirit sacrifices itself to become a vortex of radiant light, damaging all enemies within 3 spaces of you (ignoring armor and cover) at end of your turn for rounds equal to remaining healing charges.",
          fr: "Action : Votre Esprit compagnon se sacrifie pour devenir un vortex de lumière radiante, infligeant des dégâts à tous les ennemis dans un rayon de 3 cases autour de vous (ignorant l'armure et les abris) à la fin de votre tour pendant un nombre de rounds égal aux charges de soin restantes.",
        },
      },
    ],
  },
};

// ─── Songweaver ─────────────────────────────────────────────────────────────

export const songweaver: HeroClass = {
  id: "songweaver",
  name: { en: "Songweaver", fr: "Barde" },
  description: {
    en: "An inspiring presence with sharp wit and a sharper tongue. Use powerful charisma and lyrical weaponry to dominate enemies and bolster allies.",
    fr: "Une présence inspirante à l'esprit vif et à la langue encore plus acérée. Utilisez un charisme puissant et un armement lyrique pour dominer les ennemis et galvaniser les alliés.",
  },
  complexity: 3,
  keyStats: ["WIL", "INT"],
  hitDie: "1d8",
  startingHp: 13,
  saves: { strong: "WIL", weak: "STR" },
  armorProficiency: [
    { en: "Cloth", fr: "Vêtements" },
    { en: "Leather", fr: "Cuir" },
  ],
  weaponProficiency: [
    { en: "DEX Weapons", fr: "Armes de DEX" },
    { en: "Wands", fr: "Baguettes" },
  ],
  startingGear: [
    { en: "Adventurer's Garb", fr: "Tenue d'aventurier" },
    { en: "Instrument", fr: "Instrument" },
    { en: "Dagger", fr: "Dague" },
    { en: "Mirror", fr: "Miroir" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Wind Spellcasting", fr: "Incantation de Vent" },
      description: {
        en: "You know cantrips from the Wind school and 1 other school of your choice. You also know Vicious Mockery (Wind cantrip, Range 12, 1d4+INT psychic ignoring armor, Taunts on hit, +2 damage every 5 levels).",
        fr: "Vous connaissez les cantrips de l'école de Vent et d'1 autre école de votre choix. Vous connaissez aussi Moquerie cruelle (cantrip de Vent, Portée 12, 1d4+INT psychiques ignorant l'armure, Provoque en cas de touche, +2 dégâts tous les 5 niveaux).",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Songweaver's Inspiration", fr: "Inspiration du Barde" },
      description: {
        en: "(2xWIL times/Safe Rest) Free Reaction: Allow an ally to reroll a single die related to an attack or save (must keep either result).",
        fr: "(2xVOL fois/Repos sûr) Réaction gratuite : Permettez à un allié de relancer un dé lié à une attaque ou un jet de sauvegarde (il doit garder l'un des deux résultats).",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Unlock Tier 1 Spells", fr: "Mana et Sorts de rang 1" },
      description: {
        en: "Unlock tier 1 spells in your known schools. Gain a mana pool equal to (INTx3)+LVL that recharges on a Safe Rest.",
        fr: "Débloquez les sorts de rang 1 dans vos écoles connues. Gagnez une réserve de mana égale à (INTx3)+NIV qui se recharge lors d'un Repos sûr.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Jack of All Trades", fr: "Touche-à-tout" },
      description: {
        en: "When you Safe Rest, you may move a skill point as if you just leveled up.",
        fr: "Lors d'un Repos sûr, vous pouvez déplacer un point de compétence comme si vous veniez de monter de niveau.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Song of Rest", fr: "Chant du repos" },
      description: {
        en: "(1/day) When you Field Rest, play a song to allow anyone spending Hit Dice to heal additional HP equal to your WIL.",
        fr: "(1/jour) Lors d'un Repos de terrain, jouez un chant pour permettre à quiconque dépensant des Dés de vie de soigner des PV supplémentaires égaux à votre VOL.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Songweaver subclass.",
        fr: "Choisissez une sous-classe de Barde.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Quick Wit", fr: "Presence d'esprit" },
      description: {
        en: "When you roll Initiative, regain 2 spent uses of Songweaver's Inspiration (these expire at the end of combat if unused).",
        fr: "Lorsque vous lancez l'Initiative, récupérez 2 utilisations dépensées d'Inspiration du Barde (elles expirent à la fin du combat si non utilisées).",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Windbag", fr: "Moulin à paroles" },
      description: {
        en: "Choose 1 Utility Spell from each spell school you know.",
        fr: "Choisissez 1 Sort utilitaire de chaque école de magie que vous connaissez.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Tier 2 Spells", fr: "Sorts de rang 2" },
      description: {
        en: "You may now cast tier 2 spells and upcast spells at tier 2.",
        fr: "Vous pouvez désormais lancer des sorts de rang 2 et surcaster des sorts au rang 2.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or INT.", fr: "+1 VOL ou INT." },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Lyrical Weaponry", fr: "Armement lyrique" },
      description: {
        en: "Choose 1 ability from the Lyrical Weaponry list.",
        fr: "Choisissez 1 capacité de la liste Armement lyrique.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "A \"People\" Person", fr: "Personne \"sociable\"" },
      description: {
        en: "Choose 2 friends you know from your travels. You can temporarily summon them via song (1/Safe Rest each).",
        fr: "Choisissez 2 amis que vous connaissez de vos voyages. Vous pouvez les invoquer temporairement par un chant (1/Repos sûr chacun).",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 6,
      name: { en: "Tier 3 Spells", fr: "Sorts de rang 3" },
      description: {
        en: "You may now cast tier 3 spells and upcast spells at tier 3.",
        fr: "Vous pouvez désormais lancer des sorts de rang 3 et surcaster des sorts au rang 3.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Windbag (2)", fr: "Moulin à paroles (2)" },
      description: {
        en: "Choose a 2nd Utility Spell from each spell school you know.",
        fr: "Choisissez un 2e Sort utilitaire de chaque école de magie que vous connaissez.",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Songweaver subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Barde.",
      },
      type: "subclass",
    },
    {
      level: 8,
      name: { en: "Tier 4 Spells", fr: "Sorts de rang 4" },
      description: {
        en: "You may now cast tier 4 spells and upcast spells at tier 4.",
        fr: "Vous pouvez désormais lancer des sorts de rang 4 et surcaster des sorts au rang 4.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or INT.", fr: "+1 VOL ou INT." },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Lyrical Weaponry (2)", fr: "Armement lyrique (2)" },
      description: {
        en: "Choose a 2nd ability from the Lyrical Weaponry list.",
        fr: "Choisissez une 2e capacité de la liste Armement lyrique.",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Tier 5 Spells", fr: "Sorts de rang 5" },
      description: {
        en: "You may now cast tier 5 spells and upcast spells at tier 5.",
        fr: "Vous pouvez désormais lancer des sorts de rang 5 et surcaster des sorts au rang 5.",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Songweaver subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Barde.",
      },
      type: "subclass",
    },
    {
      level: 12,
      name: { en: "Tier 6 Spells", fr: "Sorts de rang 6" },
      description: {
        en: "You may now cast tier 6 spells and upcast spells at tier 6.",
        fr: "Vous pouvez désormais lancer des sorts de rang 6 et surcaster des sorts au rang 6.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or INT.", fr: "+1 VOL ou INT." },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Lyrical Weaponry (3)", fr: "Armement lyrique (3)" },
      description: {
        en: "Choose a 3rd ability from the Lyrical Weaponry list.",
        fr: "Choisissez une 3e capacité de la liste Armement lyrique.",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Tier 7 Spells", fr: "Sorts de rang 7" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "Vous pouvez désormais lancer des sorts de rang 7 et surcaster des sorts au rang 7.",
      },
      type: "core",
    },
    {
      level: 14,
      name: { en: "Windbag (3)", fr: "Moulin à paroles (3)" },
      description: {
        en: "You know all Utility Spells from the spell schools you know.",
        fr: "Vous connaissez tous les Sorts utilitaires des écoles de magie que vous connaissez.",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass Feature", fr: "Capacité de sous-classe" },
      description: {
        en: "Gain your Songweaver subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Barde.",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Tier 8 Spells", fr: "Sorts de rang 8" },
      description: {
        en: "You may now cast tier 8 spells and upcast spells at tier 8.",
        fr: "Vous pouvez désormais lancer des sorts de rang 8 et surcaster des sorts au rang 8.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: { en: "+1 WIL or INT.", fr: "+1 VOL ou INT." },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Lyrical Weaponry (4)", fr: "Armement lyrique (4)" },
      description: {
        en: "Choose a 4th ability from the Lyrical Weaponry list.",
        fr: "Choisissez une 4e capacité de la liste Armement lyrique.",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Tier 9 Spells", fr: "Sorts de rang 9" },
      description: {
        en: "You may now cast tier 9 spells and upcast spells at tier 9.",
        fr: "Vous pouvez désormais lancer des sorts de rang 9 et surcaster des sorts au rang 9.",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: { en: "Choose an Epic Boon.", fr: "Choisissez une Grâce épique." },
      type: "core",
    },
    {
      level: 20,
      name: { en: "I'm So Famous!", fr: "Je suis tellement célèbre !" },
      description: {
        en: "+1 to any 2 of your stats. Your Songweaver's Inspiration cannot fail (your target succeeds).",
        fr: "+1 à 2 caractéristiques de votre choix. Votre Inspiration du Barde ne peut pas échouer (votre cible réussit).",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: { en: "Your cantrips grow stronger.", fr: "Vos cantrips deviennent plus puissants." },
      type: "core",
    },
  ],
  subclasses: [
    {
      id: "herald-of-snark",
      name: { en: "Herald of Snark", fr: "Héraut du sarcasme" },
      description: {
        en: "A sharp-tongued provocateur who weaponizes mockery and chaos to dominate the battlefield.",
        fr: "Un provocateur à la langue acérée qui fait de la moquerie et du chaos des armes pour dominer le champ de bataille.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Opportunistic Snark", fr: "Sarcasme opportuniste" },
          description: {
            en: "Reaction when an enemy within Range 12 misses an attack: cast Vicious Mockery at them for double damage.",
            fr: "Réaction lorsqu'un ennemi dans une Portée de 12 rate une attaque : lancez Moquerie cruelle contre lui pour le double des dégâts.",
          },
        },
        {
          level: 7,
          name: { en: "Fight Picker", fr: "C'est lui qui l'a dit !" },
          description: {
            en: "(1/turn) When an enemy is damaged by your Vicious Mockery, you may have one of your allies Taunt them until the end of their turn instead.",
            fr: "(1/tour) Lorsqu'un ennemi subit des dégâts de votre Moquerie cruelle, vous pouvez faire en sorte qu'un de vos alliés le Provoque jusqu'à la fin de son tour à la place.",
          },
        },
        {
          level: 11,
          name: { en: "Chord of Chaos", fr: "Accord chaotique" },
          description: {
            en: "(1/encounter) Action: Move all creatures within hearing of your song up to 3 spaces, as long as they don't move into an obviously dangerous place.",
            fr: "(1/rencontre) Action : Déplacez toutes les créatures à portée d'audition de votre chant jusqu'à 3 cases, tant qu'elles ne sont pas déplacées vers un endroit manifestement dangereux.",
          },
        },
        {
          level: 15,
          name: { en: "Words Like Swords", fr: "Langue acérée" },
          description: {
            en: "Your Vicious Mockery damage becomes 1d6+INT+WIL.",
            fr: "Les dégâts de votre Moquerie cruelle deviennent 1d6+INT+VOL.",
          },
        },
      ],
    },
    {
      id: "herald-of-courage",
      name: { en: "Herald of Courage", fr: "Héraut du courage" },
      description: {
        en: "An uplifting champion whose inspiring presence empowers allies to feats of legendary heroism.",
        fr: "Un champion galvanisant dont la présence inspirante donne aux alliés le pouvoir d'accomplir des exploits héroïques légendaires.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Inspiring Presence", fr: "Présence inspirante" },
          description: {
            en: "Whenever you use Songweaver's Inspiration, your allies within 12 spaces who can hear you gain WIL temp HP.",
            fr: "Chaque fois que vous utilisez l'Inspiration du Barde, vos alliés dans un rayon de 12 cases qui peuvent vous entendre gagnent VOL PV temporaires.",
          },
        },
        {
          level: 7,
          name: { en: "Unfailing Courage", fr: "Courage sans faille" },
          description: {
            en: "Your Songweaver's Inspiration allows your target to roll with advantage.",
            fr: "Votre Inspiration du Barde permet à votre cible de lancer avec Avantage.",
          },
        },
        {
          level: 11,
          name: { en: "Fire in my Bones", fr: "Feu de l'âme" },
          description: {
            en: "Your Songweaver's Inspiration also grants your target 1 additional action.",
            fr: "Votre Inspiration du Barde octroie également à votre cible 1 action supplémentaire.",
          },
        },
        {
          level: 15,
          name: { en: "Chorus of Champions", fr: "Chorale des champions" },
          description: {
            en: "(1/encounter) Free Reaction: Give all party members 1 action.",
            fr: "(1/rencontre) Réaction gratuite : Donnez à tous les membres du groupe 1 action.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Lyrical Weaponry", fr: "Armement lyrique" },
    selectAtLevels: [4, 9, 13, 17],
    abilities: [
      {
        name: { en: "Heroic Ballad", fr: "Ballade héroïque" },
        description: {
          en: "+2 max Songweaver's Inspiration charges. When used to reroll an ally's attack, also grants +WIL damage on the attack.",
          fr: "+2 charges maximales d'Inspiration du Barde. Lorsqu'elle est utilisée pour relancer l'attaque d'un allié, octroie aussi +VOL dégâts sur l'attaque.",
        },
      },
      {
        name: { en: "Inspiring Anthem", fr: "Hymne Inspirant" },
        description: {
          en: "(1/encounter) Action: Grant all friendly Dying creatures who can hear you 1 HP and 1 action.",
          fr: "(1/rencontre) Action : Accordez à toutes les créatures alliées Mourantes qui peuvent vous entendre 1 PV et 1 action.",
        },
      },
      {
        name: { en: "Not My Beautiful Faaace!", fr: "Pas mon beau visaaage !" },
        description: {
          en: "(1/encounter) When you Defend, force the attacker to choose another target on a failed WIL save. If they fail by 5+, they attack themselves. On save, they attack you with disadvantage.",
          fr: "(1/rencontre) Lorsque vous Défendez, forcez l'attaquant à choisir une autre cible en cas d'échec à un JdS de VOL. S'il échoue de 5+, il s'attaque lui-même. En cas de réussite, il vous attaque avec Désavantage.",
        },
      },
      {
        name: { en: "Rhapsody of the Normal", fr: "Rhapsodie de la normalité" },
        description: {
          en: "When you roll 4+ on Vicious Mockery, spend a Songweaver's Inspiration charge to suppress the target's special abilities until end of their next turn, reducing them to basic attacks only.",
          fr: "Lorsque vous obtenez 4+ sur Moquerie cruelle, dépensez une charge d'Inspiration du Barde pour supprimer les capacités spéciales de la cible jusqu'à la fin de son prochain tour, la réduisant aux attaques de base uniquement.",
        },
      },
      {
        name: { en: "Song of Domination", fr: "Chant de domination" },
        description: {
          en: "(1/encounter) 2 actions: All enemies within 6 spaces who hear your tune must make a WIL save. On failure, you move them up to 6 spaces and they cannot move on their next turn.",
          fr: "(1/rencontre) 2 actions : Tous les ennemis dans un rayon de 6 cases qui entendent votre mélodie doivent faire un JdS de VOL. En cas d'échec, vous les déplacez jusqu'à 6 cases et ils ne peuvent pas se déplacer lors de leur prochain tour.",
        },
      },
    ],
  },
};
