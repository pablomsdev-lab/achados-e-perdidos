import { useState } from "react";
import logo from "./assets/logo-ifrs.png";
import "./Login.css";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!usuario.trim() || !senha.trim()) {
      alert("Preencha usuário e senha");
      return;
    }

    const userData = {
      nome: usuario,
      tipo: "aluno",
    };

    localStorage.setItem("usuarioLogado", JSON.stringify(userData));
    onLogin(userData);
  }

  return (
    <div className="login-page">

      {/* fundo logo (igual ao App) */}
      <div className="login-bg"></div>

      {/* card */}
      <div className="login-card">
        <img src={logo} alt="IFRS" className="login-logo" />

        <h2>Achados e Perdidos</h2>
        <p>IFRS Campus Restinga</p>

        <form onSubmit={handleLogin} className="login-form">

          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuário"
          />

          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
          />

          <button type="submit">
            Entrar
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;