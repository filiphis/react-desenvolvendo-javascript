import "./styles.css";

const InputDeTexto = ({
  label = "Texto da Label",
  placeholder = "Texto do Placeholder",
  id = "id do elemento",
  obrigatorio = false,
  valor,
  onInputDeTextoChange = null,
}) => {
  const handleInputDeTextoChange = (event) => {
    onInputDeTextoChange(event.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input__text"
        type="text"
        placeholder={placeholder}
        required={obrigatorio}
        value={valor}
        onChange={handleInputDeTextoChange}
      />
    </>
  );
};

export { InputDeTexto };
