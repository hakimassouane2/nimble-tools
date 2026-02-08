export { combatRules } from "./combat";
export { restingRules } from "./resting";
export { coreMechanics } from "./core-mechanics";

import { combatRules } from "./combat";
import { restingRules } from "./resting";
import { coreMechanics } from "./core-mechanics";
import type { RulesCategory } from "../types";

export const allRules: RulesCategory[] = [combatRules, restingRules, coreMechanics];
