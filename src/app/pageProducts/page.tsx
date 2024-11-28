/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Table from './components/Table'
import SearchCompanies from './components/SearchCompanies'

export default function PageProducts() {
  return (
    <div className=''>

      <div className="flex justify-between">
        <Menu/>
        <main>
          <Header/>
          <SearchCompanies/>
          <Table/>        
        </main>
      </div>

      

      
    </div>
  )
}
