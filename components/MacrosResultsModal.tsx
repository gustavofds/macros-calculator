import { loadStaticPaths } from 'next/dist/server/dev/static-paths-worker';

export default function MacrosResultsModal({
  setShowModal,
  activity,
  goal,
  macrosResults,
}: any) {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-sm md:text-3xl  font-semibold">
                Sugestão de macros para {goalDict[goal]}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  U+0078
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Seu nível de atividade é:{' '}
                <strong>{activityDict[activity]}</strong>
              </p>
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Você quer: <strong>{goalDictVerb[goal]}</strong>
              </p>
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Consumo calórico máximo sugerido:{' '}
                <strong>{macrosResults.maxCalories} calorias por dia</strong>,
                divididos em:
                <ul>
                  <li>
                    <strong>Proteínas</strong>: {macrosResults.macros.protein}{' '}
                    gramas por dia
                  </li>
                  <li>
                    <strong>Gorduras</strong>: {macrosResults.macros.fats}{' '}
                    gramas por dia
                  </li>
                  <li>
                    <strong>Carboidratos</strong>: {macrosResults.macros.carbs}{' '}
                    gramas por dia
                  </li>
                </ul>
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </button>
              {/* <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

const goalDict: any = {
  fastLoss: 'um Emagrecimento Rápido',
  loss: 'um Emagrecimento Moderado',
  slowLoss: 'um Emagrecimento Lento',
  maintain: 'Manutenção de peso',
};

const goalDictVerb: any = {
  fastLoss: 'emagrecer rápido',
  loss: 'emagrecer',
  slowLoss: 'emagrecer devagar',
  maintain: 'manter o peso',
};

const activityDict: any = {
  sedentary: 'sedentário',
  low: 'Exercício Leve',
  moderate: 'Exercício Moderado',
  heavy: 'Exercício Intenso',
  athlete: 'Atleta',
};
