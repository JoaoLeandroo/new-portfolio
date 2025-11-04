"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main
      role="main"
      aria-labelledby="notfound-title"
      className="min-h-screen grid place-items-center px-6"
    >
      <section className="w-full max-w-2xl text-center py-12">

        <h1
          id="notfound-title"
          className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-900 dark:from-zinc-200 dark:to-zinc-500 drop-shadow-sm"
        >
          Página não encontrada
        </h1>

        <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
          O link que você seguiu pode estar quebrado ou a página pode ter sido removida.
          Retorne a página inicial.
        </p>

        {/* Big 404 with only text effects */}
        <div className="mt-7 select-none">
          <span className="inline-block text-7xl sm:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-800 dark:from-zinc-300 dark:to-zinc-600 drop-shadow">
            404
          </span>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            prefetch
            className="inline-flex items-center rounded-xl border border-zinc-300/70 dark:border-zinc-600/70 px-4 py-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-900 dark:from-zinc-200 dark:to-zinc-500 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 dark:focus-visible:ring-zinc-500/50"
            aria-label="Ir para a página inicial"
          >
            Ir para Home
          </Link>
        </div>

      </section>
    </main>
  );
}
