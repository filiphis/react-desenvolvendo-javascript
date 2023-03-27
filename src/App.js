import "./App.css";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Time } from "./components/Time";
import { Title } from "./components/Title";
import { getTimes } from "./api/times";
import { serviceGetNewID } from "./services/serviceGetNewID";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const times = getTimes();

  const cadastraColaboradores = (colaborador) => {
    const newColaboradores = [...colaboradores, colaborador];
    setColaboradores(newColaboradores);
  };

  return (
    <>
      <Header />
      <Formulario times={times} onEnviarFormulario={cadastraColaboradores} />

      <Title>Minha Organização:</Title>

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
    </>
  );
}

export default App;
