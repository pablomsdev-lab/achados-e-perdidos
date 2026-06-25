import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Login from "./Login";

function App() {
  const [usuario, setUsuario] = useState(null);

  const [itens, setItens] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [filtro, setFiltro] = useState("todos");

  // 🔐 verificar login ao iniciar
  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (user) {
      setUsuario(JSON.parse(user));
    }
  }, []);

  // 📦 carregar itens
  useEffect(() => {
    const dados = localStorage.getItem("achados");
    if (dados) setItens(JSON.parse(dados));
  }, []);

  // 💾 salvar itens
  useEffect(() => {
    localStorage.setItem("achados", JSON.stringify(itens));
  }, [itens]);

  // ➕ adicionar item
  function adicionarItem(e) {
    e.preventDefault();

    if (!nome.trim()) return;

    const novoItem = {
      id: Date.now(),
      nome,
      descricao,
      local,
      data: new Date().toLocaleDateString("pt-BR"),
      devolvido: false,
    };

    setItens([novoItem, ...itens]);

    setNome("");
    setDescricao("");
    setLocal("");
  }

  // 🔁 alternar status
  function alternarStatus(id) {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, devolvido: !item.devolvido } : item
      )
    );
  }

  // ❌ excluir item
  function excluirItem(id) {
    if (window.confirm("Deseja excluir este item?")) {
      setItens(itens.filter((item) => item.id !== item.id));
    }
  }

  // 🔎 filtro
  const itensFiltrados = itens.filter((item) => {
    if (filtro === "devolvidos") return item.devolvido;
    if (filtro === "pendentes") return !item.devolvido;
    return true;
  });

  // 🔐 se não estiver logado, mostra login
  if (!usuario) {
    return <Login onLogin={setUsuario} />;
  }

  return (
    <>
      <Navbar usuario={usuario} />

      <div className="container">
        <h1>Achados e Perdidos</h1>

        {/* FORMULÁRIO */}
        <form onSubmit={adicionarItem} className="formulario">
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do item"
          />

          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />

          <input
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            placeholder="Local encontrado"
          />

          <button className="btn btn-primary" type="submit">
            Adicionar
          </button>
        </form>

        {/* FILTROS */}
        <div className="filtros">
          <button className="btn btn-dark" onClick={() => setFiltro("todos")}>
            Todos
          </button>

          <button className="btn btn-dark" onClick={() => setFiltro("pendentes")}>
            Não Devolvidos
          </button>

          <button className="btn btn-dark" onClick={() => setFiltro("devolvidos")}>
            Devolvidos
          </button>
        </div>

        {/* LISTA */}
        <div className="lista">
          {itensFiltrados.length === 0 ? (
            <p>Nenhum item encontrado.</p>
          ) : (
            itensFiltrados.map((item) => (
              <div
                key={item.id}
                className={`card ${item.devolvido ? "devolvido" : ""}`}
              >
                <h3>{item.nome}</h3>

                <p>
                  <strong>Descrição:</strong> {item.descricao}
                </p>

                <p>
                  <strong>Local:</strong> {item.local}
                </p>

                <p>
                  <strong>Data:</strong> {item.data}
                </p>

                <div className="acoes">
                  <button
                    className="btn btn-success"
                    onClick={() => alternarStatus(item.id)}
                  >
                    {item.devolvido ? "Pendente" : "Devolvido"}
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => excluirItem(item.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;