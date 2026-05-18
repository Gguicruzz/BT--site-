import { ArrowRight } from 'lucide-react'

const stats = [
  ['12+', 'anos de atuação'],
  ['300+', 'eventos entregues'],
  ['24h', 'suporte de produção'],
]

function Hero() {
  return (
    <section id="topo" className="relative min-h-screen px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <div className="stage-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[620px]" />
      <div className="beam pointer-events-none absolute right-0 top-28 h-80 rotate-[-12deg] opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 pt-8 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:pt-16">
        <div className="reveal max-w-5xl">
          <h1 className="max-w-5xl text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl xl:text-7xl">
            Seu evento com som claro, luz no ponto e equipe no controle.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            A Base Técnica cuida de áudio, luz, vídeo e operação para empresas, palcos, feiras e
            congressos. Você chega com a ideia, a gente monta a estrutura e acompanha tudo até o
            último microfone ser desligado.
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className="highlight-card reveal rounded-md border border-white/10 bg-white/[0.035] p-4"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <strong className="block text-3xl font-black text-white">{value}</strong>
                <span className="mt-1 block text-sm leading-5 text-zinc-400">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-base-red px-5 font-black text-white transition hover:bg-base-red-bright focus:outline-none focus:ring-2 focus:ring-base-red-bright focus:ring-offset-2 focus:ring-offset-black"
              href="#contato"
            >
              Solicitar proposta
              <ArrowRight size={18} />
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 font-black text-white transition hover:border-white/30 hover:bg-white/10"
              href="#sobre"
            >
              Ver soluções
            </a>
          </div>
        </div>

        <div className="event-visual reveal hidden min-h-[460px] overflow-hidden rounded-md border border-white/10 shadow-2xl shadow-black/50 lg:block">
          <div className="event-visual__beam event-visual__beam--one" />
          <div className="event-visual__beam event-visual__beam--two" />
          <div className="event-visual__stage">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="event-visual__panel">
            <div>
              <strong>Áudio</strong>
              <span>linha limpa</span>
            </div>
            <div>
              <strong>Luz</strong>
              <span>cena pronta</span>
            </div>
            <div>
              <strong>Vídeo</strong>
              <span>imagem no tempo</span>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="text-xs font-black uppercase text-base-red-bright">Operação ao vivo</span>
            <p className="mt-2 max-w-sm text-lg font-black leading-6 text-white">
              Bastidor técnico organizado para o evento aparecer do jeito certo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
