/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Table() {
  const tableData = [
    {
      id: 1,
      cnpj: "00.000.000/0001",
      nomeFantasia: "PetShop do Bairro",
      razaoSocial: "PetShop LTDA",
      inscricaoEstadual: "123456789",
      cidade: "São Paulo",
      uf: "SP",
      dataCriacao: "01/01/2022",
      dataAtualizacao: "15/11/2024",
    },
    {
      id: 2,
      cnpj: "11.111.111/1111",
      nomeFantasia: "Loja de Ração",
      razaoSocial: "Rações LTDA",
      inscricaoEstadual: "987654321",
      cidade: "Rio de Janeiro",
      uf: "RJ",
      dataCriacao: "05/03/2020",
      dataAtualizacao: "12/09/2024",
    },
    {
      id: 3,
      cnpj: "22.222.222/2222",
      nomeFantasia: "PetShop São José",
      razaoSocial: "PetShop S.A.",
      inscricaoEstadual: "112233445",
      cidade: "Curitiba",
      uf: "PR",
      dataCriacao: "10/10/2021",
      dataAtualizacao: "25/11/2024",
    },
    {
      id: 4,
      cnpj: "33.333.333/3333",
      nomeFantasia: "Super Rações",
      razaoSocial: "Super Rações LTDA",
      inscricaoEstadual: "556677889",
      cidade: "Porto Alegre",
      uf: "RS",
      dataCriacao: "01/07/2019",
      dataAtualizacao: "10/08/2024",
    },
    {
      id: 5,
      cnpj: "44.444.444/4444",
      nomeFantasia: "Mundo Animal",
      razaoSocial: "Mundo Animal LTDA",
      inscricaoEstadual: "223344556",
      cidade: "Florianópolis",
      uf: "SC",
      dataCriacao: "15/02/2021",
      dataAtualizacao: "01/11/2024",
    },
    {
      id: 6,
      cnpj: "55.555.555/5555",
      nomeFantasia: "Bicho Feliz",
      razaoSocial: "Bicho Feliz S.A.",
      inscricaoEstadual: "334455667",
      cidade: "Belo Horizonte",
      uf: "MG",
      dataCriacao: "18/08/2020",
      dataAtualizacao: "20/10/2024",
    },
    {
      id: 7,
      cnpj: "66.666.666/6666",
      nomeFantasia: "PetCenter",
      razaoSocial: "PetCenter LTDA",
      inscricaoEstadual: "667788990",
      cidade: "Brasília",
      uf: "DF",
      dataCriacao: "30/05/2018",
      dataAtualizacao: "12/09/2024",
    },
    {
      id: 8,
      cnpj: "77.777.777/7777",
      nomeFantasia: "Tudo para Pets",
      razaoSocial: "Tudo para Pets LTDA",
      inscricaoEstadual: "443322110",
      cidade: "Salvador",
      uf: "BA",
      dataCriacao: "22/11/2020",
      dataAtualizacao: "02/09/2024",
    },
    {
      id: 9,
      cnpj: "88.888.888/8888",
      nomeFantasia: "Rações e CIA",
      razaoSocial: "Rações e Companhia S.A.",
      inscricaoEstadual: "998877665",
      cidade: "Manaus",
      uf: "AM",
      dataCriacao: "12/04/2017",
      dataAtualizacao: "08/08/2024",
    },
    {
      id: 10,
      cnpj: "99.999.999/9999",
      nomeFantasia: "Pet Mania",
      razaoSocial: "Pet Mania LTDA",
      inscricaoEstadual: "556677889",
      cidade: "Fortaleza",
      uf: "CE",
      dataCriacao: "02/09/2022",
      dataAtualizacao: "15/11/2024",
    },
    {
      id: 11,
      cnpj: "10.101.010/1010",
      nomeFantasia: "Petz Mundo",
      razaoSocial: "Petz Mundo LTDA",
      inscricaoEstadual: "112233445",
      cidade: "Recife",
      uf: "PE",
      dataCriacao: "15/01/2020",
      dataAtualizacao: "25/10/2024",
    },
    {
      id: 12,
      cnpj: "20.202.020/2020",
      nomeFantasia: "Loja do Bicho",
      razaoSocial: "Loja do Bicho LTDA",
      inscricaoEstadual: "667788990",
      cidade: "Goiania",
      uf: "GO",
      dataCriacao: "28/03/2019",
      dataAtualizacao: "12/11/2024",
    },
    {
      id: 13,
      cnpj: "30.303.030/3030",
      nomeFantasia: "Ração Total",
      razaoSocial: "Ração Total LTDA",
      inscricaoEstadual: "223344556",
      cidade: "Campinas",
      uf: "SP",
      dataCriacao: "01/08/2021",
      dataAtualizacao: "15/09/2024",
    },
    {
      id: 14,
      cnpj: "40.404.040/4040",
      nomeFantasia: "Pet Shop Especial",
      razaoSocial: "Pet Shop Especial LTDA",
      inscricaoEstadual: "334455667",
      cidade: "Campinas",
      uf: "SP",
      dataCriacao: "21/06/2020",
      dataAtualizacao: "05/10/2024",
    },
    {
      id: 15,
      cnpj: "50.505.050/5050",
      nomeFantasia: "Bichos e Cia",
      razaoSocial: "Bichos e Cia LTDA",
      inscricaoEstadual: "556677889",
      cidade: "Niterói",
      uf: "RJ",
      dataCriacao: "11/02/2022",
      dataAtualizacao: "01/09/2024",
    },
    {
      id: 16,
      cnpj: "60.606.060/6060",
      nomeFantasia: "PetSuper",
      razaoSocial: "PetSuper LTDA",
      inscricaoEstadual: "443322110",
      cidade: "Vitoria",
      uf: "ES",
      dataCriacao: "09/05/2021",
      dataAtualizacao: "19/08/2024",
    },
    {
      id: 17,
      cnpj: "70.707.070/7070",
      nomeFantasia: "Mega Rações",
      razaoSocial: "Mega Rações S.A.",
      inscricaoEstadual: "998877665",
      cidade: "Cuiabá",
      uf: "MT",
      dataCriacao: "18/11/2018",
      dataAtualizacao: "28/09/2024",
    },
    {
      id: 18,
      cnpj: "80.808.080/8080",
      nomeFantasia: "Rações Mais",
      razaoSocial: "Rações Mais LTDA",
      inscricaoEstadual: "667788990",
      cidade: "Maceió",
      uf: "AL",
      dataCriacao: "10/01/2019",
      dataAtualizacao: "14/07/2024",
    },
    {
      id: 19,
      cnpj: "90.909.090/9090",
      nomeFantasia: "Pet Shop da Vila",
      razaoSocial: "Pet Shop da Vila LTDA",
      inscricaoEstadual: "112233445",
      cidade: "Natal",
      uf: "RN",
      dataCriacao: "25/03/2020",
      dataAtualizacao: "06/10/2024",
    },
    {
      id: 20,
      cnpj: "01.010.010/0101",
      nomeFantasia: "Bichos e Amigos",
      razaoSocial: "Bichos e Amigos LTDA",
      inscricaoEstadual: "223344556",
      cidade: "Ocara",
      uf: "CE",
      dataCriacao: "05/09/2022",
      dataAtualizacao: "17/09/2024",
    },
  ];

  const [search, setSearch] = useState(""); 

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPage = 6

  const filterName = tableData.filter((row) =>
    row.nomeFantasia.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filterName.length / itemsPage);

  const startIndex = (currentPage - 1) * itemsPage;
  const pagesCompleted = filterName.slice(startIndex, startIndex + itemsPage);

  const ChangePages = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='m-4'>
      <div className="m-4 block lg:flex md:block justify-between ">
          <div className="block lg:flex md:flex items-center gap-8">
            <input 
            type="text" 
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Buscar..." 
            className='border py-2 rounded-lg px-2 lg:w-80 w-30 '/>
            <button 
            type='submit' 
            className='bg-zinc-800 text-zinc-50 px-10 py-3 rounded-lg font-bold block lg:flex text-xs lg:m-0 my-4'
            >Pesquisar</button>
          </div>
          <button className='bg-lime-400 text-zinc-800 md:px-8 md:py-1 px-6 py-1 rounded-lg font-bold flex justify-end items-center'>Novo</button>
        </div>  
      <table className="m-auto p-4 w-full">
        <thead>
          <tr className="text-zinc-300 text-sm">
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
        <tbody>
          {pagesCompleted.map((row) => (
            <tr key={row.id} className="text-sm text-zinc-600">
              <td className="border-b p-2">{row.id}</td>
              <td className="border-b p-2">{row.cnpj}</td>
              <td className="border-b p-2">{row.nomeFantasia}</td>
              <td className="border-b p-2">{row.razaoSocial}</td>
              <td className="border-b p-2">{row.inscricaoEstadual}</td>
              <td className="border-b p-2">{row.cidade}</td>
              <td className="border-b p-2">{row.uf}</td>
              <td className="border-b p-2">{row.dataCriacao}</td>
              <td className="border-b p-2">{row.dataAtualizacao}</td>
              <td className="flex items-center justify-center py-4 gap-2">
                <button>
                  <MdEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4 flex justify-end items-center gap-2">
        <button
          onClick={() => ChangePages(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded  border-blue-700 disabled:opacity-50"
        >
          <IoIosArrowBack />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => ChangePages(index + 1)}
            className={`p-2 cursor-pointer rounded ${
              currentPage === index + 1 ? "border-blue-500 text-zinc-900" : "border"
            }`}
          >
            {index + 1}
          </span>
        ))}
        <button
          onClick={() => ChangePages(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded  disabled:opacity-50"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  )
}
