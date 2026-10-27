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
    slug: "pipocando",
    title: "Pipocando+",
    category: "Front-end · Integração com API externa",
    description: "Catálogo de filmes e séries com busca e consulta de detalhes, integrado ao TMDB. Um projeto focado na navegação e apresentação de conteúdo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TMDB API"],
    imgSrc: "/projects/streaming-pipocando.png",
    repo: "https://github.com/JoaoLeandroo/streaming-interface",
    featured: true,
    problem: "Explorar um catálogo de filmes e séries envolve apresentar muitos conteúdos e facilitar a descoberta. O Pipocando+ organiza dados do TMDB em uma interface de navegação e busca.",
    features: [
      "Exibição de filmes e séries a partir da API do TMDB.",
      "Busca de títulos e consulta de informações dos conteúdos.",
      "Interface responsiva construída com Next.js e Tailwind CSS.",
    ],
    technicalFocus: "Consumo de uma API externa, composição de interfaces com React e tipagem em TypeScript. O README explica como configurar a chave do TMDB para execução local.",
    scope: "É uma interface de catálogo inspirada em serviços de streaming, sem reprodução dos filmes e séries. A avaliação do projeto está disponível pelo código e pela execução local; não há demonstração pública vinculada nesta página.",
  },
  {
    slug: "stack-burguer",
    title: "Stack Burguer",
    category: "Front-end · Carrinho de compras",
    description: "Interface de cardápio para selecionar produtos, adicionar itens ao carrinho e calcular o total da compra.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    imgSrc: "/projects/stack-burguer.avif",
    demo: "https://stack-burguer-project-seven.vercel.app/",
    repo: "https://github.com/JoaoLeandroo/stack-burguer-project",
    featured: false,
    problem: "Um cardápio digital precisa permitir a seleção de itens e apresentar o valor da compra. Este projeto explora esse fluxo por meio de um carrinho de compras.",
    features: ["Listagem de produtos de um restaurante.", "Adição de itens ao carrinho.", "Cálculo do valor total dos itens selecionados."],
    technicalFocus: "Composição de componentes e gerenciamento do estado da seleção de produtos e do carrinho em uma interface React.",
    scope: "O escopo apresentado é a experiência de cardápio e carrinho. O projeto não é apresentado como um sistema completo de gestão de pedidos ou pagamentos.",
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
