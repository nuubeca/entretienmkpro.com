import Image from "next/image";
import React from "react";
import logo from "../public/images/logo-header.png";

function Header() {
  return (
    <div className="navbar container mx-auto bg-white text-black border-b-2 border-dotted mb-5">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
            <li>
              <a href="/" className="active:bg-stone-200">
                Accueil
              </a>
            </li>
            <li tabIndex={0}>
              <p className="active:bg-stone-200">
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
              </p>
              <ul className="p-2 bg-white">
                <li className="">
                  <a
                    href="/services/residentiel"
                    className="active:bg-stone-200"
                  >
                    Résidentiel
                  </a>
                </li>
                <li>
                  <a
                    href="/services/commercial"
                    className="active:bg-stone-200"
                  >
                    Commercial
                  </a>
                </li>
                <li>
                  <a
                    href="/services/nettoyage-a-la-vapeur"
                    className="active:bg-stone-200"
                  >
                    Nettoyage à la vapeur
                  </a>
                </li>
                <li>
                  <a
                    href="/services/vehicule-a-domicile"
                    className="active:bg-stone-200"
                  >
                    Véhicule à domicile
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/a-propos" className="active:bg-stone-200">
                À Propos
              </a>
            </li>
            <li>
              <a href="/contactez-nous" className="active:bg-stone-200">
                Contactez-Nous
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Image src={logo} />
      </div>

      <div className="flex-none z-50 hidden md:block">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/" className="active:bg-stone-200">
              Accueil
            </a>
          </li>
          <li tabIndex={0}>
            <a className="active:bg-stone-200">
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
              <li>
                <a href="/services/residentiel" className="active:bg-stone-200">
                  Résidentiel
                </a>
              </li>
              <li>
                <a href="/services/commercial" className="active:bg-stone-200">
                  Commercial
                </a>
              </li>
              <li>
                <a
                  href="/services/nettoyage-a-la-vapeur"
                  className="active:bg-stone-200"
                >
                  Nettoyage à la vapeur
                </a>
              </li>
              <li>
                <a
                  href="/services/vehicule-a-domicile"
                  className="active:bg-stone-200"
                >
                  Véhicule à domicile
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/a-propos" className="active:bg-stone-200">
              À Propos
            </a>
          </li>
          <li>
            <a href="/contactez-nous" className="active:bg-stone-200">
              Contactez-Nous
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
