import "./App.css";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Time } from "./components/Time";
import { Title } from "./components/Title";
import { getTimes, getColaboradores } from "./api/times";

const times = getTimes();
const allColaboradores = getColaboradores();

function App() {
  const [colaboradores, setColaboradores] = useState(allColaboradores);

  const cadastraColaboradores = (colaborador) => {
    const newColaboradores = [...colaboradores, colaborador];
    setColaboradores(newColaboradores);
  };

  const removeColaborador = (id) => {
    const novosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );

    setColaboradores(novosColaboradores);
  };

  const toggleFavorito = (id) => {
    const newColaboradores = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        console.log("colaborador: ", colaborador);
        return {
          ...colaborador,
          ehFavorito: !colaborador.ehFavorito,
        };
      }
      return colaborador;
    });

    setColaboradores(newColaboradores);
  };

  return (
    <>
      <Header />
      <Formulario times={times} onEnviarFormulario={cadastraColaboradores} />

      {colaboradores.length > 0 && <Title>Minha Organização:</Title>}

      {times.map(({ id, description, corPrimaria, corSecundaria }) => (
        <Time
          key={id}
          time={{
            description,
            corPrimaria,
            corSecundaria,
            colaboradores,
          }}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === description
          )}
          onRemoveColaborador={removeColaborador}
          onEhFavorito={toggleFavorito}
        />
      ))}
    </>
  );
}

export default App;
