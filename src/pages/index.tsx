import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { Space_Mono, Roboto } from "next/font/google";

import LemonLogo from "../../public/img/icons/lemon.png";
import ArgenBtcLogo from "../../public/img/icons/argenbtc.png";
import BuenBitLogo from "../../public/img/icons/buenbit.png";
import SatoshiTangoLogo from "../../public/img/icons/satoshitango.png";
import RipioLogo from "../../public/img/icons/ripio.png";
import DecryptoLogo from "../../public/img/icons/decrypto.png";
import LetsBitLogo from "../../public/img/icons/letsbit.png";
import TiendaCryptoLogo from "../../public/img/icons/tiendacrypto.png";
import BitsoLogo from "../../public/img/icons/bitso.png";
import BeloLogo from "../../public/img/icons/belo.png";
import Link from "next/link";

import { ArrowSvg } from "@/components/ArrowSvg";
import { CryptoText } from "@/components/CryptoText";

const space_mono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
  style: "normal"
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
  style: "normal"
});

type ExchangesType = Array<{
  name: string;
  iconPath: StaticImageData;
  url: string;
  docs: {
    text: string;
    url?: string;
  };
  last_update?: string;
  notes?: {
    text: string;
    url?: string;
  };
}>;

const EXCHANGES: ExchangesType = [
  {
    name: "Lemon Cash",
    iconPath: LemonLogo,
    url: "https://www.lemon.me/",
    docs: {
      text: "Prueba de fondos",
      url: "https://api.lemoncash.com.ar/api/v1/reserves"
    },
    last_update: "Realtime",
    notes: {
      text: "Estan trabajando en una versión trustless y real-time",
      url: "https://medium.com/@limoncit0/transparencia-radical-para-cexs-85aad29d8caf"
    }
  },
  {
    name: "BuenBit",
    iconPath: BuenBitLogo,
    url: "https://www.buenbit.com/",
    docs: {
      text: "Prueba de fondos",
      url: "https://drive.google.com/file/d/1kVSy8-aeO0hLFlB17ZX_x-w7339xpe34/view"
    },
    last_update: "11/11/2022",
    notes: {
      text: "No muestra address de las wallets"
    }
  },
  {
    name: "Bitso",
    iconPath: BitsoLogo,
    url: "https://bitso.com/",
    docs: {
      text: "Post sobre transparencia",
      url: "https://blog.bitso.com/es-mx/bitso-mx/daniel-vogel-bitso-declaracion-nov-10-2022"
    },
    last_update: "10/11/2022",
    notes: {
      text: "Dicen estar trabajando en un PoF",
      url: "https://twitter.com/julian_colombo/status/1594713538722930688?s=61&t=5auPmOJkhMmtSTviaZ9McQ"
    }
  },
  {
    name: "ArgenBTC",
    iconPath: ArgenBtcLogo,
    url: "https://argenbtc.com/",
    docs: {
      text: "No presenta"
    },
    notes: {
      text: "Dicen estar trabajando en un PoF",
      url: "https://twitter.com/argenbtc/status/1595480520716173325?s=61&t=8sALSsLKhwBRtfWwE4GulQ"
    }
  },
  {
    name: "Belo",
    iconPath: BeloLogo,
    url: "https://www.belo.app/",
    docs: {
      text: "No presenta"
    },
    notes: {
      text: "Dicen estar trabajando en un PoF",
      url: "https://twitter.com/locosombrero/status/1593784229619449857?s=61&t=_pfJbg1Qq7rT-oabJ3d9Zg"
    }
  },
  {
    name: "Decrypto",
    iconPath: DecryptoLogo,
    url: "https://www.decrypto.la/",
    docs: {
      text: "No presenta"
    },
    notes: {
      text: "Dicen estar trabajando en un PoF",
      url: "https://twitter.com/jl_palacio/status/1595126400108744705?s=61&t=cwVqNmTaVbXgXFQhfaHQpA"
    }
  },
  {
    name: "Let's Bit",
    iconPath: LetsBitLogo,
    url: "https://letsbit.io/",
    docs: {
      text: "No presenta"
    }
  },
  {
    name: "Ripio",
    iconPath: RipioLogo,
    url: "https://www.ripio.com/",
    docs: {
      text: "No presenta"
    }
  },
  {
    name: "SatoshiTango",
    iconPath: SatoshiTangoLogo,
    url: "https://www.satoshitango.com/",
    docs: {
      text: "No presenta"
    },
    notes: {
      text: "No ofrecen rendimientos pero igual estan trabajando en un PoF",
      url: "https://twitter.com/satoshitango/status/1595468937659092992?s=61&t=8sALSsLKhwBRtfWwE4GulQ"
    }
  },
  {
    name: "TiendaCrypto",
    iconPath: TiendaCryptoLogo,
    url: "https://tiendacrypto.com/",
    docs: {
      text: "No presenta"
    },
    notes: {
      text: "No tienen PoF pero dicen no ofrecer rendimientos",
      url: "https://twitter.com/tiendacrypto/status/1595107917120016385?s=61&t=cwVqNmTaVbXgXFQhfaHQpA"
    }
  }
];

export default function Home() {
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
            className="sol w-[64px] order-first lg:order-last lg:col-start-12 col-span-1"
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
              Última actualización
            </span>
            <span className="text-xs col-span-4 text-[#95959f] hidden lg:block">
              Notas
            </span>
          </div>

          <div className="font-roboto">
            {EXCHANGES.map((exchange, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b border-[#333333] pt-6 first-of-type:pt-3 pb-6 lg:py-3 items-center text-[#CECECE] lg:hover:bg-[#03030F] hover:text-white transition-colors`}
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

        <footer className="mt-12 ">
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
        </footer>
      </main>
    </>
  );
}
