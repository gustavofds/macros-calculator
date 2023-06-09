import Person, { Sex } from '../entities/Person';
import TMBCalculator from '../entities/TMBCalculator';
import { activityLevels } from '../helpers/enumHelper';

export default class TDEEService {
  getTMB(input: Input): number {
    const person = new Person(
      input.age,
      input.sex,
      input.heightInCm,
      input.weightInKg
    );
    return TMBCalculator.calculate(person);
  }

  getAll(input: Input): Output {
    const person = new Person(
      input.age,
      input.sex,
      input.heightInCm,
      input.weightInKg
    );
    const tmb = TMBCalculator.calculate(person);
    person.setTmb(tmb);
    const output: any = {
      tmb,
    };
    activityLevels.forEach((activityLevel) => {
      person.setActivityLevel(activityLevel);
      const result = TMBCalculator.calculateMaintenance(person);
      output[activityLevel] = result;
    });
    return output;
  }
}

type Input = {
  age: number;
  sex: Sex;
  heightInCm: number;
  weightInKg: number;
};

type Output = {
  TMB: number;
  sedentary: number;
  low: number;
  moderate: number;
  heavy: number;
  athlete: number;
};
