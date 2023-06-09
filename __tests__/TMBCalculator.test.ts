import TMBCalculator, { ActivityLevel } from '../entities/TMBCalculator';
import Person from '../entities/Person';

describe('TMBCalculator', function () {
  it('Calculates the TMB for a 106kg man', function () {
    const person = new Person(32, 'male', 184, 106);
    const result = TMBCalculator.calculate(person);
    expect(result).toBe(2055);
  });

  it('Calculates the Total Maintenance Calories for a sedentary 106kg man', function () {
    const activityLevels: Array<ActivityLevel> = [
      'sedentary',
      'low',
      'moderate',
      'heavy',
      'athlete',
    ];
    const results = [2466, 2826, 3185, 3545, 3905];
    const person = new Person(32, 'male', 184, 106);

    activityLevels.forEach((activityLevel, index) => {
      person.setActivityLevel(activityLevel);
      const result = TMBCalculator.calculateMaintenance(person);
      expect(result).toBe(results[index]);
    });
  });

  it('Calculates the TMB for a 80kg man', function () {
    const result = TMBCalculator.calculate(new Person(32, 'male', 184, 80));
    expect(result).toBe(1795);
  });

  it('Calculates the Total Maintenance Calories for a sedentary 80kg man', function () {
    const activityLevels: Array<ActivityLevel> = [
      'sedentary',
      'low',
      'moderate',
      'heavy',
      'athlete',
    ];
    const results = [2154, 2468, 2782, 3096, 3411];
    const person = new Person(32, 'male', 184, 80);

    activityLevels.forEach((activityLevel, index) => {
      person.setActivityLevel(activityLevel);
      const result = TMBCalculator.calculateMaintenance(person);
      expect(result).toBe(results[index]);
    });
  });

  it('Calculates the TMB for a 71kg woman', function () {
    const result = TMBCalculator.calculate(new Person(31, 'female', 158, 71));
    expect(result).toBe(1382);
  });

  it('Calculates the Total Maintenance Calories for a sedentary 71kg woman', function () {
    const activityLevels: Array<ActivityLevel> = [
      'sedentary',
      'low',
      'moderate',
      'heavy',
      'athlete',
    ];
    const results = [1658, 1900, 2142, 2384, 2626];
    const person = new Person(31, 'female', 158, 71);

    activityLevels.forEach((activityLevel, index) => {
      person.setActivityLevel(activityLevel);
      const result = TMBCalculator.calculateMaintenance(person);
      expect(result).toBe(results[index]);
    });
  });
});
