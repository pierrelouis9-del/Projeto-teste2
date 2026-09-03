import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="home-card ">
                <h1>Administração</h1>

                <p>
                    Bem-vindo! Aqui é para adicionar novo professor, aluno e turmas. Use com atenção.
                </p>
                <div className="button-group">
                    <div>
                        <button onClick={() => navigate("/cadastraaluno")}>
                            Cadastrar Aluno
                        </button>
                    </div>

                    <div>
                        <button onClick={() => navigate("/cadastraprof")}>
                            Cadastrar Professor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;