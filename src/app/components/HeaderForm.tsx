/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function HeaderForm() {
  return (
    <div className="mb-8">
      <img
        src="logo.png"
        alt="Logo"
        className="w-40 h-10 m-auto
      "
      />
      <div className="my-4">
        <hr className="bg-lime-300 h-0.5 w-full" />
      </div>
      <h1 className="text-lime-400 text-center m-2 font-bold">ADMINISTRAÇÃO</h1>
    </div>
  )
}
