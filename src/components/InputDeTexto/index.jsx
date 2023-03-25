import "./styles.css";

const InputDeTexto = ({
  label = "Texto da Label",
  placeholder = "Texto do Placeholder",
  id = "id do elemento",
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="text" placeholder={placeholder} />
  </>
);

export { InputDeTexto };
