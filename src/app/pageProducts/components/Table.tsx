/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Table() {
  return (
    <div>
      <table className="border ">
          <thead className="border">
            <tr>
              <th>ID</th>
              <th>CNPJ</th>
              <th>Nome Fantasia</th>
              <th>Razão Social</th>
              <th>Inscrição Estadual</th>
              <th>Cidade</th>
              <th>UF</th>
              <th>Data Criação</th>
              <th>Data Atualização</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>00.000.000/0001-00</td>
              <td>PetShop do Bairro</td>
              <td>PetShop LTDA</td>
              <td>123456789</td>
              <td>São Paulo</td>
              <td>SP</td>
              <td>01/01/2022</td>
              <td>15/11/2024</td>
              <td className="">
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <button>
            <img src="" alt="" />
          </button>
        </div>
    </div>
  )
}
