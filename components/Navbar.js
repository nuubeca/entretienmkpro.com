"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/images/logo-header.png";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 z-20 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-start filter border-b-2 border-dotted mb-5 bg-white h-24">
        <Link className="text-xl font-semibold" href="/">
          <Image alt="logo" src={logo} />
        </Link>
      </div>
      <div className="flex flex-col ml-4 text-stone-800">
        <Link 
          className="text-xl font-medium my-4 hover:text-stone-600" 
          href="/a-propos"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          À Propos
        </Link>
        <Link 
          className="text-xl font-normal my-4 hover:text-stone-600" 
          href="/contactez-nous"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contactez-nous
        </Link>
        <hr className="mt-2" />
        <span className="py-2 font-extrabold">Services</span>
        <hr className="mb-2" />
        <Link 
          className="text-xl font-normal my-4 hover:text-stone-600" 
          href="/services/residentiel"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Résidentiel
        </Link>
        <Link 
          className="text-xl font-normal my-4 hover:text-stone-600" 
          href="/services/commercial"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Commercial
        </Link>
        <Link
          className="text-xl font-normal my-4 hover:text-stone-600"
          href="/services/nettoyage-a-la-vapeur"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Nettoyage à la vapeur
        </Link>
        <Link
          className="text-xl font-normal my-4 hover:text-stone-600"
          href="/services/vehicule-a-domicile"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Véhicule à Domicile
        </Link>
      </div>
    </div>
  );
}

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Services
        <svg
          className="fill-current w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </button>
      
      {isOpen && (
        <div 
          className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border border-gray-200 rounded-lg py-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link
            href="/services/residentiel"
            className="block px-4 py-3 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Résidentiel
          </Link>
          <Link
            href="/services/commercial"
            className="block px-4 py-3 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Commercial
          </Link>
          <Link
            href="/services/nettoyage-a-la-vapeur"
            className="block px-4 py-3 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Nettoyage à la vapeur
          </Link>
          <Link
            href="/services/vehicule-a-domicile"
            className="block px-4 py-3 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Véhicule à Domicile
          </Link>
        </div>
      )}
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
          <Image className="z-10" alt="logo" src={logo} />
        </Link>
      </div>
      
      <div className="w-9/12 flex justify-end items-center">
        {/* Hamburger menu mobile */}
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
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

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Accueil
          </Link>
          
          <DropdownMenu />
          
          <Link
            href="/a-propos"
            className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            À Propos
          </Link>
          
          <Link
            href="/contactez-nous"
            className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </nav>
  );
}
