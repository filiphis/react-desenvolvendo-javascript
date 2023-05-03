import "./styles.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({
  id,
  imagem,
  nome,
  cargo,
  cor,
  onRemoveColaborador,
  onEhFavorito,
  ehFavorito,
}) => {
  const imageNotLoad = (event) => {
    const defaultImage =
      "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    event.target.src = defaultImage;
  };

  function handleClickRemoveColaborador() {
    onRemoveColaborador(id);
  }

  function handleEhFavorito() {
    onEhFavorito(id);
  }
  return (
    <div className="colaborador">
      <div
        className="deleta-colaborador"
        onClick={handleClickRemoveColaborador}
      >
        <AiFillCloseCircle size={30} />
      </div>
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} onError={imageNotLoad} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div onClick={handleEhFavorito}>
          {ehFavorito ? (
            <AiFillHeart
              className="colaborador__favorito"
              size={25}
              color="red"
            />
          ) : (
            <AiOutlineHeart className="colaborador__favorito" size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export { Colaborador };
