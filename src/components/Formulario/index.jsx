import { v4 as uuidv4 } from "uuid";

import "./styles.css";

import { InputDeTexto } from "../InputDeTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { useState } from "react";

const Formulario = ({
  title = "Descrição do formulário",
  onEnviarFormulario,
  times,
}) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleEnviarFormulario = (event) => {
    event.preventDefault();
    const colaborador = {
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    };
    onEnviarFormulario(colaborador);

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <form onSubmit={handleEnviarFormulario}>
      <h2>{title}</h2>
      <InputDeTexto
        id="nome"
        label="Nome"
        placeholder="Digite seu nome"
        obrigatorio
        onInputDeTextoChange={(valor) => setNome(valor)}
        valor={nome}
      />
      <InputDeTexto
        id="cargo"
        label="Cargo"
        placeholder="Digite seu cargo"
        obrigatorio
        onInputDeTextoChange={(valor) => setCargo(valor)}
        valor={cargo}
      />
      <InputDeTexto
        id="imagem"
        label="Imagem"
        placeholder="https://github.com/USUARIOGIT.png"
        obrigatorio
        onInputDeTextoChange={(valor) => setImagem(valor)}
        valor={imagem}
      />
      <ListaSuspensa
        label="Time"
        id="time"
        obrigatorio
        valor={time}
        onListaChange={(valor) => setTime(valor)}
        options={times}
      />

      <Botao>Criar Card</Botao>
    </form>
  );
};

export { Formulario };
