import type { HeroClass } from "../types";

// ─── Stormshifter ───────────────────────────────────────────────────────────

export const stormshifter: HeroClass = {
  id: "stormshifter",
  name: { en: "Stormshifter", fr: "Métamorphe des tempêtes" },
  description: {
    en: "A master of storm and fang who wields lightning and tempests, shapeshifting into fearsome beasts while casting powerful nature spells.",
    fr: "Un maître de la tempête et des crocs qui manie la foudre et les ouragans, se métamorphosant en bêtes redoutables tout en lançant de puissants sorts de la nature.",
  },
  complexity: 3,
  keyStats: ["WIL", "DEX"],
  hitDie: "1d8",
  startingHp: 13,
  saves: {
    strong: "WIL",
    weak: "STR",
  },
  armorProficiency: [
    { en: "Cloth Armor", fr: "Armure de tissu" },
    { en: "Leather Armor", fr: "Armure de cuir" },
  ],
  weaponProficiency: [
    { en: "Staves", fr: "Bâtons" },
    { en: "Wands", fr: "Baguettes" },
  ],
  startingGear: [
    { en: "Cheap Hides", fr: "Gambison" },
    { en: "Staff", fr: "Bâton" },
    { en: "Strange Plant", fr: "Plante étrange" },
  ],
  abilities: [
    // Level 1
    {
      level: 1,
      name: { en: "Master of Storms", fr: "Maître des tempêtes" },
      description: {
        en: "You know cantrips from the Lightning and Wind schools.",
        fr: "Vous connaissez les cantrips des écoles de Foudre et de Vent.",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Beastshift", fr: "Forme de bête" },
      description: {
        en: "Action: Transform into a harmless beast that can speak with animals. Lasts until you drop to 0 HP, cast a spell, or end it on your turn. You have DEX charges, resetting on a Safe Rest. Tiny beasts give attackers disadvantage, but ANY damage ends that form.",
        fr: "Action : Transformez-vous en une bête inoffensive qui peut parler avec les animaux. Dure jusqu'à ce que vous tombiez à 0 PV, lanciez un sort, ou y mettiez fin lors de votre tour. Vous avez DEX charges, se réinitialisant lors d'un Repos sûr. Les bêtes Minuscules imposent le Désavantage aux attaquants, mais TOUT dégât met fin à cette forme.",
      },
      type: "core",
    },
    // Level 2
    {
      level: 2,
      name: { en: "Direbeast Form", fr: "Forme de bête féroce" },
      description: {
        en: "You can Beastshift into a Fearsome Beast (Large). Gain DEX+LVL temp HP, the Gore attack (1d6+LVL damage, gain LVL temp HP on hit), and Fearsome (spend 1 mana to force reroll when you Interpose or Defend).",
        fr: "Vous pouvez vous transformer en Bête féroce (Grande). Gagnez DEX+NIV PV temporaires, l'attaque Encornement (1d6+NIV dégâts, gagnez NIV PV temporaires en cas de touche), et Redoutable (dépensez 1 mana pour forcer une relance lorsque vous Interposez ou Défendez).",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Mana and Unlock Tier 1 Spells", fr: "Mana et Sorts de rang 1" },
      description: {
        en: "Unlock tier 1 Wind and Lightning spells. Gain a mana pool equal to (WIL x 3) + LVL that recharges on a Safe Rest.",
        fr: "Débloquez les sorts de rang 1 de Vent et de Foudre. Gagnez une réserve de mana égale à (VOL x 3) + NIV qui se recharge lors d'un Repos sûr.",
      },
      type: "core",
    },
    // Level 3
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Stormshifter subclass.",
        fr: "Choisissez une sous-classe de Métamorphe des tempêtes.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Direbeast Form (2)", fr: "Forme de bête féroce (2)" },
      description: {
        en: "You can Beastshift into a Beast of the Pack (Medium). Gain +DEX speed, Supercharge, and Thunderfang (1d4+LVL piercing). Crits or kills grant cumulative +1d4 lightning damage to Thunderfang.",
        fr: "Vous pouvez vous transformer en Bête de meute (Moyenne). Gagnez +DEX Vitesse, Surcharge, et Crocs de tonnerre (1d4+NIV perforant). Les coups critiques ou les éliminations octroient cumulativement +1d4 dégâts de foudre aux Crocs de tonnerre.",
      },
      type: "core",
    },
    // Level 4
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
      description: {
        en: "+1 WIL or DEX.",
        fr: "+1 VOL ou DEX.",
      },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Stormcaller", fr: "Mande-foudre" },
      description: {
        en: "Learn a Utility Spell from each spell school you know.",
        fr: "Apprenez un Sort utilitaire de chaque école de magie que vous connaissez.",
      },
      type: "core",
    },
    // Level 5
    {
      level: 5,
      name: { en: "Direbeast Form (3)", fr: "Forme de bête féroce (3)" },
      description: {
        en: "You can Beastshift into a Beast of Nightmares (Tiny). Gain Sting (1d4 piercing + 3xLVL acid damage ignoring armor) and Silent But Deadly (speed 2, cannot Defend or Interpose, invisible until conspicuous).",
        fr: "Vous pouvez vous transformer en Bête cauchemardesque (Minuscule). Gagnez Dard (1d4 perforant + 3xNIV dégâts d'acide ignorant l'armure) et Silencieux mais mortel (vitesse 2, ne peut pas Défendre ou Interposer, invisible jusqu'à se faire remarquer).",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: {
        en: "Your cantrips grow stronger.",
        fr: "Vos cantrips deviennent plus puissants.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 STR or INT.",
        fr: "+1 FOR ou INT.",
      },
      type: "stat-increase",
    },
    // Level 6
    {
      level: 6,
      name: { en: "Chimeric Boon", fr: "Bienfait chimérique" },
      description: {
        en: "Choose 2 Chimeric Boons. When you shapeshift into a Direbeast form, you may apply 1 Chimeric Boon you know.",
        fr: "Choisissez 2 Bienfaits chimériques. Lorsque vous vous transformez en forme de bête féroce, vous pouvez appliquer 1 Bienfait chimérique que vous connaissez.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Expert Shifter", fr: "Changeforme expert" },
      description: {
        en: "Gain 1 additional use of Beastshift per Safe Rest.",
        fr: "Gagnez 1 utilisation supplémentaire de Forme de bête par Repos sûr.",
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
    // Level 7
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Stormshifter subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Métamorphe des tempêtes.",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Stormcaller (2)", fr: "Mande-foudre (2)" },
      description: {
        en: "Learn a 2nd Utility Spell from each spell school you know.",
        fr: "Apprenez un 2e Sort utilitaire de chaque école de magie que vous connaissez.",
      },
      type: "core",
    },
    // Level 8
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
      description: {
        en: "+1 WIL or DEX.",
        fr: "+1 VOL ou DEX.",
      },
      type: "stat-increase",
    },
    {
      level: 8,
      name: { en: "Stormborn", fr: "Né des tempêtes" },
      description: {
        en: "Gain resistance to lightning damage. (1/day) Gain advantage on a Naturecraft or Concentration check.",
        fr: "Gagnez la résistance aux dégâts de foudre. (1/jour) Gagnez l'Avantage sur un jet d'Artisanat naturel ou de Concentration.",
      },
      type: "core",
    },
    // Level 9
    {
      level: 9,
      name: { en: "Chimeric Boon (2)", fr: "Bienfait chimérique (2)" },
      description: {
        en: "Choose a 3rd Chimeric Boon.",
        fr: "Choisissez un 3e Bienfait chimérique.",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Expert Shifter (2)", fr: "Changeforme expert (2)" },
      description: {
        en: "Gain 1 additional use of Beastshift per Safe Rest.",
        fr: "Gagnez 1 utilisation supplémentaire de Forme de bête par Repos sûr.",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 STR or INT.",
        fr: "+1 FOR ou INT.",
      },
      type: "stat-increase",
    },
    // Level 10
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
      description: {
        en: "Your cantrips grow stronger.",
        fr: "Vos cantrips deviennent plus puissants.",
      },
      type: "core",
    },
    // Level 11
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Stormshifter subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Métamorphe des tempêtes.",
      },
      type: "subclass",
    },
    // Level 12
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
      description: {
        en: "+1 WIL or DEX.",
        fr: "+1 VOL ou DEX.",
      },
      type: "stat-increase",
    },
    {
      level: 12,
      name: { en: "Chimeric Boon (3)", fr: "Bienfait chimérique (3)" },
      description: {
        en: "Select a 4th Chimeric Boon.",
        fr: "Sélectionnez un 4e Bienfait chimérique.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Expert Shifter (3)", fr: "Changeforme expert (3)" },
      description: {
        en: "Gain 1 additional use of Beastshift per Safe Rest.",
        fr: "Gagnez 1 utilisation supplémentaire de Forme de bête par Repos sûr.",
      },
      type: "core",
    },
    // Level 13
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 STR or INT.",
        fr: "+1 FOR ou INT.",
      },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Stormborn (2)", fr: "Né des tempêtes (2)" },
      description: {
        en: "Deal max damage on a Wind spell by spending a Beastshift charge instead of rolling. When you end Beastshift, you may cast a cantrip for free.",
        fr: "Infligez les dégâts maximum d'un sort de Vent en dépensant une charge de Forme de bête au lieu de lancer les dés. Lorsque vous mettez fin à Forme de bête, vous pouvez lancer un cantrip gratuitement.",
      },
      type: "core",
    },
    // Level 14
    {
      level: 14,
      name: { en: "Tier 7 Spells", fr: "Sorts de rang 7" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "Vous pouvez désormais lancer des sorts de rang 7 et surcaster des sorts au rang 7.",
      },
      type: "core",
    },
    // Level 15
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Stormshifter subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Métamorphe des tempêtes.",
      },
      type: "subclass",
    },
    {
      level: 15,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: {
        en: "Your cantrips grow stronger.",
        fr: "Vos cantrips deviennent plus puissants.",
      },
      type: "core",
    },
    // Level 16
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
      description: {
        en: "+1 WIL or DEX.",
        fr: "+1 VOL ou DEX.",
      },
      type: "stat-increase",
    },
    // Level 17
    {
      level: 17,
      name: { en: "Chimeric Boon (4)", fr: "Bienfait chimérique (4)" },
      description: {
        en: "Select a 5th Chimeric Boon.",
        fr: "Sélectionnez un 5e Bienfait chimérique.",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 STR or INT.",
        fr: "+1 FOR ou INT.",
      },
      type: "stat-increase",
    },
    // Level 18
    {
      level: 18,
      name: { en: "Tier 9 Spells", fr: "Sorts de rang 9" },
      description: {
        en: "You may now cast tier 9 spells and upcast spells at tier 9.",
        fr: "Vous pouvez désormais lancer des sorts de rang 9 et surcaster des sorts au rang 9.",
      },
      type: "core",
    },
    // Level 19
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    // Level 20
    {
      level: 20,
      name: { en: "Archdruid", fr: "Archidruide" },
      description: {
        en: "+1 to any 2 of your stats. (1/encounter) Cast a spell up to tier 4 for free when you enter or leave a Beastshift form.",
        fr: "+1 à 2 caractéristiques de votre choix. (1/rencontre) Lancez un sort jusqu'au rang 4 gratuitement lorsque vous entrez ou quittez une Forme de bête.",
      },
      type: "capstone",
    },
    {
      level: 20,
      name: { en: "Upgraded Cantrips", fr: "Cantrips améliorés" },
      description: {
        en: "Your cantrips grow stronger.",
        fr: "Vos cantrips deviennent plus puissants.",
      },
      type: "core",
    },
  ],
  subclasses: [
    // ── Circle of Sky & Storm (standard) ──
    {
      id: "circle-of-sky-and-storm",
      name: { en: "Circle of Sky & Storm", fr: "Cercle du ciel et des tempêtes" },
      description: {
        en: "A caster-focused subclass that deepens your spell repertoire and lets you cast while Beastshifted, unleashing the full fury of nature's elements.",
        fr: "Une sous-classe axée sur l'incantation qui enrichit votre répertoire de sorts et vous permet de lancer des sorts en Forme de bête, déchaînant toute la furie des éléments naturels.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Deepening Study", fr: "Étude approfondies" },
          description: {
            en: "Choose the Ice or Radiant school to learn.",
            fr: "Choisissez l'école de Glace ou de Radiance à apprendre.",
          },
        },
        {
          level: 3,
          name: { en: "Creature of the Fey", fr: "Créature féérique" },
          description: {
            en: "You may cast spells while Beastshifted.",
            fr: "Vous pouvez lancer des sorts en Forme de bête.",
          },
        },
        {
          level: 3,
          name: { en: "Attuned to Nature", fr: "Harmonie naturelle" },
          description: {
            en: "(1/day) Add LVL to any skill check related to nature or weather.",
            fr: "(1/jour) Ajoutez NIV à n'importe quel jet de compétence lié à la nature ou à la météo.",
          },
        },
        {
          level: 7,
          name: { en: "Raging Tempest", fr: "Tempête déchaînée" },
          description: {
            en: "When you crit with a tiered spell, cast a cantrip for free from a school you know and haven't cast from this turn.",
            fr: "Lorsque vous réalisez un coup critique avec un sort, lancez un cantrip gratuitement d'une école que vous connaissez et dont vous n'avez pas lancé de sort ce tour.",
          },
        },
        {
          level: 11,
          name: { en: "Primordial Force", fr: "Force primordiale" },
          description: {
            en: "Spending 2+ mana on a spell grants a bonus effect based on school: Ice grants WIL temp HP, Lightning deals additional WIL damage, Radiant heals a creature within 6 spaces WIL HP, Wind grants flying speed and 6 free movement.",
            fr: "Dépenser 2+ mana sur un sort octroie un effet bonus selon l'école : Glace octroie VOL PV temporaires, Foudre inflige VOL dégâts supplémentaires, Radiant soigne une créature dans un rayon de 6 cases de VOL PV, Vent octroie une vitesse de vol et 6 cases de déplacement gratuit.",
          },
        },
        {
          level: 15,
          name: { en: "Master of Storm", fr: "Maestro des cataclysmes" },
          description: {
            en: "Concentrate on 1 lightning spell and 1 wind spell simultaneously. (1/Safe Rest) Cast Ride the Lightning for 0 mana.",
            fr: "Maintenez la Concentration sur 1 sort de foudre et 1 sort de vent simultanément. (1/Repos sûr) Lancez Chevaucher l'éclair pour 0 mana.",
          },
        },
      ],
    },
    // ── Circle of Fang & Claw (standard) ──
    {
      id: "circle-of-fang-and-claw",
      name: { en: "Circle of Fang & Claw", fr: "Cercle du croc et de la griffe" },
      description: {
        en: "A shapeshifting-focused subclass that lets you shift forms rapidly and unleash devastating beast attacks in close combat.",
        fr: "Une sous-classe axée sur la métamorphose qui vous permet de changer de forme rapidement et de déchaîner des attaques bestiales dévastatrices au corps à corps.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Swiftshift", fr: "Métamorphose rapide" },
          description: {
            en: "On Initiative, Beastshift or move for free. While transformed, shift between Direbeast forms for free (or as a reaction for 1 mana), but free shifts grant no temp HP.",
            fr: "Lors de l'Initiative, transformez-vous en bête ou déplacez-vous gratuitement. En forme transformée, changez entre les formes de bête féroce gratuitement (ou en réaction pour 1 mana), mais les transformations gratuites n'octroient pas de PV temporaires.",
          },
        },
        {
          level: 3,
          name: { en: "Windborne Protector", fr: "Protecteur Ailé" },
          description: {
            en: "(1/encounter) Reaction: when an enemy attacks, spend 2 mana to shift into a Fearsome Beast, then Interpose from up to 12 spaces away and Defend for free.",
            fr: "(1/rencontre) Réaction : lorsqu'un ennemi attaque, dépensez 2 mana pour vous transformer en Bête féroce, puis Interposez-vous depuis jusqu'à 12 cases et Défendez gratuitement.",
          },
        },
        {
          level: 3,
          name: { en: "Friend of Beasts", fr: "Ami des Bêtes" },
          description: {
            en: "Beasts will not attack you until you first harm them. You may transform into harmless beasts without spending a Beastshift charge.",
            fr: "Les bêtes ne vous attaquent pas tant que vous ne leur faites pas de mal en premier. Vous pouvez vous transformer en bêtes inoffensives sans dépenser de charge de Forme de bête.",
          },
        },
        {
          level: 7,
          name: { en: "Unleash the Beast", fr: "Libérez la Bête" },
          description: {
            en: "(1/encounter) When you miss, you can crit instead.",
            fr: "(1/rencontre) Lorsque vous ratez, vous pouvez réaliser un coup critique à la place.",
          },
        },
        {
          level: 7,
          name: { en: "Storm Wake", fr: "Éveil de la Tempête" },
          description: {
            en: "(1/encounter) Action: Spend 3 mana to shift into a Beast of the Pack, teleport in a line up to 12 spaces, dealing WIL d8 lightning damage to chosen adjacent creatures.",
            fr: "(1/rencontre) Action : Dépensez 3 mana pour vous transformer en Bête de meute, téléportez-vous en ligne jusqu'à 12 cases, infligeant VOL d8 dégâts de foudre aux créatures adjacentes choisies.",
          },
        },
        {
          level: 11,
          name: { en: "Master of Forms", fr: "Maître des Formes" },
          description: {
            en: "Your shapeshift forms can have 2 Chimeric Boons at a time.",
            fr: "Vos formes de métamorphose peuvent avoir 2 Bienfaits chimériques en même temps.",
          },
        },
        {
          level: 11,
          name: { en: "Venomous Gaze", fr: "Attraction toxique" },
          description: {
            en: "(1/encounter) Action: Spend 2 mana to shift into a Beast of Nightmares. Entice a creature within 12 spaces to move 2xWIL spaces closer on a failed WIL save (disadvantage, repeats). If they reach you, Sting for free.",
            fr: "(1/rencontre) Action : Dépensez 2 mana pour vous transformer en Bête cauchemardesque. Attirez une créature dans un rayon de 12 cases à se rapprocher de 2xVOL cases en cas d'échec à un JdS de VOL (Désavantage, se répète). Si elle vous atteint, Dard gratuitement.",
          },
        },
        {
          level: 15,
          name: { en: "Master of Forms (2)", fr: "Maître des Formes (2)" },
          description: {
            en: "Beastshift 2 additional times per Safe Rest. Choose 2 additional Chimeric Boons. Direbeast forms can have 3 at a time.",
            fr: "Forme de bête 2 fois supplémentaires par Repos sûr. Choisissez 2 Bienfaits chimériques supplémentaires. Les formes de bête féroce peuvent en avoir 3 en même temps.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Chimeric Boons", fr: "Bienfaits chimériques" },
    selectAtLevels: [6, 9, 12, 17],
    abilities: [
      {
        name: { en: "Beast of the Sea", fr: "Bête marine" },
        description: {
          en: "Can move, breathe, and fight underwater without penalty.",
          fr: "Peut se déplacer, respirer et combattre sous l'eau sans pénalité.",
        },
      },
      {
        name: { en: "Climber", fr: "Grimpeur" },
        description: {
          en: "Can walk across walls and ceilings; ignores difficult terrain.",
          fr: "Peut marcher sur les murs et les plafonds ; ignore le terrain difficile.",
        },
      },
      {
        name: { en: "Fleet Footed", fr: "Pied agile" },
        description: {
          en: "+2 speed. Advantage on Stealth checks and against the Grappled condition.",
          fr: "+2 Vitesse. Avantage sur les jets de Discrétion et contre l'état Empoigné.",
        },
      },
      {
        name: { en: "Earthwalker", fr: "Foule-terre" },
        description: {
          en: "+2 armor. Can burrow through dirt and unworked rock at half speed, leaving a tunnel behind. Advantage against Prone.",
          fr: "+2 Armure. Peut creuser dans la terre et la roche brute à demi-vitesse, laissant un tunnel derrière. Avantage contre À terre.",
        },
      },
      {
        name: { en: "Keen Senses", fr: "Sens aiguisés" },
        description: {
          en: "Advantage on Perception and Assess checks. Unaffected by Blinded.",
          fr: "Avantage sur les jets de Perception et d'Évaluation. Non affecté par Aveuglé.",
        },
      },
      {
        name: { en: "Leader of the Pack", fr: "Chef de la meute" },
        description: {
          en: "Advantage against fear and charm effects for yourself and allies within 6 spaces.",
          fr: "Avantage contre les effets de peur et de charme pour vous-même et les alliés dans un rayon de 6 cases.",
        },
      },
      {
        name: { en: "Phasebeast", fr: "Bête de phase" },
        description: {
          en: "When shifting between this form and your normal form, teleport up to 6 spaces to a place you can see.",
          fr: "Lorsque vous passez de cette forme à votre forme normale, téléportez-vous jusqu'à 6 cases vers un endroit que vous pouvez voir.",
        },
      },
      {
        name: { en: "Prehensile Tail", fr: "Queue préhensile" },
        description: {
          en: "Creatures you hit in melee that are your size or smaller are Grappled. Hitting a larger creature lets you move with it.",
          fr: "Les créatures que vous touchez en mêlée de votre taille ou plus petites sont Empoignées. Toucher une créature plus grande vous permet de vous déplacer avec elle.",
        },
      },
      {
        name: { en: "Winged", fr: "Ailé" },
        description: {
          en: "Gain a flying speed. Forced movement moves you twice as far while flying.",
          fr: "Gagnez une vitesse de vol. Les déplacements forcés vous déplacent deux fois plus loin en vol.",
        },
      },
    ],
  },
};

// ─── Zephyr ─────────────────────────────────────────────────────────────────

export const zephyr: HeroClass = {
  id: "zephyr",
  name: { en: "Zephyr", fr: "Zéphyr" },
  description: {
    en: "A martial artist who hones their body into a blur of motion, using speed as both weapon and shield while delivering devastating unarmed strikes.",
    fr: "Un artiste martial qui affûte son corps jusqu'à devenir un tourbillon de mouvements, utilisant la vitesse comme arme et bouclier tout en portant des frappes à mains nues dévastatrices.",
  },
  complexity: 2,
  keyStats: ["DEX", "STR"],
  hitDie: "1d8",
  startingHp: 13,
  saves: {
    strong: "DEX",
    weak: "INT",
  },
  armorProficiency: [{ en: "None", fr: "Aucun" }],
  weaponProficiency: [{ en: "Melee", fr: "Mêlée" }],
  startingGear: [
    { en: "Staff", fr: "Bâton" },
    { en: "Traveling Robes & Sandals", fr: "Robes de voyage et sandales" },
  ],
  abilities: [
    // Level 1
    {
      level: 1,
      name: { en: "Iron Defense", fr: "Défense de fer" },
      description: {
        en: "Your armor equals DEX+STR as long as you are unarmored.",
        fr: "Votre armure est égale à DEX+FOR tant que vous ne portez pas d'armure.",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Swift Fists", fr: "Poings vifs" },
      description: {
        en: "Your unarmed strikes are not subject to disadvantage from Rushed Attacks, and their damage is 1d4+STR.",
        fr: "Vos frappes à mains nues ne subissent pas le Désavantage des Attaques précipitées, et leurs dégâts sont de 1d4+FOR.",
      },
      type: "core",
    },
    // Level 2
    {
      level: 2,
      name: { en: "Swift Feet", fr: "Pieds vifs" },
      description: {
        en: "While unarmored, gain +2 speed and +LVL Initiative.",
        fr: "Sans armure, gagnez +2 Vitesse et +NIV Initiative.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Burst of Speed", fr: "Fulgurance" },
      description: {
        en: "On Initiative, gain DEX Bursts of Speed. (1/turn) Spend 1 to use: Slipstream (Defend, attack misses), Whirling Defense (Defend, apply armor to all attacks this round), Swiftstrike (attack ignoring Rushed Attack disadvantage), or Windstep (move ignoring difficult terrain).",
        fr: "Lors de l'Initiative, gagnez DEX Fulgurances. (1/tour) Dépensez-en 1 pour utiliser : Glissement (Défendez, l'attaque rate), Défense tourbillonnante (Défendez, appliquez l'armure à toutes les attaques ce round), Frappe vive (attaquez ignorant le Désavantage d'Attaque précipitée), ou Foulée aérienne (déplacez-vous en ignorant le terrain difficile).",
      },
      type: "core",
    },
    // Level 3
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Zephyr subclass.",
        fr: "Choisissez une sous-classe de Zéphyr.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Kinetic Momentum", fr: "Élan cinétique" },
      description: {
        en: "Whenever you gain a Wound, gain a Burst of Speed.",
        fr: "Chaque fois que vous recevez une Blessure, gagnez une Fulgurance.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Ethereal Projection", fr: "Projection éthérée" },
      description: {
        en: "(1/day) Meditate for 10 minutes to project an ethereal version of yourself up to 30 ft. away, passing through solid objects. Lasts up to 10 minutes; visible but cannot interact physically.",
        fr: "(1/jour) Méditez pendant 10 minutes pour projeter une version éthérée de vous-même jusqu'à 10 m, traversant les objets solides. Dure jusqu'à 10 minutes ; visible mais ne peut pas interagir physiquement.",
      },
      type: "core",
    },
    // Level 4
    {
      level: 4,
      name: { en: "Unyielding Resolve", fr: "Résolution inébranlable" },
      description: {
        en: "Ignore the first Wound you would suffer each encounter. When-Wounded abilities still trigger.",
        fr: "Ignorez la première Blessure que vous subiriez chaque rencontre. Les capacités déclenchées par les Blessures s'activent quand même.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: {
        en: "+1 DEX or STR.",
        fr: "+1 DEX ou FOR.",
      },
      type: "stat-increase",
    },
    {
      level: 4,
      name: { en: "Martial Master", fr: "Maître martial" },
      description: {
        en: "Choose a Martial Arts ability.",
        fr: "Choisissez une capacité d'Arts martiaux.",
      },
      type: "core",
    },
    // Level 5
    {
      level: 5,
      name: { en: "Reverberating Strikes", fr: "Frappes réverbérantes" },
      description: {
        en: "Add LVL bludgeoning damage to all of your melee attacks.",
        fr: "Ajoutez NIV dégâts contondants à toutes vos attaques de mêlée.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 INT or WIL.",
        fr: "+1 INT ou VOL.",
      },
      type: "stat-increase",
    },
    // Level 6
    {
      level: 6,
      name: { en: "Martial Master (2)", fr: "Maître martial (2)" },
      description: {
        en: "Choose a 2nd Martial Arts Ability.",
        fr: "Choisissez une 2e Capacité d'arts martiaux.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Infuse Strength", fr: "Insuffler la force" },
      description: {
        en: "Action: Make an unarmed strike against an ally to heal them instead of harming. Expend any number of Hit Dice and heal them as during a Field Rest (roll + STR each).",
        fr: "Action : Effectuez une frappe à mains nues contre un allié pour le soigner au lieu de le blesser. Dépensez autant de Dés de vie que souhaité et soignez-le comme lors d'un Repos de terrain (lancez + FOR chacun).",
      },
      type: "core",
    },
    // Level 7
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Zephyr subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Zéphyr.",
      },
      type: "subclass",
    },
    // Level 8
    {
      level: 8,
      name: { en: "Martial Master (3)", fr: "Maître martial (3)" },
      description: {
        en: "Choose a 3rd Martial Arts Ability.",
        fr: "Choisissez une 3e Capacité d'arts martiaux.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: {
        en: "+1 DEX or STR.",
        fr: "+1 DEX ou FOR.",
      },
      type: "stat-increase",
    },
    // Level 9
    {
      level: 9,
      name: { en: "Swift Feet (2)", fr: "Pieds vifs (2)" },
      description: {
        en: "Gain an additional +2 speed while unarmored.",
        fr: "Gagnez +2 Vitesse supplémentaire sans armure.",
      },
      type: "core",
    },
    {
      level: 9,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 INT or WIL.",
        fr: "+1 INT ou VOL.",
      },
      type: "stat-increase",
    },
    // Level 10
    {
      level: 10,
      name: { en: "Martial Master (4)", fr: "Maître martial (4)" },
      description: {
        en: "Choose a 4th Martial Arts Ability.",
        fr: "Choisissez une 4e Capacité d'arts martiaux.",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Unyielding Resolve (2)", fr: "Résolution inébranlable (2)" },
      description: {
        en: "Ignore the first 2 Wounds you would suffer each encounter.",
        fr: "Ignorez les 2 premières Blessures que vous subiriez chaque rencontre.",
      },
      type: "core",
    },
    // Level 11
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Zephyr subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Zéphyr.",
      },
      type: "subclass",
    },
    // Level 12
    {
      level: 12,
      name: { en: "Martial Master (5)", fr: "Maître martial (5)" },
      description: {
        en: "Choose a 5th Martial Arts Ability.",
        fr: "Choisissez une 5e Capacité d'arts martiaux.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: {
        en: "+1 DEX or STR.",
        fr: "+1 DEX ou FOR.",
      },
      type: "stat-increase",
    },
    // Level 13
    {
      level: 13,
      name: { en: "Iron Defense (2)", fr: "Défense de fer (2)" },
      description: {
        en: "Your armor is doubled while unarmored.",
        fr: "Votre armure est doublée sans armure.",
      },
      type: "core",
    },
    {
      level: 13,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 INT or WIL.",
        fr: "+1 INT ou VOL.",
      },
      type: "stat-increase",
    },
    // Level 14
    {
      level: 14,
      name: { en: "Martial Master (6)", fr: "Maître martial (6)" },
      description: {
        en: "Choose a 6th Martial Arts Ability.",
        fr: "Choisissez une 6e Capacité d'arts martiaux.",
      },
      type: "core",
    },
    // Level 15
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Zephyr subclass feature.",
        fr: "Obtenez la capacité de votre sous-classe de Zéphyr.",
      },
      type: "subclass",
    },
    // Level 16
    {
      level: 16,
      name: { en: "Martial Master (7)", fr: "Maître martial (7)" },
      description: {
        en: "Choose a 7th Martial Arts Ability.",
        fr: "Choisissez une 7e Capacité d'arts martiaux.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de caractéristique clé" },
      description: {
        en: "+1 DEX or STR.",
        fr: "+1 DEX ou FOR.",
      },
      type: "stat-increase",
    },
    // Level 17
    {
      level: 17,
      name: { en: "Unyielding Resolve (3)", fr: "Résolution inébranlable (3)" },
      description: {
        en: "Ignore the first 3 Wounds you would suffer each encounter. You have advantage on STR saves while Dying.",
        fr: "Ignorez les 3 premières Blessures que vous subiriez chaque rencontre. Vous avez l'Avantage sur les JdS de FOR en étant Mourant.",
      },
      type: "core",
    },
    {
      level: 17,
      name: { en: "Secondary Stat Increase", fr: "Augmentation de caractéristique secondaire" },
      description: {
        en: "+1 INT or WIL.",
        fr: "+1 INT ou VOL.",
      },
      type: "stat-increase",
    },
    // Level 18
    {
      level: 18,
      name: { en: "Martial Master (8)", fr: "Maître martial (8)" },
      description: {
        en: "Choose an 8th Martial Arts Ability.",
        fr: "Choisissez une 8e Capacité d'arts martiaux.",
      },
      type: "core",
    },
    // Level 19
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    // Level 20
    {
      level: 20,
      name: { en: "Windborne", fr: "Aéroporté" },
      description: {
        en: "+1 to any 2 of your stats. +1 additional Burst of Speed on Initiative. Permanently gain 1 action (while Dying, max 2 actions).",
        fr: "+1 à 2 caractéristiques de votre choix. +1 Fulgurance supplémentaire lors de l'Initiative. Gagnez définitivement 1 action (en étant Mourant, max 2 actions).",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    // ── Way of Pain (standard) ──
    {
      id: "way-of-pain",
      name: { en: "Way of Pain", fr: "Voie de la douleur" },
      description: {
        en: "A retaliatory fighting style that turns incoming damage into a weapon, punishing enemies who dare to strike you.",
        fr: "Un style de combat de représailles qui transforme les dégâts reçus en arme, punissant les ennemis qui osent vous frapper.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Bring the Pain", fr: "Coup pour coup" },
          description: {
            en: "(1/round) Turn any melee attack against you into a crit. When crit, reduce damage by half; the attacker takes the same damage you took (ignoring armor). Suffer 1 Wound to double the damage the enemy takes.",
            fr: "(1/round) Transformez n'importe quelle attaque de mêlée contre vous en coup critique. Lors d'un coup critique, réduisez les dégâts de moitié ; l'attaquant subit les mêmes dégâts que vous (ignorant l'armure). Subissez 1 Blessure pour doubler les dégâts que l'ennemi reçoit.",
          },
        },
        {
          level: 7,
          name: { en: "Share My Pain", fr: "Partage ma douleur" },
          description: {
            en: "Your Swiftstrike can also target a 2nd creature within Reach 2.",
            fr: "Votre Frappe vive peut également cibler une 2e créature dans une Allonge de 2.",
          },
        },
        {
          level: 11,
          name: { en: "Pain Sharpens the Mind", fr: "La douleur affûte l'esprit" },
          description: {
            en: "While Bloodied, gain advantage on the first attack you make each turn and on all saves.",
            fr: "En étant Ensanglanté, gagnez l'Avantage sur la première attaque que vous effectuez chaque tour et sur tous les jets de sauvegarde.",
          },
        },
        {
          level: 15,
          name: { en: "Echoed Agony", fr: "Écho d'agonie" },
          description: {
            en: "Your Swiftstrike can also target a 3rd creature within Reach 4.",
            fr: "Votre Frappe vive peut également cibler une 3e créature dans une Allonge de 4.",
          },
        },
      ],
    },
    // ── Way of Flame (standard) ──
    {
      id: "way-of-flame",
      name: { en: "Way of Flame", fr: "Voie de la flamme" },
      description: {
        en: "An explosive fighting style that channels inner fire through Wounds, dealing fire damage to nearby enemies and leaving them Smoldering.",
        fr: "Un style de combat explosif qui canalise le feu intérieur à travers les Blessures, infligeant des dégâts de feu aux ennemis proches et leur infligeant Brûlure.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Exploding Soul", fr: "Âme explosive" },
          description: {
            en: "(1/round) On your turn, you may suffer a Wound. Whenever you gain a Wound, deal STR+Wounds damage to chosen creatures within 2 spaces (ignoring armor) and give them Smoldering.",
            fr: "(1/round) Lors de votre tour, vous pouvez subir une Blessure. Chaque fois que vous recevez une Blessure, infligez FOR+Blessures dégâts aux créatures choisies dans un rayon de 2 cases (ignorant l'armure) et infligez-leur Brûlure.",
          },
        },
        {
          level: 7,
          name: { en: "Blazing Speed", fr: "Vitesse" },
          description: {
            en: "Gain +2 speed while using Windstep. After ceasing Windstep movement, enemies you passed through take STR+DEX fire damage. Smoldering enemies take double, ending the condition.",
            fr: "Gagnez +2 Vitesse lors de l'utilisation de Foulée aérienne. Après avoir cessé le déplacement de Foulée aérienne, les ennemis que vous avez traversés subissent FOR+DEX dégâts de feu. Les ennemis avec Brûlure subissent le double, mettant fin à l'état.",
          },
        },
        {
          level: 11,
          name: { en: "Chain Reaction", fr: "Réaction en chaîne" },
          description: {
            en: "(1/turn) When you crit, deal STR+Wounds fire damage to chosen creatures within 2 spaces of your target. Repeat for undamaged creatures within 2 spaces of any already damaged.",
            fr: "(1/tour) Lorsque vous réalisez un coup critique, infligez FOR+Blessures dégâts de feu aux créatures choisies dans un rayon de 2 cases de votre cible. Répétez pour les créatures non endommagées dans un rayon de 2 cases de celles déjà touchées.",
          },
        },
        {
          level: 15,
          name: { en: "Burning Soul", fr: "Âme embrasée" },
          description: {
            en: "Double any fire damage you deal.",
            fr: "Doublez tous les dégâts de feu que vous infligez.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Martial Arts Abilities", fr: "Capacités d'arts martiaux" },
    selectAtLevels: [4, 6, 8, 10, 12, 14, 16, 18],
    abilities: [
      {
        name: { en: "Airshift", fr: "Mouvement aérien" },
        description: {
          en: "You cannot be Grappled while conscious. While moving, travel across all terrain as normal ground, ignoring all ill effects (walls, ceilings, water, lava, etc.).",
          fr: "Vous ne pouvez pas être Empoigné tant que vous êtes conscient. En vous déplaçant, traversez tous les terrains comme un sol normal, ignorant tous les effets néfastes (murs, plafonds, eau, lave, etc.).",
        },
      },
      {
        name: { en: "Blur", fr: "Flou" },
        description: {
          en: "(1/encounter) When you Defend, first move up to half your speed away, taking no damage if now out of range or in Full Cover.",
          fr: "(1/rencontre) Lorsque vous Défendez, déplacez-vous d'abord jusqu'à la moitié de votre vitesse, ne subissant aucun dégât si vous êtes désormais hors de portée ou en Couvert total.",
        },
      },
      {
        name: { en: "Bodily Discipline", fr: "Discipline corporelle" },
        description: {
          en: "Spend 1 action to end any non-Wound condition on yourself.",
          fr: "Dépensez 1 action pour mettre fin à tout état (autre que Blessure) sur vous-même.",
        },
      },
      {
        name: { en: "Enduring Soul", fr: "Âme endurante" },
        description: {
          en: "Each time you roll Initiative, gain Hit Dice equal to the actions you get on your first turn. These expire at the end of combat if unused.",
          fr: "Chaque fois que vous lancez l'Initiative, gagnez des Dés de vie égaux au nombre d'actions que vous obtenez lors de votre premier tour. Ils expirent à la fin du combat s'ils ne sont pas utilisés.",
        },
      },
      {
        name: { en: "I Jump On His Back!", fr: "Je lui saute sur le dos !" },
        description: {
          en: "While using Windstep, move into the space of a creature your size or larger to jump on its back. Gain advantage on melee attacks against it; damage you avoid is dealt to it instead.",
          fr: "En utilisant Foulée aérienne, déplacez-vous dans l'espace d'une créature de votre taille ou plus grande pour lui sauter sur le dos. Gagnez l'Avantage sur les attaques de mêlée contre elle ; les dégâts que vous évitez lui sont infligés à la place.",
        },
      },
      {
        name: { en: "Kinetic Barrage", fr: "Barrage cinétique" },
        description: {
          en: "Whenever you miss an attack, gain a cumulative +STR bonus to all damage for the rest of the encounter.",
          fr: "Chaque fois que vous ratez une attaque, gagnez un bonus cumulatif de +FOR à tous les dégâts pour le reste de la rencontre.",
        },
      },
      {
        name: { en: "Mighty Soul", fr: "Âme puissante" },
        description: {
          en: "You cannot be moved against your will. When you would fail a saving throw, gain a Wound to add your STR to the result. Repeatable.",
          fr: "Vous ne pouvez pas être déplacé contre votre gré. Lorsque vous échoueriez un jet de sauvegarde, recevez une Blessure pour ajouter votre FOR au résultat. Répétable.",
        },
      },
      {
        name: { en: "Quickstrike", fr: "Frappe rapide" },
        description: {
          en: "When you Interpose, first make an unarmed strike against the enemy for free.",
          fr: "Lorsque vous Interposez, effectuez d'abord une frappe à mains nues contre l'ennemi gratuitement.",
        },
      },
      {
        name: { en: "Use Momentum", fr: "Profiter de l’élan" },
        description: {
          en: "When you avoid all damage from a melee attack, swap places with the attacker and redirect the hit to another target within reach.",
          fr: "Lorsque vous évitez tous les dégâts d'une attaque de mêlée, échangez votre place avec l'attaquant et redirigez le coup vers une autre cible à portée.",
        },
      },
      {
        name: { en: "Vital Rejuvenation", fr: "Réjuvénation vitale" },
        description: {
          en: "When you receive healing for the first time on a turn, heal another target within 6 spaces HP equal to your STR.",
          fr: "Lorsque vous recevez des soins pour la première fois lors d'un tour, soignez une autre cible dans un rayon de 6 cases d'un montant de PV égal à votre FOR.",
        },
      },
      {
        name: { en: "Windstrider", fr: "Marchevent" },
        description: {
          en: "If you move through a willing creature's space while using Windstep, they can move with you and choose any adjacent space along your path to end in.",
          fr: "Si vous traversez l'espace d'une créature consentante en utilisant Foulée aérienne, elle peut se déplacer avec vous et choisir n'importe quelle case adjacente le long de votre chemin pour s'arrêter.",
        },
      },
    ],
  },
};
