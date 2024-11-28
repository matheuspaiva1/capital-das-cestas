/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";


// Definir o tipo para as credenciais

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    language: "pt-br", // Exemplo de idioma
    loginType: "Email", // Tipo de login
    dataSource: "Web", // Tipo de dispositivo
    remindMe: true, // Usuário quer ser lembrado
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("")

    try {
      const response = await axios.post("https://auth2uappservice.azurewebsites.net/api/v1/Auth", {
          language: formData.language,
          loginType: formData.loginType,
          login: formData.email, // Envia o email como login
          pass: formData.password, // Envia a senha
          remindMe: formData.remindMe,
          dataSource: formData.dataSource,
      })

      console.log(response.data)

      if(response.status === 201 || response.data.refreshToken) {
        const {accessToken, refreshToken} = response.data

        redirect("/pageProducts");
      } else {
        setError("Email ou senha invalidos")
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      setError("Erro ao autenticar. Tente novamente.");
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
          <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            {error}
          </div>
        )}
    </form>
  );
}
