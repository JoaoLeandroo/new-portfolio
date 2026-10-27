"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowUpRight, FiPlus, FiMinus } from "react-icons/fi";
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
    title: "RevolutionConvert",
    description:
      "Website para converter arquivos e imagens de diferentes formatos, como jpg, png, gif, svg, etc.",
    stack: ["React", "Typescript", "Javascript", "Next.Js", "css"],
    imgSrc: "/projects/revolutionConvert.avif",
    demo: "https://revolution-convert.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/revolution-convert",
  },
  {
    title: "Email Sender API (Gmail SMTP)",
    description:
      "API REST em Node.js/Express escrita em TypeScript para envio de e-mails (ex.: recuperação de senha) usando Nodemailer com SMTP do Gmail (App Password). Suporte a .env, validação básica e rota /health.",
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "Nodemailer",
      "Gmail SMTP",
      "dotenv",
    ],
    imgSrc: "/projects/api-emails.png",
    repo: "https://github.com/JoaoLeandroo/setup-emails-express", // altere para o repositório correto se for outro
  },
    {
    title: "Pipocando+ Streaming",
    description:
      "Plataforma moderna e responsiva de streaming de filmes e séries, desenvolvida com Next.js, TailwindCSS e TypeScript. O Pipocando+ oferece uma interface elegante, busca integrada e integração completa com a API do The Movie Database (TMDB).",
    stack: [
      "Next.js",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Shadcn/UI",
      "TheMovieDB API",
    ],
    imgSrc: "/projects/streaming-pipocando.png",
    repo: "https://github.com/JoaoLeandroo/streaming-interface",
  },
  {
    title: "Apuração Eleições Brasil ",
    description:
      "Website para consultar o resultado das eleições brasileiras, em tempo real.",
    stack: ["React", "Typescript", "Next.Js", "Api TSE"],
    imgSrc: "/projects/apuracao-brasil.avif",
    demo: "https://brasil-election-results.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/brasil-election-results",
  },

  {
    title: "WebSite Game",
    description:
      "Site moderno e responsivo do jogo RoseOnline, utilizando Next.JS e design responsivo.",
    stack: ["React", "TailWind", "Typescript", "Next.Js", "ShadcnUi"],
    imgSrc: "/projects/roseonline.png",
    demo: "https://website-game-sigma.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/website-game",
  },

  {
    title: "Back-end Ecommerce",
    description:
      "API backend para e-commerce, com autenticação de usuários, integração a banco de dados e suporte a diversas funcionalidades operacionais.",
    stack: ["Typescript", "Node.JS", "Express", "JWT", "Prisma", "Postresql"],
    imgSrc: "/projects/backend-ecommerce.jpeg",
    repo: "https://github.com/JoaoLeandroo/backend-ecommerce",
  },

  {
    title: "Modelo Portfolio",
    description:
      "Modelo de portfolio feito em Nextjs, com responsividade para todos os formatos de tela",
    stack: ["React", "TailWind", "Typescript", "Next.Js"],
    imgSrc: "/projects/port.avif",
    demo: "https://joaoleandro.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/joaoleandro",
  },


  {
    title: "Stack Burguer ",
    description:
      "A ideia desse projeto é consumir uma lista de itens em um restaurante, adicionar esses itens ao carrinho de compras e calcular o valor total dos pedidos.",
    stack: ["React", "TailWind", "Typescript", "Next.Js"],
    imgSrc: "/projects/stack-burguer.avif",
    demo: "https://stack-burguer-project-seven.vercel.app/",
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
];

const INITIAL_PROJECTS = 6;

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, INITIAL_PROJECTS);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 py-16 sm:py-24">
      <header className="mb-10 flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-700 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Do conceito ao código
          </span>
          <h2 id="projects-heading" className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Projetos<span className="text-violet-500">.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-300">
            Ideias que ganharam forma. Uma coleção de interfaces, aplicações e APIs que construí ao longo da minha jornada.
          </p>
        </div>
        <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-semibold text-zinc-900 dark:text-white">{String(projects.length).padStart(2, "0")}</span> projetos desenvolvidos
        </span>
      </header>

      <div id="projects-grid" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <article key={project.title} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-violet-500/60">
            <div className="relative isolate aspect-[16/10] overflow-hidden border-b border-zinc-100 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
              <Image
                src={project.imgSrc}
                alt={`Prévia do projeto ${project.title.trim()}`}
                fill
                className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 384px"
              />
              <span aria-hidden="true" className="absolute left-4 top-4 rounded-md border border-white/20 bg-zinc-950/75 px-2.5 py-1 font-mono text-xs text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">{project.title.trim()}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{project.description}</p>
              <ul aria-label="Tecnologias utilizadas" className="mb-6 mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tech}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${project.title.trim()} (abre em nova aba)`} className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3.5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-violet-300">
                    <FiExternalLink aria-hidden="true" size={14} /> Ver projeto <FiArrowUpRight aria-hidden="true" size={14} />
                  </Link>
                )}
                {project.repo && (
                  <Link href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title.trim()} no GitHub (abre em nova aba)`} className="inline-flex items-center gap-2 rounded-md py-2.5 text-xs font-medium text-zinc-600 transition-colors hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-zinc-300 dark:hover:text-violet-300">
                    <FiGithub aria-hidden="true" size={16} /> Código-fonte
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {projects.length > INITIAL_PROJECTS && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <button type="button" aria-expanded={expanded} aria-controls="projects-grid" onClick={() => setExpanded(!expanded)} className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:border-zinc-600 dark:text-zinc-200 dark:hover:border-violet-400 dark:hover:bg-violet-500/10 dark:hover:text-violet-300">
            {expanded ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
            {expanded ? "Mostrar menos" : "Explorar todos os projetos"}
          </button>
          <p aria-live="polite" className="text-xs text-zinc-500 dark:text-zinc-400">Exibindo {visibleProjects.length} de {projects.length} projetos</p>
        </div>
      )}
    </section>
  );
};

export default Projects;
