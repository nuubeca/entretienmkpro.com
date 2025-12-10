import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import commercial from "../../../public/images/card-commercial.jpg";

export const metadata = {
  title: "Service Commercial - Entretien MK Pro",
  description: "L'équipe d'entretien MK Pro propose un service d'entretien ménager de qualité supérieure pour les entreprises à Sherbrooke et ses environs.",
};

export default function Commercial() {
  return (
    <div className="w-full min-h-screen font-bold bg-white text-stone-800 flex flex-col">
      <div className="flex-grow">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="lg:max-w-xl">
              <Image
                src={commercial}
                className="rounded-lg shadow-2xl"
                alt="commercial"
              />
            </div>
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
                L&apos;équipe d&apos;entretien MK Pro propose un service d&apos;entretien
                ménager de qualité supérieure pour les entreprises situées à
                Sherbrooke et ses environs. Ce service est défini en fonction
                des besoins spécifiques du client.
              </p>
              <p className="pb-2 underline">Différentes industries :</p>
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
              <div className="pb-5">
                <Link
                  href="/contactez-nous"
                  className="my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                >
                  Obtenez votre soumission gratuite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

