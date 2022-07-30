import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import vapeur from "../../public/images/card-vapeur.jpg";

const Vapeur: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white font-bold">
        <Header />
        <div className="hero h-72 bg-[url('../public/images/card-vapeur.jpg')]">
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">Nettoyage à la vapeur</h1>
            </div>
          </div>
        </div>
        <div className="hero min-h-fit bg-white pt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-72">
              <Image src={vapeur} className="rounded-lg shadow-2xl" />
            </div>
            <div className="space-y-5 pr-24 text-stone-800">
              <div className="flex justify-between">
                <h1 className="text-5xl font-bold">Nettoyage à la vapeur</h1>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p>
                Entretien MK Pro offre un service de nettoyage à la vapeur.
                Grâce à son équipement Dupray de grade commercial qui nettoie,
                déodorise et désinfecte, Mk pro vous garantit la satisfaction.
              </p>
              <p>Les différents services :</p>
              <div className="pl-5">
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Remise à neuf des coulis de céramique</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Remise à neuf de matériel de cuisine commerciale</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Nettoyage de matelas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Élimination de tâche sur les tissues et autres surfaces</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Nettoyage de divan, causeuse, canapé ou chaise</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Élimination de graffitis * Évaluation nécessaire.</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>
                    Désodorisation d'espaces, choix de plusieurs huiles
                    essentielles.
                  </p>
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

export default Vapeur;
