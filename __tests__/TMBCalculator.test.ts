import TMBCalculator, { activityLevel } from '../app/TMBCalculator';

describe('TMBCalculator', function () {
  it('Calculates the TMB for a 106kg man', function () {
    const result = TMBCalculator.calculate({
      age: 32,
      sex: 'male',
      heightInCm: 184,
      weightInKg: 106,
    });
    expect(result).toBe(2055);
  });

  it('Calculates the Total Maintenance Calories for a sedentary 106kg man', function () {
    const activityLevels: Array<activityLevel> = [
      'sedentary',
      'low',
      'moderate',
      'heavy',
      'athlete',
    ];
    const results = [2466, 2826, 3185, 3545, 3905];

    activityLevels.forEach((activityLevel, index) => {
      const result = TMBCalculator.calculateMaintenance(
        {
          age: 32,
          sex: 'male',
          heightInCm: 184,
          weightInKg: 106,
        },
        activityLevel
      );
      expect(result).toBe(results[index]);
    });
  });

  it('Calculates the TMB for a 80kg man', function () {
    const result = TMBCalculator.calculate({
      age: 32,
      sex: 'male',
      heightInCm: 184,
      weightInKg: 80,
    });
    expect(result).toBe(1795);
  });

  it('Calculates the Total Maintenance Calories for a sedentary 80kg man', function () {
    const activityLevels: Array<activityLevel> = [
      'sedentary',
      'low',
      'moderate',
      'heavy',
      'athlete',
    ];
    const results = [2154, 2468, 2782, 3096, 3411];

    activityLevels.forEach((activityLevel, index) => {
      const result = TMBCalculator.calculateMaintenance(
        {
          age: 32,
          sex: 'male',
          heightInCm: 184,
          weightInKg: 80,
        },
        activityLevel
      );
      expect(result).toBe(results[index]);
    });
  });

  it('Calculates the TMB for a 71kg woman', function () {
    const result = TMBCalculator.calculate({
      age: 31,
      sex: 'female',
      heightInCm: 158,
      weightInKg: 71,
    });
    expect(result).toBe(1382);
  });

  it('Calculates the Total Maintenance Calories for a sedentary 71kg woman', function () {
    const activityLevels: Array<activityLevel> = [
      'sedentary',
      'low',
      'moderate',
      'heavy',
      'athlete',
    ];
    const results = [1658, 1900, 2142, 2384, 2626];

    activityLevels.forEach((activityLevel, index) => {
      const result = TMBCalculator.calculateMaintenance(
        {
          age: 31,
          sex: 'female',
          heightInCm: 158,
          weightInKg: 71,
        },
        activityLevel
      );
      expect(result).toBe(results[index]);
    });
  });
});
