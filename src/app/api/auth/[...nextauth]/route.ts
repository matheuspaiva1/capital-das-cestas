/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import axios from "axios";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {

        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {          
          throw new Error("Email e senha são obrigatórios");
        }

        try {
          const response = await axios.post("https://auth2uappservice.azurewebsites.net/api/v1/Auth", {
            email: credentials.email,
            password: credentials.password,
          })

          
          if (response.status === 200 && response.data) {
            const user = response.data;

            return {
              id: user.id,
              name: user.name,
              email: user.email,
              accessToken: user.accessToken,
              refreshToken: user.refreshToken,
            };
          }
          throw new Error("Credenciais inválidas");

        } catch (error) {
          console.error("Erro ao autenticar:", error);
          throw new Error("Erro ao autenticar o usuário");
        }
      }})],
      session: {
        strategy: "jwt", 
      },
      
      pages: {
        signIn: "/"
      },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }