import Image from "next/image";
import React from "react";
import {
  FaTiktok,
  FaFacebookF,
  FaPhoneSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";
import logo from "../public/images/logo-footer.png";

function Footer() {
  return (
    <>
    <div className="bg-stone-900">
      <footer className="footer py-10 text-base-content flex-none md:flex md:justify-between container mx-auto border-t-2 border-dotted mt-5">
        <div>
          <Image src={logo} />
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
          <a className="link link-hover">À propos</a>
          <a className="link link-hover">Contactez-nous</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/services/residentiel" className="link link-hover">Résidentiel</a>
          <a href="/services/commercial" className="link link-hover">Commercial</a>
          <a href="/services/nettoyage-a-la-vapeur" className="link link-hover">Nettoyage à la vapeur</a>
          <a href="/services/vehicule-a-domicile" className="link link-hover">Véhicule à domicile</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebookF size={30} />
            </a>
            <a>
              <FaTiktok size={30} />
            </a>
          </div>
        </div>
      </footer>
      </div>
      <div className="text-center bg-stone-800 py-4">Entretien MK Pro © 2022</div>
    </>
  );
}

export default Footer;
