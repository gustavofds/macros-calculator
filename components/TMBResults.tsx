import { activityLevels, activityLevelsMap } from '@/helpers/enumHelper';
import { forwardRef, useEffect } from 'react';

export default forwardRef(function TMBResults(
  { results, setAbleToScroll }: any,
  ref: any
) {
  useEffect(() => {
    setAbleToScroll(true);
  }, []); // eslint-disable-line

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
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </p>
            <div className="sm:block flex flex-col mt-10">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                <i className="fab fa-github text-lg mr-1"></i>
                <span>Help With a Star</span>
              </a>
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
});
