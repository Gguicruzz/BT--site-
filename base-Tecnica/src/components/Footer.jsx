import { AtSign, Globe, Mail, Phone } from 'lucide-react'

const footerLinks = [
  ['Soluções', '#sobre'],
  ['Portfólio', '#portfolio'],
  ['Serviços', '#servicos'],
  ['Contato', '#contato'],
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a href="#topo" className="inline-flex items-center gap-3" aria-label="Voltar ao início">
            <img className="h-10 w-10 rounded-md border border-white/10 bg-black object-cover" src="/bt-mark.svg" alt="BT" />
            <span className="text-xl font-black text-white">
              base<span className="font-light">técnica</span>
            </span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
            Base técnica para eventos corporativos, palcos, ativações, feiras e experiências ao vivo.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-white">Mapa do site</h2>
          <div className="mt-4 grid gap-3 text-sm text-zinc-400">
            {footerLinks.map(([label, href]) => (
              <a key={href} className="transition hover:text-white" href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-white">Contato</h2>
          <div className="mt-4 grid gap-3 text-sm text-zinc-400">
            <a className="inline-flex items-center gap-2 transition hover:text-white" href="tel:+5511999999999">
              <Phone size={16} />
              (11) 99999-9999
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-white"
              href="mailto:contato@basetecnica.com.br"
            >
              <Mail size={16} />
              contato@basetecnica.com.br
            </a>
            <div className="mt-2 flex gap-2">
              <a className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white" href="https://www.instagram.com/" aria-label="Instagram">
                <AtSign size={16} />
              </a>
              <a className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white" href="https://www.linkedin.com/" aria-label="LinkedIn">
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Base Técnica. Todos os direitos reservados.</span>
        <span>Esqueleto do footer pronto para redes, endereço e política.</span>
      </div>
    </footer>
  )
}

export default Footer
