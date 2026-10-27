export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  imgSrc: string;
  repo: string;
  demo?: string;
  featured: boolean;
  problem: string;
  features: string[];
  technicalFocus: string;
  scope: string;
}

export const projects: Project[] = [
  {
    slug: "revolution-convert",
    title: "RevolutionConvert",
    category: "Aplicação web · Arquivos e privacidade",
    description: "Conversão de imagens e documentos no navegador, com processamento local e download em lote. Uma ferramenta para mudar formatos sem enviar arquivos a um servidor.",
    stack: ["React", "Next.js", "TypeScript", "CSS"],
    imgSrc: "/projects/revolutionConvert.avif",
    demo: "https://revolution-convert.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/revolution-convert",
    featured: true,
    problem: "Converter arquivos costuma envolver enviar documentos para serviços externos. O RevolutionConvert propõe um fluxo direto no navegador: selecionar arquivos, escolher um formato compatível e baixar o resultado.",
    features: [
      "Seleção de imagens e documentos com identificação do formato de origem.",
      "Conversão local, sem envio dos arquivos para um servidor.",
      "Processamento de até 30 arquivos, com limites de 30 MB por arquivo e 60 MB por lote.",
      "Download do resultado individual ou de um ZIP com o lote.",
    ],
    technicalFocus: "Processamento de arquivos no cliente e organização do fluxo de conversão, com atenção aos limites de tamanho e ao uso de memória do navegador.",
    scope: "As opções de saída dependem do formato de origem. O projeto é uma ferramenta de conversão de arquivos; os limites por arquivo e por lote estão indicados na demonstração.",
  },
  {
    slug: "api-ecommerce",
    title: "API de e-commerce",
    category: "Back-end · Autenticação e dados",
    description: "API para cadastro e autenticação de usuários, administração de categorias e produtos e persistência de dados com Prisma e PostgreSQL.",
    stack: ["TypeScript", "Node.js", "Express", "JWT", "Prisma", "PostgreSQL"],
    imgSrc: "/projects/backend-ecommerce.jpeg",
    repo: "https://github.com/JoaoLeandroo/backend-ecommerce",
    featured: true,
    problem: "Uma aplicação de comércio precisa organizar seu catálogo e controlar quem pode administrá-lo. Esta API reúne o cadastro de usuários, a autenticação e as operações sobre produtos e categorias.",
    features: [
      "Cadastro de usuários e autenticação com JWT.",
      "Criação, consulta, edição e exclusão de categorias e produtos.",
      "Operações administrativas com requisitos de autenticação e perfil administrador descritos na documentação.",
      "Integração com PostgreSQL por meio do Prisma.",
    ],
    technicalFocus: "Organização de uma API em TypeScript, autenticação e modelagem das relações entre usuários, categorias e produtos.",
    scope: "Este repositório contém o back-end. O escopo apresentado é autenticação e gestão do catálogo; não se trata de uma loja completa com interface, checkout e pagamento. As rotas e a configuração local estão documentadas no README.",
  },
  {
    slug: "apuracao-eleicoes-brasil",
    title: "Apuração Eleições Brasil",
    category: "Aplicação web · Dados eleitorais em tempo real",
    description: "Painel que acompanhou a apuração das eleições brasileiras em tempo real, com atualização automática, resultados nacionais e mapa interativo para explorar a votação por estado.",
    stack: ["React", "Next.js", "TypeScript", "API do TSE"],
    imgSrc: "/projects/apuracao-brasil.avif",
    demo: "https://brasil-election-results.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/brasil-election-results",
    featured: true,
    problem: "Durante a apuração, os resultados mudam continuamente e precisam ser apresentados com clareza. O projeto reúne a evolução da contagem de votos e a distribuição dos resultados pelo país em um painel de consulta com atualização automática.",
    features: [
      "Acompanhamento da apuração em tempo real durante o período de totalização dos votos.",
      "Painel nacional com votos, percentuais dos candidatos e diferença entre os resultados.",
      "Mapa interativo do Brasil para consultar os resultados por unidade da Federação.",
      "Exibição do percentual totalizado e dos horários de consulta e atualização dos dados.",
    ],
    technicalFocus: "Integração com a API do TSE, atualização periódica das informações e apresentação de dados eleitorais em uma interface React com TypeScript. A visualização combina um resumo nacional com a exploração dos resultados estaduais.",
    scope: "Projeto independente de visualização de dados eleitorais. O acompanhamento em tempo real se refere ao período de apuração; após a totalização, o painel apresenta os resultados disponíveis para a eleição configurada. A disponibilidade e a atualização das informações dependem da fonte de dados.",
  },
  {
    slug: "website-game",
    title: "Website Game — Rose Online",
    category: "Front-end · Portal de jogo",
    description: "Portal temático para Rose Online que reúne apresentação do jogo, guias, classes e acesso ao download em uma experiência visual responsiva.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    imgSrc: "/projects/roseonline.png",
    demo: "https://website-game-sigma.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/website-game",
    featured: false,
    problem: "Quem chega a um jogo precisa conhecer seu universo e encontrar informações para começar. O portal organiza a apresentação de Rose Online, os conteúdos de apoio e os caminhos de acesso ao jogo em uma navegação temática.",
    features: [
      "Página inicial com apresentação visual do universo e dos mundos do jogo.",
      "Navegação para guias de iniciantes, classes e sistemas de jogo.",
      "Acesso ao download e aos canais da comunidade.",
      "Layout responsivo construído com Next.js e Tailwind CSS.",
    ],
    technicalFocus: "Composição de páginas e componentes reutilizáveis, organização da navegação e construção de uma identidade visual alinhada ao universo do jogo, com React, TypeScript e shadcn/ui.",
    scope: "O projeto apresentado é o portal web de Rose Online. O escopo descrito é a interface e a organização dos conteúdos; o desenvolvimento do jogo e de sua infraestrutura não faz parte deste projeto de portfólio.",
  },
  {
    slug: "email-sender-api",
    title: "Email Sender API",
    category: "Back-end · Integração com SMTP",
    description: "Serviço REST para envio de e-mails com Node.js, Express e Nodemailer, usando SMTP do Gmail e configuração por variáveis de ambiente.",
    stack: ["TypeScript", "Node.js", "Express", "Nodemailer", "SMTP"],
    imgSrc: "/projects/api-emails.png",
    repo: "https://github.com/JoaoLeandroo/setup-emails-express",
    featured: false,
    problem: "Aplicações precisam de um ponto de integração para enviar mensagens, como notificações e e-mails transacionais. Esta API concentra a configuração e o envio via SMTP.",
    features: ["Envio de e-mails por meio do Nodemailer e SMTP do Gmail.", "Configuração de ambiente com dotenv.", "Validação básica e rota /health para consulta do serviço."],
    technicalFocus: "Integração de um serviço externo com uma API Express em TypeScript e separação da configuração por variáveis de ambiente.",
    scope: "É um serviço de envio de e-mails. Ele pode integrar um fluxo de recuperação de senha, mas não é apresentado como uma implementação completa desse fluxo ou uma plataforma de campanhas.",
  },
];

export const featuredProject = projects[0];
