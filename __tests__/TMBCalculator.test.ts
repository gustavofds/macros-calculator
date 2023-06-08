import TMBCalculator from '../app/TMBCalculator';

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

  it('Calculates the TMB for a 71kg woman', function () {
    const result = TMBCalculator.calculate({
      age: 31,
      sex: 'female',
      heightInCm: 158,
      weightInKg: 71,
    });
    expect(result).toBe(1382);
  });
});
