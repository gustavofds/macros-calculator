import { CALORIES_PER_GRAM_OF_NUTRIENT } from '@/helpers/enumHelper';

export default class MacrosHandler {
  MACROS_PER_KG = {
    protein: 1.8,
    fats: 0.6,
  };
  weightInKg: number;
  totalCaloricExpenditure: number;
  remainingCalories: number;
  protein: number = 0;
  fats: number = 0;
  carbs: number = 0;

  constructor(totalCaloricExpenditure: number, weightInKg: number) {
    this.totalCaloricExpenditure = totalCaloricExpenditure;
    this.remainingCalories = totalCaloricExpenditure;
    this.weightInKg = weightInKg;
  }

  handleProtein() {
    this.protein = this.weightInKg * this.MACROS_PER_KG.protein;
    this.remainingCalories -=
      this.protein * CALORIES_PER_GRAM_OF_NUTRIENT.protein;
    return this;
  }

  handleFats() {
    this.fats = this.weightInKg * this.MACROS_PER_KG.fats;
    this.remainingCalories -= this.fats * CALORIES_PER_GRAM_OF_NUTRIENT.fats;
    return this;
  }

  handleCarbs() {
    this.carbs = this.remainingCalories / CALORIES_PER_GRAM_OF_NUTRIENT.carbs;
    return this;
  }

  result() {
    return {
      protein: Math.round(this.protein),
      carbs: Math.round(this.carbs),
      fats: Math.round(this.fats),
    };
  }
}
