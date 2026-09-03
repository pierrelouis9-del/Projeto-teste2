import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ Title }) {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemAlerta, setMensagemAlerta] = useState('');

  function loginescola() {
    if (nome === "admin") {
      setMensagemAlerta("Bem-vindo Admin!");
      setTimeout(() => navigate("/Home"), 1000);
    }
  }

  return (
    <div className="login-container">
        <div className="login-card">
      <h1>{Title}</h1>
      
      {mensagemAlerta && <p>{mensagemAlerta}</p>}

      <input 
        type="text"
        placeholder="Nome" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />

      <input 
        type="password" 
        placeholder="Senha" 
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} 
      />
      
      <button onClick={loginescola}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;