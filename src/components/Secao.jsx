function Secao({ titulo, children }) {
    return (
      <section className="secao">
        <div className="secao-titulo">
          <h2>{titulo}</h2>
        </div>
  
        <div>{children}</div>
      </section>
    );
  }
  
  export default Secao;