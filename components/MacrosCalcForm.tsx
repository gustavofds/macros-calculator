'use client';

import { useEffect, useRef, useState } from 'react';
import TDEEService from '../services/TDEEService';
import { Sex } from '../entities/Person';
import Alert from './Alert';
import TMBResults from './TMBResults';

export default function MacrosCalcForm() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState<Sex>('male');
  const [gotResults, setGotResults] = useState(false);
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState({});
  const [ableToScroll, setAbleToScroll] = useState(false);

  const resultRef = useRef();

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  }, [ableToScroll]);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    const tdeeService = new TDEEService();
    try {
      const result = tdeeService.getAll({
        age: Number(age),
        sex,
        heightInCm: Number(height),
        weightInKg: Number(weight),
      });

      setResults(result);
      setGotResults(true);
    } catch (err: any) {
      console.log(err.message);
      setIsError(true);
      return;
    }
  };

  return (
    <>
      <section className="pb-20 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Informe seus dados que calcularemos seu gasto energético e
                    macros ideais num instante.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="age"
                    >
                      Idade
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Idade"
                      value={age}
                      onChange={(ev) => setAge(ev.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="height"
                    >
                      Altura (em centímetros)
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="cm"
                      value={height}
                      onChange={(ev) => setHeight(ev.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="weight"
                    >
                      Peso (em quilogramas)
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Kg"
                      value={weight}
                      onChange={(ev) => setWeight(ev.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3 mt-8">
                    <fieldset>
                      <legend className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Sexo
                      </legend>
                      <div className="mt-3 space-y-3">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="male"
                            name="sex"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            value="male"
                            onChange={(ev) => setSex(ev.target.value as Sex)}
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
                            value="female"
                            onChange={(ev) => {
                              setSex(ev.target.value as Sex);
                            }}
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

                  {isError && (
                    <Alert isError={isError} setIsError={setIsError} />
                  )}

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Calcular
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {gotResults && (
        <TMBResults
          results={results}
          setAbleToScroll={setAbleToScroll}
          ref={resultRef}
        />
      )}
    </>
  );
}
