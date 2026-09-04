import { Routes, Route } from "react-router-dom";
import Login from "./componentes/login";
import Home from "./componentes/Home";
import Cadastroprof from "./administrador/cadastraprof";
import Cadastroaluno from "./administrador/cadastraaluno";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login title="Login" />}
        />
        <Route
        path="/Home" element={<Home />}
        />
                <Route
        path="/cadastraprof" element={<Cadastroprof />}
        />
                <Route
        path="/cadastraaluno" element={<Cadastroaluno />}
        />

      </Routes>
    </>
  );
}
export default App;