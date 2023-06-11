import MacrosCalculator from '@/entities/MacrosCalculator';
import { Goal } from '../helpers/enumHelper';
import { DAILY_CALORIC_DEFICIT_FOR_GOAL } from '../helpers/enumHelper';

export default class MacrosService {
  getMacros(input: Input): Output {
    const macros = MacrosCalculator.calculate(
      input.weightInKg,
      input.dailyExpenditure,
      input.goal
    );
    const caloricDeficit = DAILY_CALORIC_DEFICIT_FOR_GOAL[input.goal];
    return {
      maxCalories: input.dailyExpenditure + caloricDeficit,
      caloricDeficit,
      macros,
    };
  }
}

type Input = {
  weightInKg: number;
  dailyExpenditure: number;
  goal: Goal;
};

type Output = {
  maxCalories: number;
  caloricDeficit: number;
  macros: { protein: number; carbs: number; fats: number };
};
