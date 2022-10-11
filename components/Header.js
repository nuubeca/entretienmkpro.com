import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/images/logo-header.png";

export default function Header() {
  return (
    <div className="navbar bg-white text-black border-b-2 border-dotted mb-5 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link href={"/a-propos"}>À Propos</Link>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="bg-white p-2">
                <li>
                  <Link href={"/services/residentiel"}>Résidentiel</Link>
                </li>
                <li>
                  <Link href={"/services/commercial"}>Commercial</Link>
                </li>
                <li>
                  <Link href={"/services/nettoyage-a-la-vapeur"}>
                    Nettoyage à la vapeur
                  </Link>
                </li>
                <li>
                  <Link href={"/services/vehicule-a-domicile"}>
                    Véhicule à Domicile
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/contactez-nous"}>Contactez-nous</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image alt="logo" src={logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex="0">
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
              <li>
                <Link href={"/services/residentiel"}>Résidential</Link>
              </li>
              <li>
                <Link href={"/services/commercial"}>Commercial</Link>
              </li>
              <li>
                <Link href={"/services/nettoyage-a-la-vapeur"}>
                  Nettoyage à la vapeur
                </Link>
              </li>
              <li>
                <Link href={"/services/vehicule-a-domicile"}>
                  Véhicule à Domicile
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/a-propos"}>À Propos</Link>
          </li>
          <li>
            <Link href={"/contactez-nous"}>Contactez-nous</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}
