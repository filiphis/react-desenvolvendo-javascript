import "./styles.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="#">
          <img src="/imagens/fb.png" alt="" />
        </a>
        <a href="#">
          <img src="/imagens/tw.png" alt="" />
        </a>
        <a href="#">
          <img src="/imagens/ig.png" alt="" />
        </a>
      </div>
      <div>
        <img className="logo" src="/imagens/logo.png" alt="" />
      </div>
      <span className="description">Desenvolvido por Luiz Silveira</span>
    </footer>
  );
};
export { Rodape };
