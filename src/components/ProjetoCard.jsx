import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
}) {
  return (
    <article className={`projeto-card ${destaque ? "destaque" : ""}`}>
      <div className="card-topo">
        <span className="icone-projeto">{"</>"}</span>
        <StatusBadge status={status} />
      </div>

      {destaque && (
        <span className="selo-destaque">★ Projeto em destaque</span>
      )}

      <h3>{titulo}</h3>
      <p className="descricao">{descricao}</p>

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>

      <div className="card-rodape">
        <div className="avatar">
          {responsavel.charAt(0)}
        </div>

        <div>
          <small>Responsável</small>
          <p className="responsavel">{responsavel}</p>
        </div>
      </div>
    </article>
  );
}

export default ProjetoCard;