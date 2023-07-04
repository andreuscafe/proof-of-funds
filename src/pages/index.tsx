import Head from "next/head";
import Image from "next/image";
import { Space_Mono, Roboto } from "next/font/google";

import Link from "next/link";

import { ExchangesType, HomeProps } from "../types";

import { ArrowSvg } from "@/components/ArrowSvg";
import { CryptoText } from "@/components/CryptoText";

import { getLocalData } from "../lib/localData";

const space_mono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export async function getStaticProps() {
  const exchanges: ExchangesType = await getLocalData();
  return {
    props: {
      exchanges,
    },
  };
}

export default function Home({ exchanges }: HomeProps) {
  return (
    <>
      <Head>
        <title>Proof of Funds - Argentina</title>
      </Head>
      <main
        className={`font-mono min-h-screen max-w-screen-2xl mx-auto p-5 lg:p-8 pb-12 ${space_mono.variable} ${roboto.variable}`}
      >
        <header className=" grid grid-cols-1 lg:grid-cols-12 gap-6 text-[#F5F5F7]">
          <h1 className="text-2xl col-span-1 lg:col-span-3">PR00F OF FUNDS</h1>
          <h2 className="col-span-1 lg:col-span-5">
            <CryptoText
              hard
              text="LISTADO DE EXCHANGES ARGENTINOS DE CRIPTOMONEDAS Y SUS INFORMES DE TRANSPARENCIA"
            />
          </h2>
          <a
            href="https://argentinianswho.design/"
            target="_blank"
            className="sol w-[96px] order-first lg:order-last lg:col-start-12 col-span-2"
          >
            <div className="normal">
              <Image
                src="/img/sol.svg"
                alt="Argentina"
                width={96}
                height={96}
                priority
              />
            </div>
            <div className="wink">
              <Image
                src="/img/sol_guino.svg"
                alt="Argentina"
                width={96}
                height={96}
                priority
              />
            </div>
          </a>
        </header>

        <section className="mt-10 lg:mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4">
            <span className="text-xs lg:col-span-3 text-[#95959f]">
              Exchange
            </span>
            <span className="text-xs col-span-3 text-[#95959f] hidden lg:block">
              Documentos
            </span>
            <span className="text-xs col-span-2 text-[#95959f] hidden lg:block">
              Actualización
            </span>
            <span className="text-xs col-span-4 text-[#95959f] hidden lg:block">
              Estado
            </span>
          </div>

          <div className="font-roboto">
            {exchanges.map((exchange, index) => (
              <div
                key={index}
                className={` grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b border-[#333333] pt-6 first-of-type:border-y first-of-type:pt-3 pb-6 lg:py-3 items-center text-[#CECECE] lg:hover:bg-[#111] hover:text-white transition-colors`}
              >
                <Link
                  href={exchange.url}
                  target="_blank"
                  className="lg:col-span-3 flex items-center"
                >
                  <Image
                    src={exchange.iconPath}
                    alt={exchange.name}
                    width={32}
                    height={32}
                    priority
                    className="border-[#1D1D1D] border rounded-lg mr-2"
                  />
                  <CryptoText text={exchange.name} />
                </Link>

                <span className="lg:col-span-3 text-[#95959f]">
                  <span className="col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2">
                    Documentos
                  </span>
                  {exchange.docs.url ? (
                    <Link
                      href={exchange.docs.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-[#CECECE] flex gap-1"
                    >
                      <CryptoText text={exchange.docs.text} />
                      <ArrowSvg className="w-4 flex-shrink-0" />
                    </Link>
                  ) : (
                    exchange.docs.text
                  )}
                </span>

                <span
                  className={`lg:col-span-2 ${
                    !exchange.last_update ? "text-[#95959f]" : ""
                  }`}
                >
                  <span className="col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2">
                    Última actualización
                  </span>
                  {exchange.last_update ? exchange.last_update : "-"}
                </span>

                <span className="lg:col-span-4 text-[#95959f]">
                  <span className="col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2">
                    Notas
                  </span>
                  {exchange.notes ? (
                    exchange.notes.url ? (
                      <a
                        href={exchange.notes.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-[#CECECE] flex gap-1"
                      >
                        <CryptoText text={exchange.notes.text} />
                        <ArrowSvg className="w-4 flex-shrink-0" />
                      </a>
                    ) : (
                      exchange.notes.text
                    )
                  ) : (
                    "-"
                  )}
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 lg:flex lg:justify-between">
          <p>
            <span>
              Agradecimientos a{" "}
              <a
                href="https://twitter.com/facumontanaro_"
                target="_blank"
                rel="noreferrer"
                className="underline text-[#CECECE] inline-flex gap-1"
              >
                Facu Montanaro
              </a>{" "}
              por el diseño,{" "}
            </span>
            <span className="lg:block">
              <a
                href="https://twitter.com/AndreusCafe"
                target="_blank"
                rel="noreferrer"
                className="underline text-[#CECECE] inline-flex gap-1"
              >
                Andrés Tonello
              </a>{" "}
              y{" "}
              <a
                href="https://twitter.com/_LautaroLopez"
                target="_blank"
                rel="noreferrer"
                className="underline text-[#CECECE] inline-flex gap-1"
              >
                Lautaro López
              </a>{" "}
              por la implementación.
            </span>
          </p>
          <span>
            Si queres colaborar con algún dato, escribime a{" "}
            <a
              href="https://twitter.com/f0go"
              target="_blank"
              rel="noreferrer"
              className="underline text-[#CECECE] inline-flex gap-1"
            >
              @f0go
              <ArrowSvg className="w-4 " />
            </a>
          </span>
        </footer>
      </main>
    </>
  );
}
