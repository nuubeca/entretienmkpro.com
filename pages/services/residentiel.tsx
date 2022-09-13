import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaArrowAltCircleRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import residentiel from "../../public/images/card-residentiel.jpg";

const Residentiel: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white font-bold text-stone-800 flex flex-col">
        <Header />
        <div className="flex-grow">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="lg:max-w-xl">
                <Image src={residentiel} className="rounded-lg shadow-2xl" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-5xl font-bold">Résidentiel</h1>
                  <div className="flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <p className="py-6 text-stone-800/70">
                  Entretien MK Pro propose un service d'entretien ménager
                  complet à domicile.
                </p>
                <p className="pb-2 underline">Le service de base comprend :</p>
                <div className="text-sm">
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
                <p className="pt-2">
                  *** Nous pouvons adapter l'offre de service selon vos besoins,
                  simplement nous contacter pour obtenir une soumission
                  gratuite.
                </p>
                <p className="pt-2">
                  Le service de grand ménage est également offert et il est
                  conseillé de le faire au moins une fois par année.
                </p>
                <a
                  href="/contactez-nous"
                  className="my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                >
                  Obtenez votre soumission gratuite
                </a>
                <a
                  href="/services/nettoyage-a-la-vapeur"
                  className="hover:text-stone-600"
                >
                  <div className="flex items-center pb-5">
                    <FaArrowAltCircleRight size={30} />
                    <p className="pl-5">
                      Informez-vous également sur notre service de nettoyage à
                      la vapeur.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Residentiel;
