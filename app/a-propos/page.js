import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import apropos from "../../public/images/apropos.jpg";

export const metadata = {
  title: "À propos de nous - Entretien MK Pro",
  description: "Entretien MK Pro est une entreprise familiale fondée en 2021. Notre équipe de techniciens qualifiés effectue votre entretien ménager selon vos besoins.",
};

export default function Apropos() {
  return (
    <div className="w-full min-h-screen font-bold bg-white text-stone-800 flex flex-col">
      <div className="flex-grow">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="lg:max-w-xl">
              <Image
                alt="apropos"
                src={apropos}
                className="rounded-lg shadow-2xl"
              />
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
                l&apos;environnement.
              </p>
              <div className="flex items-center gap-2">
                <FaQuoteLeft size={100} />
                <p>
                  Des valeurs tel que: l&apos;environnement, l&apos;intégrité, le
                  professionnalisme et un service de qualité, ne sont qu&apos;un
                  avant-goût de ce qu&apos;entretien Mk Pro pourra vous offrir.
                </p>
              </div>
              <div className="pb-5 grid grid-cols-1s sm:grid-cols-2">
                <Link
                  href="/services/residentiel"
                  className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                >
                  Résidentiel
                </Link>
                <Link
                  href="/services/commercial"
                  className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                >
                  Commercial
                </Link>
                <Link
                  href="/services/nettoyage-a-la-vapeur"
                  className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                >
                  Nettoyage à la vapeur
                </Link>
                <Link
                  href="/services/vehicule-a-domicile"
                  className="w-full sm:w-72 my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-stone-800 rounded-lg hover:bg-stone-800 hover:text-white focus:ring-4 focus:ring-gray-100"
                >
                  Véhicule à domicile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

