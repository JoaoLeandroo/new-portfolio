const About = () => {
  return (
    <section className="w-full flex gap-4 justify-between flex-col lg:flex-row">
      <article className="max-w-[800px]">
        <h2 className="font-bold text-xl mb-2">João Leandro</h2>
        <p>
          Olá! Meu nome é João Leandro e sou apaixonado por tecnologia e
          desenvolvimento web. Graduei-me em Análise e Desenvolvimento de
          Sistemas e desde então tenho trilhado uma jornada empolgante no mundo
          da programação. Minha jornada começou em 2022, quando fui apresentado
          ao fascinante universo da programação por meio de amigos que
          compartilhavam o mesmo interesse em um jogo online chamado Rose
          Online. A curiosidade despertada naquele momento me levou a mergulhar
          mais fundo no assunto, e foi assim que minha paixão pelo
          desenvolvimento web nasceu. Desde então, tenho dedicado meu tempo e
          energia ao aprendizado contínuo, explorando diversas linguagens e
          tecnologias. Minha principal stack é o JavaScript para o
          desenvolvimento frontend, onde posso dar vida às minhas ideias e criar
          experiências interativas e dinâmicas para os usuários. No entanto, meu
          conhecimento não se limita apenas ao Javascript; também possuo
          habilidades sólidas em outras linguagens, como Python, e estou
          familiarizado com uma variedade de ferramentas do ecossistema
          JavaScript, incluindo bibliotecas e frameworks. Estou constantemente
          buscando novos desafios e oportunidades para expandir meu conhecimento
          e aprimorar minhas habilidades. Sou apaixonado por criar soluções
          inovadoras e funcionais que tenham um impacto positivo na vida das
          pessoas.
        </p>
      </article>

      <article className="p-4 w-full lg:max-w-[450px] flex flex-col gap-y-5">
        <button className="btn w-full">Download CV</button>

        <div className="card h-full w-full p-2 border border-transparent hover:border-blue-100">
          <p className="font-bold text-xl mb-4">Interesses</p>

          <ul className="flex flex-wrap items-center gap-5">
            <li className="btn">inteligência artificial</li>
            <li className="btn">Tecnologia</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default About;
