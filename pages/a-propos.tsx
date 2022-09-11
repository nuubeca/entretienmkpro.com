import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import apropos from "../public/images/apropos.svg";

const Apropos: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white font-bold">
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
      </div>
    </>
  );
};

export default Apropos;
