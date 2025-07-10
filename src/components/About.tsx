"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full px-4 py-16 flex flex-col lg:flex-row justify-between items-start gap-12">
      {/* Texto principal */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-zinc-700 dark:text-white leading-relaxed"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-white mb-6">
          João Leandro
        </h2>

        <p className="text-base sm:text-lg mb-4">
          Olá! Meu nome é João Leandro e sou apaixonado por tecnologia e desenvolvimento web.
          Graduei-me em Análise e Desenvolvimento de Sistemas e, desde então, venho trilhando uma jornada empolgante no mundo da programação.
        </p>

        <p className="text-base sm:text-lg mb-4">
          Tudo começou em 2022, quando fui apresentado ao fascinante universo do código por amigos que compartilhavam o mesmo interesse em um jogo online chamado Rose Online.
          A curiosidade daquele momento me levou a explorar mais, dando origem à minha paixão pelo desenvolvimento web.
        </p>

        <p className="text-base sm:text-lg mb-4">
          Desde então, venho dedicando meu tempo ao aprendizado contínuo. Minha principal stack é JavaScript, especialmente no frontend,
          onde gosto de criar experiências interativas e funcionais. Também tenho conhecimentos sólidos em Python e domínio de diversas ferramentas e frameworks do ecossistema JavaScript.
        </p>

        <p className="text-base sm:text-lg">
          Estou sempre em busca de novos desafios e oportunidades para crescer. Acredito na tecnologia como força transformadora e adoro criar soluções que impactam positivamente a vida das pessoas.
        </p>
      </motion.article>

      {/* Bloco lateral com animação */}
      <motion.aside
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:max-w-sm flex flex-col gap-6"
      >
        <a
          href="/Joao_Leandro_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-3 rounded-md bg-zinc-800 dark:bg-black text-white font-semibold hover:bg-zinc-700 transition"
        >
          Download CV
        </a>

        <div className="border border-zinc-200 dark:border-zinc-500 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Interesses</h3>

          <ul className="flex flex-wrap gap-3">
            {["Inteligência Artificial", "Tecnologia", "Design Responsivo", "Back-end", "Front-end", "Inovação", "Esportes"].map((interest) => (
              <li
                key={interest}
                className="px-4 py-1.5 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium hover:bg-zinc-200 transition"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </section>
  );
};

export default About;
