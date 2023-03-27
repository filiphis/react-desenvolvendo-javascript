import "./styles.css";

const Colaborador = ({ imagem, nome, cargo }) => {
  const imageNotLoad = (event) => {
    const defaultImage =
      "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    event.target.src = defaultImage;
  };
  return (
    <div className="colaborador">
      <div className="cabecalho">
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
