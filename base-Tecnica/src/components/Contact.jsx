import { ArrowRight, Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12">
      <div className="reveal mx-auto grid max-w-7xl gap-8 rounded-lg border border-base-red/45 bg-base-red px-6 py-10 text-white sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="text-sm font-black uppercase text-red-100">Contato</span>
          <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-5xl">
            Vamos montar a base do seu evento?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-red-50">
            Conte o formato, público e local. A equipe retorna com uma solução técnica clara para
            áudio, luz, vídeo e operação.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-bold text-white sm:grid-cols-2">
            <a className="inline-flex items-center gap-2" href="tel:+5511999999999">
              <Phone size={17} />
              (11) 99999-9999
            </a>
            <a className="inline-flex items-center gap-2" href="mailto:contato@basetecnica.com.br">
              <Mail size={17} />
              contato@basetecnica.com.br
            </a>
          </div>
        </div>
        <a
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 font-black text-black transition hover:bg-zinc-100"
          href="mailto:contato@basetecnica.com.br"
        >
          Solicitar orçamento
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default Contact
