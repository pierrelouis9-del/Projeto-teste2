import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./cadas-style.css";

function Cadastroprof({ title }) {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function Addprof() {
        if (!nome || !tipo || !email) {
            alert('Preencha todos os campos!');
            return;
        }

        const novosProfessores = JSON.parse(localStorage.getItem('professores') || '[]');
        novosProfessores.push({ nome, tipo, email });

        localStorage.setItem('professores', JSON.stringify(novosProfessores));

        alert('Professor cadastrado com sucesso!');

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
                    placeholder="Nome do professor"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tipo (ex: Professor)"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email do professor"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={Addprof}>
                    Cadastrar Professor
                </button>
                <br />
                <button onClick={() => navigate("/home")}>
                    Voltar ao Home
                </button>
            </div>
        </main>
    );
}

export default Cadastroprof;