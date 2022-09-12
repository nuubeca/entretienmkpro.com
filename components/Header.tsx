import Image from "next/image";
import React from "react";
import logo from "../public/images/logo-header.png";

function Header() {
  return (
    <div className="navbar container mx-auto bg-white text-black border-b-2 border-dotted mb-5">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
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
                <li className="">
                  <a href="/services/residentiel">Résidentiel</a>
                </li>
                <li>
                  <a href="/services/commercial">Commercial</a>
                </li>
                <li>
                  <a href="/services/nettoyage-a-la-vapeur">
                    Nettoyage à la vapeur
                  </a>
                </li>
                <li>
                  <a href="/services/vehicule-a-domicile">
                    Véhicule à domicile
                  </a>
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
      <div className="flex-1">
        <Image src={logo} />
      </div>

      <div className="flex-none z-50 hidden md:block">
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
              <li className="">
                <a href="/services/residentiel">Résidentiel</a>
              </li>
              <li>
                <a href="/services/commercial">Commercial</a>
              </li>
              <li>
                <a href="/services/nettoyage-a-la-vapeur">
                  Nettoyage à la vapeur
                </a>
              </li>
              <li>
                <a href="/services/vehicule-a-domicile">Véhicule à domicile</a>
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
