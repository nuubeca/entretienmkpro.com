import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-white font-bold flex flex-col">
        <Header />
        <div className="flex-grow pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-full px-6">
            <div className="h-[500px] group p-5 bg-cover bg-[url('../public/images/card-residentiel.jpg')]">
              <div className="bg-stone-900/80 hidden group-hover:flex h-full justify-center items-center text-center">
                <div className="flex flex-col gap-5 items-center">
                  <p>Entretien MK Pro</p>
                  <p>
                    Propose un service d'entretien ménager complet à domicile.
                  </p>
                  <a className="p-2 w-32 border-2" href="/services/residentiel">
                    Savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[500px] group p-5 bg-cover bg-[url('../public/images/card-commercial.jpg')]">
              <div className="bg-stone-900/80 hidden group-hover:flex h-full justify-center items-center text-center">
                <div className="flex flex-col gap-5 items-center">
                  <p>Entretien MK Pro</p>
                  <p>
                    Propose un service d'entretien ménager de qualité supérieure
                    pour les entreprises.
                  </p>
                  <a className="p-2 w-32 border-2" href="/services/commercial">
                    Savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[500px] group p-5 bg-cover bg-[url('../public/images/card-vapeur.jpg')]">
              <div className="bg-stone-900/80 hidden group-hover:flex h-full justify-center items-center text-center">
                <div className="flex flex-col gap-5 items-center">
                  <p>Entretien MK Pro</p>
                  <p>Offre un service de nettoyage à la vapeur.</p>
                  <a
                    className="p-2 w-32 border-2"
                    href="/services/nettoyage-a-la-vapeur"
                  >
                    Savoir plus
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[500px] group p-5 bg-cover bg-[url('../public/images/card-vehicule.jpg')]">
              <div className="bg-stone-900/80 hidden group-hover:flex h-full justify-center items-center text-center">
                <div className="flex flex-col gap-5 items-center">
                  <p>Entretien MK Pro</p>
                  <p>
                    Offre un service d'entretien d'intérieur de véhicule et ce à
                    même votre domicile.
                  </p>
                  <a
                    className="p-2 w-32 border-2"
                    href="services/vehicule-a-domicile"
                  >
                    Savoir plus
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
