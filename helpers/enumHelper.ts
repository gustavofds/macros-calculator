import { ActivityLevel } from '../entities/TMBCalculator';

export const activityLevels: Array<ActivityLevel> = [
  'sedentary',
  'low',
  'moderate',
  'heavy',
  'athlete',
];

export const activityLevelsMap: Array<String> = [
  'Taxa Metabólica Basal',
  'Sedentário',
  'Exercício Leve',
  'Exercício Moderado',
  'Exercício Intenso',
  'Atleta',
];


export const DAILY_CALORIC_DEFICIT_FOR_GOAL = {
  fastLoss: -800,
  loss: -500,
  slowLoss: -200,
  maintain: 0,
};

export type Goal = 'fastLoss' | 'loss' | 'slowLoss' | 'maintain';

export const CALORIES_PER_GRAM_OF_NUTRIENT = {
  protein: 4,
  carbs: 4,
  fats: 9,
};
