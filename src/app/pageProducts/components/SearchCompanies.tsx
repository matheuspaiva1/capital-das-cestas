import React from 'react'

export default function SearchCompanies() {
  return (
        <div className="m-4 flex gap-[34em]">
          <div className="flex items-center gap-8">
            <input type="text" placeholder="Buscar..." className='border py-2 rounded-lg px-2 w-80 '/>
            <button type='submit' className='bg-zinc-800 text-zinc-50 px-10 py-3 rounded-lg font-bold text-xs'>Pesquisar</button>
          </div>
          <button className='bg-lime-400 text-zinc-800 px-6 py-1 rounded-lg font-bold'>Novo</button>
        </div>  
)
}
