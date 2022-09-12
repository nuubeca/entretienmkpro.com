import type { NextPage } from "next";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import commercial from "../public/images/card-commercial.jpg";
// import mail from "@sendgrid/mail";

const ContactezNous: NextPage = () => {
  // mail.setApiKey(process.env.SENDGRID_API_KEY)

  return (
    <>
      <div className="w-full min-h-screen bg-white font-bold text-stone-800">
        <Header />
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src={commercial}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-5xl font-bold">Commercial</h1>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="py-6 text-stone-800/70">
                L’équipe d’entretien MK Pro propose un service d’entretien
                ménager de qualité supérieure pour les entreprises situées à
                Sherbrooke et ses environs. Ce service est défini en fonction
                des besoins spécifiques du client.
              </p>
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
              <a
                href="#"
                className="my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Obtenez votre soumission gratuite
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactezNous;
