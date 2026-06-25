import logo from "../assets/logo-ifrs.png";
import "./Navbar.css";

function Navbar({ usuario }) {

  function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="IFRS" className="logo" />
        <h2>IFRS Campus Restinga</h2>
      </div>

      <div className="menu">
        <a href="#">Mural</a>
        <a href="#">Cadastrar</a>
        <a href="#">Moderação</a>

        {/* 👇 usuário logado */}
        {usuario && (
          <span className="usuario-logado">
            {usuario.nome}
          </span>
        )}

        {/* 👇 logout */}
        {usuario && (
          <button onClick={logout} className="btn btn-danger">
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;