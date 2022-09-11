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
      <div className="w-full min-h-screen bg-white font-bold">
        <Header />

        <section className="bg-white text-stone-800">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <div className="flex justify-between items-center">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  Commercial
                </h1>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>

              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
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
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image src={commercial} className="" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ContactezNous;
