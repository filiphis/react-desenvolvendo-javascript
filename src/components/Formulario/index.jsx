import "./styles.css";

import { InputDeTexto } from "../InputDeTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

const Formulario = ({ title = "Descrição do formulário" }) => {
  const enviarFormulario = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");
  };
  return (
    <form onSubmit={enviarFormulario}>
      <h2>{title}</h2>
      <InputDeTexto
        id="nome"
        label="Nome"
        placeholder="Digite seu nome"
        obrigatorio
      />
      <InputDeTexto
        id="cargo"
        label="Cargo"
        placeholder="Digite seu cargo"
        obrigatorio
      />
      <InputDeTexto
        id="imagem"
        label="Imagem"
        placeholder="Informe o endereço da imagem"
        obrigatorio
      />
      <ListaSuspensa />

      <Botao>Criar Card</Botao>
    </form>
  );
};

export { Formulario };
