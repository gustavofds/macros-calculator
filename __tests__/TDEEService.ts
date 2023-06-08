import TDEEService from '@/app/services/TDEEService';

describe('TDEEService', () => {
  describe('getTMB', () => {
    it('returns tmb for a 80kg man', () => {
      const service = new TDEEService();
      const result = service.getTMB({
        age: 32,
        sex: 'male',
        heightInCm: 184,
        weightInKg: 80,
      });
      expect(result).toBe(1795);
    });
  });

  describe('getAll', () => {
    it('returns energy expenditure for all activity levels', () => {
      const service = new TDEEService();
      const result = service.getAll({
        age: 32,
        sex: 'male',
        heightInCm: 184,
        weightInKg: 80,
      });
      expect(result).toEqual({
        tmb: 1795,
        sedentary: 2154,
        low: 2468,
        moderate: 2782,
        heavy: 3096,
        athlete: 3411,
      });
      /*
        Basal Metabolic Rate	1,795 calories per day
        Sedentary	2,154 calories per day
        Light Exercise	2,468 calories per day
        Moderate Exercise	2,782 calories per day
        Heavy Exercise	3,096 calories per day
        Athlete	3,411 calories per day
        */
    });
  });
});
