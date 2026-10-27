import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return project ? { title: `${project.title} | João Leandro`, description: project.description } : { title: "Projeto não encontrado | João Leandro" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
      <Link href="/#projects" className="mb-10 inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-zinc-600 hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-zinc-300"><FiArrowLeft aria-hidden="true" />Voltar aos projetos</Link>
      <header>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-violet-700 dark:text-violet-300">{project.category}</p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500"><FiExternalLink aria-hidden="true" />Abrir demonstração<FiArrowUpRight aria-hidden="true" /></a>}
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 hover:border-violet-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:border-zinc-600 dark:text-zinc-200"><FiGithub aria-hidden="true" />Ver código no GitHub<FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </header>
      <div className="relative my-10 aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 sm:aspect-video dark:border-zinc-700 dark:bg-zinc-900">
        <Image src={project.imgSrc} alt={`Prévia de ${project.title}`} fill priority sizes="(max-width: 1024px) 100vw, 960px" className="object-cover object-top" />
      </div>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-9">
          <section aria-labelledby="problem-heading"><h2 id="problem-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">O problema</h2><p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{project.problem}</p></section>
          <section aria-labelledby="features-heading"><h2 id="features-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">O que foi construído</h2><ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-600 marker:text-violet-500 dark:text-zinc-300">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          <section aria-labelledby="technical-heading"><h2 id="technical-heading" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Foco técnico</h2><p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{project.technicalFocus}</p></section>
        </div>
        <aside className="space-y-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900">
          <div><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tecnologias</h2><ul className="mt-4 flex flex-wrap gap-2">{project.stack.map((tech) => <li key={tech} className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{tech}</li>)}</ul></div>
          <div className="border-t border-zinc-200 pt-5 dark:border-zinc-700"><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Escopo do projeto</h2><p className="mt-3 text-xs leading-6 text-zinc-600 dark:text-zinc-400">{project.scope}</p></div>
        </aside>
      </div>
    </main>
  );
}
