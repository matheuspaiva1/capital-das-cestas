import React from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Table from './components/Table'

export default function page() {
  return (
    <div className=''>

      <div className="flex justify-between">
        <Menu/>
        <main className="w-full">
          <Header/>
          <Table/> 
        </main>
      </div>
    </div>
  )
}

