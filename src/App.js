import "./App.css";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Time } from "./components/Time";
import { Title } from "./components/Title";
import { getTimes } from "./api/times";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const times = getTimes();

  const cadastraColaboradores = (colaborador) => {
    const newColaboradores = [...colaboradores, colaborador];
    setColaboradores(newColaboradores);
  };

  return (
    <>
      {console.log("Colaboradores:", colaboradores)}
      <Header />
      <Formulario times={times} onEnviarFormulario={cadastraColaboradores} />

      <Title>Minha Organização:</Title>

      {times.map(({ description, corPrimaria, corSecundaria }) => (
        <Time
          time={{
            description,
            corPrimaria,
            corSecundaria,
          }}
        />
      ))}
    </>
  );
}

export default App;
