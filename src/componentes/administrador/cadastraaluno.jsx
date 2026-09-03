import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadas-style.css"

function Cadastroaluno({ title }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [email, setEmail] = useState('');

  function Addaluno() {
    if (!nome || !tipo || !email) {
      alert('Preencha todos os campos!');
      return;
    }

    const novosAlunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    novosAlunos.push({ nome, tipo, email });
    
    localStorage.setItem('alunos', JSON.stringify(novosAlunos));

    alert('Aluno cadastrado com sucesso!');

    setNome('');
    setTipo('');
    setEmail('');
  }

  return (
    <main className="container">
      <div>
        <h1>{title}</h1>

        <input
          type="text"
          placeholder="Nome do aluno"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo (ex: Aluno)"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email do aluno"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={Addaluno}>
          Cadastrar Aluno
        </button>
      </div>
    </main>
  );
}

export default Cadastroaluno;