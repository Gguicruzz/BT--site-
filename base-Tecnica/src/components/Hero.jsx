import { ArrowRight, Sparkles } from 'lucide-react'

const stats = [
  ['12+', 'anos de atuação'],
  ['300+', 'eventos entregues'],
  ['24h', 'suporte de produção'],
]

function Hero() {
  return (
    <section id="topo" className="relative min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="stage-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="beam pointer-events-none absolute left-1/2 top-24 h-64  translate-x-1/2 rotate-[-10deg] opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl pt-8 lg:pt-16">
        <div className="reveal max-w-5xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase text-zinc-200">
            <Sparkles size={15} className="text-base-red-bright" />
            Eventos audiovisuais com presença técnica
          </div>

          <h1 className="max-w-5xl text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Base Técnica para eventos que precisam soar, brilhar e acontecer.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Soluções de áudio, luz, vídeo e produção técnica para empresas, palcos, feiras,
            congressos e experiências ao vivo com acabamento profissional.
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/10  p-4">
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
      </div>
    </section>
  )
}

export default Hero
