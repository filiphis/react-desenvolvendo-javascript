import "./styles.css";

import { InputDeTexto } from "../InputDeTexto";

const Formulario = ({ title = "Descrição do formulário" }) => (
  <form>
    <h2>{title}</h2>
    <InputDeTexto id="nome" label="Nome" placeholder="Digite seu nome" />
    <InputDeTexto id="cargo" label="Cargo" placeholder="Digite seu cargo" />
    <InputDeTexto
      id="imagem"
      label="Imagem"
      placeholder="Informe o endereço da imagem"
    />
  </form>
);

export { Formulario };
