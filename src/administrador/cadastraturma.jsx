import { useState } from "react";


function Cadastroturma() {
    const [nome, setNome] = useState('');

    function Escolha_professor() {

    }

    return (
        <main className="container">
            <input type="text"
                aria-label="Escreve o nome da turma "
                value={nome}
                onChange={(e) => setNome(e.target.value)} />

        </main>
    );
}