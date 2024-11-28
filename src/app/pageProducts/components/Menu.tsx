/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaClipboardList, FaBuilding, FaMoneyBillWave, FaBoxOpen } from 'react-icons/fa';
import { MdPermContactCalendar } from "react-icons/md";

export default function Menu() {
  const [Menu, setMenu] = useState(true)

  const openMenu = () => {
    setMenu(!Menu);
  }
  return (
    <nav className={`bg-zinc-100 h-screen transition-transform duration-300 ${
      Menu ? 'w-full sm:w-1/4 md:w-2/5 lg:w-1/4' : 'w-0 overflow-hidden'
    }`}>
      <div className="flex mb-12 mt-4 justify-between px-4 sm:justify-start">
        <img src="/logo.png" alt="Logo" className="w-28 h-8 sm:w-36 sm:h-10" />
        <button className="border h-8 bg-zinc-50 sm:hidden"
        onClick={openMenu}>
          <IoMenu className="w-6 h-6" />
        </button>
      </div>

      <ul className="text-sm px-4">
        <li className="flex gap-2 items-center hover:bg-lime-400 p-2 rounded-2xl hover:cursor-pointer">
          <GoArrowSwitch className="text-lime-600" />
          <span className="text-zinc-700">Acessar loja</span>
        </li>
        <li className="flex gap-2 items-center hover:bg-lime-400 p-2 rounded-2xl hover:cursor-pointer">
          <IoShieldCheckmark className="text-lime-600" />
          <span className="text-zinc-700">Admin Dashboard</span>
        </li>
        <li className="flex gap-2 items-center hover:bg-lime-400 p-2 rounded-2xl hover:cursor-pointer">
          <FaClipboardList className="text-lime-600" />
          <span className="text-zinc-700">Perfis</span>
        </li>
        <li className="flex gap-2 items-center bg-lime-400 p-4 rounded-3xl font-bold hover:cursor-pointer">
          <FaBuilding className="text-zinc-900" />
          <span>Empresas</span>
        </li>
        <li className="flex gap-2 items-center hover:bg-lime-400 p-2 rounded-2xl hover:cursor-pointer">
          <MdPermContactCalendar className="text-lime-600" />
          <span className="text-zinc-700">Colaboradores</span>
        </li>
        <li className="flex gap-2 items-center hover:bg-lime-400 p-2 rounded-2xl hover:cursor-pointer">
          <FaMoneyBillWave className="text-lime-600" />
          <span className="text-zinc-700">Produtos</span>
        </li>
        <li className="flex gap-2 items-center hover:bg-lime-400 p-2 rounded-2xl hover:cursor-pointer">
          <FaBoxOpen className="text-lime-600" />
          <span className="text-zinc-700">Cestas</span>
        </li>
      </ul>
    </nav>
  );
}
