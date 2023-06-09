import { ActivityLevel } from './TMBCalculator';

export default class Person {
  activityLevel?: ActivityLevel;
  tmb?: number;

  constructor(
    readonly age: number,
    readonly sex: Sex,
    readonly heightInCm: number,
    readonly weightInKg: number
  ) {
    if (age < 0 || heightInCm < 0 || weightInKg < 0) {
      throw new Error('Invalid data.');
    }
    if (sex !== 'male' && sex !== 'female') {
      throw new Error('Invalid sex. Please enter your biological sex.');
    }
  }

  getAge(): number {
    return this.age;
  }

  getSex(): Sex {
    return this.sex;
  }

  getHeightInCm(): number {
    return this.heightInCm;
  }

  getWeightInKg(): number {
    return this.weightInKg;
  }

  setActivityLevel(activityLevel: ActivityLevel): void {
    if (
      activityLevel !== 'sedentary' &&
      activityLevel !== 'low' &&
      activityLevel !== 'moderate' &&
      activityLevel !== 'heavy' &&
      activityLevel !== 'athlete'
    ) {
      throw new Error('Invalid activity level.');
    }
    this.activityLevel = activityLevel;
  }

  getActivityLevel(): ActivityLevel | null {
    if (this.activityLevel) {
      return this.activityLevel;
    } else {
      return null;
    }
  }

  setTmb(tmb: number): void {
    this.tmb = tmb;
  }

  getTmb(): number | null {
    if (this.tmb) {
      return this.tmb;
    } else {
      return null;
    }
  }
}

export type Sex = 'male' | 'female';
