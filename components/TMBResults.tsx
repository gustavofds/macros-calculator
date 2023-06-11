import { Goal, activityLevels, activityLevelsMap } from '@/helpers/enumHelper';
import { forwardRef, useEffect, useState } from 'react';
import MacrosResultsModal from './MacrosResultsModal';
import MacrosService from '@/services/MacrosService';

export default forwardRef(function TMBResults(
  { results, setAbleToScroll, weightInKg }: any,
  ref: any
) {
  const [activitySelect, setActivitySelect] = useState('sedentary');
  const [goalSelect, setGoalSelect] = useState('fastLoss');
  const [showModal, setShowModal] = useState(false);
  const [macrosResults, setMacrosResults] = useState({});

  useEffect(() => {
    setAbleToScroll(true);
  }, []); // eslint-disable-line

  function handleClick() {
    const macrosService = new MacrosService();
    const data = macrosService.getMacros({
      weightInKg,
      goal: goalSelect as Goal,
      dailyExpenditure: results[activitySelect],
    });
    setMacrosResults(data);
    setShowModal(true);
    console.log('Seu nivel de atividade e:', activitySelect);
    console.log('Seu objetivo e:', goalSelect);
    console.log(data);
  }

  return (
    <section className="pb-16 bg-blueGray-200 relative pt-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-32 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center" ref={ref}>
              <span role="img" aria-label="check">
                ✅
              </span>
            </p>
            <h3 className="font-semibold text-3xl">
              Sua Taxa Metabólica Basal é de{' '}
              <strong>{results.tmb} calorias</strong> por dia.
            </h3>

            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Dependendo do seu nível de atividade física, seu gasto calórico
              será de:
            </p>
            <ul>
              {activityLevels.map((activityLevel, index) => (
                <li key={index + 1}>
                  <strong>{activityLevelsMap[index + 1]}</strong>:{' '}
                  {results[activityLevel]} calorias por dia
                </li>
              ))}
            </ul>
            <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-blueGray-800">
              Agora, vamos calcular os Macros da sua dieta de acordo com seus
              objetivos.
            </p>
            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="activity"
              >
                Nível de atividade
              </label>
              <select
                id="activity"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Idade"
                value={activitySelect}
                onChange={(ev) => {
                  setActivitySelect(ev.target.value);
                }}
              >
                <option value="sedentary">Sedentário</option>
                <option value="low">Exercício Leve</option>
                <option value="moderate">Exercício Moderado</option>
                <option value="heavy">Exercício Intenso</option>
                <option value="athlete">Atleta</option>
              </select>
            </div>
            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="goal"
              >
                Objetivo
              </label>
              <select
                id="goal"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Idade"
                value={goalSelect}
                onChange={(ev) => {
                  setGoalSelect(ev.target.value);
                }}
              >
                <option value="fastLoss">Emagrecer rápido</option>
                <option value="loss">Emagrecer</option>
                <option value="slowLoss">Emagrecer devagar</option>
                <option value="maintain">Manter o peso</option>
              </select>
            </div>
            <div className="sm:block flex flex-col mt-10">
              <button
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                onClick={handleClick}
              >
                <i className="fas fa-calculator text-lg mr-1"></i>
                <span>Calcular Macros</span>
              </button>
              {showModal ? (
                <MacrosResultsModal
                  setShowModal={setShowModal}
                  activity={activitySelect}
                  goal={goalSelect}
                  macrosResults={macrosResults}
                />
              ) : null}
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
});
