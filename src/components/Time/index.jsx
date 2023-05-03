import hexToRgba from "hex-to-rgba";

import { Colaborador } from "../Colaborador";
import "./styles.css";

const Time = ({
  time,
  colaboradores,
  onRemoveColaborador,
  onEhFavorito,
  onAlteraCor,
}) => {
  const { id, description, cor } = time;

  function handleCorChange(event) {
    onAlteraCor(id, event.target.value);
  }

  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(cor, "0.2") }}
      >
        <div className="time__inputContainer">
          <input
            className="time__inputColor"
            type="color"
            value={cor}
            onChange={handleCorChange}
          />
        </div>
        <h3 style={{ color: cor }}>{description}</h3>

        <div className="listaColaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.id}
              id={colaborador.id}
              nome={colaborador.nome}
              imagem={colaborador.imagem}
              cargo={colaborador.cargo}
              onEhFavorito={onEhFavorito}
              ehFavorito={colaborador.ehFavorito}
              onRemoveColaborador={onRemoveColaborador}
              cor={cor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export { Time };
