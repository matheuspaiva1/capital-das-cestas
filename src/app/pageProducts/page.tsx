import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Table from './components/Table'
import SearchCompanies from './components/SearchCompanies'

export default function page() {
  return (
    <div className=''>

      <div className="flex justify-between">
        <Menu/>
        <main>
          <Header/>
          <SearchCompanies/>
          <Table/> 
          <p>Bem vindo</p>       
        </main>
      </div>
    </div>
  )
}

