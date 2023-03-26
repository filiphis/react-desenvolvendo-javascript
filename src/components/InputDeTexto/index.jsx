import "./styles.css";

const InputDeTexto = ({
  label = "Texto da Label",
  placeholder = "Texto do Placeholder",
  id = "id do elemento",
  obrigatorio = false,
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      required={obrigatorio}
    />
  </>
);

export { InputDeTexto };
