import MacrosCalculator from '../entities/MacrosCalculator';

describe('MacrosCalculator', function () {
  it('Calculates the Macros for a 100kg person, 2300kcal fast loss diet', function () {
    const result = MacrosCalculator.calculate(100, 2300, 'fastLoss');
    expect(result).toEqual({
      protein: 180,
      fats: 60,
      carbs: 60,
    });
  });

  it('Calculates the Macros for a 70kg person, 2000kcal loss diet', function () {
    const result = MacrosCalculator.calculate(70, 2000, 'loss'); // 1500 kcal daily
    expect(result).toEqual({
      protein: 126,
      fats: 42,
      carbs: 155,
    });
  });

  it('Calculates the Macros for a 80kg person, 2500kcal maintenance diet', function () {
    const result = MacrosCalculator.calculate(80, 2500, 'maintain'); // 2500 kcal daily
    expect(result).toEqual({
      protein: 144,
      fats: 48,
      carbs: 373,
    });
  });

  it('Calculates the Macros for a 78kg person, 3000kcal slow loss diet', function () {
    const result = MacrosCalculator.calculate(78, 3000, 'slowLoss'); // 2800 kcal daily
    expect(result).toEqual({
      protein: 140,
      fats: 47,
      carbs: 454,
    });
  });
});
