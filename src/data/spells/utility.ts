import type { Spell } from "../types";

export const utilitySpells: Spell[] = [
  // ─── Fire Utility ───────────────────────────────────────────────────────────
  {
    id: "firebrand",
    name: { en: "Firebrand", fr: "Marque-feu" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Touch", fr: "Contact" },
    range: { en: "Touch", fr: "Contact" },
    effects: {
      en: "Touch a surface and secretly mark it with a symbol or brief message. Speaking a chosen command word while nearby reveals it.",
      fr: "Touchez une surface et marquez-la secrètement d'un symbole ou bref message. Prononcer un mot de commande choisi à proximité le révèle.",
    },
  },
  {
    id: "fire-step",
    name: { en: "Fire Step", fr: "Pas enflammé" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 minute", fr: "1 minute" },
    targetType: { en: "Self", fr: "Soi-même" },
    range: { en: "Self", fr: "Soi-même" },
    effects: {
      en: "Teleport to a fire source you can see.",
      fr: "Vous vous téléportez vers une source de feu visible.",
    },
  },
  {
    id: "kindle",
    name: { en: "Kindle", fr: "Attiser" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Range 6", fr: "Portée 6" },
    effects: {
      en: "Conjure a minor visual illusion. OR: Ignite a small, unheld item within Range 6.",
      fr: "Invoquez une illusion visuelle mineure. OU : Enflammez un petit objet non-tenu dans une Portée 6.",
    },
  },

  // ─── Ice Utility ────────────────────────────────────────────────────────────
  {
    id: "ice-disk",
    name: { en: "Ice Disk", fr: "Disque de glace" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 minute", fr: "1 minute" },
    targetType: { en: "Self", fr: "Soi-même" },
    range: { en: "Self", fr: "Soi-même" },
    effects: {
      en: "Conjure a disk of ice that floats just above the ground and follows you. It can carry up to 250 lbs./115 kg of weight for 1 hour or until you cast this spell again.",
      fr: "Invoquez un disque de glace qui flotte juste au-dessus du sol et vous suit. Il peut transporter jusqu'à 115 kg / 250 lbs pendant 1 heure ou jusqu'à ce que vous relanciez ce sort.",
    },
  },
  {
    id: "chillcraft",
    name: { en: "Chillcraft", fr: "Artisanat glacial" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Self/Area", fr: "Soi-même/Zone" },
    range: { en: "Self", fr: "Soi-même" },
    effects: {
      en: "Chill: Harmlessly freeze, thaw, or move a bath-sized amount of water near you. OR: Craft: Conjure a sheet of opaque, mirror-like, or transparent ice the size of a window or small door.",
      fr: "Refroidir : Gelez, dégelez ou déplacez sans danger un volume d'eau de la taille d'une baignoire près de vous. OU : Créer : Invoquez une plaque de glace opaque, miroir, ou transparente de la taille d'une fenêtre ou petite porte.",
    },
  },
  {
    id: "wintry-scrying",
    name: { en: "Wintry Scrying", fr: "Vision hivernale" },
    school: "utility",
    tier: 0,
    castingTime: { en: "10 minutes", fr: "10 minutes" },
    targetType: { en: "Self", fr: "Soi-même" },
    range: { en: "Self", fr: "Soi-même" },
    effects: {
      en: "Turn a small patch of water into a reflective icy mirror. Looking through it grants you vision of any desired location near this same body of water for 10 minutes.",
      fr: "Transformez une petite étendue d'eau en miroir glacé réfléchissant. Regarder à travers vous accorde la vue de n'importe quel endroit désiré près de ce même plan d'eau pendant 10 minutes.",
    },
  },

  // ─── Lightning Utility ──────────────────────────────────────────────────────
  {
    id: "spark-buddy",
    name: { en: "Spark Buddy", fr: "Zapagnon" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 minute", fr: "1 minute" },
    targetType: { en: "Summon", fr: "Invocation" },
    range: { en: "Self", fr: "Soi-même" },
    effects: {
      en: "Conjure a Tiny (squirrel-sized) electrical helper for up to 1 hour. It can fetch Tiny objects (~1 lb./500 g max), open unlocked doors, illuminate a small area, or deliver a harmless shock. If it takes damage or moves further than 6 spaces away from you, it dissipates into sparks.",
      fr: "Invoquez un assistant électrique Très petit (taille d'un écureuil) pour 1 heure max. Il peut récupérer des objets Très petits (~500 g / 1 lb max), ouvrir des portes non verrouillées, illuminer une petite zone, ou délivrer un choc inoffensif. S'il subit des dégâts ou s'éloigne de plus de 6 cases de vous, il se dissipe en étincelles.",
    },
  },
  {
    id: "spark-step",
    name: { en: "Spark Step", fr: "Foulétincelle" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Self", fr: "Soi-même" },
    range: { en: "Range 4", fr: "Portée 4" },
    effects: {
      en: "Teleport to a metal object.",
      fr: "Vous vous téléportez vers un objet métallique.",
    },
  },
  {
    id: "tempests-command",
    name: { en: "Tempest's Command", fr: "Ordre de la tempête" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Self/Special", fr: "Soi-même/Spécial" },
    range: { en: "Self", fr: "Soi-même" },
    effects: {
      en: "Dispel a minor magical effect, or temporarily suppress a stronger one (the more powerful an enchantment, the shorter the duration). OR: Voice of Thunder: Your eyes glow and your voice is amplified to a booming, thunder-like volume for 1 min.",
      fr: "Dissipez un effet magique mineur, ou supprimez temporairement un plus puissant (plus l'enchantement est puissant, plus la durée est courte). OU : Voix du tonnerre : Vos yeux brillent et votre voix est amplifiée à un volume tonitruant de tonnerre pendant 1 min.",
    },
  },

  // ─── Wind Utility ───────────────────────────────────────────────────────────
  {
    id: "wind-whisper",
    name: { en: "Wind Whisper", fr: "Murmures dans le vent" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Range 100 miles / 160 km", fr: "Portée 100 miles / 160 km" },
    effects: {
      en: "You whisper a message into the wind and it will be secretly carried to a specified target within 100 miles/160 km.",
      fr: "Vous murmurez un message dans le vent et il est secrètement porté à une cible spécifiée dans 100 miles / 160 km.",
    },
  },
  {
    id: "helpful-gust",
    name: { en: "Helpful Gust", fr: "Rafale bienveillante" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Reach 6", fr: "Allonge 6" },
    effects: {
      en: "Gently move a Tiny unheld item within Reach in any direction. OR: Generate an illusory scent.",
      fr: "Déplacez doucement un objet Très petit non-tenu dans l'Allonge dans n'importe quelle direction. OU : Générez une odeur illusoire.",
    },
  },
  {
    id: "feather-fall",
    name: { en: "Feather Fall", fr: "Feuille morte" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Reach 6", fr: "Allonge 6" },
    effects: {
      en: "Reaction: When a creature falls, cause them to gently float to the ground, unharmed.",
      fr: "Réaction : Quand une créature tombe, faites-la flotter doucement jusqu'au sol, indemne.",
    },
  },

  // ─── Radiant Utility ────────────────────────────────────────────────────────
  {
    id: "light",
    name: { en: "Light", fr: "Lumière" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Touch", fr: "Contact" },
    effects: {
      en: "Cause an item to brightly glow as a torch with radiant light for as long as you hold it.",
      fr: "Faites briller un objet aussi vivement qu'une torche avec une lumière radieuse tant que vous le tenez.",
    },
  },
  {
    id: "beautify",
    name: { en: "Beautify", fr: "Embellissement" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Touch", fr: "Contact" },
    effects: {
      en: "Clean stains or repair a small tear/break in a non-magical item, or conjure tiny beautiful things: flowers, butterflies, etc.",
      fr: "Nettoyez les taches ou réparez une petite déchirure/cassure sur un objet non magique, ou invoquez de petites belles choses : fleurs, papillons, etc.",
    },
  },
  {
    id: "bond-of-peace",
    name: { en: "Bond of Peace", fr: "Lien de Paix" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target/Self", fr: "Cible unique/Soi-même" },
    range: { en: "Line of sight", fr: "Ligne de vue" },
    effects: {
      en: "Bond: Telepathically communicate simple thoughts or feelings with a friendly creature you can see. OR: Peace: Imbue your spoken words with calming magic, granting advantage on any check made to soothe anger or fear in creatures who can hear you.",
      fr: "Lien : Communiquez télépathiquement des pensées ou émotions simples avec une créature amicale visible. OU : Paix : Imprégnez vos paroles d'une magie apaisante, accordant l'Avantage à tout test fait pour calmer la colère ou la peur des créatures qui peuvent vous entendre.",
    },
  },

  // ─── Necrotic Utility ───────────────────────────────────────────────────────
  {
    id: "gravecraft",
    name: { en: "Gravecraft", fr: "Art funéraire" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action / 1 minute", fr: "1 Action / 1 minute" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Touch", fr: "Contact" },
    effects: {
      en: "Gravemark (Action): Soil a surface with blood, filth, or other disgusting things. OR: Gravework (Casting time 1 minute): Shape/move a body-sized plot of earth.",
      fr: "Marque funéraire (Action) : Salissez une surface avec du sang, de la crasse ou autres choses dégoûtantes. OU : Façonnage (Temps d'incantation 1 minute) : Modelez/déplacez une parcelle de terre de la taille d'un corps.",
    },
  },
  {
    id: "false-face",
    name: { en: "False Face", fr: "Faux visage" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 minute", fr: "1 minute" },
    targetType: { en: "Self", fr: "Soi-même" },
    range: { en: "Self", fr: "Soi-même" },
    effects: {
      en: "Change your appearance to look like someone else for 10 minutes. Requires a piece of them.",
      fr: "Modifiez votre apparence pour ressembler à quelqu'un d'autre pendant 10 minutes. Nécessite un morceau de cette personne.",
    },
  },
  {
    id: "thought-leech",
    name: { en: "Thought Leech", fr: "Siphon de pensées" },
    school: "utility",
    tier: 0,
    castingTime: { en: "1 Action", fr: "1 Action" },
    targetType: { en: "Single Target", fr: "Cible unique" },
    range: { en: "Reach 6", fr: "Allonge 6" },
    effects: {
      en: "Read the surface thoughts of a creature within Reach. Creatures can sense you doing this and may not like it.",
      fr: "Lisez les pensées de surface d'une créature dans l'Allonge. Les créatures peuvent sentir que vous faites cela et peuvent ne pas apprécier.",
    },
  },
];
