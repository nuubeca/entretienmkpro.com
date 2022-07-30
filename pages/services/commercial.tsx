import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import commercial from "../../public/images/card-commercial.jpg";

const Commercial: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white font-bold">
        <Header />
        <div className="hero h-72 bg-[url('../public/images/card-commercial.jpg')]">
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Commercial</h1>
            </div>
          </div>
        </div>
        <div className="hero min-h-fit bg-white pt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-72">
              <Image src={commercial} className="rounded-lg shadow-2xl" />
            </div>
            <div className="space-y-5 pr-24 text-stone-800">
              <div className="flex justify-between">
                <h1 className="text-5xl font-bold">Commercial</h1>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p>
                Entretien MK Pro propose un service d'entretien ménager de
                qualité supérieure pour les entreprises. Ce service est défini
                en fonction des besoins spécifiques du client.
              </p>
              <p>Différentes industries :</p>
              <div className="pl-5">
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Bureaux professionnel</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Écoles & garderies</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Restaurants & bars</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Commerces de détail</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Centres de conditionnement physique et spas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Ménage après construction/rénovation</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Entretien de parc immobilier/Service de conciergerie</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Industriel/Usine</p>
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

export default Commercial;
