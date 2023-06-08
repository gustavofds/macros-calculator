import { activityLevel } from './TMBCalculator';

export default class Person {
  activityLevel?: activityLevel;

  constructor(
    readonly age: number,
    readonly sex: sex,
    readonly heightInCm: number,
    readonly weightInKg: number,
    activityLevel?: activityLevel
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

  getSex(): sex {
    return this.sex;
  }

  getHeightInCm(): number {
    return this.heightInCm;
  }

  getWeightInKg(): number {
    return this.weightInKg;
  }

  setActivityLevel(activityLevel: activityLevel): void {
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

  getActivityLevel(): activityLevel | null {
    if (this.activityLevel) {
      return this.activityLevel;
    } else {
      return null;
    }
  }
}

type sex = 'male' | 'female';
