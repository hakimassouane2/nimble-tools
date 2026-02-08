import type { RulesCategory } from "../types";

export const combatRules: RulesCategory = {
  id: "combat",
  title: { en: "Combat", fr: "Combat" },
  sections: [
    {
      id: "heroic-actions",
      title: { en: "Heroic Actions", fr: "Actions héroïques" },
      content: {
        en: "On your turn, heroes get **3 actions** to attack, move, cast spells, etc. Generally doing any single thing costs 1 action. All 3 actions recharge at the end of your turn.\n\n**Attack** — Roll the die listed on the spell, weapon, or ability and deal that much damage. Roll a 1 = miss. The leftmost die is the Primary Die, determining hit or miss.\n\n**Exploding Critical Hits** — Rolling max on a Primary Die is a crit. Roll the Primary Die again and add to total. Repeat on max. Crits ignore monster armor.\n\n**Rushed Attacks** — Additional attacks after the first impose cumulative disadvantage.\n\n**Cast Spell** — Requires 1 hand free (or focus), ability to speak, and may require mana. Mana cost equals spell tier; cantrips cost 0. Upcasting: spend additional mana up to your highest unlocked tier.\n\n**Move** — Move up to your speed (6 spaces unless noted). Can be broken up with other actions. Difficult Terrain halves speed. Climbing counts as Difficult Terrain.\n\n**Assess** — DC 12 skill check to: Ask a Question about enemies/environment, Create an Opening (+1 to next Primary Die vs target), or Anticipate Danger (-1 to Primary Dice against you). Cannot use same skill twice in one encounter.\n\n**Free Actions** — Simple tasks (open door, shout, drop item, end concentration) for free 1/turn.",
        fr: "À votre tour, les héros disposent de **3 actions** pour attaquer, se déplacer, lancer des sorts, etc. Généralement, effectuer une seule chose coûte 1 action. Les 3 actions se rechargent à la fin de votre tour.\n\n**Attaque** — Lancez le dé indiqué sur le sort, l'arme ou la capacité et infligez autant de dégâts. Un 1 = raté. Le dé le plus à gauche est le Dé primaire, déterminant si l'attaque touche ou rate.\n\n**Coups critiques explosifs** — Obtenir le maximum sur un Dé primaire est un Coup critique. Relancez le Dé primaire et ajoutez au total. Répétez sur un maximum. Les Coups critiques ignorent l'Armure des monstres.\n\n**Attaques précipitées** — Les attaques supplémentaires après la première imposent un Désavantage cumulatif.\n\n**Lancer un sort** — Nécessite 1 main libre (ou un focalisateur), la capacité de parler, et peut nécessiter du mana. Le coût en mana est égal au palier du sort ; les cantrips coûtent 0. Incantation supérieure : dépensez du mana supplémentaire jusqu'à votre palier le plus élevé débloqué.\n\n**Déplacement** — Déplacez-vous jusqu'à votre Vitesse (6 cases sauf indication contraire). Peut être fractionné avec d'autres actions. Le terrain difficile divise la Vitesse par deux. L'escalade compte comme du terrain difficile.\n\n**Évaluation** — Test de compétence SD 12 pour : poser une question sur les ennemis/l'environnement, créer une ouverture (+1 au prochain Dé primaire contre la cible), ou anticiper le danger (-1 aux Dés primaires contre vous). Impossible d'utiliser la même compétence deux fois dans une même rencontre.\n\n**Actions gratuites** — Tâches simples (ouvrir une porte, crier, lâcher un objet, mettre fin à la Concentration) gratuitement 1 fois/tour.",
      },
    },
    {
      id: "heroic-reactions",
      title: { en: "Heroic Reactions", fr: "Réactions héroïques" },
      content: {
        en: "Reactions cost 1 action and are performed when it is not your turn. Each reaction max 1/round.\n\n**Defend** — Reduce damage from any single attack by your Armor.\n\n**Interpose** — If a creature within 2 spaces would be struck, push them out and become the new target. Can Interpose AND Defend together if you have enough actions.\n\n**Opportunity Attack** — Melee attack with disadvantage against an adjacent enemy moving away. Only heroes can make opportunity attacks.\n\n**Help** — Grant an ally advantage on a roll (limit: one Help per roll). GM may call for a skill check.",
        fr: "Les Réactions coûtent 1 action et sont effectuées quand ce n'est pas votre tour. Chaque réaction est limitée à 1 fois/round.\n\n**Défendre** — Réduisez les dégâts d'une seule attaque de votre valeur d'Armure.\n\n**S'interposer** — Si une créature à 2 cases ou moins allait être frappée, poussez-la et devenez la nouvelle cible. Vous pouvez vous interposer ET défendre ensemble si vous avez assez d'actions.\n\n**Attaque d'opportunité** — Attaque de mêlée avec Désavantage contre un ennemi adjacent qui s'éloigne. Seuls les héros peuvent effectuer des attaques d'opportunité.\n\n**Aider** — Accordez à un allié l'Avantage sur un jet (limite : une Aide par jet). Le MJ peut demander un test de compétence.",
      },
    },
    {
      id: "initiative",
      title: { en: "Initiative & Turn Order", fr: "Initiative & Ordre de jeu" },
      content: {
        en: "**Starting Combat** — Roll 1d20 + Initiative bonus (typically DEX).\n- Single digit: start with 1 action\n- 2 digits: start with 2 actions\n- 20+: start with all 3 actions\n- At end of turn, gain all 3 actions back.\n\n**Surprise** — GM may grant advantage on Initiative or skip rolling entirely.\n\n**Turn Order** — Heroes go first by default. Players ready first go first, play proceeds clockwise. Monsters act last (some fast ones may act sooner).\n\n**Turns, Rounds, & Encounters** — A Turn is ~6 seconds. A Round is all players and monsters acting. An Encounter is all rounds in a combat.",
        fr: "**Début du combat** — Lancez 1d20 + bonus d'Initiative (généralement DEX).\n- Un seul chiffre : commencez avec 1 action\n- Deux chiffres : commencez avec 2 actions\n- 20+ : commencez avec les 3 actions\n- À la fin de votre tour, récupérez les 3 actions.\n\n**Surprise** — Le MJ peut accorder l'Avantage sur l'Initiative ou ne pas lancer du tout.\n\n**Ordre de jeu** — Les héros jouent en premier par défaut. Les joueurs prêts en premier jouent en premier, le jeu se poursuit dans le sens des aiguilles d'une montre. Les monstres agissent en dernier (certains rapides peuvent agir plus tôt).\n\n**Tours, Rounds & Rencontres** — Un Tour dure ~6 secondes. Un Round correspond à l'action de tous les joueurs et monstres. Une Rencontre comprend tous les rounds d'un combat.",
      },
    },
    {
      id: "monsters-armor",
      title: { en: "Monsters & Armor", fr: "Monstres & Armure" },
      content: {
        en: "Most monsters are **unarmored**. **Medium Armor**: take damage from only the dice rolled, ignoring modifiers. **Heavy Armor**: take only half dice damage, ignoring modifiers. Crits and vulnerabilities ignore monster armor.\n\n**Minions** — 1 HP, die from any damage, cannot crit. Move and attack together. Defend against them as a single attack. Overflow damage may hit adjacent minions.",
        fr: "La plupart des monstres sont **sans armure**. **Armure moyenne** : ne subissent que les dégâts des dés lancés, en ignorant les modificateurs. **Armure lourde** : ne subissent que la moitié des dégâts des dés, en ignorant les modificateurs. Les Coups critiques et les vulnérabilités ignorent l'Armure des monstres.\n\n**Sbires** — 1 PV, meurent de n'importe quels dégâts, ne peuvent pas faire de Coup critique. Se déplacent et attaquent ensemble. Défendez contre eux comme une seule attaque. Les dégâts excédentaires peuvent toucher les sbires adjacents.",
      },
    },
  ],
};
