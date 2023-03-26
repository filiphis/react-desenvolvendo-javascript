import "./App.css";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const cadastraColaboradores = (colaborador) => {
    const newColaboradores = [...colaboradores, colaborador];
    setColaboradores(newColaboradores);
  };
  return (
    <>
      {console.log("Colaboradores:", colaboradores)}
      <Header />
      <Formulario onEnviarFormulario={cadastraColaboradores} />
    </>
  );
}

export default App;
