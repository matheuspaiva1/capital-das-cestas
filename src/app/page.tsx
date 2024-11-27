import Form from "./components/Form";
import HeaderForm from "./components/HeaderForm";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">

      <div className="border rounded-xl p-8   bg-zinc-100 shadow-lg">
        <HeaderForm/>

        <Form/>

        <div className="my-4">
          <hr className="bg-lime-300 h-0.5 w-full"/>
        </div>
        <div className="text-center">
          <p>Não é um administrador? 
          Clique aqui e faça o seu login <br /> como cliente
          </p> 
        </div>
        

      </div>

    </div>
  );
}
