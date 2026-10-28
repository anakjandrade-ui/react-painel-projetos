function Resumo({ total, concluidos, desenvolvimento }) {
    const indicadores = [
      {
        titulo: "Total de projetos",
        valor: total,
        icone: "▦",
      },
      {
        titulo: "Concluídos",
        valor: concluidos,
        icone: "✓",
      },
      {
        titulo: "Em desenvolvimento",
        valor: desenvolvimento,
        icone: "⌘",
      },
    ];
  
    return (
      <div className="resumo">
        {indicadores.map((indicador) => (
          <div className="resumo-card" key={indicador.titulo}>
            <div className="resumo-icone">{indicador.icone}</div>
            <div>
              <p>{indicador.titulo}</p>
              <strong>{indicador.valor}</strong>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Resumo;