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
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name="" id={id} required={obrigatorio}>
        {options.map((optionItem) => (
          <option key={optionItem.value} value={optionItem.value}>
            {optionItem.description}
          </option>
        ))}
      </select>
    </div>
  );
};

export { ListaSuspensa };
