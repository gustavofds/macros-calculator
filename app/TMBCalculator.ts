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

  static calculate(personData: personData): number {
    const tmb =
      10 * personData.weightInKg +
      6.25 * personData.heightInCm -
      5 * personData.age +
      this.sexAdder[personData.sex];
    return Math.round(tmb);
  }

  static calculateMaintenance(
    personData: personData,
    activityLevel: activityLevel
  ) {
    return Math.round(
      this.calculate(personData) * this.activityMultiplicator[activityLevel]
    );
  }
}

type personData = {
  age: number;
  sex: 'male' | 'female';
  heightInCm: number;
  weightInKg: number;
};

export type activityLevel =
  | 'sedentary'
  | 'low'
  | 'moderate'
  | 'heavy'
  | 'athlete';
