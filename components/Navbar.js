import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/images/logo-header.png";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 z-20 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-start filter border-b-2 border-dotted mb-5 bg-white h-24">
        {" "}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          <Image alt="logo" src={logo} />
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/a-propos"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          À Propos
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contactez-nous"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contactez-nous
        </a>
        <hr />
        Services
        <hr />
        <a
          className="text-xl font-normal my-4"
          href="/services/residentiel"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Résidentiel
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/services/commercial"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Commercial
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/services/nettoyage-a-la-vapeur"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Nettoyage à la vapeur
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/services/vehicule-a-domicile"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Véhicule à Domicile
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter border-b-2 border-dotted mb-5 bg-white px-4 py-4 h-24 items-center z-50">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link className="text-2xl font-semibold" href="/">
          <Image className=" z-10" alt="logo" src={logo} />
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li tabindex="0">
              <a>
                Services
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-white z-50">
                <li>
                  <NavLink to="/services/residentiel">Résidentiel</NavLink>
                </li>
                <li>
                  <NavLink to="/services/commercial">Commercial</NavLink>
                </li>
                <li>
                  <NavLink to="/services/nettoyage-a-la-vapeur">
                    Nettoyage à la vapeur
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/vehicule-a-domicile">
                    Véhicule à Domicile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/a-propos">À Propos</NavLink>
            </li>
            <li>
              <NavLink to="/contactez-nous">Contactez-nous</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
