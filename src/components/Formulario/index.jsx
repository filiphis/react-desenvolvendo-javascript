import { v4 as uuidv4 } from "uuid";

import "./styles.css";

import { Input } from "../Input";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { useState } from "react";

const Formulario = ({
  title = "Cadastro de Colaboradores",
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
      <Input
        id="nome"
        label="Nome"
        placeholder="Digite seu nome"
        obrigatorio
        onInputChange={(valor) => setNome(valor)}
        valor={nome}
      />
      <Input
        id="cargo"
        label="Cargo"
        placeholder="Digite seu cargo"
        obrigatorio
        onInputChange={(valor) => setCargo(valor)}
        valor={cargo}
      />
      <Input
        id="imagem"
        label="Imagem"
        placeholder="https://github.com/USUARIOGIT.png"
        obrigatorio
        onInputChange={(valor) => setImagem(valor)}
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
