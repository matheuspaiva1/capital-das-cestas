/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function Table() {
  return (
    <div className='m-auto w-full'>
      <table className="m-auto p-4 ">
          <thead className="">
            <tr className=" text-zinc-300 text-sm">
              <th className="border-b p-4">ID</th>
              <th className="border-l border-b p-4">CNPJ</th>
              <th className="border-l border-b p-4">Nome Fantasia</th>
              <th className="border-l border-b p-4">Razão Social</th>
              <th className="border-l border-b p-4">Inscrição Estadual</th>
              <th className="border-l border-b p-4">Cidade</th>
              <th className="border-l border-b p-4">UF</th>
              <th className="border-l border-b p-4">Data Criação</th>
              <th className="border-l border-b p-4">Data Atualização</th>
              <th className="border-l border-b p-4">Ações</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className=" text-sm text-zinc-600">
              <td className="border-b p-2">1</td>
              <td className="border-b p-2">00.000.000/0001-00</td>
              <td className="border-b p-2">PetShop do Bairro</td>
              <td className="border-b p-2">PetShop LTDA</td>
              <td className="border-b p-2">123456789</td>
              <td className="border-b p-2">São Paulo</td>
              <td className="border-b p-2">SP</td>
              <td className="border-b p-2">01/01/2022</td>
              <td className="border-b p-2">15/11/2024</td>
              <td className="flex items-center justify-center py-4 gap-2 border-b">
                <button> <MdEdit/> </button>
                <button> <MdDelete/> </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="p-4 flex justify-end items-center gap-4">
          <span className="border p-2 rounded-lg border-blue-600">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <button>
            <IoIosArrowForward/>
          </button>
        </div>
    </div>
  )
}
