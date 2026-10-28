import Cabecalho from "./components/Cabecalho";
import Secao from "./components/Secao";
import Resumo from "./components/Resumo";
import ProjetoCard from "./components/ProjetoCard";
import Rodape from "./components/Rodape";
import "./App.css";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos, entradas e saídas de mercadorias.",
    responsavel: "Ana",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "Catálogo de Cursos",
    descricao: "Plataforma para apresentar cursos e informações acadêmicas.",
    responsavel: "Carlos",
    status: "Em desenvolvimento",
    tecnologias: ["React", "CSS", "JavaScript"],
    destaque: true,
  },
  {
    id: 3,
    titulo: "Biblioteca Digital",
    descricao: "Cadastro e organização de livros e autores.",
    responsavel: "Maria",
    status: "Concluído",
    tecnologias: ["HTML", "CSS", "MySQL"],
    destaque: false,
  },
  {
    id: 4,
    titulo: "Agenda Escolar",
    descricao: "Organização de tarefas, provas e atividades escolares.",
    responsavel: "João",
    status: "Em desenvolvimento",
    tecnologias: ["React", "JavaScript"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Loja Virtual",
    descricao: "Interface para exibição de produtos de uma loja online.",
    responsavel: "Pedro",
    status: "Planejamento",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false,
  },
  {
    id: 6,
    titulo: "Portal de Eventos",
    descricao: "Divulgação de eventos, inscrições e informações.",
    responsavel: "Juliana",
    status: "Planejamento",
    tecnologias: ["React", "Node.js"],
    destaque: false,
  },
];

function App() {
  const total = projetos.length;

  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;

  const desenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  return (
    <div className="app">
      <Cabecalho />

      <main className="conteudo">
        <section className="boas-vindas">
          <div>
            <span className="subtitulo">VISÃO GERAL</span>
            <h1>Nossos projetos<span>.</span></h1>
            <p>
              Conheça as ideias, soluções e projetos desenvolvidos
              pela nossa turma.
            </p>
          </div>

          <div className="boas-vindas-icone">{"{ }"}</div>
        </section>

        <Secao titulo="Resumo do painel">
          <Resumo
            total={total}
            concluidos={concluidos}
            desenvolvimento={desenvolvimento}
          />
        </Secao>

        <Secao titulo="Projetos da turma">
          <div className="projetos-grid">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                responsavel={projeto.responsavel}
                status={projeto.status}
                tecnologias={projeto.tecnologias}
                destaque={projeto.destaque}
              />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </div>
  );
}

export default App;