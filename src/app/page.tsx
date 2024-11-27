import Form from "./components/Form";
import HeaderForm from "./components/HeaderForm";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">

      <div className="border rounded-lg p-8 bg-zinc-100">
        <HeaderForm/>

        <Form/>

        <hr />

        <p>Não é administrador? </p> 
        <a href="">Clique aqui</a> <span>e faça o seu login como cliente</span> 

      </div>

    </div>
  );
}
