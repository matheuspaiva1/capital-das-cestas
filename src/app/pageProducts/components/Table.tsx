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
