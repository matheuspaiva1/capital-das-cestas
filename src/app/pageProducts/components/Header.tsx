/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="lg:flex lg:justify-between items-center border shadow-md p-4 block w-screen lg:w-full md:w-[54em] m-auto">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <FaBuilding className="w-6 h-6 text-gray-700" />
        <h1 className="font-bold text-base sm:text-lg md:text-xl">Empresas</h1>
      </div>

      <div className="flex items-center gap-2">
        <FaRegUser className="w-6 h-6 text-gray-700" />
        <select className="h-8 w-4 sm:w-4 md:w-4 p-1">
          <option value=""></option>
          <option value="perfil">Perfil</option>
          <option value="logout">Logout</option>
        </select>
      </div>
    </header>
  )
}
