/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="flex gap-[54em] border shadow-md  p-4">
      <div className="flex justify-center gap-2">
        <FaBuilding className='w-6 h-6'/>
        <h1 className='font-bold'>Empresas</h1>
      </div>
      <div className="flex justify-center">
        <FaRegUser className='w-6 h-6'/>
        <select className='h-4 w-4'>
          <option value=""></option>
          <option value="perfil">Perfil</option>
          <option value="logout">Logout</option>
        </select>
      </div>
    </header>
  )
}
