import "./styles.css";

const ListaSuspensa = ({
  label = "Texto da label",
  id = "Id do select",
  options = [
    {
      value: 1,
      description: "Option01",
    },
    {
      value: 2,
      description: "Option02",
    },
  ],
  obrigatorio = false,
  valor = "valor padrão",
  onListaChange = null,
}) => {
  const handleListaChange = (event) => {
    onListaChange(event.target.value);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        name=""
        id={id}
        required={obrigatorio}
        value={valor}
        onChange={handleListaChange}
      >
        {options.map((optionItem) => (
          <option key={optionItem.description} value={optionItem.descriptiong}>
            {optionItem.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export { ListaSuspensa };
