import "./styles.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = ({
  id,
  imagem,
  nome,
  cargo,
  corPrimaria,
  onRemoveColaborador,
}) => {
  const imageNotLoad = (event) => {
    const defaultImage =
      "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    event.target.src = defaultImage;
  };

  function handleClickRemoveColaborador() {
    onRemoveColaborador(id);
  }
  return (
    <div className="colaborador">
      <div
        className="deleta-colaborador"
        onClick={handleClickRemoveColaborador}
      >
        <AiFillCloseCircle size={30} />
      </div>
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={nome} onError={imageNotLoad} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export { Colaborador };
