import type { HeroClass } from "../types";

// ─── Hunter ─────────────────────────────────────────────────────────────────

export const hunter: HeroClass = {
  id: "hunter",
  name: { en: "Hunter", fr: "Chasseur" },
  description: {
    en: "A relentless tracker and master of the wild who marks prey and harnesses the Thrill of the Hunt to outwit targets with traps, arrows, and lethal efficiency.",
    fr: "Un traqueur implacable et maître de la nature qui marque ses proies et exploite le Frisson de la chasse pour surpasser ses cibles avec des pièges, des flèches et une efficacité mortelle.",
  },
  complexity: 2,
  keyStats: ["DEX", "WIL"],
  hitDie: "1d8",
  startingHp: 13,
  saves: { strong: "DEX", weak: "INT" },
  armorProficiency: [{ en: "Leather Armor", fr: "Armure de cuir" }],
  weaponProficiency: [{ en: "DEX Weapons", fr: "Armes de DEX" }],
  startingGear: [
    { en: "Shortbow", fr: "Arc court" },
    { en: "Cheap Hides", fr: "Gambison" },
    { en: "Dagger", fr: "Dague" },
    { en: "Hunting Trap", fr: "Piège de chasse" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Hunter's Mark", fr: "Marque du chasseur" },
      description: {
        en: "Action: Mark a visible creature as your quarry for 1 day (or until you mark another). It can't hide from you, and your attacks against it gain advantage OR +LVL damage.",
        fr: "Action : Marquez une créature visible comme votre proie pendant 1 jour (ou jusqu'à ce que vous en marquiez une autre). Elle ne peut pas se cacher de vous, et vos attaques contre elle gagnent l'avantage OU +NIV dégâts.",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Forager", fr: "Glaneur" },
      description: {
        en: "Gain advantage on skill checks to find food and water in the wild.",
        fr: "Gagnez l'avantage aux jets de compétence pour trouver de la nourriture et de l'eau dans la nature.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Thrill of the Hunt", fr: "Frisson de la chasse" },
      description: {
        en: "Choose 2 Thrill of the Hunt abilities. Gain a charge when your quarry dies, or you hit your quarry in melee or crit at range.",
        fr: "Choisissez 2 capacités de Frisson de la chasse. Gagnez une charge lorsque votre proie meurt, ou que vous touchez votre proie en mêlée ou la critez à distance.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Roll & Strike", fr: "Roulade offensive" },
      description: {
        en: "Action: If you have no TotH charges, move up to your speed toward your quarry. If you end adjacent, make a free melee attack.",
        fr: "Action : Si vous n'avez aucune charge de FdC, déplacez-vous jusqu'à votre vitesse vers votre proie. Si vous terminez adjacent, effectuez une attaque de mêlée gratuite.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Hunter subclass.",
        fr: "Choisissez une sous-classe de Chasseur.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Tracker's Intuition", fr: "Intuition du traqueur" },
      description: {
        en: "Discern past encounter events by studying tracks and environmental clues, determining creature types, numbers, direction, key actions, and time elapsed.",
        fr: "Discernez les événements passés d'une rencontre en étudiant les traces et les indices environnementaux, déterminant les types de créatures, leur nombre, leur direction, les actions clés et le temps écoulé.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Thrill of the Hunt (2)", fr: "Frisson de la chasse (2)" },
      description: {
        en: "Choose a 3rd Thrill of the Hunt ability.",
        fr: "Choisissez une 3e capacité de Frisson de la chasse.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    {
      level: 4,
      name: {
        en: "Explorer of the Wilds",
        fr: "Explorateur des contrées sauvages",
      },
      description: {
        en: "+2 speed; gain a climbing speed.",
        fr: "+2 vitesse ; gagnez une vitesse d'escalade.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Hunter's Resolve", fr: "Détermination du chasseur" },
      description: {
        en: "When you have no TotH charges, gain Hunter's Resolve until end of turn: treat all creatures as your quarry for movement and melee attacks.",
        fr: "Lorsque vous n'avez aucune charge de FdC, gagnez Détermination du chasseur jusqu'à la fin du tour : traitez toutes les créatures comme votre proie pour les déplacements et les attaques de mêlée.",
      },
      type: "core",
    },
    {
      level: 5,
      name: { en: "Final Takedown", fr: "Mise à mort" },
      description: {
        en: "Action: Spend 1 TotH charge to make a melee attack against your Bloodied quarry. It becomes a crit with doubled Hunter's Mark damage. If they survive, they crit you back.",
        fr: "Action : Dépensez 1 charge de FdC pour effectuer une attaque de mêlée contre votre proie Ensanglantée. Elle devient un coup critique avec les dégâts de Marque du chasseur doublés. Si elle survit, elle vous inflige un coup critique en retour.",
      },
      type: "core",
    },
    {
      level: 5,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    {
      level: 6,
      name: { en: "Versatile Bowmaster", fr: "Archer polyvalent" },
      description: {
        en: "When attacking with a Longbow, roll 2d4 instead of 1d8; or with a Crossbow, 2d8 instead of 4d4.",
        fr: "Lorsque vous attaquez avec un Arc long, lancez 2d4 au lieu de 1d8 ; ou avec une Arbalète, 2d8 au lieu de 4d4.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Thrill of the Hunt (3)", fr: "Frisson de la chasse (3)" },
      description: {
        en: "Choose a 4th Thrill of the Hunt ability.",
        fr: "Choisissez une 4e capacité de Frisson de la chasse.",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Hunter subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Chasseur.",
      },
      type: "subclass",
    },
    {
      level: 8,
      name: { en: "Thrill of the Hunt (4)", fr: "Frisson de la chasse (4)" },
      description: {
        en: "Choose a 5th Thrill of the Hunt ability.",
        fr: "Choisissez une 5e capacité de Frisson de la chasse.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "No Escape", fr: "Sans issue" },
      description: {
        en: "When you see allies make an opportunity attack, you may also make a ranged opportunity attack against the same target.",
        fr: "Lorsque vous voyez des alliés effectuer une attaque d'opportunité, vous pouvez aussi effectuer une attaque d'opportunité à distance contre la même cible.",
      },
      type: "core",
    },
    {
      level: 9,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Veteran Stalker", fr: "Traqueur vétéran" },
      description: {
        en: "Gain a TotH charge whenever you are first Bloodied in an encounter and for every Wound you gain.",
        fr: "Gagnez une charge de FdC chaque fois que vous êtes Ensanglanté pour la première fois dans une rencontre et pour chaque Blessure que vous subissez.",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Keen Eye, Steady Hand", fr: "Dans ma ligne de mire" },
      description: {
        en: "Add WIL to your ranged weapon damage.",
        fr: "Ajoutez VOL à vos dégâts d'arme à distance.",
      },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Hunter subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Chasseur.",
      },
      type: "subclass",
    },
    {
      level: 12,
      name: { en: "Thrill of the Hunt (5)", fr: "Frisson de la chasse (5)" },
      description: {
        en: "Choose a 6th Thrill of the Hunt ability.",
        fr: "Choisissez une 6e capacité de Frisson de la chasse.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Keen Sight", fr: "Vue aiguisée" },
      description: {
        en: "Advantage on Perception checks.",
        fr: "Avantage aux jets de Perception.",
      },
      type: "core",
    },
    {
      level: 13,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Thrill of the Hunt (6)", fr: "Frisson de la chasse (6)" },
      description: {
        en: "Choose a 7th Thrill of the Hunt ability.",
        fr: "Choisissez une 7e capacité de Frisson de la chasse.",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Hunter subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Chasseur.",
      },
      type: "subclass",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 DEX or WIL.", fr: "+1 DEX ou VOL." },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Peerless Hunter", fr: "Chasseur hors-pair" },
      description: {
        en: "You can Defend against your quarry for free.",
        fr: "Vous pouvez vous Défendre contre votre proie gratuitement.",
      },
      type: "core",
    },
    {
      level: 17,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or INT.", fr: "+1 FOR ou INT." },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Wild Endurance", fr: "Endurance sauvage" },
      description: {
        en: "Gain 1 Thrill of the Hunt charge at the start of your turns.",
        fr: "Gagnez 1 charge de Frisson de la chasse au début de vos tours.",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Nemesis", fr: "Némésis" },
      description: {
        en: "+1 to any 2 stats. Your Hunter's Mark can target any number of creatures simultaneously.",
        fr: "+1 à 2 stats de votre choix. Votre Marque du chasseur peut cibler n'importe quel nombre de créatures simultanément.",
      },
      type: "capstone",
    },
  ],
  subclasses: [
    {
      id: "keeper-of-the-shadowpath",
      name: {
        en: "Keeper of the Shadowpath",
        fr: "Gardien du chemin des ombres",
      },
      description: {
        en: "A stealthy predator who ambushes foes, tracks with supernatural skill, and hunts in packs to overwhelm quarry.",
        fr: "Un prédateur furtif qui tend des embuscades, traque avec une habileté surnaturelle et chasse en meute pour submerger ses proies.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Ambusher", fr: "Embusqué" },
          description: {
            en: "When you roll Initiative, use Hunter's Mark for free. Gain advantage on the first attack you make each encounter.",
            fr: "Lorsque vous lancez l'Initiative, utilisez Marque du chasseur gratuitement. Gagnez l'avantage sur la première attaque que vous effectuez chaque rencontre.",
          },
        },
        {
          level: 3,
          name: { en: "Skilled Tracker", fr: "Traqueur experimenté" },
          description: {
            en: "Advantage on skill checks to track creatures.",
            fr: "Avantage aux jets de compétence pour pister des créatures.",
          },
        },
        {
          level: 3,
          name: { en: "Skilled Navigator", fr: "Guide expérimenté" },
          description: {
            en: "You cannot become lost by nonmagical means.",
            fr: "Vous ne pouvez pas vous perdre par des moyens non magiques.",
          },
        },
        {
          level: 7,
          name: { en: "Primal Predator", fr: "Prédateur primitif" },
          description: {
            en: "(1/encounter) Your weapon attacks ignore cover and armor this turn.",
            fr: "(1/rencontre) Vos attaques d'arme ignorent les abris et l'armure ce tour.",
          },
        },
        {
          level: 11,
          name: { en: "Pack Hunter", fr: "Chasseur de meute" },
          description: {
            en: "When you mark a creature, you may also mark another creature within 6 spaces of them for free.",
            fr: "Lorsque vous marquez une créature, vous pouvez aussi marquer une autre créature à 6 cases ou moins d'elle gratuitement.",
          },
        },
        {
          level: 15,
          name: { en: "Apex Predator", fr: "Prédateur ultime" },
          description: {
            en: "Use Primal Predator twice per encounter. Gain 1 TotH charge when you roll Initiative.",
            fr: "Utilisez Prédateur primitif deux fois par rencontre. Gagnez 1 charge de FdC lorsque vous lancez l'Initiative.",
          },
        },
      ],
    },
    {
      id: "keeper-of-the-wild-heart",
      name: { en: "Keeper of the Wild Heart", fr: "Gardien du coeur farouche" },
      description: {
        en: "A resilient survivalist who gains extra vitality, crafts healing salves, and becomes nearly impossible to pin down.",
        fr: "Un survivaliste résilient qui gagne en vitalité, prépare des baumes curatifs et devient quasiment impossible à coincer.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Impressive Form", fr: "Forme impressionnante" },
          description: {
            en: "+5 max HP. Upgrade your Hit Dice to d10s.",
            fr: "+5 PV max. Améliorez vos Dés de vie en d10.",
          },
        },
        {
          level: 3,
          name: { en: "I Have the High Ground", fr: "J'ai le surplomb" },
          description: {
            en: "When you roll Initiative or gain TotH charges, move up to half your speed for free, ignoring difficult terrain.",
            fr: "Lorsque vous lancez l'Initiative ou gagnez des charges de FdC, déplacez-vous jusqu'à la moitié de votre vitesse gratuitement, en ignorant le terrain difficile.",
          },
        },
        {
          level: 7,
          name: { en: "Resourceful Herbalist", fr: "Herboriste" },
          description: {
            en: "During a Safe Rest near plants or fungi, spend a day to craft Healing Salves equal to your WIL. Action: Heal yourself or an adjacent creature WIL d6 HP. They expire on Safe Rest.",
            fr: "Pendant un Repos sûr près de plantes ou champignons, passez une journée à confectionner un nombre de Baumes curatifs égal à votre VOL. Action : Soignez-vous ou une créature adjacente de VOL d6 PV. Ils expirent au prochain Repos sûr.",
          },
        },
        {
          level: 11,
          name: { en: "Ha! I'm Over Here!", fr: "Ha ! Je suis là !" },
          description: {
            en: "(1/Safe Rest) If an attack would drop you to 0 HP, instead move up to your speed away and take no damage.",
            fr: "(1/Repos sûr) Si une attaque devait vous faire tomber à 0 PV, déplacez-vous plutôt jusqu'à votre vitesse et ne subissez aucun dégât.",
          },
        },
        {
          level: 15,
          name: { en: "Unparalleled Survivalist", fr: "Survivaliste inégalé" },
          description: {
            en: "Gain +WIL armor. When attacking with a ranged weapon, you may first move half your speed for free.",
            fr: "Gagnez +VOL armure. Lorsque vous attaquez avec une arme à distance, vous pouvez d'abord vous déplacer de la moitié de votre vitesse gratuitement.",
          },
        },
      ],
    },
    {
      id: "beastmaster",
      name: { en: "Beastmaster", fr: "Maître des bêtes" },
      description: {
        en: "A story-based subclass where you bond with an animal companion. Instead of your first 2 TotH abilities, select Go for the Throat! and Protect Me! Your companion's HP and movement are abstracted.",
        fr: "Une sous-classe narrative où vous vous liez avec un compagnon animal. Au lieu de vos 2 premières capacités de FdC, sélectionnez À la gorge ! et Protège-moi ! Les PV et le déplacement de votre compagnon sont abstraits.",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Beastmaster", fr: "Maître des bêtes" },
          description: {
            en: "Choose a Small, Medium, or Large animal companion. Replace your first 2 TotH abilities with Go for the Throat! and Protect Me! abilities scaled to companion size.",
            fr: "Choisissez un compagnon animal Petit, Moyen ou Grand. Remplacez vos 2 premières capacités de FdC par À la gorge ! et Protège-moi ! adaptées à la taille du compagnon.",
          },
        },
        {
          level: 3,
          name: { en: "Small Companion", fr: "Compagnon petit" },
          description: {
            en: "Keen Eyes: Mark for free 1/encounter. Protect Me! 1/encounter: Defend causes attack to miss, move half speed. Go for the Throat! 1/encounter, 1 TotH: companion attacks for 1d4+LVL ignoring armor.",
            fr: "Regard perçant : Marquez gratuitement 1/rencontre. Protège-moi ! 1/rencontre : Défendre fait rater l'attaque, déplacez-vous à mi-vitesse. À la gorge ! 1/rencontre, 1 FdC : le compagnon attaque pour 1d4+NIV en ignorant l'armure.",
          },
        },
        {
          level: 3,
          name: { en: "Medium Companion", fr: "Compagnon moyen" },
          description: {
            en: "Req. Level 3. Ferocious: on crit, companion attacks for LVL damage ignoring armor, move 2 spaces free. Protect Me!: companion attacks for 1d4+LVL when you Defend. Go for the Throat! 1/encounter, 1 TotH, action: 1d8+(3xLVL) ignoring armor.",
            fr: "Req. Niveau 3. Féroce : sur un critique, le compagnon attaque pour NIV dégâts en ignorant l'armure, déplacez-vous de 2 cases gratuitement. Protège-moi ! : le compagnon attaque pour 1d4+NIV lorsque vous vous Défendez. À la gorge ! 1/rencontre, 1 FdC, action : 1d8+(3xNIV) en ignorant l'armure.",
          },
        },
        {
          level: 3,
          name: { en: "Large Companion", fr: "Compagnon grand" },
          description: {
            en: "Req. Level 3. Alpha Protector: first attack damage each round is halved. Protect Me! 1/encounter: after gaining a Wound, companion whisks you 12 spaces. Go for the Throat! 1/encounter, 2 TotH, 2 actions: 1d12+(4xLVL) ignoring armor, excess damage splashes.",
            fr: "Req. Niveau 3. Protecteur alpha : les premiers dégâts d'attaque chaque round sont réduits de moitié. Protège-moi ! 1/rencontre : après avoir subi une Blessure, le compagnon vous emporte de 12 cases. À la gorge ! 1/rencontre, 2 FdC, 2 actions : 1d12+(4xNIV) en ignorant l'armure, les dégâts excédentaires éclaboussent.",
          },
        },
        {
          level: 7,
          name: { en: "Companion Growth", fr: "Croissance du compagnon" },
          description: {
            en: "Companion abilities scale up. Small: Keen Eyes 2/encounter, Protect Me! 2/encounter. Medium: Ferocious move becomes 4 spaces. Large: Protect Me! whisks before gaining the Wound.",
            fr: "Les capacités du compagnon progressent. Petit : Regard perçant 2/rencontre, Protège-moi ! 2/rencontre. Moyen : le déplacement de Féroce passe à 4 cases. Grand : Protège-moi ! emporte avant de subir la Blessure.",
          },
        },
        {
          level: 11,
          name: { en: "Companion Mastery", fr: "Maîtrise du compagnon" },
          description: {
            en: "Companion abilities scale further. Small: Keen Eyes 3/encounter, Go for the Throat! 2/encounter 1/round. Medium: Go for the Throat! 2/encounter. Large: Go for the Throat! 2/encounter.",
            fr: "Les capacités du compagnon progressent encore. Petit : Regard perçant 3/rencontre, À la gorge ! 2/rencontre 1/round. Moyen : À la gorge ! 2/rencontre. Grand : À la gorge ! 2/rencontre.",
          },
        },
        {
          level: 15,
          name: { en: "Companion Apex", fr: "Compagnon au sommet" },
          description: {
            en: "Companion abilities reach peak power. Small: Go for the Throat! 3/encounter 1/round. Medium: Ferocious move becomes 6 spaces. Large: Protect Me! 2/encounter.",
            fr: "Les capacités du compagnon atteignent leur apogée. Petit : À la gorge ! 3/rencontre 1/round. Moyen : le déplacement de Féroce passe à 6 cases. Grand : Protège-moi ! 2/rencontre.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Thrill of the Hunt", fr: "Frisson de la chasse" },
    selectAtLevels: [2, 4, 6, 8, 12, 14],
    picksAtLevel: { 2: 2 },
    abilities: [
      {
        name: { en: "Addling Arrow", fr: "Tir de confusion" },
        description: {
          en: "Action: Ranged weapon attack. The next attack the target makes must be against the closest other creature, chosen at random.",
          fr: "Action : Attaque d'arme à distance. La prochaine attaque de la cible doit viser la créature la plus proche autre qu'elle, choisie au hasard.",
        },
      },
      {
        name: { en: "Come Get Some!", fr: "Viens te battre !" },
        description: {
          en: "Action: Attack a target. It is Taunted by you until the end of their next turn.",
          fr: "Action : Attaquez une cible. Elle est Provoquée par vous jusqu'à la fin de son prochain tour.",
        },
      },
      {
        name: { en: "Decoy", fr: "Leurre" },
        description: {
          en: "When you Defend: The attack misses instead, and you move up to half your speed away.",
          fr: "Lorsque vous vous Défendez : L'attaque rate à la place, et vous vous déplacez jusqu'à la moitié de votre vitesse.",
        },
      },
      {
        name: { en: "Fleet Feet", fr: "Pied léger" },
        description: {
          en: "Move up to your speed for free, ignoring difficult terrain.",
          fr: "Déplacez-vous jusqu'à votre vitesse gratuitement, en ignorant le terrain difficile.",
        },
      },
      {
        name: { en: "Grease Trap", fr: "Piège à poix" },
        description: {
          en: "(1/encounter) Reaction when an enemy moves adjacent to you or an ally within 6 spaces: Target falls Prone, is vulnerable to fire, and treated as Smoldering.",
          fr: "(1/rencontre) Réaction lorsqu'un ennemi se déplace adjacent à vous ou un allié à 6 cases ou moins : La cible tombe À terre, est vulnérable au feu et traitée comme Incandescente.",
        },
      },
      {
        name: { en: "Hail of Arrows", fr: "Déluge de flèches" },
        description: {
          en: "(Half range) 2 actions: Shoot all creatures in a 3x3 area. Their speed is halved until end of their next turn.",
          fr: "(Demi-portée) 2 actions : Tirez sur toutes les créatures dans une zone de 3x3. Leur vitesse est réduite de moitié jusqu'à la fin de leur prochain tour.",
        },
      },
      {
        name: { en: "Heavy Shot", fr: "Tir puissant" },
        description: {
          en: "(Half range) Action: Ranged weapon attack that pushes the target (4 spaces small, 2 medium, 1 large).",
          fr: "(Demi-portée) Action : Attaque d'arme à distance qui repousse la cible (4 cases petit, 2 moyen, 1 grand).",
        },
      },
      {
        name: { en: "Incendiary Shot", fr: "Tir incendiaire" },
        description: {
          en: "(Half range) Action: Ranged weapon attack, add WIL d8 fire damage.",
          fr: "(Demi-portée) Action : Attaque d'arme à distance, ajoutez VOL d8 dégâts de feu.",
        },
      },
      {
        name: { en: "Multishot", fr: "Tir multiple" },
        description: {
          en: "(Half range) Action: Attack your quarry with a ranged weapon and hit a 2nd target within 2 spaces for the same damage.",
          fr: "(Demi-portée) Action : Attaquez votre proie avec une arme à distance et touchez une 2e cible à 2 cases ou moins pour les mêmes dégâts.",
        },
      },
      {
        name: { en: "Pinning Shot", fr: "Tir immobilisant" },
        description: {
          en: "3 actions: Shoot your quarry. They are Restrained until they escape (DC 10+WIL).",
          fr: "3 actions : Tirez sur votre proie. Elle est Entravée jusqu'à ce qu'elle s'échappe (SD 10+VOL).",
        },
      },
      {
        name: { en: "Snare Trap", fr: "Piège à collet" },
        description: {
          en: "(1/encounter) Reaction when an enemy moves adjacent to you or an ally within 6 spaces: Move them back 1 space, they are Restrained until they escape (DC 10+WIL).",
          fr: "(1/rencontre) Réaction lorsqu'un ennemi se déplace adjacent à vous ou un allié à 6 cases ou moins : Repoussez-le de 1 case, il est Entravé jusqu'à ce qu'il s'échappe (SD 10+VOL).",
        },
      },
      {
        name: { en: "Sharpshooter", fr: "Tireur d'élite" },
        description: {
          en: "Action: If you haven't moved this turn and your quarry is 4+ spaces away, attack for double damage.",
          fr: "Action : Si vous ne vous êtes pas déplacé ce tour et que votre proie est à 4+ cases, attaquez pour le double des dégâts.",
        },
      },
      {
        name: { en: "Vital Shot", fr: "Tir mortel" },
        description: {
          en: "(Half range) Action: If your quarry is Hampered, ranged attacks ignore armor. If unarmored, double Hunter's Mark bonus damage.",
          fr: "(Demi-portée) Action : Si votre proie est Entravée, les attaques à distance ignorent l'armure. Si elle est sans armure, doublez les dégâts bonus de Marque du chasseur.",
        },
      },
      {
        name: { en: "Wild Instinct", fr: "Instinct farouche" },
        description: {
          en: "(1/round) If you have no TotH charges, assess for free with advantage.",
          fr: "(1/round) Si vous n'avez aucune charge de FdC, évaluez gratuitement avec avantage.",
        },
      },
    ],
  },
};

// ─── Mage ───────────────────────────────────────────────────────────────────

export const mage: HeroClass = {
  id: "mage",
  name: { en: "Mage", fr: "Mage" },
  description: {
    en: "A scholarly spellcaster who commands elemental magic through Fire, Ice, and Lightning, shaping spells with powerful Spellshaper enhancements.",
    fr: "Un lanceur de sorts érudit qui commande la magie élémentaire à travers le Feu, la Glace et la Foudre, façonnant ses sorts avec de puissantes améliorations de Sculptesort.",
  },
  complexity: 3,
  keyStats: ["INT", "WIL"],
  hitDie: "1d6",
  startingHp: 10,
  saves: { strong: "INT", weak: "STR" },
  armorProficiency: [{ en: "Cloth Armor", fr: "Armure de tissu" }],
  weaponProficiency: [
    { en: "Blades", fr: "Lames" },
    { en: "Staves", fr: "Bâtons" },
    { en: "Wands", fr: "Baguettes" },
  ],
  startingGear: [
    { en: "Adventurer's Garb", fr: "Tenue d'aventurier" },
    { en: "Staff", fr: "Bâton" },
    { en: "Soap", fr: "Savon" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Elemental Spellcasting", fr: "Magie élémentaire" },
      description: {
        en: "You know Fire, Ice, and Lightning cantrips.",
        fr: "Vous connaissez les cantrips de Feu, Glace et Foudre.",
      },
      type: "core",
    },
    {
      level: 2,
      name: {
        en: "Mana and Unlock Tier 1 Spells",
        fr: "Mana et Sorts de rang 1",
      },
      description: {
        en: "Unlock tier 1 Fire, Ice, and Lightning spells. Gain a mana pool equal to (INT x 3) + LVL, recharging on a Safe Rest.",
        fr: "Débloquez les sorts de rang 1 de Feu, Glace et Foudre. Gagnez une réserve de mana égale à (INT x 3) + NIV, qui se recharge lors d'un Repos sûr.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Talented Researcher", fr: "Érudit talentueux" },
      description: {
        en: "Advantage on Arcana or Lore checks when you have access to many books and time to study.",
        fr: "Avantage aux jets d'Arcanes ou de Savoir lorsque vous avez accès à de nombreux livres et du temps pour étudier.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Choose a Mage subclass.",
        fr: "Choisissez une sous-classe de Mage.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Elemental Mastery", fr: "Maîtrise des éléments" },
      description: {
        en: "Learn the Utility Spells from 1 spell school you know.",
        fr: "Apprenez les Sorts utilitaires d'une école de magie que vous connaissez.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Spellshaper", fr: "Sculptesort" },
      description: {
        en: "Gain the ability to enhance spells by spending additional mana. Choose 2 Spellshaper abilities.",
        fr: "Gagnez la capacité d'améliorer vos sorts en dépensant du mana supplémentaire. Choisissez 2 capacités de Sculptesort.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Tier 2 Spells", fr: "Sorts de rang 2" },
      description: {
        en: "You may now cast tier 2 spells and upcast spells at tier 2.",
        fr: "Vous pouvez désormais lancer des sorts de rang 2 et surclasser des sorts au rang 2.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Elemental Surge", fr: "Surcharge élémentaire" },
      description: {
        en: "When you roll Initiative, regain WIL mana (expires at end of combat if unused).",
        fr: "Lorsque vous lancez l'Initiative, récupérez VOL mana (expire à la fin du combat si non utilisé).",
      },
      type: "core",
    },
    {
      level: 5,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
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
      level: 6,
      name: { en: "Tier 3 Spells", fr: "Sorts de rang 3" },
      description: {
        en: "You may now cast tier 3 spells and upcast spells at tier 3.",
        fr: "Vous pouvez désormais lancer des sorts de rang 3 et surclasser des sorts au rang 3.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Elemental Mastery (2)", fr: "Maîtrise des éléments (2)" },
      description: {
        en: "Learn the Utility Spells from a 2nd spell school you know.",
        fr: "Apprenez les Sorts utilitaires d'une 2e école de magie que vous connaissez.",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Mage subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Mage.",
      },
      type: "subclass",
    },
    {
      level: 8,
      name: { en: "Tier 4 Spells", fr: "Sorts de rang 4" },
      description: {
        en: "You may now cast tier 4 spells and upcast spells at tier 4.",
        fr: "Vous pouvez désormais lancer des sorts de rang 4 et surclasser des sorts au rang 4.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Spellshaper (2)", fr: "Sculptesort (2)" },
      description: {
        en: "Choose 1 additional Spellshaper ability.",
        fr: "Choisissez 1 capacité de Sculptesort supplémentaire.",
      },
      type: "core",
    },
    {
      level: 9,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Elemental Surge (2)", fr: "Surcharge élémentaire (2)" },
      description: {
        en: "Your Elemental Surge now regains WIL+1d4 mana.",
        fr: "Votre Surcharge élémentaire récupère désormais VOL+1d4 mana.",
      },
      type: "core",
    },
    {
      level: 10,
      name: { en: "Tier 5 Spells", fr: "Sorts de rang 5" },
      description: {
        en: "You may now cast tier 5 spells and upcast spells at tier 5.",
        fr: "Vous pouvez désormais lancer des sorts de rang 5 et surclasser des sorts au rang 5.",
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
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Mage subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Mage.",
      },
      type: "subclass",
    },
    {
      level: 12,
      name: { en: "Tier 6 Spells", fr: "Sorts de rang 6" },
      description: {
        en: "You may now cast tier 6 spells and upcast spells at tier 6.",
        fr: "Vous pouvez désormais lancer des sorts de rang 6 et surclasser des sorts au rang 6.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Spellshaper (3)", fr: "Sculptesort (3)" },
      description: {
        en: "Choose 1 additional Spellshaper ability.",
        fr: "Choisissez 1 capacité de Sculptesort supplémentaire.",
      },
      type: "core",
    },
    {
      level: 13,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Tier 7 Spells", fr: "Sorts de rang 7" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "Vous pouvez désormais lancer des sorts de rang 7 et surclasser des sorts au rang 7.",
      },
      type: "core",
    },
    {
      level: 14,
      name: { en: "Elemental Mastery (3)", fr: "Maîtrise des éléments (3)" },
      description: {
        en: "Learn the Utility Spells from a 3rd spell school you know.",
        fr: "Apprenez les Sorts utilitaires d'une 3e école de magie que vous connaissez.",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Mage subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Mage.",
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
    {
      level: 16,
      name: { en: "Tier 8 Spells", fr: "Sorts de rang 8" },
      description: {
        en: "You may now cast tier 8 spells and upcast spells at tier 8.",
        fr: "Vous pouvez désormais lancer des sorts de rang 8 et surclasser des sorts au rang 8.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 INT or WIL.", fr: "+1 INT ou VOL." },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Elemental Surge (3)", fr: "Surcharge élémentaire (3)" },
      description: {
        en: "Your Elemental Surge now regains WIL+2d4 mana.",
        fr: "Votre Surcharge élémentaire récupère désormais VOL+2d4 mana.",
      },
      type: "core",
    },
    {
      level: 17,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 STR or DEX.", fr: "+1 FOR ou DEX." },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Tier 9 Spells", fr: "Sorts de rang 9" },
      description: {
        en: "You may now cast tier 9 spells and upcast spells at tier 9.",
        fr: "Vous pouvez désormais lancer des sorts de rang 9 et surclasser des sorts au rang 9.",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Archmage", fr: "Archimage" },
      description: {
        en: "+1 to any 2 stats. The first tiered spell you cast each encounter costs 1 action less and 5 fewer mana.",
        fr: "+1 à 2 stats de votre choix. Le premier sort à rang que vous lancez chaque rencontre coûte 1 action de moins et 5 mana de moins.",
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
    {
      id: "invoker-of-control",
      name: { en: "Invoker of Control", fr: "Invocateur du contrôle" },
      description: {
        en: "A disciplined mage who stitches the fraying edges of magic together, demanding control over elemental forces through sheer willpower.",
        fr: "Un mage discipliné qui recoud les franges effilochées de la magie, exigeant le contrôle des forces élémentaires par la pure force de volonté.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Force of Will", fr: "Force de la volonté" },
          description: {
            en: "(1/round) On your turn, Demand Control: choose 1 option from the Control Table you haven't chosen yet. Resets on Initiative or when all options used once.",
            fr: "(1/round) Pendant votre tour, Exigez le contrôle : choisissez 1 option de la Table de contrôle que vous n'avez pas encore choisie. Se réinitialise à l'Initiative ou lorsque toutes les options ont été utilisées une fois.",
          },
        },
        {
          level: 3,
          name: { en: "Deny Fate", fr: "Renier le destin" },
          description: {
            en: "When you miss with a spell or an effect you cause is saved against, you MUST Demand Control.",
            fr: "Lorsque vous ratez avec un sort ou qu'un effet que vous causez est résisté par un jet de sauvegarde, vous DEVEZ Exiger le contrôle.",
          },
        },
        {
          level: 7,
          name: { en: "At Any Cost", fr: "Coûte que coûte" },
          description: {
            en: "Learn 1 cantrip and 1 tiered spell from the Necrotic school.",
            fr: "Apprenez 1 cantrip et 1 sort à rang de l'école Nécrotique.",
          },
        },
        {
          level: 7,
          name: { en: "Nullify", fr: "Nullification" },
          description: {
            en: "(1/encounter) Ignore all disadvantage and negative effects on your next action this turn, then Demand Control.",
            fr: "(1/rencontre) Ignorez tous les désavantages et effets négatifs sur votre prochaine action ce tour, puis Exigez le contrôle.",
          },
        },
        {
          level: 11,
          name: { en: "Steel Will", fr: "Volonté de fer" },
          description: {
            en: "(1/Safe Rest) When you would fail a save, succeed instead. Reroll 1s on Elemental Surge dice once.",
            fr: "(1/Repos sûr) Lorsque vous devriez rater un jet de sauvegarde, réussissez à la place. Relancez les 1 sur les dés de Surcharge élémentaire une fois.",
          },
        },
        {
          level: 15,
          name: { en: "Supreme Control", fr: "Contrôle suprème" },
          description: {
            en: "When you Demand Control, you may trigger the selected option twice. You may Demand Control as a Reaction.",
            fr: "Lorsque vous Exigez le contrôle, vous pouvez déclencher l'option choisie deux fois. Vous pouvez Exiger le contrôle en tant que Réaction.",
          },
        },
      ],
    },
    {
      id: "invoker-of-chaos",
      name: { en: "Invoker of Chaos", fr: "Invocateur du chaos" },
      description: {
        en: "A wild mage who leans into the unpredictable forces of magic, spending less mana at the risk of chaotic side effects.",
        fr: "Un mage sauvage qui embrasse les forces imprévisibles de la magie, dépensant moins de mana au risque d'effets secondaires chaotiques.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Force of Chaos", fr: "Force du chaos" },
          description: {
            en: "When casting a spell, you can spend 1 less mana. When you do this or crit, Invoke Chaos by rolling on the secret Chaos Table.",
            fr: "Lorsque vous lancez un sort, vous pouvez dépenser 1 mana de moins. Quand vous le faites ou faites un critique, Invoquez le chaos en lançant sur la Table du chaos secrète.",
          },
        },
        {
          level: 7,
          name: { en: "Tempest Mage", fr: "Mage tempétueux" },
          description: {
            en: "Learn 1 cantrip and 1 tiered spell from the Wind school.",
            fr: "Apprenez 1 cantrip et 1 sort à rang de l'école du Vent.",
          },
        },
        {
          level: 7,
          name: { en: "Chaos Lash", fr: "Fléau chaotique" },
          description: {
            en: "(1/encounter) Reaction when an enemy moves adjacent: push them 2 spaces, on failed WIL save also knock Prone. Invoke Chaos.",
            fr: "(1/rencontre) Réaction quand un ennemi se déplace adjacent : repoussez-le de 2 cases, sur un JdS de VOL raté, mettez-le aussi À terre. Invoquez le chaos.",
          },
        },
        {
          level: 11,
          name: { en: "Thrive in Chaos", fr: "Prospérer dans le chaos" },
          description: {
            en: "When you Invoke Chaos, roll twice and cause both effects. (1/Safe Rest) You may choose which roll to use instead.",
            fr: "Lorsque vous Invoquez le chaos, lancez deux fois et causez les deux effets. (1/Repos sûr) Vous pouvez choisir quel jet utiliser à la place.",
          },
        },
        {
          level: 15,
          name: { en: "Master of Chaos", fr: "Maître du chaos" },
          description: {
            en: "When you Invoke Chaos, roll with advantage.",
            fr: "Lorsque vous Invoquez le chaos, lancez avec avantage.",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Spellshaper", fr: "Sculptesort" },
    selectAtLevels: [4, 9, 13],
    picksAtLevel: { 4: 2 },
    abilities: [
      {
        name: {
          en: "Dimensional Compression",
          fr: "Compression dimensionnelle",
        },
        description: {
          en: "(1+ mana) +4 range to a spell for each additional mana spent.",
          fr: "(1+ mana) +4 portée à un sort par mana supplémentaire dépensé.",
        },
      },
      {
        name: { en: "Echo Casting", fr: "Écho arcanique" },
        description: {
          en: "(2x mana, min 1) When casting a tiered single-target spell, cast a copy on a 2nd target for free.",
          fr: "(2x mana, min 1) Lorsque vous lancez un sort à rang sur une seule cible, lancez-en une copie sur une 2e cible gratuitement.",
        },
      },
      {
        name: { en: "Elemental Destruction", fr: "Destruction élémentaire" },
        description: {
          en: "(1+ mana) After hitting with a spell, spend up to WIL mana to reroll 1 die per mana spent.",
          fr: "(1+ mana) Après avoir touché avec un sort, dépensez jusqu'à VOL mana pour relancer 1 dé par mana dépensé.",
        },
      },
      {
        name: {
          en: "Elemental Transmutation",
          fr: "Transmutation des éléments",
        },
        description: {
          en: "(1 mana) Change a spell's damage type to Fire, Ice, Lightning, Necrotic, or Radiant.",
          fr: "(1 mana) Changez le type de dégâts d'un sort en Feu, Glace, Foudre, Nécrotique ou Radiant.",
        },
      },
      {
        name: {
          en: "Extra-Dimensional Vision",
          fr: "Vision extra-dimensionnelle",
        },
        description: {
          en: "(2 mana) Ignore line of sight for a spell. It phases through barriers to reach a known target within range.",
          fr: "(2 mana) Ignorez la ligne de vue pour un sort. Il traverse les barrières pour atteindre une cible connue à portée.",
        },
      },
      {
        name: { en: "Methodical Spellweaver", fr: "Tisse-sorts méthodique" },
        description: {
          en: "(-2 mana) Spend 1 additional action to reduce a spell's mana cost by 2 (min 1).",
          fr: "(-2 mana) Dépensez 1 action supplémentaire pour réduire le coût en mana d'un sort de 2 (min 1).",
        },
      },
      {
        name: { en: "Precise Casting", fr: "Incantation précise" },
        description: {
          en: "(1+ mana) Choose 1 creature per mana spent to be unaffected by a spell you cast.",
          fr: "(1+ mana) Choisissez 1 créature par mana dépensé qui ne sera pas affectée par un sort que vous lancez.",
        },
      },
      {
        name: { en: "Stretch Time", fr: "Étirement du temps" },
        description: {
          en: "(2 mana) Reduce the action cost of a spell by 1 (min 1).",
          fr: "(2 mana) Réduisez le coût en actions d'un sort de 1 (min 1).",
        },
      },
    ],
  },
};

// ─── Oathsworn ──────────────────────────────────────────────────────────────

export const oathsworn: HeroClass = {
  id: "oathsworn",
  name: { en: "Oathsworn", fr: "Paladin" },
  description: {
    en: "A zealous holy warrior who channels radiant power through sacred oaths, shielding allies and smiting evil with divine judgment.",
    fr: "Un guerrier saint zélé qui canalise le pouvoir radiant à travers des serments sacrés, protégeant ses alliés et châtiant le mal par le jugement divin.",
  },
  complexity: 2,
  keyStats: ["STR", "WIL"],
  hitDie: "1d10",
  startingHp: 17,
  saves: { strong: "STR", weak: "DEX" },
  armorProficiency: [{ en: "All Armor", fr: "Toutes les armures" }],
  weaponProficiency: [{ en: "STR Weapons", fr: "Armes de FOR" }],
  startingGear: [
    { en: "Mace", fr: "Masse d'armes" },
    { en: "Rusty Mail", fr: "Mailles rouillées" },
    { en: "Wooden Buckler", fr: "Targe en bois" },
    { en: "Manacles", fr: "Menottes" },
  ],
  abilities: [
    {
      level: 1,
      name: { en: "Radiant Judgment", fr: "Jugement radiant" },
      description: {
        en: "When an enemy attacks you and you have no Judgment Dice, roll 2d6. On your next melee hit this encounter, deal that much additional radiant damage. Dice are expended on hit or miss.",
        fr: "Lorsqu'un ennemi vous attaque et que vous n'avez pas de Dés de jugement, lancez 2d6. Lors de votre prochaine touche en mêlée cette rencontre, infligez autant de dégâts radiants supplémentaires. Les dés sont dépensés en cas de touche ou d'échec.",
      },
      type: "core",
    },
    {
      level: 1,
      name: { en: "Lay on Hands", fr: "Imposition des mains" },
      description: {
        en: "Gain a healing pool equal to 5 x LVL, recharging on Safe Rest. Action: Touch a target and spend any amount to restore that many HP.",
        fr: "Gagnez une réserve de soins égale à 5 x NIV, qui se recharge lors d'un Repos sûr. Action : Touchez une cible et dépensez un montant quelconque pour restaurer autant de PV.",
      },
      type: "core",
    },
    {
      level: 2,
      name: {
        en: "Mana and Radiant Spellcasting",
        fr: "Mana et Incantation radieuse",
      },
      description: {
        en: "Learn Radiant cantrips and tier 1 Radiant spells. Gain a mana pool equal to WIL + LVL, recharging on Safe Rest.",
        fr: "Apprenez les cantrips Radiants et les sorts Radiants de rang 1. Gagnez une réserve de mana égale à VOL + NIV, qui se recharge lors d'un Repos sûr.",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Zealot", fr: "Zélote" },
      description: {
        en: "On melee attacks, spend mana (up to highest spell tier) to add per mana: Condemning Strike (+5 radiant damage) or Blessed Aim (-1 target armor step).",
        fr: "Sur les attaques de mêlée, dépensez du mana (jusqu'au rang de sort le plus élevé) pour ajouter par mana : Frappe condamnatoire (+5 dégâts radiants) ou Visée bénie (-1 palier d'armure de la cible).",
      },
      type: "core",
    },
    {
      level: 2,
      name: { en: "Paragon of Virtue", fr: "Parangon de vertu" },
      description: {
        en: "Advantage on Influence checks when forthrightly telling the truth, disadvantage when misleading.",
        fr: "Avantage aux jets d'Influence lorsque vous dites franchement la vérité, désavantage lorsque vous induisez en erreur.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Commit yourself to an Oath and gain its benefits.",
        fr: "Engagez-vous dans un Serment et obtenez ses avantages.",
      },
      type: "subclass",
    },
    {
      level: 3,
      name: { en: "Radiant Judgment (2)", fr: "Jugement radiant (2)" },
      description: {
        en: "Your Judgment Dice are upgraded to d8s.",
        fr: "Vos Dés de jugement sont améliorés en d8.",
      },
      type: "core",
    },
    {
      level: 3,
      name: { en: "Sacred Decree", fr: "Décret sacré" },
      description: {
        en: "Learn 1 Sacred Decree from the ability pool.",
        fr: "Apprenez 1 Décret sacré de la réserve de capacités.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "My Life, for My Friends", fr: "Ma vie, pour mes amis" },
      description: {
        en: "You can Interpose for free.",
        fr: "Vous pouvez vous Interposer gratuitement.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Tier 2 Spells", fr: "Sorts de rang 2" },
      description: {
        en: "You may now cast tier 2 spells and upcast spells at tier 2.",
        fr: "Vous pouvez désormais lancer des sorts de rang 2 et surclasser des sorts au rang 2.",
      },
      type: "core",
    },
    {
      level: 4,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 5,
      name: { en: "Radiant Judgment (3)", fr: "Jugement radiant (3)" },
      description: {
        en: "Your Judgment Dice are upgraded to d10s.",
        fr: "Vos Dés de jugement sont améliorés en d10.",
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
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    {
      level: 6,
      name: { en: "Tier 3 Spells", fr: "Sorts de rang 3" },
      description: {
        en: "You may now cast tier 3 spells and upcast spells at tier 3.",
        fr: "Vous pouvez désormais lancer des sorts de rang 3 et surclasser des sorts au rang 3.",
      },
      type: "core",
    },
    {
      level: 6,
      name: { en: "Sacred Decree (2)", fr: "Décret sacré (2)" },
      description: {
        en: "Learn a 2nd Sacred Decree.",
        fr: "Apprenez un 2e Décret sacré.",
      },
      type: "core",
    },
    {
      level: 7,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Oathsworn subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Paladin.",
      },
      type: "subclass",
    },
    {
      level: 7,
      name: { en: "Master of Radiance", fr: "Maître de radiance" },
      description: {
        en: "Choose 1 Radiant Utility Spell.",
        fr: "Choisissez 1 Sort utilitaire Radiant.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Tier 4 Spells", fr: "Sorts de rang 4" },
      description: {
        en: "You may now cast tier 4 spells and upcast spells at tier 4.",
        fr: "Vous pouvez désormais lancer des sorts de rang 4 et surclasser des sorts au rang 4.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Radiant Judgment (4)", fr: "Jugement radiant (4)" },
      description: {
        en: "Your Judgment Dice are upgraded to d12s.",
        fr: "Vos Dés de jugement sont améliorés en d12.",
      },
      type: "core",
    },
    {
      level: 8,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 9,
      name: { en: "Sacred Decree (3)", fr: "Décret sacré (3)" },
      description: {
        en: "Learn a 3rd Sacred Decree.",
        fr: "Apprenez un 3e Décret sacré.",
      },
      type: "core",
    },
    {
      level: 9,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    {
      level: 10,
      name: { en: "Tier 5 Spells", fr: "Sorts de rang 5" },
      description: {
        en: "You may now cast tier 5 spells and upcast spells at tier 5.",
        fr: "Vous pouvez désormais lancer des sorts de rang 5 et surclasser des sorts au rang 5.",
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
    {
      level: 10,
      name: { en: "Radiant Judgment (5)", fr: "Jugement radiant (5)" },
      description: {
        en: "Your Judgment Dice are upgraded to d20s.",
        fr: "Vos Dés de jugement sont améliorés en d20.",
      },
      type: "core",
    },
    {
      level: 11,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Oathsworn subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Paladin.",
      },
      type: "subclass",
    },
    {
      level: 11,
      name: { en: "Master of Radiance (2)", fr: "Maître de radiance (2)" },
      description: {
        en: "Choose a 2nd Radiant Utility Spell.",
        fr: "Choisissez un 2e Sort utilitaire Radiant.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Sacred Decree (4)", fr: "Décret sacré (4)" },
      description: {
        en: "Learn a 4th Sacred Decree.",
        fr: "Apprenez un 4e Décret sacré.",
      },
      type: "core",
    },
    {
      level: 12,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 13,
      name: { en: "Tier 6 Spells", fr: "Sorts de rang 6" },
      description: {
        en: "You may now cast tier 6 spells and upcast spells at tier 6.",
        fr: "Vous pouvez désormais lancer des sorts de rang 6 et surclasser des sorts au rang 6.",
      },
      type: "core",
    },
    {
      level: 13,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    {
      level: 14,
      name: { en: "Sacred Decree (5)", fr: "Décret sacré (5)" },
      description: {
        en: "Learn a 5th Sacred Decree.",
        fr: "Apprenez un 5e Décret sacré.",
      },
      type: "core",
    },
    {
      level: 14,
      name: { en: "Radiant Judgment (6)", fr: "Jugement radiant (6)" },
      description: {
        en: "Whenever you roll Judgment Dice, roll 1 more die.",
        fr: "Chaque fois que vous lancez des Dés de jugement, lancez 1 dé supplémentaire.",
      },
      type: "core",
    },
    {
      level: 15,
      name: { en: "Subclass", fr: "Sous-classe" },
      description: {
        en: "Gain your Oathsworn subclass feature.",
        fr: "Gagnez votre capacité de sous-classe de Paladin.",
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
    {
      level: 16,
      name: { en: "Sacred Decree (6)", fr: "Décret sacré (6)" },
      description: {
        en: "Learn a 6th Sacred Decree.",
        fr: "Apprenez un 6e Décret sacré.",
      },
      type: "core",
    },
    {
      level: 16,
      name: { en: "Key Stat Increase", fr: "Augmentation de stat CLÉ" },
      description: { en: "+1 STR or WIL.", fr: "+1 FOR ou VOL." },
      type: "stat-increase",
    },
    {
      level: 17,
      name: { en: "Tier 7 Spells", fr: "Sorts de rang 7" },
      description: {
        en: "You may now cast tier 7 spells and upcast spells at tier 7.",
        fr: "Vous pouvez désormais lancer des sorts de rang 7 et surclasser des sorts au rang 7.",
      },
      type: "core",
    },
    {
      level: 17,
      name: {
        en: "Secondary Stat Increase",
        fr: "Augmentation de stat secondaire",
      },
      description: { en: "+1 DEX or INT.", fr: "+1 DEX ou INT." },
      type: "stat-increase",
    },
    {
      level: 18,
      name: { en: "Unending Judgment", fr: "Jugement sans fin" },
      description: {
        en: "While you have no Judgment Dice, gain +5 damage to melee attacks.",
        fr: "Tant que vous n'avez pas de Dés de jugement, gagnez +5 dégâts aux attaques de mêlée.",
      },
      type: "core",
    },
    {
      level: 19,
      name: { en: "Epic Boon", fr: "Grâce épique" },
      description: {
        en: "Choose an Epic Boon.",
        fr: "Choisissez une Grâce épique.",
      },
      type: "core",
    },
    {
      level: 20,
      name: { en: "Glorious Paragon", fr: "Parangon glorieux" },
      description: {
        en: "+1 to any 2 stats. Defend for free whenever you Interpose.",
        fr: "+1 à 2 stats de votre choix. Défendez-vous gratuitement chaque fois que vous vous Interposez.",
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
    {
      id: "oath-of-vengeance",
      name: { en: "Oath of Vengeance", fr: "Serment de vengeance" },
      description: {
        en: "An aggressive oath-keeper whose zealous aura empowers Judgment Dice, punishing those who harm allies with righteous fury.",
        fr: "Un gardien du serment agressif dont l'aura zélée renforce les Dés de jugement, punissant ceux qui blessent les alliés avec une fureur vertueuse.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Aura of Zeal", fr: "Aura de zèle" },
          description: {
            en: "Roll 1 more Judgment Die. Gain an aura (Reach 4). Radiant Judgment also triggers when an ally in your aura is attacked while you have no Judgment Dice.",
            fr: "Lancez 1 Dé de jugement supplémentaire. Gagnez une aura (Allonge 4). Le Jugement radiant se déclenche aussi lorsqu'un allié dans votre aura est attaqué alors que vous n'avez pas de Dés de jugement.",
          },
        },
        {
          level: 7,
          name: { en: "Avenger", fr: "Vengeur" },
          description: {
            en: "When you or an ally in your aura gain Wounds, set that many Judgment Dice to max. Then move up to half your speed for free.",
            fr: "Lorsque vous ou un allié dans votre aura subissez des Blessures, passez autant de Dés de jugement à leur maximum. Puis déplacez-vous jusqu'à la moitié de votre vitesse gratuitement.",
          },
        },
        {
          level: 11,
          name: { en: "Unerring Judgment", fr: "Jugement infaillible" },
          description: {
            en: "Increase primary die rolls on melee attacks by 1 while you have Judgment Dice.",
            fr: "Augmentez les résultats du dé primaire sur les attaques de mêlée de 1 tant que vous avez des Dés de jugement.",
          },
        },
        {
          level: 15,
          name: { en: "Maximum Judgment", fr: "Jugement maximal" },
          description: {
            en: "Whenever you are attacked, set a Judgment Die to its max.",
            fr: "Chaque fois que vous êtes attaqué, passez un Dé de jugement à son maximum.",
          },
        },
      ],
    },
    {
      id: "oath-of-refuge",
      name: { en: "Oath of Refuge", fr: "Serment du refuge" },
      description: {
        en: "A protective oath-keeper whose aura shields allies, allowing Interposition from a distance and granting divine resilience.",
        fr: "Un gardien du serment protecteur dont l'aura protège les alliés, permettant l'Interposition à distance et octroyant une résilience divine.",
      },
      type: "standard",
      features: [
        {
          level: 3,
          name: { en: "Aura of Refuge", fr: "Aura du refuge" },
          description: {
            en: "Your shields gain +WIL armor and count as your spellcasting focus. Gain an aura (Reach 4); you can Interpose for allies anywhere within your aura.",
            fr: "Vos boucliers gagnent +VOL en armure et comptent comme focalisateur d'incantation. Vous obtenez une aura (Allonge 4) ; vous pouvez Interposer pour les alliés n'importe où dans votre aura.",
          },
        },
        {
          level: 7,
          name: {
            en: "Face Me, Foul Creature!",
            fr: "Viens te battre, créature infâme !",
          },
          description: {
            en: "When you Interpose, the attacking enemy is Taunted by you until the end of their next turn.",
            fr: "Lorsque vous Interposez, l'ennemi attaquant est Provoqué par vous jusqu'à la fin de son prochain tour.",
          },
        },
        {
          level: 11,
          name: { en: "Glorious Reprieve", fr: "Répit glorieux" },
          description: {
            en: "You and allies in your aura cannot drop below 1 HP. When this triggers, they gain 1 Wound instead (heroes still die at max Wounds).",
            fr: "Vous et vos alliés dans votre aura ne pouvez pas tomber en dessous de 1 PV. Lorsque cela se déclenche, ils reçoivent 1 Blessure à la place (les héros meurent toujours au maximum de Blessures).",
          },
        },
        {
          level: 15,
          name: { en: "Divine Grace", fr: "Grâce divine" },
          description: {
            en: "You are resistant to all damage while Interposing.",
            fr: "Vous êtes résistant à tous les dégâts lorsque vous Interposez.",
          },
        },
      ],
    },
    {
      id: "oathbreaker",
      name: { en: "Oathbreaker", fr: "Parjure" },
      description: {
        en: "A story-based subclass for a fallen Oathsworn seeking redemption. You lose some Radiant spells but gain Necrotic ones, and your aura shifts to one of suffering and sacrifice.",
        fr: "Une sous-classe narrative pour un Paladin déchu en quête de rédemption. Vous perdez certains sorts Radiants mais gagnez des sorts Nécrotiques, et votre aura se transforme en une aura de souffrance et de sacrifice.",
      },
      type: "story-based",
      features: [
        {
          level: 3,
          name: { en: "Dark Benediction", fr: "Sombre bénédiction" },
          description: {
            en: "Lose Radiant spells True Strike, Heal, and Warding Bond. Gain Necrotic spells Entice, Shadowtrap, and Dread Visage. Utility Spell choices may be Radiant or Necrotic.",
            fr: "Perdez les sorts Radiants Frappe véritable, Soin et Lien protecteur. Gagnez les sorts Nécrotiques Tentation, Piège d'ombre et Visage d'effroi. Les choix de Sorts utilitaires peuvent être Radiants ou Nécrotiques.",
          },
        },
        {
          level: 3,
          name: { en: "Paragon of Power", fr: "Parangon du pouvoir" },
          description: {
            en: "Replaces Paragon of Virtue. Advantage on Might checks to intimidate others.",
            fr: "Remplace Parangon de vertu. Avantage aux jets de Puissance pour intimider les autres.",
          },
        },
        {
          level: 3,
          name: { en: "Aura of Suffering", fr: "Aura de souffrance" },
          description: {
            en: "Gain an aura (Reach 4) and Interpose within it. Radiant Judgment no longer triggers when attacked; instead triggers when you could Interpose but don't.",
            fr: "Obtenez une aura (Allonge 4) et Interposez à l'intérieur. Jugement radiant ne se déclenche plus lorsque vous êtes attaqué ; il se déclenche plutôt lorsque vous pourriez Interposer mais ne le faites pas.",
          },
        },
        {
          level: 3,
          name: { en: "We All Suffer", fr: "Nous souffrons tous." },
          description: {
            en: "+2 max Wounds. When an ally in your aura would gain Wounds or fail a save, you may suffer the effect instead and trigger Radiant Judgment.",
            fr: "+2 Blessures max. Lorsqu'un allié dans votre aura devrait recevoir des Blessures ou rater un JdS, vous pouvez subir l'effet à sa place et déclencher Jugement radiant.",
          },
        },
        {
          level: 3,
          name: { en: "Bring Me Your Pain", fr: "Partage ta douleur" },
          description: {
            en: "Reaction when a willing ally in your aura would drop to 0 HP: Switch HP with them, dropping to 0 HP and gaining the Wound instead.",
            fr: "Réaction lorsqu'un allié consentant dans votre aura tomberait à 0 PV : Échangez vos PV avec les siens, tombant à 0 PV et recevant la Blessure à sa place.",
          },
        },
        {
          level: 7,
          name: { en: "Torment", fr: "Tourment" },
          description: {
            en: "Lay on Hands heals you for double and others for half. When dealing damage, expend Lay on Hands points to add that much damage (ignoring armor).",
            fr: "Imposition des mains vous soigne pour le double et les autres pour la moitié. Lorsque vous infligez des dégâts, dépensez des points d'Imposition des mains pour ajouter autant de dégâts (ignorant l'armure).",
          },
        },
        {
          level: 11,
          name: { en: "Exploit", fr: "Exploiter l'ennemi" },
          description: {
            en: "Reaction when an ally in your aura Defends: Expend Judgment Dice to force an enemy in your aura to Interpose (cannot interpose against its own attack).",
            fr: "Réaction lorsqu'un allié dans votre aura Défend : Dépensez des Dés de jugement pour forcer un ennemi dans votre aura à Interposer (ne peut pas interposer contre sa propre attaque).",
          },
        },
        {
          level: 15,
          name: { en: "Bloody Terror", fr: "Terreur sanglante" },
          description: {
            en: "Attacks against you gain 1 instance of disadvantage for each Wound you have (max 3).",
            fr: "Les attaques contre vous reçoivent 1 instance de désavantage pour chaque Blessure que vous avez (max 3).",
          },
        },
      ],
    },
  ],
  abilityPool: {
    name: { en: "Sacred Decrees", fr: "Décrets sacrés" },
    selectAtLevels: [3, 6, 9, 12, 14, 16],
    abilities: [
      {
        name: { en: "Blinding Aura", fr: "Aura aveuglante" },
        description: {
          en: "(1/Safe Rest) Action: Enemies in your aura are Blinded until end of their next turn.",
          fr: "(1/Repos sûr) Action : Les ennemis dans votre aura sont Aveuglés jusqu'à la fin de leur prochain tour.",
        },
      },
      {
        name: { en: "Courage!", fr: "Courage !" },
        description: {
          en: "(1/encounter) When you or an ally in your aura would drop to 0 HP, set their HP to 1 instead.",
          fr: "(1/rencontre) Lorsque vous ou un allié dans votre aura tomberait à 0 PV, ses PV sont fixés à 1 à la place.",
        },
      },
      {
        name: { en: "Explosive Judgment", fr: "Jugement explosif" },
        description: {
          en: "(1/encounter) 2 actions: Expend your Judgment Dice, dealing that much radiant damage to all enemies in your aura.",
          fr: "(1/rencontre) 2 actions : Dépensez vos Dés de jugement, infligeant autant de dégâts radiants à tous les ennemis dans votre aura.",
        },
      },
      {
        name: { en: "Improved Aura", fr: "Aura améliorée" },
        description: {
          en: "+2 aura Reach.",
          fr: "+2 Allonge d'aura.",
        },
      },
      {
        name: { en: "Radiant Aura", fr: "Aura radieuse" },
        description: {
          en: "Action: End any single harmful condition or effect on yourself or a willing creature in your aura. Usable WIL times per Safe Rest.",
          fr: "Action : Mettez fin à une seule condition ou un seul effet néfaste sur vous-même ou une créature consentante dans votre aura. Utilisable VOL fois par Repos sûr.",
        },
      },
      {
        name: { en: "Reliable Justice", fr: "Justice assurée" },
        description: {
          en: "When rolling Judgment Dice, roll with advantage (roll one extra, drop the lowest).",
          fr: "Lorsque vous lancez les Dés de jugement, lancez avec avantage (lancez un dé supplémentaire, retirez le plus bas).",
        },
      },
      {
        name: { en: "Shining Mandate", fr: "Mandat sacré" },
        description: {
          en: "First time each round you are attacked while you have Judgment Dice, an ally in your aura rolls one and applies it to their next attack. Advantage on checks to see through illusions.",
          fr: "La première fois chaque round que vous êtes attaqué alors que vous avez des Dés de jugement, un allié dans votre aura en lance un et l'applique à sa prochaine attaque. Avantage aux jets pour percer les illusions.",
        },
      },
      {
        name: { en: "Stand Fast, Friends!", fr: "Tenez bon, les amis !" },
        description: {
          en: "On Initiative, grant allies temp HP equal to STR+WIL. You and allies in your aura have advantage against fear and forced movement/Prone effects.",
          fr: "À l'Initiative, accordez aux alliés des PV temporaires égaux à FOR+VOL. Vous et vos alliés dans votre aura avez l'avantage contre la peur et les effets de déplacement forcé/À terre.",
        },
      },
      {
        name: { en: "Unstoppable Protector", fr: "Protecteur inarrêtable" },
        description: {
          en: "+1 speed. You may Interpose even while restrained, stunned, or incapacitated. If you Interpose for a non-combatant NPC, you may Interpose again this round.",
          fr: "+1 vitesse. Vous pouvez Interposer même lorsque vous êtes Entravé, Étourdi ou Neutralisé. Si vous Interposez pour un PNJ non combattant, vous pouvez Interposer à nouveau ce round.",
        },
      },
      {
        name: { en: "Well Armored", fr: "Bien protégé" },
        description: {
          en: "When you Interpose, gain temp HP equal to your STR.",
          fr: "Lorsque vous Interposez, gagnez des PV temporaires égaux à votre FOR.",
        },
      },
    ],
  },
};
