import "./styles.css";

const Colaborador = ({ imagem, nome, cargo, corPrimaria }) => {
  function imageNotLoaded(event) {
    const setDefaultImage =
      "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    event.target.src = setDefaultImage;
  }

  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={nome} onError={imageNotLoaded} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export { Colaborador };
