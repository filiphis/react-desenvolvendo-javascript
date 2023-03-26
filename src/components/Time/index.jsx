import "./styles.css";

const Time = ({ time }) => {
  const { description, corPrimaria, corSecundaria } = time;
  return (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ color: corPrimaria }}>{description}</h3>
    </section>
  );
};

export { Time };
