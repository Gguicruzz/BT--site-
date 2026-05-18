import { AtSign, Globe, Phone } from 'lucide-react'

const navItems = [
  ['Soluções', '#sobre'],
  ['Como trabalhamos', '#servicos'],
  ['Seja um parceiro', '#parceiros'],
  ['Portfólio', '#portfolio'],
  ['Fale com a BT', '#contato'],
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 header-texture opacity-70" />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#topo" className="group flex items-center gap-3" aria-label="Voltar ao início">
          <img
            className="h-10 w-10 rounded-md border border-white/10 bg-black object-cover transition duration-300 group-hover:scale-105 group-hover:border-base-red-bright/70"
            src="/bt-mark.svg"
            alt="BT"
          />
          <span className="hidden text-xl font-black tracking-normal text-white sm:block">
            base<span className="font-light">técnica</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-bold text-zinc-400 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} className="transition duration-300 hover:text-white" href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/8 text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 sm:grid"
            href="https://www.instagram.com/"
            aria-label="Instagram"
          >
            <AtSign size={17} />
          </a>
          <a
            className="hidden h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/8 text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 sm:grid"
            href="https://www.linkedin.com/company/base-técnica-soluções-audiovisuais/"
            aria-label="LinkedIn"
            target='_blank'
            rel='noreferrer'
            aria-label="LinkedIn"
          >
            <Globe size={17} />
          </a>
          <a
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-base-red-bright/60 hover:bg-base-red"
            href="#contato"
          >
            <Phone size={15} />
            Orçamento
          </a>
        </div>
      </nav>

      <div className="relative mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 pb-3 text-xs font-black uppercase text-zinc-300 sm:px-8 lg:hidden">
        {navItems.map(([label, href]) => (
          <a key={href} className="shrink-0 transition hover:text-white" href={href}>
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header
