import type { StatArrayOption } from "./types";

export const statArrayOptions: StatArrayOption[] = [
  {
    id: "standard",
    name: { en: "Standard", fr: "Standard" },
    values: [2, 2, 0, -1],
  },
  {
    id: "balanced",
    name: { en: "Balanced", fr: "Équilibré" },
    values: [2, 1, 1, 0],
  },
  {
    id: "min-max",
    name: { en: "Min-Max", fr: "Min-Max" },
    values: [3, 1, -1, -1],
  },
];
