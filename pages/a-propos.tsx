import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import apropos from "../public/images/apropos.jpg";

const Apropos: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen font-bold text-stone-800 flex flex-col">
        <Header />
        <div className="flex-grow">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="lg:max-w-xl">
                <Image src={apropos} className="rounded-lg shadow-2xl" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl sm:text-5xl font-bold">
                    À propos de nous
                  </h1>
                  <div className="flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="py-6 text-stone-800/70">
                  Entretien MK Pro est une entreprise familiale fondée en 2021.
                  Notre équipe de techniciens qualifiés effectue votre entretien
                  ménager selon vos besoins, pour un résultat de qualité
                  irréprochable et ce dans le plus grand respect de
                  l'environnement.
                </p>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft size={100} />
                  <p>
                    Des valeurs tel que: l'environnement, l'intégrité, le
                    professionnalisme et un service de qualité, ne sont qu'un
                    avant-goût de ce qu'entretien Mk Pro pourra vous offrir.
                  </p>
                </div>
                <div className="pb-5 grid grid-cols-1s sm:grid-cols-2">
                  <a
                    href="/services/residentiel"
                    className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                  >
                    Résidentiel
                  </a>
                  <a
                    href="/services/commercial"
                    className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                  >
                    Commercial
                  </a>
                  <a
                    href="/services/nettoyage-a-la-vapeur"
                    className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                  >
                    Nettoyage à la vapeur
                  </a>
                  <a
                    href="services/vehicule-a-domicile"
                    className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                  >
                    Véhicule à domicile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <div className="w-full min-h-screen bg-white font-bold">
        <Header />
        <div className="hero h-72 bg-[url('../public/images/card-commercial.jpg')]">
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">À propos de nous</h1>
            </div>
          </div>
        </div>
        <div className="hero min-h-fit bg-white pt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-72">
              <Image src={apropos} className="rounded-lg shadow-2xl" />
            </div>
            <div className="space-y-5 pr-24 text-stone-800">
              <div className="flex justify-between">
                <h1 className="text-5xl font-bold">
                  À propos de nous & Nos Services
                </h1>
              </div>
              <p>
                Entretien MK Pro est une entreprise familiale fondée en 2021.
                Notre équipe de techniciens qualifiés effectue votre entretien
                ménager selon vos besoins, pour un résultat de qualité
                irréprochable et ce dans le plus grand respect de
                l'environnement.
              </p>
              <p>Différentes industries :</p>
              <div className="pl-5">
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Des valeurs tel que: l'environnement, l'intégrité, le professionnalisme et un service de qualité, ne sont qu'un avant-goût de ce qu'entretien Mk Pro pourra vous offrir.</p>
                </div>
                <div className="">
                  <p>Résidentiel</p>
                </div>
                <div className="">
                  <p>Commercial</p>
                </div>
                <div className="">
                  <p>Nettoyage à la vapeur</p>
                </div>
                <div className="">
                  <p>Véhicule à domicile</p>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <Footer />
      </div> */}
    </>
  );
};

export default Apropos;
