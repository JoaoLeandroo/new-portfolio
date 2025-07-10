import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
interface Project {
  title: string;
  description: string;
  stack: string[];
  imgSrc: string;
  repo?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "WebSite Game",
    description:
      "Site moderno e responsivo do jogo RoseOnline, utilizando Next.JS e design responsivo.",
    stack: ["React", "TailWind", "Typescript", "Next.Js", "ShadcnUi"],
    imgSrc: "/projects/roseonline.png",
    demo: "https://website-roseonlinebr.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/website-game",
  },
  {
    title: "Modelo Portfolio",
    description:
      "Modelo de portfolio feito em Nextjs, com responsividade para todos os formatos de tela",
    stack: ["React", "TailWind", "Typescript", "Next.Js"],
    imgSrc: "/projects/port.avif",
    demo: "https://joaoleandro-joaoleandroos-projects.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/joaoleandro",
  },
  {
    title: "Stack Burguer ",
    description:
      "A ideia desse projeto é consumir uma lista de itens em um restaurante, adicionar esses itens ao carrinho de compras e calcular o valor total dos pedidos.",
    stack: ["React", "TailWind", "Typescript", "Next.Js"],
    imgSrc: "/projects/stack-burguer.avif",
    demo: "https://stack-burguer-project.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/stack-burguer-project",
  },
  {
    title: "NextMovies",
    description:
      "Esse projeto teem como ideia trazer uma serie de informações de filmes e series, como se fosse um straming de videos, foi utilizado a API do TheMovieDB.",
    stack: ["React", "TailWind", "Typescript", "Next.Js", "Api TheMovieDB"],
    imgSrc: "/projects/nextmovie.png",
    demo: "https://nextmovies-project.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/nextmovies-project",
  },
  {
    title: "TechBooks",
    description:
      "Nesse projeto foi criado um site, que lista alguns livros de tecnologia, utilizando a API de livros do google.",
    stack: ["React", "TailWind", "Typescript", "Next.Js", "Api Google"],
    imgSrc: "/projects/tech-books.avif",
    demo: "https://techinbooks.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/techinbooks",
  },
  {
    title: "Star Wars - Cronologia",
    description:
      "Projeto inspirado nos filmes star wars, mostrando a ordem correta para se assisir aos filmes.",
    stack: ["HTML5", "CSS3", "Javascript"],
    imgSrc: "/projects/starwars.avif",
    demo: "https://joaoleandroo.github.io/page-star_wars-ordem_cronologica/",
    repo: "https://github.com/JoaoLeandroo/page-star_wars-ordem_cronologica",
  },
  {
    title: "Cristiano Ronaldo",
    description:
      "Dentro desse projeto, é mostrada um pouco da história do lendário jogador de futebol Cristiano Ronaldo.",
    stack: ["HTML5", "CSS3", "Javascript"],
    imgSrc: "/projects/cristiano.avif",
    demo: "https://joaoleandroo.github.io/cristiano_ronaldo_page/",
    repo: "https://github.com/JoaoLeandroo/cristiano_ronaldo_page",
  },
  {
    title: "Jogo da memória",
    description:
      "Jogo da memória com castas dos personagens do anime one piece, a cada rodada, novas cartas são adicionadas aleatoriamente.",
    stack: ["React", "TailWind", "Typescript", "Api Google"],
    imgSrc: "/projects/memory-game.avif",
    demo: "https://memory-game-six-rho.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/memory-game",
  },
  {
    title: "Game Pikachu",
    description:
      "Joguinho do pikachu, visa fugir da pokebola. Para jogar, basta pressionar qualquer tecla.",
    stack: ["HTML5", "CSS3", "Javascript"],
    imgSrc: "/projects/game-pikachu.avif",
    demo: "https://joaoleandroo.github.io/game-pikachu/",
    repo: "https://github.com/JoaoLeandroo/game-pikachu",
  },
  {
    title: "Buscador CEP",
    description:
      "Dentro desse projeto é consumida uma api de CEP, basta digitar o CEP corretamente e será retornado um resultado.",
    stack: ["React", "CSS", "Javascript", "Vite", "Consumo API"],
    imgSrc: "/projects/buscador-cep.avif",
    demo: "https://buscador-cep-react-six.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/buscador-cep-react",
  },
  {
    title: "Lista de Tarefas",
    description:
      "Lista de tarefas com todos os requisitos de CRUD, criar, ler, atualizar e deletar uma tarefa. Também foi utilizada o salvamento de localstorage.",
    stack: ["HTML5", "CSS3", "Javascript"],
    imgSrc: "/projects/todo-list.avif",
    demo: "https://joaoleandroo.github.io/task-list/",
    repo: "https://github.com/JoaoLeandroo/task-list",
  },
  {
    title: "Projeto Música",
    description:
      "Projeto de música landing page, feito utilizando tecnologias como HTML e CSS.",
    stack: ["HTML5", "CSS3"],
    imgSrc: "/projects/toms.avif",
    demo: "https://joaoleandroo.github.io/project-music/",
    repo: "https://github.com/JoaoLeandroo/project-music",
  },
];


const Projects = () => (
  <section
    id="projects"
    className="w-full px-4 py-14 flex flex-col items-center gap-10"
  >
    {/* Cabeçalho */}
    <div className="text-center space-y-2">
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-white">
        Projetos Práticos
      </h2>
      <p className="text-zinc-500 dark:text-zinc-200 max-w-2xl">
        Seleção dos trabalhos que mais refletem minhas habilidades em
        desenvolvimento web.
      </p>
    </div>

    {/* Grid de projetos */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
      {projects.map((p) => (
        <article
          key={p.title}
          className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-black bg-white shadow-sm transition hover:shadow-lg"
        >
          {/* Imagem */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={p.imgSrc}
              alt={p.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex flex-1 flex-col gap-4 p-5">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">{p.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 flex-1">{p.description}</p>

            {/* Tecnologias */}
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-0.5 text-xs font-medium text-zinc-500"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="mt-4 flex gap-3">
              {p.demo && (
                <Link
                  href={p.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
                >
                  <FiExternalLink className="text-lg" />
                  Demo
                </Link>
              )}
              {p.repo && (
                <Link
                  href={p.repo}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 border border-zinc-300 rounded-md text-sm text-zinc-700 hover:border-zinc-500 hover:bg-zinc-100 transition"
                >
                  <FiGithub className="text-lg" />
                  GitHub
                </Link>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
