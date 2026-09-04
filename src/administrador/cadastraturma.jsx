import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./turma.css";

function Cadastroturma() {

    const [nome, setNome] = useState('');
    const [professor, setProfessor] = useState('');
    const navigate = useNavigate();

    const professores = JSON.parse(
        localStorage.getItem('professores') || '[]'
    );

    function Escolha_professor(e) {
        setProfessor(e.target.value);
    }

    function CadastrarTurma() {

        if (!nome || !professor) {
            alert('Preencha todos os campos!');
            return;
        }

        const novasTurmas = JSON.parse(
            localStorage.getItem('turmas') || '[]'
        );

        novasTurmas.push({
            nome: nome,
            professor: professor
        });

        localStorage.setItem(
            'turmas',
            JSON.stringify(novasTurmas)
        );

        alert('Turma cadastrada com sucesso!');

        setNome('');
        setProfessor('');
    }

    return (
        <main className="container">

            <h1>Cadastrar Turma</h1>

            <input
                type="text"
                aria-label="Escreva o nome da turma"
                placeholder="Nome da turma"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <br />

            <select
                value={professor}
                onChange={Escolha_professor}
            >

                <option value="">
                    Escolha o professor responsável
                </option>

                {professores.map((prof, index) => (
                    <option
                        key={index}
                        value={prof.nome}
                    >
                        {prof.nome}
                    </option>
                ))}

            </select>

            <br />

            <button onClick={CadastrarTurma}>
                Cadastrar Turma
            </button>

            <br />
            <button onClick={() => navigate("/Home")}>
                Voltar ao Home
            </button>

        </main>
    );
}

export default Cadastroturma;