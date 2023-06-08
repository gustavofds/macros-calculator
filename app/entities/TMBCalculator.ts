import Person from './Person';

export default class TMBCalculator {
  static sexAdder = {
    male: 5,
    female: -161,
  };

  static activityMultiplicator = {
    sedentary: 1.2,
    low: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    athlete: 1.9,
  };

  static calculate(person: Person): number {
    const tmb =
      10 * person.getWeightInKg() +
      6.25 * person.getHeightInCm() -
      5 * person.getAge() +
      this.sexAdder[person.getSex()];
    return Math.round(tmb);
  }

  static calculateMaintenance(person: Person) {
    const personActivity = person.getActivityLevel();
    if (personActivity === null) {
      throw new Error('Please set the activity level');
    }
    return Math.round(
      this.calculate(person) * this.activityMultiplicator[personActivity]
    );
  }
}

export type activityLevel =
  | 'sedentary'
  | 'low'
  | 'moderate'
  | 'heavy'
  | 'athlete';
