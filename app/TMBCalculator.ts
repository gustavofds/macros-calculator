export default class TMBCalculator {
  static sexAdder = {
    male: 5,
    female: -161,
  };

  static calculate(personData: personData): number {
    const tmb =
      10 * personData.weightInKg +
      6.25 * personData.heightInCm -
      5 * personData.age +
      this.sexAdder[personData.sex];
    return Math.round(tmb);
  }
}

type personData = {
  age: number;
  sex: 'male' | 'female';
  heightInCm: number;
  weightInKg: number;
};
