import "./styles.css";

import { InputDeTexto } from "../InputDeTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { useState } from "react";

const Formulario = ({ title = "Descrição do formulário" }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const times = [
    {
      description: "Programação",
    },
    {
      description: "Front-end",
    },
    {
      description: "Data Science",
    },
    {
      description: "Dev Ops",
    },
    {
      description: "Ux e Design",
    },
  ];

  const enviarFormulario = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!", nome, cargo, imagem, time);
  };

  const handleInputValue = (valor) => {
    setNome(valor);
  };

  return (
    <form onSubmit={enviarFormulario}>
      <h2>{title}</h2>
      <InputDeTexto
        id="nome"
        label="Nome"
        placeholder="Digite seu nome"
        obrigatorio
        onInputDeTextoChange={(valor) => setNome(valor)}
        value={nome}
      />
      <InputDeTexto
        id="cargo"
        label="Cargo"
        placeholder="Digite seu cargo"
        obrigatorio
        onInputDeTextoChange={(valor) => setCargo(valor)}
        value={cargo}
      />
      <InputDeTexto
        id="imagem"
        label="Imagem"
        placeholder="Informe o endereço da imagem"
        obrigatorio
        onInputDeTextoChange={(valor) => setImagem(valor)}
        value={imagem}
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
