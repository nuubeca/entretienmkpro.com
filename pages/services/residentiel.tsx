import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import residentiel from "../../public/images/card-residentiel.jpg";

const Residentiel: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white font-bold">
        <Header />
        <div className="hero h-72 bg-[url('../public/images/card-residentiel.jpg')]">
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Résidentiel</h1>
            </div>
          </div>
        </div>
        <div className="hero min-h-fit bg-white pt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-72">
              <Image src={residentiel} className="rounded-lg shadow-2xl" />
            </div>
            <div className="space-y-5 pr-24 text-stone-800">
              <div className="flex justify-between">
                <h1 className="text-5xl font-bold">Résidentiel</h1>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p>
                Entretien MK Pro propose un service d'entretien ménager complet
                à domicile.
              </p>
              <p>Le service de base comprend :</p>
              <div className="pl-5">
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>
                    Nettoyage des surfaces de plancher et tapis (Aspirateur,
                    vadrouille)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Nettoyage des surfaces de comptoirs et armoires</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>
                    Nettoyage des salles de bain; Lavabos, toilettes,
                    douche/bain
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Époussetage en surface</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Nettoyage de l'extérieur des électroménagers</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaQuoteLeft />
                  <p>Fourni les produits biodégradables</p>
                </div>
              </div>
              <p>
                *** Nous pouvons adapter l'offre de service selon vos besoins,
                simplement nous contacter pour obtenir une soumission gratuite.
              </p>
              <p>
                Le service de grand ménage est également offert et il est
                conseillé de le faire au moins une fois par année.
              </p>

              <button className="btn bg-stone-800">
                Obtenez votre soumission gratuite.
              </button>
              <p>
                Informez-vous également sur notre service de nettoyage à la
                vapeur.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Residentiel;
