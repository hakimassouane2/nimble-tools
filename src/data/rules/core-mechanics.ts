import type { RulesCategory } from "../types";

export const coreMechanics: RulesCategory = {
  id: "core-mechanics",
  title: { en: "Core Mechanics", fr: "Mécaniques de base" },
  sections: [
    {
      id: "skill-checks",
      title: {
        en: "Skill Checks & Saves",
        fr: "Tests de compétence & Jets de sauvegarde",
      },
      content: {
        en: "**Skill Checks** - Roll 1d20 + skill bonus (max +12). Meet or exceed DC to succeed. Roll 1 always fails, 20 always succeeds.\n\n**DC Scale:**\n- Easy (DC 8)\n- Medium (DC 12)\n- Challenging (DC 15)\n- Very Difficult (DC 18)\n- Extremely Difficult (DC 20+)\n\n**Saves** - Roll 1d20 + relevant stat. You can choose to fail any save.\n- STR: Resist forced movement, restraint, poison, extreme temperatures\n- DEX: Dive for cover, stay on feet on ice\n- INT: See through tricks and illusions\n- WIL: Resist charm or fear\n\nHero save DC is typically 10+KEY. Each hero has 1 advantaged save, 1 disadvantaged save, and 2 neutral saves.",
        fr: "**Tests de compétence** - Lancez 1d20 + bonus de compétence (max +12). Atteignez ou dépassez le SD pour réussir. Un 1 échoue toujours, un 20 réussit toujours.\n\n**Échelle de SD :**\n- Facile (SD 8)\n- Moyen (SD 12)\n- Difficile (SD 15)\n- Très difficile (SD 18)\n- Extrêmement difficile (SD 20+)\n**Jets de sauvegarde** - Lancez 1d20 + caractéristique pertinente. Vous pouvez choisir d'échouer à n'importe quel jet de sauvegarde.\n- FOR : Résister au déplacement forcé, à l'entrave, au poison, aux températures extrêmes\n- DEX : Se jeter à couvert, rester debout sur la glace\n- INT : Percer les ruses et les illusions\n- VOL : Résister au charme ou à la peur\n\nLe SD de sauvegarde d'un héros est généralement de 10+CLÉ. Chaque héros a 1 jet de sauvegarde avec Avantage, 1 avec Désavantage et 2 neutres.",
      },
    },
    {
      id: "advantage-disadvantage",
      title: { en: "Advantage & Disadvantage", fr: "Avantage & Désavantage" },
      content: {
        en: "**Advantage** - Roll 1 additional die and remove the lowest. Multiple instances: roll extra die for each, remove lowest.\n\n**Disadvantage** - Roll 1 additional die and remove the highest. Multiple instances: roll extra die for each, remove highest.\n\nEach instance of advantage cancels one instance of disadvantage before rolling.",
        fr: "**Avantage** - Lancez 1 dé supplémentaire et retirez le plus bas. Instances multiples : lancez un dé supplémentaire pour chaque instance, retirez le plus bas.\n\n**Désavantage** - Lancez 1 dé supplémentaire et retirez le plus haut. Instances multiples : lancez un dé supplémentaire pour chaque instance, retirez le plus haut.\n\nChaque instance d'Avantage annule une instance de Désavantage avant de lancer les dés.",
      },
    },
    {
      id: "hp-dying-wounds",
      title: {
        en: "Hit Points, Dying & Wounds",
        fr: "Points de vie, Mourant & Blessures",
      },
      content: {
        en: "**Hit Points (HP)** - Damage reduces HP (min 0). At 0 HP: gain 1 Wound and the Dying condition until healed.\n\n**While Dying:** Limited to 1 action. Attacking/casting causes 1 Wound (DC 10 STR save to avoid). Taking damage causes 2 Wounds (crit: 3).\n\n**Wounds** - Serious injuries. Recover 1/Safe Rest typically.\n\n**Death** - 6 Wounds = death. Revival is rare and costly.\n\n**Temporary HP** - Reduced first when taking damage. Don't combine (keep one). Expire after Safe Rest.",
        fr: "**Points de vie (PV)** - Les dégâts réduisent les PV (min 0). À 0 PV : vous recevez 1 Blessure et l'état Mourant jusqu'à ce que vous soyez soigné.\n\n**En étant Mourant :** Limité à 1 action. Attaquer/lancer un sort inflige 1 Blessure (jet de sauvegarde FOR SD 10 pour éviter). Subir des dégâts inflige 2 Blessures (Coup critique : 3).\n\n**Blessures** - Blessures graves. On en récupère généralement 1 par Repos sûr.\n\n**Mort** - 6 Blessures = mort. La résurrection est rare et coûteuse.\n\n**PV temporaires** - Réduits en premier quand vous subissez des dégâts. Ne se cumulent pas (gardez-en un). Expirent après un Repos sûr.",
      },
    },
    {
      id: "speed-range",
      title: { en: "Speed & Range", fr: "Vitesse & Portée" },
      content: {
        en: "**Speed** - Default 6 spaces. Move through ally spaces freely. Move through enemy spaces as difficult terrain.\n\n**Range & Reach** - Default Reach 1 if unspecified. In melee: Ranged attacks have disadvantage. Long Range: gain disadvantage for +2 Range (max +6).\n\n**Falling & Forced Movement** - Stopped by obstacle: 1d6 per space shortened. Hit another creature: split damage. Falling: 1d6 per 10 ft (2 spaces).",
        fr: "**Vitesse** - 6 cases par défaut. Traversez les cases alliées librement. Traversez les cases ennemies comme du terrain difficile.\n\n**Portée & Allonge** - Allonge par défaut de 1 si non spécifié. En mêlée : les attaques à distance ont le Désavantage. Longue portée : gagnez le Désavantage pour +2 de Portée (max +6).\n\n**Chute & Déplacement forcé** - Arrêté par un obstacle : 1d6 par case raccourcie. Touche une autre créature : divisez les dégâts. Chute : 1d6 par 3 m (2 cases).",
      },
    },
    {
      id: "concentration",
      title: { en: "Concentration", fr: "Concentration" },
      content: {
        en: "Only 1 concentration activity at a time. On crit while concentrating: DC 10 STR save or concentration breaks. Automatically broken at 0 HP or when incapacitated.",
        fr: "1 seule activité de Concentration à la fois. Sur un Coup critique en Concentration : jet de sauvegarde FOR SD 10 ou la Concentration est brisée. Automatiquement brisée à 0 PV ou en étant Neutralisé.",
      },
    },
    {
      id: "cover-hiding",
      title: { en: "Cover & Hiding", fr: "Couvert & Camouflage" },
      content: {
        en: "**Cover** - Mostly obscured: disadvantage on attacks against you.\n\n**Full Cover** - Completely obscured: cannot be targeted.\n\n**Hiding** - Requires Cover + action + DC 15 Stealth check (auto-succeed with Full Cover). First attack from hiding has advantage. If the kill is unseen, stay hidden.",
        fr: "**Couvert** - Majoritairement masqué : Désavantage aux attaques contre vous.\n\n**Couvert total** - Complètement masqué : ne peut pas être ciblé.\n**Se cacher** - Nécessite un Couvert + une action + un test de Discrétion SD 15 (réussite automatique avec Couvert total). La première attaque depuis une cachette a l'Avantage. Si l'élimination passe inaperçue, vous restez caché.",
      },
    },
    {
      id: "grappling",
      title: { en: "Grappling", fr: "Empoignade" },
      content: {
        en: "Requires Reach and 1 free arm. Target makes STR or DEX save (DC 10+STR or DEX):\n- Your size or smaller: Grappled\n- Larger than you: you gain Riding condition\nEnded by: forced movement, incapacitation, or successful STR/DEX save (costs 1 action).",
        fr: "Nécessite une Allonge et 1 bras libre. La cible effectue un jet de sauvegarde FOR ou DEX (SD 10+FOR ou DEX) :\n- Votre taille ou plus petit : Empoigné\n- Plus grand que vous : vous obtenez l'état Monté\n\nPrend fin par : déplacement forcé, neutralisation, ou jet de sauvegarde FOR/DEX réussi (coûte 1 action).",
      },
    },
    {
      id: "size",
      title: { en: "Size Categories", fr: "Catégories de taille" },
      content: {
        en: "**Tiny** - Pocket-sized (many fit in 1 space)\n**Small** - Backpack-sized (2 fit in 1 space)\n**Medium** - Human-sized (1 per space)\n**Large** - Bear-sized (2x2 area)\n**Huge** - Small house (3x3 area)\n**Gargantuan** - Castle keep (4x4+)",
        fr: "**Très petit** - De la taille d'une poche (plusieurs tiennent dans 1 case)\n**Petit** - De la taille d'un sac à dos (2 tiennent dans 1 case)\n**Moyen** - De la taille d'un humain (1 par case)\n**Grand** - De la taille d'un ours (zone 2x2)\n**Très grand** - De la taille d'une petite maison (zone 3x3)\n**Gargantuesque** - De la taille d'un donjon de château (4x4+)",
      },
    },
    {
      id: "inventory",
      title: { en: "Inventory Slots", fr: "Emplacements d'inventaire" },
      content: {
        en: "Each hero has **10+STR inventory slots**.\n- 1 slot: one-handed weapon, shield, worn armor, javelin stack, 500 gp, or 2 potions\n- 2 slots: 2-handed weapon, unworn armor, bulky items\n- Small related items can be grouped\n\n**Currency:** 10 silver (sp) = 1 gold (gp). 1 sp ≈ humble meal; 1 gp ≈ sumptuous feast.",
        fr: "Chaque héros a **10+FOR emplacements d'inventaire**.\n- 1 emplacement : arme à une main, bouclier, armure portée, lot de javelots, 500 po, ou 2 potions\n- 2 emplacements : arme à deux mains, armure non portée, objets encombrants\n- Les petits objets liés peuvent être regroupés\n\n**Monnaie :** 10 pièces d'argent (pa) = 1 pièce d'or (po). 1 pa ≈ repas modeste ; 1 po ≈ festin somptueux.",
      },
    },
  ],
};
