import React from 'react';
import Link from 'next/link';

// components

import Navbar from '../components/Navbars/AuthNavbar';
import Footer from '../components/Footers/Footer';
import MacrosCalcForm from '../components/MacrosCalcForm';

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Calcule seu gasto calórico e macros.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Saiba seu Gasto Calórico Diário para um emagrecimento
                    sustentável e duradouro. Planeje os macros para sua Dieta
                    Flexível.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <MacrosCalcForm />
      </main>
      <Footer />
    </>
  );
}

/**
 * 
 * import Image from 'next/image';
import MacrosCalcForm from './MacrosCalcForm';
 * 
 * <div className="flex min-h-screen flex-col items-center justify-start p-12">
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Sua dieta ideal na ponta do&nbsp;
          <code className="font-mono font-bold">lápis</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none invisible md:visible">
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
 */
