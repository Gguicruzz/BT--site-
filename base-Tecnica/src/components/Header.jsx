import { Phone } from 'lucide-react'

const navItems = [
  ['Soluções', '#sobre'],
  ['Serviços', '#servicos'],
  ['Contato', '#contato'],
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/72 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
        <a href="#topo" className="group flex items-center gap-3" aria-label="Voltar ao início">
          <img
            className="h-11 w-11 rounded-md border border-white/10 object-cover transition duration-300 group-hover:border-base-red-bright group-hover:shadow-[0_0_26px_rgba(227,35,24,0.35)]"
            src="/bt-logo.svg"
            alt="BT"
          />
          <span className="hidden text-sm font-black uppercase tracking-normal text-white sm:block">
            Base Técnica
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-bold text-zinc-300 xl:flex">
          {navItems.map(([label, href]) => (
            <a key={href} className="transition hover:text-white" href={href}>
              {label}
            </a>
          ))}
        </div>

        <a
          className="inline-flex h-9 items-center gap-2 rounded-full border border-red-300/20 bg-base-red/90 px-4 text-sm font-bold text-white shadow-[0_8px_26px_rgba(168,15,8,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-base-red-bright hover:shadow-[0_12px_34px_rgba(227,35,24,0.28)] focus:outline-none focus:ring-2 focus:ring-base-red-bright focus:ring-offset-2 focus:ring-offset-black"
          href="#contato"
        >
          <Phone size={15} />
          Orçamento
        </a>
      </nav>

      <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 pb-3 text-xs font-black uppercase text-zinc-300 sm:px-8 xl:hidden">
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
