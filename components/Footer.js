import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelopeSquare,
  FaFacebookF,
  FaPhoneSquare,
  FaTiktok,
} from "react-icons/fa";
import logo from "../public/images/logo-footer.png";

export default function Footer() {
  return (
    <div>
      <div className="bg-stone-900 text-white">
        <footer className="footer py-10 px-5 text-white flex-none md:flex md:justify-between container mx-auto border-t-2 border-dotted -mt-5">
          <div>
            <Image src={logo} alt="logo" />
            <div className="flex items-center gap-2">
              <FaPhoneSquare size={30} />
              <a href="tel:5146477056">(514)-647-7056</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneSquare size={30} />
              <a href="tel:8196408230">(819)-640-8230</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelopeSquare size={30} />
              <a href="mailto:entretienmkpro@hotmail.com">
                entretienmkpro@hotmail.com
              </a>
            </div>
          </div>
          <div>
            <span className="footer-title">Liens</span>
            <Link href="/a-propos" className="link link-hover">
              À propos
            </Link>
            <Link href="/contactez-nous" className="link link-hover">
              Contactez-nous
            </Link>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link href="/services/residentiel" className="link link-hover">
              Résidentiel
            </Link>
            <Link href="/services/commercial" className="link link-hover">
              Commercial
            </Link>
            <Link
              href="/services/nettoyage-a-la-vapeur"
              className="link link-hover"
            >
              Nettoyage à la vapeur
            </Link>
            <Link
              href="/services/vehicule-a-domicile"
              className="link link-hover"
            >
              Véhicule à domicile
            </Link>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.facebook.com/EntretienMKpro/">
                <FaFacebookF size={30} />
              </a>
              <a href="https://www.tiktok.com/@entretienmkpro?fbclid=IwAR1NKces9UOS19-M-PxGH-wSzq2fvT-4MCiRhypDjNMiO8vPXGa4kG0I3p8">
                <FaTiktok size={30} />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="text-center bg-stone-800 py-4 text-stone-400">
        Entretien MK Pro © 2022
      </div>
    </div>
  );
}
