import React from 'react'
import ButtonLogin from './ButtonLogin'

export default function Form() {
  return (
    <form action="">
      <div className="">
        <p>Login</p>
        <input type="text" />
      </div>

      <div className="">
        <p>Senha</p>
        <input type="password" />
      </div>
      <p>Esqueci a senha</p>
      <ButtonLogin/>

    </form>
  )
}

