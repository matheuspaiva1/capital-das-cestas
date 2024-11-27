export default function Home() {
  return (
    <div>

      <div>
        <img src="" alt="" />
        <hr />
        <h1>ADMINISTRAÇÃO</h1>
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

          <button type="submit" className="">Entrar</button>
        </form>

        <hr />

        <p>Não é administrador? clique aqui e faça o seu login como cliente</p>

      </div>

    </div>
  );
}
