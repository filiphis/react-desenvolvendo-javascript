import "./App.css";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Time } from "./components/Time";
import { Title } from "./components/Title";
import { getTimes } from "./api/times";
import { serviceGetNewID } from "./services/serviceGetNewID";
import { Rodape } from "./components/Rodape";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const times = getTimes();

  const cadastraColaboradores = (colaborador) => {
    const newColaboradores = [...colaboradores, colaborador];
    setColaboradores(newColaboradores);
  };

  return (
    <div className="container">
      <Header />
      <Formulario times={times} onEnviarFormulario={cadastraColaboradores} />

      {colaboradores.length > 0 && <Title>Minha Organização:</Title>}

      {times.map(({ description, corPrimaria, corSecundaria }) => (
        <Time
          key={serviceGetNewID()}
          time={{
            description,
            corPrimaria,
            corSecundaria,
            colaboradores,
          }}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === description
          )}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
