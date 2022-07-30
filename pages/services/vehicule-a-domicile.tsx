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
      <div className="w-full min-h-screen bg-white font-bold">
        <Header />
        <div className="hero h-72 bg-[url('../public/images/card-vehicule.jpg')]">
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">Véhicule à domicile</h1>
            </div>
          </div>
        </div>
        <div className="hero min-h-fit bg-white pt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-72">
              <Image src={vehicule} className="rounded-lg shadow-2xl" />
            </div>
            <div className="space-y-5 pr-24 text-stone-800">
              <div className="flex justify-between">
                <h1 className="text-5xl font-bold">Véhicule à domicile</h1>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p>
              Entretien MK Pro offre un service d'entretien d'intérieur de véhicule et ce à même votre domicile.
              </p>
              <p>Catégorie de véhicules et différents services :</p>
              <div className="pl-5">
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
                  <p>Shampoing moteur avec produits biodégradables</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Nettoyage des jantes</p>
                </div>
              </div>
              <button className="btn bg-stone-800">
                Obtenez votre soumission gratuite.
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Vehicule;
