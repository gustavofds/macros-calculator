'use client';

import { useState } from 'react';
import TDEEService from './services/TDEEService';
import { Sex } from './entities/Person';
import { activityLevels } from './helpers/enumHelper';

export default function MacrosCalcForm() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState<Sex>('male');
  const [gotResults, setGotResults] = useState(false);
  const [results, setResults] = useState({});
  console.log('SEXO', sex);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const tdeeService = new TDEEService();
    const result = tdeeService.getAll({
      age: Number(age),
      sex,
      heightInCm: Number(height),
      weightInKg: Number(weight),
    });
    setResults(result);
    setGotResults(true);
  };

  return (
    <>
      {!gotResults && (
        <form className="py-10" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Idade
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="age"
                      id="age"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={age}
                      onChange={(ev) => setAge(ev.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="height"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Altura (em centímetros)
                  </label>
                  <div className="mt-2">
                    <input
                      id="height"
                      name="height"
                      type="number"
                      autoComplete="height"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="cm"
                      value={height}
                      onChange={(ev) => setHeight(ev.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Peso (em quilogramas)
                  </label>
                  <div className="mt-2">
                    <input
                      id="weight"
                      name="weight"
                      type="number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Kg"
                      value={weight}
                      onChange={(ev) => setWeight(ev.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Sexo
                    </legend>
                    {/* <p className="mt-1 text-sm leading-6 text-gray-600">
                  These are delivered via SMS to your mobile phone.
                </p> */}
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="male"
                          name="sex"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          // onChange={(ev) => setSex(ev.target.value)}
                          value="male"
                          onChange={(ev) => {
                            console.log(ev);
                            setSex(ev.target.value);
                          }}
                          checked={sex === 'male'}
                        />
                        <label
                          htmlFor="male"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Masculino
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="female"
                          name="sex"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={(ev) => {
                            console.log(ev);
                            setSex(ev.target.value);
                          }}
                          // onChange={(ev) => setSex(ev.target.value)}
                          value="female"
                          checked={sex === 'female'}
                        />
                        <label
                          htmlFor="female"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Feminino
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Resetar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calcular
            </button>
          </div>
        </form>
      )}
      {gotResults && (
        <div>
          <h2>Here are your results</h2>
          {['tmb', ...activityLevels].map((activityLevel, index) => (
            <li key={index}>
              {activityLevel}: {results[activityLevel]}
            </li>
          ))}
        </div>
      )}
    </>
  );
}
