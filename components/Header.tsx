import React from "react";
import Image from "next/image";
import logo from "../public/images/logo-header.png";

function Header() {
  return (
    <div className="navbar container mx-auto bg-white text-black">
      <div className="flex-1">
        <Image src={logo} />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Accueil</a>
          </li>
          <li tabIndex={0}>
            <a>
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white">
              <li className=" border-">
                <a>Résidentiel</a>
              </li>
              <li>
                <a>Commercial</a>
              </li>
              <li>
                <a>Nettoyage à la vapeur</a>
              </li>
              <li>
                <a>Véhicule à domicile</a>
              </li>
            </ul>
          </li>
          <li>
            <a>À Propos</a>
          </li>
          <li>
            <a>Contactez-Nous</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
