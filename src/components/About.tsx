const About = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between gap-8 px-4 py-10">
      {/* Bloco de texto principal */}
      <article className="max-w-3xl  leading-relaxed">
        <h2 className="text-3xl font-bold mb-4">João Leandro</h2>

        <p className="text-base sm:text-lg">
          Olá! Meu nome é João Leandro e sou apaixonado por tecnologia e desenvolvimento web. 
          Graduei-me em Análise e Desenvolvimento de Sistemas e, desde então, venho trilhando uma jornada empolgante no mundo da programação.
        </p>

        <p className="mt-4 text-base sm:text-lg">
          Tudo começou em 2022, quando fui apresentado ao fascinante universo do código por amigos 
          que compartilhavam o mesmo interesse em um jogo online chamado Rose Online. A curiosidade daquele momento 
          me levou a explorar mais, dando origem à minha paixão pelo desenvolvimento web.
        </p>

        <p className="mt-4 text-base sm:text-lg">
          Desde então, venho dedicando meu tempo ao aprendizado contínuo. Minha principal stack é JavaScript, especialmente no 
          frontend, onde gosto de criar experiências interativas e funcionais. Também tenho conhecimentos sólidos em Python e domínio de 
          diversas ferramentas e frameworks do ecossistema JavaScript.
        </p>

        <p className="mt-4 text-base sm:text-lg">
          Estou sempre em busca de novos desafios e oportunidades para crescer. Acredito na tecnologia como força transformadora e adoro 
          criar soluções que impactam positivamente a vida das pessoas.
        </p>
      </article>

      {/* Bloco lateral */}
      <article className="w-full lg:max-w-sm flex flex-col gap-6">
        <button className="w-full py-3 rounded-md bg-zinc-800 text-white font-semibold hover:bg-zinc-700 transition">
          Download CV
        </button>

        <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Interesses</h3>

          <ul className="flex flex-wrap gap-3">
            <li className="px-4 py-2 bg-zinc-200 rounded-full text-sm font-medium transition">
              Inteligência Artificial
            </li>
            <li className="px-4 py-2 bg-zinc-200 rounded-full text-sm font-medium transition">
              Tecnologia
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default About;
