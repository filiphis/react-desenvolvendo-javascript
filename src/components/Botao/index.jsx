import "./styles.css";

const Botao = ({ children = "Descrição do botão" }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export { Botao };
