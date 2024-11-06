import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { auth } from "@/firebaseConfig"; // Importando o Firebase
import { signOut } from "firebase/auth"; // Função para deslogar
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado
  const navigate = useNavigate();

  // Função para verificar o estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Atualiza o estado com o usuário logado ou null
    });
    return () => unsubscribe(); // Limpa o ouvinte de mudança de estado
  }, []);

  // Função de logout
  const handleLogout = async () => {
    await signOut(auth); // Faz o logout
    setUser(null); // Atualiza o estado para null
  };

  // Função de busca
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>

      {/* Exibe o link para criar conta se o usuário não estiver logado */}
      {!user ? (
        <h2>
          <Link to="/register">Criar Conta</Link>
        </h2>
      ) : null}

      {/* Exibe o link de login se o usuário não estiver logado */}
      {!user ? (
        <h2 className="logar">
          <Link to="/login">Login</Link>
        </h2>
      ) : (
        // Exibe o email do usuário logado e botão de logout
        <div>
          <span className="email">{user.email}</span> {/* Exibe o email do usuário */}
          <button className="sair" onClick={handleLogout}>Sair</button> {/* Botão de logout */}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
