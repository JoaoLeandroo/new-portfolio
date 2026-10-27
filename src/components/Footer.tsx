import Link from "next/link";
import { FiArrowUp, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const navigation = [
  { label: "Sobre mim", href: "/#about" },
  { label: "Tech Stack", href: "/#skills" },
  { label: "Projetos", href: "/#projects" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/JoaoLeandroo", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joaoleandro-dev/", icon: FiLinkedin },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5581987666475&text=Ol%C3%A1%2C%20Jo%C3%A3o!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
    icon: BsWhatsapp,
  },
];

const Footer = () => (
  <footer id="contact" aria-label="Contato e navegação" className="relative isolate mt-auto w-full overflow-hidden border-t border-zinc-800 bg-zinc-950 text-zinc-100">
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/60 to-transparent" />
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-7 border-b border-zinc-800 py-10 sm:py-14 lg:flex-row lg:items-center lg:gap-12">
        <div className="max-w-lg">
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-300">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Entre em contato
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Vamos conversar<span className="text-violet-400">.</span></h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">Tem um projeto ou uma oportunidade? Me conte o que você tem em mente.</p>
        </div>
        <a href="mailto:joaoleandro102@gmail.com" aria-label="Enviar e-mail para joaoleandro102@gmail.com" className="group inline-flex min-h-14 max-w-full items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-4 text-sm font-medium text-zinc-100 transition-colors hover:border-violet-400/70 hover:bg-violet-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400 sm:gap-4 sm:px-5">
          <FiMail aria-hidden="true" className="shrink-0 text-violet-300" size={19} />
          <span className="min-w-0 break-all">joaoleandro102@gmail.com</span>
          <FiArrowUpRight aria-hidden="true" className="shrink-0 text-violet-300 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" size={18} />
        </a>
      </div>

      <div className="grid gap-x-10 gap-y-8 py-9 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:gap-x-12 sm:py-10 lg:gap-x-20">
        <div>
          <Link href="/" aria-label="João Leandro — página inicial" className="inline-flex min-h-11 items-center rounded-md text-xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">João Leandro<span className="text-violet-400">.</span></Link>
          <p className="mt-1 text-sm text-zinc-300">Desenvolvedor Full Stack</p>
          <p className="mt-3 max-w-xs text-xs leading-6 text-zinc-400">Interfaces, APIs e integrações com React, Next.js, TypeScript e Node.js.</p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-400">Explore</h3>
          <ul className="space-y-1">
            {navigation.map(({ label, href }) => (
              <li key={href}><a href={href} className="inline-flex min-h-11 items-center rounded-md text-sm text-zinc-300 transition-colors hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">{label}</a></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Redes sociais">
          <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-400">Conecte-se</h3>
          <ul className="space-y-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (abre em nova aba)`} className="group inline-flex min-h-11 items-center gap-2.5 rounded-md text-sm text-zinc-300 transition-colors hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
                  <Icon aria-hidden="true" size={16} />{label}<FiArrowUpRight aria-hidden="true" size={14} className="text-zinc-500 transition-colors group-hover:text-violet-300" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-zinc-800 py-5 sm:flex-row sm:items-center">
        <p className="text-xs leading-relaxed text-zinc-400">© {new Date().getFullYear()} João Leandro. Todos os direitos reservados.</p>
        <a href="#top" className="group inline-flex min-h-11 items-center gap-2 rounded-md text-xs font-medium text-zinc-300 transition-colors hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">Voltar ao topo<FiArrowUp aria-hidden="true" className="transition-transform motion-safe:group-hover:-translate-y-0.5" size={15} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
