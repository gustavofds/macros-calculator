import TMBCalculator from "../app/TMBCalculator";

describe('TMBCalculator', function() {  
  it('Calculates the TMB for a 106kg man', function() {
    const result = TMBCalculator.calculate({ age: 32, sex: 'male', heightInCm: 184, weightInKg: 106 });
    expect(result).toBe(2055);
  })
});