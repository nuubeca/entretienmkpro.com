import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import vapeur from "../../../public/images/card-vapeur.jpg";

export const metadata = {
  title: "Nettoyage à la vapeur - Entretien MK Pro",
  description: "Entretien MK Pro offre un service de nettoyage à la vapeur avec équipement Dupray de grade commercial à Sherbrooke.",
};

export default function NettoyageALaVapeur() {
  return (
    <div className="w-full min-h-screen font-bold bg-white text-stone-800 flex flex-col">
      <div className="flex-grow">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="lg:max-w-xl">
              <Image
                src={vapeur}
                className="rounded-lg shadow-2xl"
                alt="vapeur"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-5xl font-bold">Nettoyage à la vapeur</h1>
                <div className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="py-6 text-stone-800/70">
                Entretien MK Pro offre un service de nettoyage à la vapeur.
                Grâce à son équipement Dupray de grade commercial qui nettoie,
                déodorise et désinfecte, Mk pro vous garantit la satisfaction.
              </p>
              <p className="pb-2 underline">Les différents services :</p>
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
                  Désodorisation d&apos;espaces, choix de plusieurs huiles
                  essentielles.
                </p>
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

