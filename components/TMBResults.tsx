import { activityLevels, activityLevelsMap } from '@/helpers/enumHelper';

export default function TMBResults({ results }: any) {
  return (
    <section className="pb-20 bg-blueGray-200 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
              <div className="flex-auto p-5 lg:p-10">
                <h2>
                  Sua Taxa Metabólica Basal é de{' '}
                  <strong>{results.tmb} calorias</strong> por dia.
                </h2>
                <p>
                  Dependendo do seu nível de atividade física, seu gasto
                  calórico será de:
                </p>
                {activityLevels.map((activityLevel, index) => (
                  <li key={index + 1}>
                    <strong>{activityLevelsMap[index + 1]}</strong>:{' '}
                    {results[activityLevel]} calorias por dia
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
