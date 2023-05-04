import "./styles.css";

const Input = ({
  label = "Texto da Label",
  placeholder = "Texto do Placeholder",
  id = "id do elemento",
  obrigatorio = false,
  valor,
  onInputChange = null,
  type = "text",
}) => {
  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <>
      <div className={type === "color" ? "input__flex" : ""}>
        <label className={type === "color" ? "label-color" : ""} htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={`input__${type}`}
          type={type}
          placeholder={placeholder}
          required={obrigatorio}
          value={valor}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export { Input };
