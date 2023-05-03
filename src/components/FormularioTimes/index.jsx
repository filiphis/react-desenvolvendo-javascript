import { v4 as uuidv4 } from "uuid";

import "./styles.css";

import { Input } from "../Input";
import { Botao } from "../Botao";
import { useState } from "react";

const FormularioTimes = ({
  title = "Cadastro de times",
  onEnviarFormulario,
}) => {
  const [description, setDescription] = useState("");
  const [cor, setCor] = useState("");

  const handleEnviarFormulario = (event) => {
    event.preventDefault();
    const time = {
      id: uuidv4(),
      description,
      cor,
    };
    onEnviarFormulario(time);

    setDescription("");
    setCor("");
  };

  return (
    <form onSubmit={handleEnviarFormulario}>
      <h2>{title}</h2>
      <Input
        id="description"
        label="Descrição do time: "
        placeholder="Nome do time"
        obrigatorio
        onInputChange={(valor) => setDescription(valor)}
        valor={description}
      />
      <Input
        id="cor"
        label="Selecione a cor: "
        placeholder="Selecione a cor"
        obrigatorio
        onInputChange={(valor) => setCor(valor)}
        valor={cor}
        type="color"
      />

      <Botao>Criar Time</Botao>
    </form>
  );
};

export { FormularioTimes };
