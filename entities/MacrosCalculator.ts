import { DAILY_CALORIC_DEFICIT_FOR_GOAL, Goal } from '@/helpers/enumHelper';
import MacrosHandler from './MacrosHandler';

export default class MacrosCalculator {
  static MACROS_PER_KG = {
    protein: 1.8,
    fats: 0.6,
  };

  static calculate(
    weightInKg: number,
    dailyExpenditure: number,
    goal: Goal
  ): CalculatedMacros {
    let totalCalories = dailyExpenditure + DAILY_CALORIC_DEFICIT_FOR_GOAL[goal];
    const macrosHandler = new MacrosHandler(totalCalories, weightInKg);
    // const protein = weightInKg * this.MACROS_PER_KG.protein;
    // totalCalories -= protein * 4;
    // const fats = weightInKg * this.MACROS_PER_KG.fats;
    // totalCalories -= fats * 9;
    // const carbs = totalCalories / 4;

    return macrosHandler.handleProtein().handleFats().handleCarbs().result();
  }
}

type CalculatedMacros = {
  protein: number;
  carbs: number;
  fats: number;
};
