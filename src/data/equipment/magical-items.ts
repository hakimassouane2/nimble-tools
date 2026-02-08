import type { MagicalItem, Wand } from "../types";

export const magicalItems: MagicalItem[] = [
  {
    id: "weapon-of-many-hands",
    name: { en: "Weapon of Many Hands", fr: "Arme de nombreuses mains" },
    rarity: "uncommon",
    description: {
      en: "This weapon shifts and writhes as if alive. When attuned, it grants the wielder additional arms to fight with.",
      fr: "Cette arme se tord et ondule comme si elle était vivante. Une fois harmonisée, elle confère au porteur des bras supplémentaires pour combattre.",
    },
    effects: {
      en: "Grants additional arms to the wielder (varies by weapon type).",
      fr: "Confère des bras supplémentaires au porteur (varie selon le type d'arme).",
    },
  },
  {
    id: "harbinger-and-sovereign",
    name: { en: "Harbinger & Sovereign", fr: "Héraut & Souverain" },
    rarity: "legendary",
    description: {
      en: "A set of 2 matching glaives, forged from the same cursed ore. They hum when brought close together.",
      fr: "Un ensemble de 2 glaives assortis, forgés du même minerai maudit. Ils bourdonnent quand on les rapproche.",
    },
    effects: {
      en: "Set of 2 matching glaives. Grants +4 extra arms when both are wielded.",
      fr: "Ensemble de 2 glaives assortis. Confère +4 bras supplémentaires quand les deux sont maniés.",
    },
  },
  {
    id: "weapon-of-animosity",
    name: { en: "Weapon of Animosity", fr: "Arme belliqueuse" },
    rarity: "uncommon",
    description: {
      en: "This weapon seethes with barely contained rage. It rewards aggression but punishes failure.",
      fr: "Cette arme bouillonne d'une rage à peine contenue. Elle récompense l'agressivité mais punit l'échec.",
    },
    effects: {
      en: "Deal an extra damage die on hit, but take damage on a miss.",
      fr: "Infligez un dé de dégâts supplémentaire en cas de touche, mais subissez des dégâts en cas de raté.",
    },
  },
  {
    id: "weapon-of-slaying",
    name: { en: "Weapon of Slaying", fr: "Arme de carnage" },
    rarity: "uncommon",
    description: {
      en: "Etched with runes targeting a specific creature type, this weapon is a bane to its chosen foe.",
      fr: "Gravée de runes ciblant un type de créature spécifique, cette arme est le fléau de son ennemi désigné.",
    },
    effects: {
      en: "Deal an extra damage die against a specific creature type.",
      fr: "Infligez un dé de dégâts supplémentaire contre un type de créature spécifique.",
    },
  },
  {
    id: "gnatbane-weapon",
    name: { en: "Gnatbane Weapon", fr: "Fléau des moucherons" },
    rarity: "uncommon",
    description: {
      en: "This weapon hums faintly and tracks tiny movements with uncanny precision.",
      fr: "Cette arme bourdonne faiblement et traque les mouvements minuscules avec une précision surnaturelle.",
    },
    effects: {
      en: "Does not miss Small or Tiny creatures.",
      fr: "Ne rate jamais les créatures Petites ou Minuscules.",
    },
  },
  {
    id: "weapon-of-wounding",
    name: { en: "Weapon of Wounding", fr: "Arme blessante" },
    rarity: "uncommon",
    description: {
      en: "A cruel weapon with serrated edges that bites into the wielder's hand as deeply as it cuts the enemy.",
      fr: "Une arme cruelle aux bords dentelés qui mord la main du porteur aussi profondément qu'elle entaille l'ennemi.",
    },
    effects: {
      en: "Suffer 1d6 damage to deal 2x additional damage on your attack.",
      fr: "Subissez 1d6 dégâts pour infliger 2x dégâts supplémentaires lors de votre attaque.",
    },
  },
  {
    id: "vindication",
    name: { en: "Vindication", fr: "Justification" },
    rarity: "legendary",
    description: {
      en: "A massive weapon of terrible power that demands perfection from its wielder.",
      fr: "Une arme massive d'une puissance terrible qui exige la perfection de son porteur.",
    },
    effects: {
      en: "Deal +1d12 damage on hit, but take damage on a miss.",
      fr: "Infligez +1d12 dégâts en cas de touche, mais subissez des dégâts en cas de raté.",
    },
  },
  {
    id: "trinket-of-ill-omen",
    name: { en: "Trinket of Ill Omen", fr: "Babiole de mauvais augure" },
    rarity: "rare",
    description: {
      en: "A small, unsettling charm that radiates misfortune. It weakens your defenses but strengthens your magic.",
      fr: "Un petit charme inquiétant qui irradie la malchance. Il affaiblit vos défenses mais renforce votre magie.",
    },
    effects: {
      en: "-1 to all saves, but +1 to your save DC.",
      fr: "-1 à tous les jets de sauvegarde, mais +1 à votre SD.",
    },
  },
  {
    id: "mindlink-daggers",
    name: { en: "Mindlink Daggers", fr: "Dagues de lien mental" },
    rarity: "rare",
    description: {
      en: "A pair of daggers connected by an invisible psychic thread. Holders can share thoughts telepathically.",
      fr: "Une paire de dagues reliées par un fil psychique invisible. Les porteurs peuvent partager leurs pensées par télépathie.",
    },
    effects: {
      en: "Holders of each dagger can share thoughts telepathically with each other.",
      fr: "Les porteurs de chaque dague peuvent partager leurs pensées par télépathie.",
    },
  },
  {
    id: "bloodstained-quill",
    name: { en: "Bloodstained Quill", fr: "Plume tâchée de sang" },
    rarity: "uncommon",
    description: {
      en: "A quill permanently stained with crimson ink. When touched to parchment near a corpse, it writes their final thoughts.",
      fr: "Une plume tachée d'encre cramoisie de façon permanente. Quand elle touche un parchemin près d'un cadavre, elle écrit ses dernières pensées.",
    },
    effects: {
      en: "Write the last words of a dead creature.",
      fr: "Écrit les dernières paroles d'une créature morte.",
    },
  },
  {
    id: "eyes-of-the-street",
    name: { en: "Eyes of the Street", fr: "Yeux de la rue" },
    rarity: "uncommon",
    description: {
      en: "A pair of mismatched glass eyes. When held, you can see through the senses of nearby rats and pigeons.",
      fr: "Une paire d'yeux de verre dépareillés. Quand on les tient, on peut voir à travers les sens des rats et pigeons à proximité.",
    },
    effects: {
      en: "See through the senses of nearby rats and pigeons.",
      fr: "Voir à travers les sens des rats et pigeons à proximité.",
    },
  },
  {
    id: "handwraps-of-force",
    name: { en: "Handwraps of Force", fr: "Bracelets de force" },
    rarity: "rare",
    description: {
      en: "Cloth wraps imbued with kinetic energy. Each strike sends a shockwave that can push enemies or propel you.",
      fr: "Des bandages en tissu imprégnés d'énergie cinétique. Chaque frappe envoie une onde de choc qui peut repousser les ennemis ou vous propulser.",
    },
    effects: {
      en: "Push enemies on unarmed strike. Can also propel yourself.",
      fr: "Repousse les ennemis sur une frappe à mains nues. Peut aussi vous propulser.",
    },
  },
  {
    id: "resolute-fangs-golden-bastion",
    name: { en: "Resolute Fangs Golden Bastion", fr: "Bastion doré des Crocs résolus" },
    rarity: "legendary",
    description: {
      en: "A shield of immense power, forged by the Resolute Fangs. It gleams with golden light and locks onto enemies.",
      fr: "Un bouclier d'une puissance immense, forgé par les Crocs résolus. Il brille d'une lumière dorée et s'accroche aux ennemis.",
    },
    effects: {
      en: "+8 Armor shield. When you use Defend, you also Grapple the attacker.",
      fr: "+8 Armure (bouclier). Quand vous utilisez Défendre, vous Empoignez aussi l'attaquant.",
    },
  },
  {
    id: "key-of-doors",
    name: { en: "Key of Doors", fr: "Passe-partout" },
    rarity: "very-rare",
    description: {
      en: "An ornate skeleton key that remembers every door it has opened. It can open a passage to any previously visited doorway.",
      fr: "Un passe-partout orné qui se souvient de chaque porte qu'il a ouverte. Il peut ouvrir un passage vers n'importe quelle porte déjà visitée.",
    },
    effects: {
      en: "Open any door to create a passage to a previously visited doorway.",
      fr: "Ouvrez n'importe quelle porte pour créer un passage vers une porte déjà visitée.",
    },
  },
  {
    id: "grim-coronet",
    name: { en: "Grim Coronet", fr: "Couronne funeste" },
    rarity: "rare",
    description: {
      en: "A dark iron crown that refuses to let its wearer go gently. Death is delayed, but never denied.",
      fr: "Une couronne de fer sombre qui refuse de laisser son porteur partir en douceur. La mort est retardée, mais jamais refusée.",
    },
    effects: {
      en: "Gain 3 extra actions before dying when reduced to 0 HP.",
      fr: "Gagnez 3 actions supplémentaires avant de mourir quand vous êtes réduit à 0 PV.",
    },
  },
  {
    id: "pocket-cauldron",
    name: { en: "Pocket Cauldron", fr: "Chaudron de poche" },
    rarity: "rare",
    description: {
      en: "A tiny cauldron that expands when placed on a fire. It can brew one of three elixirs during a Safe Rest.",
      fr: "Un petit chaudron qui s'agrandit quand il est placé sur un feu. Il peut préparer un des trois élixirs pendant un Repos sûr.",
    },
    effects: {
      en: "Brew 1 of 3 elixirs during a Safe Rest.",
      fr: "Préparez 1 des 3 élixirs pendant un Repos sûr.",
    },
  },
  {
    id: "phoenix-helm",
    name: { en: "Phoenix Helm", fr: "Heaume du phénix" },
    rarity: "legendary",
    description: {
      en: "A helm shaped like a phoenix's head. When the wearer dies, they explode in a burst of flame and are reborn.",
      fr: "Un heaume en forme de tête de phénix. Quand le porteur meurt, il explose en une gerbe de flammes et renaît.",
    },
    effects: {
      en: "On death, explode in flames and revive with HP.",
      fr: "À la mort, explosez en flammes et revenez à la vie avec des PV.",
    },
  },
  {
    id: "ball-of-spiders",
    name: { en: "Ball of Spiders", fr: "Boule d'araignées" },
    rarity: "uncommon",
    description: {
      en: "A writhing ball of enchanted spiders held together by silk. When thrown, they scatter and terrify everything nearby.",
      fr: "Une boule grouillante d'araignées enchantées maintenues par de la soie. Quand elle est lancée, elles se dispersent et terrifient tout ce qui est à proximité.",
    },
    effects: {
      en: "Throw to Frighten all creatures in a 2x2 area.",
      fr: "Lancez pour Effrayer toutes les créatures dans une zone de 2x2.",
    },
  },
  {
    id: "skitter-shoes",
    name: { en: "Skitter Shoes", fr: "Carapatins" },
    rarity: "rare",
    description: {
      en: "Boots with tiny insectoid legs along the soles. They cling to any surface, allowing the wearer to walk on walls and ceilings.",
      fr: "Des bottes dotées de minuscules pattes d'insecte le long des semelles. Elles s'accrochent à n'importe quelle surface, permettant au porteur de marcher sur les murs et les plafonds.",
    },
    effects: {
      en: "Walk on walls and ceilings at half speed.",
      fr: "Marchez sur les murs et les plafonds à demi-vitesse.",
    },
  },
  {
    id: "button-of-protection",
    name: { en: "Button of Protection", fr: "Bouton de protection" },
    rarity: "rare",
    description: {
      en: "A small, unassuming button that pulses with protective magic. Press it at just the right moment to deflect an attack.",
      fr: "Un petit bouton modeste qui pulse de magie protectrice. Appuyez dessus au bon moment pour dévier une attaque.",
    },
    effects: {
      en: "Use a Reaction to cause one attack targeting you to miss.",
      fr: "Utilisez une Réaction pour faire rater une attaque vous ciblant.",
    },
  },
];

export const wands: Wand[] = [
  {
    id: "wand-of-firestep",
    name: { en: "Wand of Firestep", fr: "Baguette de Pas de feu" },
    rarity: "uncommon",
    charges: 3,
    rechargeMethod: { en: "Heat in a forge then quench in oil.", fr: "Chauffez dans une forge puis trempez dans l'huile." },
    spell: { en: "Firestep (Cantrip)", fr: "Pas de feu (Cantrip)" },
    description: {
      en: "A charred wooden wand that is warm to the touch. It flickers with embers when waved.",
      fr: "Une baguette en bois carbonisé chaude au toucher. Elle scintille de braises quand on l'agite.",
    },
  },
  {
    id: "wand-of-dread-visage",
    name: { en: "Wand of Dread Visage", fr: "Baguette de Visage d'effroi" },
    rarity: "uncommon",
    charges: 2,
    rechargeMethod: { en: "Place in a corpse until only bones remain.", fr: "Placez dans un cadavre jusqu'à ce qu'il ne reste que les os." },
    spell: { en: "Dread Visage (Tier 2)", fr: "Visage d'effroi (Palier 2)" },
    description: {
      en: "A bone-white wand carved from a femur. Shadows seem to gather around its tip.",
      fr: "Une baguette blanc-os sculptée dans un fémur. Les ombres semblent se rassembler autour de sa pointe.",
    },
  },
  {
    id: "wand-of-fly",
    name: { en: "Wand of Fly", fr: "Baguette de Vol" },
    rarity: "uncommon",
    charges: 2,
    rechargeMethod: { en: "Give to a wild bird and retrieve it.", fr: "Donnez à un oiseau sauvage puis récupérez-la." },
    spell: { en: "Fly (Tier 3)", fr: "Vol (Palier 3)" },
    description: {
      en: "A light wand made from a hollow reed. Feathers sprout from it when activated.",
      fr: "Une baguette légère faite d'un roseau creux. Des plumes en jaillissent quand elle est activée.",
    },
  },
  {
    id: "wand-of-glacier-strike",
    name: { en: "Wand of Glacier Strike", fr: "Baguette de Frappe glaciaire" },
    rarity: "very-rare",
    charges: 1,
    rechargeMethod: { en: "Leave at the bottom of a lake until it freezes and thaws.", fr: "Laissez au fond d'un lac jusqu'à ce qu'il gèle et dégèle." },
    spell: { en: "Glacier Strike (Tier 8)", fr: "Frappe glaciaire (Palier 8)" },
    description: {
      en: "A translucent blue wand of solid ice that never melts. The air around it is frigid.",
      fr: "Une baguette bleu translucide de glace solide qui ne fond jamais. L'air autour est glacial.",
    },
  },
  {
    id: "wand-of-ride-the-lightning",
    name: { en: "Wand of Ride the Lightning", fr: "Baguette de Chevauchée de l'éclair" },
    rarity: "very-rare",
    charges: 2,
    rechargeMethod: { en: "Place at the highest point and wait for 3 thunderstorms.", fr: "Placez au point le plus haut et attendez 3 orages." },
    spell: { en: "Ride the Lightning (Tier 6)", fr: "Chevauchée de l'éclair (Palier 6)" },
    description: {
      en: "A copper wand that crackles with static. Hair stands on end when it is nearby.",
      fr: "Une baguette en cuivre qui crépite d'électricité statique. Les cheveux se dressent quand elle est à proximité.",
    },
  },
  {
    id: "wand-of-barrier-of-wind",
    name: { en: "Wand of Barrier of Wind", fr: "Baguette de Barrière de vent" },
    rarity: "rare",
    charges: 3,
    rechargeMethod: { en: "Hang with wind chimes for 3 days.", fr: "Suspendez avec des carillons éoliens pendant 3 jours." },
    spell: { en: "Barrier of Wind (Tier 2)", fr: "Barrière de vent (Palier 2)" },
    description: {
      en: "A slender wand of polished bamboo. A gentle breeze follows it wherever it goes.",
      fr: "Une baguette fine en bambou poli. Une brise légère la suit partout où elle va.",
    },
  },
  {
    id: "wand-of-sacrifice",
    name: { en: "Wand of Sacrifice", fr: "Baguette de Sacrifice" },
    rarity: "very-rare",
    charges: 1,
    rechargeMethod: { en: "Plant in a garden until flowers bloom around it.", fr: "Plantez dans un jardin jusqu'à ce que des fleurs éclosent autour." },
    spell: { en: "Sacrifice (Tier 6)", fr: "Sacrifice (Palier 6)" },
    description: {
      en: "A wand of living wood that weeps sap. It feels warm and sorrowful to hold.",
      fr: "Une baguette de bois vivant qui pleure de la sève. Elle est chaude et mélancolique au toucher.",
    },
  },
  {
    id: "elderwyrms-majesty",
    name: { en: "Elderwyrm's Majesty", fr: "Majesté de l'Ancienne Wyrm" },
    rarity: "legendary",
    charges: 1,
    rechargeMethod: { en: "Gift it to an ancient dragon and ask for it back.", fr: "Offrez-la à un dragon ancien et redemandez-la." },
    spell: { en: "Dragonform (Tier 9)", fr: "Forme draconique (Palier 9)" },
    description: {
      en: "A massive wand of petrified dragonbone, thrumming with primal power. Scales grow on the hand that holds it.",
      fr: "Une baguette massive en os de dragon pétrifié, vibrant de puissance primordiale. Des écailles poussent sur la main qui la tient.",
    },
  },
  {
    id: "heartwood-splinter-of-the-tree-of-life",
    name: { en: "Heartwood Splinter of the Tree of Life", fr: "Éclat de coeur de l'Arbre de Vie" },
    rarity: "legendary",
    charges: 1,
    rechargeMethod: { en: "Sing a sacred hymn over it for 100 years.", fr: "Chantez un hymne sacré au-dessus pendant 100 ans." },
    spell: { en: "Redeem (Tier 9)", fr: "Rédemption (Palier 9)" },
    description: {
      en: "A sliver of golden wood radiating warmth and life. Flowers bloom where its shadow falls.",
      fr: "Un éclat de bois doré irradiant chaleur et vie. Des fleurs éclosent là où tombe son ombre.",
    },
  },
];
