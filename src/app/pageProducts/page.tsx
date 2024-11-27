/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function PageProducts() {
  return (
    <div>
      <header>
        <img src="" alt="" />
        <h1>- Empresas</h1>
        <img src="" alt="" />
        <select name="" id=""></select>
      </header>

      <nav>
        <img src="/logo.png" alt="Logo" />

        <button>
          menu
        </button>

        <ul>
          <li>
            <img src="" alt="" />
            <span>Acessar loja</span>
          </li>
          <li>
            <img src="" alt="" />
            <span>Admin Dashboard</span>
          </li>
          <li>
            <img src="" alt="" />
            <span>Perfis</span>
          </li>
          <li>
            <img src="" alt="" />
            <span>Empresas</span>
          </li>
          <li>
            <img src="" alt="" />
            <span>Colaboladores</span>
          </li>
          <li>
            <img src="" alt="" />
            <span>Produtos</span>
          </li>
          <li>
            <img src="" alt="" />
            <span>Cestas</span>
          </li>
        </ul>
      </nav>

      <main>
        <div className="">
          <input type="text" placeholder="Buscar..." />
          <button type='submit'></button>
          <button>Novo</button>
        </div>

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
      </main>
    </div>
  )
}
