import React from 'react'
import ButtonLogin from './ButtonLogin'

export default function Form() {
  return (
    <form action="">
      <div className="m-auto">
        <div className="font-medium text-zinc-900">
          <p>Login</p>
          <input type="text" className='py-3 w-full rounded-lg px-2 text-zinc-600 text-xs'  />
        </div>

        <div className="text-zinc-900 font-medium my-4">
          <p>Senha</p>
          <input type="password" className='py-3 w-full rounded-lg px-2 text-zinc-600 font-light text-xs' />
        </div>
      </div>
      
      <p className='text-xs flex justify-end m-4 font-medium text-zinc-900'>Esqueci a senha!</p>
      <ButtonLogin/>

    </form>
  )
}

