/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import { useState } from "react";

// Definir o tipo para as credenciais

export default function Form() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode validar ou processar os dados do formulário
    console.log("Dados do formulário enviados:", formData);

    // Redireciona para a página desejada (ex.: "/dashboard")
    redirect("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}> 
      <div className="m-auto">
        <div className="font-medium text-zinc-900">
          <p>Login</p>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="py-3 w-full rounded-lg px-2 text-zinc-600 text-xs"
          />
        </div>

        <div className="text-zinc-900 font-medium my-4">
          <p>Senha</p>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="py-3 w-full rounded-lg px-2 text-zinc-600 font-light text-xs"
          />
        </div>
      </div>

      <p className="text-xs flex justify-end m-4 font-medium text-zinc-900">
        Esqueci a senha!
      </p>
        <button
          className="bg-lime-400 text-zinc-50 w-1/2 h-10 my-4 m-24 rounded-xl font-bold text-sm"
          type="submit"
        >
          Entrar
        </button>
    </form>
  );
}
