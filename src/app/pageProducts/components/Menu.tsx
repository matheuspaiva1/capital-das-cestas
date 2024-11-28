/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaBuilding } from 'react-icons/fa'
import { MdPermContactCalendar } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

export default function Menu() {
  return (
      <nav className='bg-zinc-100 h-screen'>
        <div className="flex mb-12 mt-4">
          <img src="/logo.png" alt="Logo" className='w-36 h-10' />
          <button className='border h-8 m-auto mx-4 bg-zinc-50'>
            <IoMenu className='w-6 h-6'/>
          </button>
        </div>

        <ul className='text-sm'>
          <li className="flex mx-4 my-8 gap-2 text-base items-center">
            <GoArrowSwitch className='text-lime-600 '/>
            <span className='text-zinc-500'>Acessar loja</span>
          </li>
          <li className="flex mx-4 my-8 gap-2 text-base items-center">
            <IoShieldCheckmark className='text-lime-600'/>
            <span className='text-zinc-500'>Admin Dashboard</span>
          </li>
          <li className="flex mx-4 my-8 gap-2 text-base items-center">
            <FaClipboardList className='text-lime-600'/>
            <span className='text-zinc-500'>Perfis</span>
          </li>
          <li className="flex mx-4 my-8 gap-2 text-base items-center bg-lime-400 p-4 rounded-3xl font-bold">
            <FaBuilding className='text-zinc-900'/>
            <span>Empresas</span>
          </li>
          <li className="flex mx-4 my-8 gap-2 text-base items-center">
            <MdPermContactCalendar className='text-lime-600'/>
            <span className='text-zinc-500'>Colaboladores</span>
          </li>
          <li className="flex mx-4 my-8 gap-2 text-base items-center">
            <FaMoneyBillWave className='text-lime-600'/>
            <span className='text-zinc-500'>Produtos</span>
          </li>
          <li className="flex mx-4 my-8 gap-2 text-base items-center">
            <FaBoxOpen className='text-lime-600'/>
            <span className='text-zinc-500'>Cestas</span>
          </li>
        </ul>
      </nav>
)
}
