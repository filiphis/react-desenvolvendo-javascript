import "./styles.css";

const Title = ({ children }) => {
  return (
    <div className="title">
      <h2>{children}</h2>
    </div>
  );
};

export { Title };
