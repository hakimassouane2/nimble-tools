"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Stat, HeroClass } from "@/data/types";
import {
  armor,
  meleeWeapons,
  rangedWeapons,
  adventuringGear,
} from "@/data/equipment";
import { calculateInventorySlots, parseCostToGold } from "@/lib/character-rules";
import { t as tl, tCost } from "@/lib/utils";

type Props = {
  locale: string;
  classData: HeroClass;
  stats: Record<Stat, number>;
  equipmentChoice: "starting-gear" | "gold" | null;
  equipment: string[];
  goldRemaining: number;
  onUpdate: (
    choice: "starting-gear" | "gold",
    equipment: string[],
    goldRemaining: number
  ) => void;
};

type EquipmentTab = "armor" | "melee" | "ranged" | "gear";

export function StepEquipment({
  locale,
  classData,
  stats,
  equipmentChoice,
  equipment,
  goldRemaining,
  onUpdate,
}: Props) {
  const t = useTranslations("builder");
  const [activeTab, setActiveTab] = useState<EquipmentTab>("armor");
  const [itemCosts, setItemCosts] = useState<number[]>([]);
  const maxSlots = calculateInventorySlots(stats.STR);

  function handleChoiceSelect(choice: "starting-gear" | "gold") {
    if (choice === "starting-gear") {
      const gear = classData.startingGear.map((g) => tl(g, locale));
      onUpdate("starting-gear", gear, 0);
    } else {
      onUpdate("gold", equipment.length > 0 ? equipment : [], goldRemaining > 0 ? goldRemaining : 50);
    }
  }

  function getItemDisplayName(itemId: string): string {
    const all = [
      ...armor.map((i) => ({ id: i.id, name: i.name })),
      ...meleeWeapons.map((i) => ({ id: i.id, name: i.name })),
      ...rangedWeapons.map((i) => ({ id: i.id, name: i.name })),
      ...adventuringGear.map((i) => ({ id: i.id, name: i.name })),
    ];
    const found = all.find((i) => i.id === itemId);
    return found ? tl(found.name, locale) : itemId;
  }

  function addItem(itemId: string, cost: string) {
    const goldCost = parseCostToGold(cost);
    if (goldCost > goldRemaining) return;
    if (equipment.length >= maxSlots) return;
    const displayName = getItemDisplayName(itemId);
    setItemCosts((prev) => [...prev, goldCost]);
    onUpdate("gold", [...equipment, displayName], Math.round((goldRemaining - goldCost) * 100) / 100);
  }

  function removeItem(index: number) {
    const refund = itemCosts[index] ?? 0;
    const next = [...equipment];
    next.splice(index, 1);
    setItemCosts((prev) => {
      const nextCosts = [...prev];
      nextCosts.splice(index, 1);
      return nextCosts;
    });
    onUpdate("gold", next, Math.round((goldRemaining + refund) * 100) / 100);
  }

  const tabs: { key: EquipmentTab; label: string }[] = [
    { key: "armor", label: locale === "fr" ? "Armure" : "Armor" },
    { key: "melee", label: locale === "fr" ? "Mêlée" : "Melee" },
    { key: "ranged", label: locale === "fr" ? "Distance" : "Ranged" },
    { key: "gear", label: locale === "fr" ? "Équipement" : "Gear" },
  ];

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("equipmentTitle")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("equipmentDesc")}</p>

      {/* Choice selection */}
      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => handleChoiceSelect("starting-gear")}
          className={`rounded-lg border p-4 text-left transition-colors ${
            equipmentChoice === "starting-gear"
              ? "border-accent bg-accent/10"
              : "border-border bg-surface hover:bg-surface-hover"
          }`}
        >
          <h3 className="font-semibold text-foreground">{t("startingGear")}</h3>
          <p className="text-xs text-muted">{t("startingGearDesc")}</p>
        </button>
        <button
          onClick={() => handleChoiceSelect("gold")}
          className={`rounded-lg border p-4 text-left transition-colors ${
            equipmentChoice === "gold"
              ? "border-accent bg-accent/10"
              : "border-border bg-surface hover:bg-surface-hover"
          }`}
        >
          <h3 className="font-semibold text-foreground">{t("fiftyGold")}</h3>
          <p className="text-xs text-muted">{t("fiftyGoldDesc")}</p>
        </button>
      </div>

      {/* Starting gear display */}
      {equipmentChoice === "starting-gear" && (
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="mb-2 font-medium text-foreground">
            {t("yourInventory")}
          </h3>
          <ul className="space-y-1">
            {classData.startingGear.map((item, i) => (
              <li key={i} className="text-sm text-muted">
                • {tl(item, locale)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gold shopping UI */}
      {equipmentChoice === "gold" && (
        <div>
          <div className="mb-4 flex gap-4 text-sm">
            <span className="font-medium text-foreground">
              {t("goldRemaining", { gold: goldRemaining })}
            </span>
            <span className="text-muted">
              {t("slotsUsed", { used: equipment.length, max: maxSlots })}
            </span>
          </div>

          {/* Category tabs */}
          <div className="mb-3 flex gap-1 rounded-lg border border-border bg-surface p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-accent text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Item list */}
          <div className="mb-4 max-h-64 space-y-1 overflow-y-auto">
            {activeTab === "armor" &&
              armor.map((item) => {
                const cost = parseCostToGold(item.cost);
                const canAfford = cost <= goldRemaining;
                const canFit = equipment.length < maxSlots;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface p-2"
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {tl(item.name, locale)}
                      </span>
                      <span className="ml-2 text-xs text-muted">
                        AV: {item.armorValue}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">
                        {tCost(item.cost, locale)}
                      </span>
                      <button
                        onClick={() => addItem(item.id, item.cost)}
                        disabled={!canAfford || !canFit}
                        className="rounded px-2 py-0.5 text-xs font-medium bg-accent text-background hover:bg-accent/90 disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            {activeTab === "melee" &&
              meleeWeapons.map((item) => {
                const cost = parseCostToGold(item.cost);
                const canAfford = cost <= goldRemaining;
                const canFit = equipment.length < maxSlots;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface p-2"
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {tl(item.name, locale)}
                      </span>
                      <span className="ml-2 text-xs text-muted">
                        {item.damage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">
                        {tCost(item.cost, locale)}
                      </span>
                      <button
                        onClick={() => addItem(item.id, item.cost)}
                        disabled={!canAfford || !canFit}
                        className="rounded px-2 py-0.5 text-xs font-medium bg-accent text-background hover:bg-accent/90 disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            {activeTab === "ranged" &&
              rangedWeapons.map((item) => {
                const cost = parseCostToGold(item.cost);
                const canAfford = cost <= goldRemaining;
                const canFit = equipment.length < maxSlots;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface p-2"
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {tl(item.name, locale)}
                      </span>
                      <span className="ml-2 text-xs text-muted">
                        {item.damage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">
                        {tCost(item.cost, locale)}
                      </span>
                      <button
                        onClick={() => addItem(item.id, item.cost)}
                        disabled={!canAfford || !canFit}
                        className="rounded px-2 py-0.5 text-xs font-medium bg-accent text-background hover:bg-accent/90 disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            {activeTab === "gear" &&
              adventuringGear.map((item) => {
                const cost = parseCostToGold(item.cost);
                const canAfford = cost <= goldRemaining;
                const canFit = equipment.length < maxSlots;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface p-2"
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">
                        {tl(item.name, locale)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">
                        {tCost(item.cost, locale)}
                      </span>
                      <button
                        onClick={() => addItem(item.id, item.cost)}
                        disabled={!canAfford || !canFit}
                        className="rounded px-2 py-0.5 text-xs font-medium bg-accent text-background hover:bg-accent/90 disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Inventory list */}
          <div className="rounded-lg border border-border bg-surface p-3">
            <h3 className="mb-2 text-sm font-medium text-foreground">
              {t("yourInventory")}
            </h3>
            {equipment.length === 0 ? (
              <p className="text-xs text-muted">{t("emptyInventory")}</p>
            ) : (
              <ul className="space-y-1">
                {equipment.map((itemName, i) => (
                  <li
                    key={`${itemName}-${i}`}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted">{itemName}</span>
                    <button
                      onClick={() => removeItem(i)}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      {t("removeItem")}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
