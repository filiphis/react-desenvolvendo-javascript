import { serviceGetNewID } from "../../services/serviceGetNewID";
import { Colaborador } from "../Colaborador";
import "./styles.css";

const Time = ({ time, colaboradores }) => {
  const { description, corPrimaria, corSecundaria } = time;
  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ color: corPrimaria }}>{description}</h3>

        <div className="listaColaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={serviceGetNewID()}
              nome={colaborador.nome}
              imagem={colaborador.imagem}
              cargo={colaborador.cargo}
              corPrimaria={corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export { Time };
