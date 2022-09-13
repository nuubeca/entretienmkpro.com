import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import vehicule from "../../public/images/card-vehicule.jpg";

const Vehicule: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen font-bold text-stone-800 flex flex-col">
        <Header />
        <div className="flex-grow">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="lg:max-w-xl">
                <Image src={vehicule} className="rounded-lg shadow-2xl" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-5xl font-bold">Véhicule à domicile</h1>
                  <div className="flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="py-6 text-stone-800/70">
                  Entretien MK Pro offre un service d'entretien d'intérieur de
                  véhicule et ce à même votre domicile.
                </p>
                <p className="pb-2 underline">
                  Catégorie de véhicules et différents services :
                </p>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Voitures</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Camions</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Bateaux</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Motos</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>VR et Tentes roulottes</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Shampoing moteur avec produits biodégradables</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Nettoyage des jantes</p>
                </div>
                <div className="pb-5">
                  <a
                    href="/contactez-nous"
                    className="my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                  >
                    Obtenez votre soumission gratuite
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

export default Vehicule;
