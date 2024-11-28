/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Form() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); 

  const navigate = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://auth2uappservice.azurewebsites.net/api/v1/Auth",
        {
          language: "pt-br", 
          loginType: "Email", 
          login: formData.email,
          pass: formData.password,
          remindMe: true, 
          dataSource: "Web" 
        }
      );

      if (response.status === 201 && response.data) {
        if (formData.email == "reginaldocarecode@hotmail.com" && formData.password == "2023") {
          navigate.push("/pageProducts");
        } else {
          setError("Email ou senha inválido!");
        }
      } else {
        setError("Erro ao autenticar. Verifique os campos do formulário.");
      }
    } catch (error) {
      console.error("Erro na autenticação", error);
    }
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

        {error && (
        <div className="text-red-500 text-xs text-center mb-4">
          {error}
        </div>
      )}
    </form>
  );
}