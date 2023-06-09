import Image from 'next/image';
import MacrosCalcForm from './MacrosCalcForm';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-12">
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Sua dieta ideal na ponta do&nbsp;
          <code className="font-mono font-bold">lápis</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/gustavofds"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/github.svg"
              alt="GitHub Logo"
              className="dark:invert"
              width={25}
              height={25}
              priority
            />
            <strong>/gustavofds</strong>
          </a>
        </div>
      </header>
      <h2 className="text-base font-semibold leading-7 text-gray-900 pt-8">
        Calculadora de Macros - Dieta Flexível
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Saiba seu Gasto Calórico Diário para um Emagrecimento sustentável e
        duradouro.
      </p>
      <MacrosCalcForm />
    </div>
  );
}
