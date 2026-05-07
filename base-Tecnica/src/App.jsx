import {
  ArrowRight,
  AudioLines,
  CalendarCheck,
  Clapperboard,
  Lightbulb,
  MapPin,
  MonitorPlay,
  Music2,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: AudioLines,
    title: 'Sonorizacao profissional',
    text: 'PA, microfonacao, consoles digitais e operacao tecnica para eventos de pequeno a grande porte.',
  },
  {
    icon: Lightbulb,
    title: 'Iluminacao cenica',
    text: 'Desenho de luz, moving heads, refletores, efeitos e ambientacao alinhados ao clima do evento.',
  },
  {
    icon: MonitorPlay,
    title: 'Video e paineis LED',
    text: 'Projecao, TVs, paineis, cameras e transmissao para palestras, shows e experiencias corporativas.',
  },
  {
    icon: Clapperboard,
    title: 'Producao tecnica',
    text: 'Planejamento, montagem, passagem de som, acompanhamento e desmontagem com equipe especializada.',
  },
]

const stats = [
  ['12+', 'anos de atuacao'],
  ['300+', 'eventos entregues'],
  ['24h', 'suporte de producao'],
]

const segments = ['Corporativo', 'Shows', 'Congressos', 'Formaturas', 'Lives', 'Feiras']

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-base-ink text-white">
      <section className="relative min-h-[86vh] px-5 py-6 sm:px-8 lg:px-12">
        <div className="stage-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="beam pointer-events-none absolute left-1/2 top-24 h-64 w-[44rem] -translate-x-1/2 rotate-[-10deg] opacity-70" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="#topo" className="flex items-center gap-3" aria-label="Base Tecnica">
            <img className="h-12 w-auto sm:h-14" src="/base-tecnica-logo.svg" alt="Base Tecnica" />
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
            <a className="transition hover:text-white" href="#servicos">Servicos</a>
            <a className="transition hover:text-white" href="#estrutura">Estrutura</a>
            <a className="transition hover:text-white" href="#contato">Contato</a>
          </div>
          <a
            className="inline-flex h-11 items-center gap-2 rounded-md bg-base-red px-4 text-sm font-bold text-white transition hover:bg-base-red-bright focus:outline-none focus:ring-2 focus:ring-base-red-bright focus:ring-offset-2 focus:ring-offset-black"
            href="#contato"
          >
            <Phone size={17} />
            Orcamento
          </a>
        </nav>

        <div id="topo" className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 pb-8 pt-10 md:grid-cols-[1.02fr_0.98fr] lg:pt-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold uppercase text-zinc-200">
              <Sparkles size={15} className="text-base-red-bright" />
              Eventos audiovisuais com presenca tecnica
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.06] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Base Tecnica para eventos que precisam soar, brilhar e acontecer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Solucoes de audio, luz, video e producao tecnica para empresas, palcos, feiras,
              congressos e experiencias ao vivo com acabamento profissional.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-base-red px-5 font-bold text-white transition hover:bg-base-red-bright focus:outline-none focus:ring-2 focus:ring-base-red-bright focus:ring-offset-2 focus:ring-offset-black"
                href="#contato"
              >
                Solicitar proposta
                <ArrowRight size={18} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 font-bold text-white transition hover:border-white/30 hover:bg-white/10"
                href="#servicos"
              >
                Ver servicos
              </a>
            </div>
          </div>

          <div className="glass-panel relative min-h-[400px] overflow-hidden rounded-lg p-6">
            <div className="absolute inset-x-8 top-8 h-28 rounded-full bg-base-red/40 blur-3xl" />
            <div className="relative flex h-full min-h-[352px] flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <img className="w-44 sm:w-56" src="/base-tecnica-logo.svg" alt="Base Tecnica" />
                <div className="rounded-md border border-base-red/40 bg-base-red/15 px-3 py-2 text-right text-xs font-bold uppercase text-red-100">
                  Audio<br />Luz<br />Video
                </div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-black/35 p-4">
                    <strong className="block text-2xl font-black text-white">{value}</strong>
                    <span className="mt-1 block text-xs leading-5 text-zinc-400">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-md border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-3 text-base font-bold">
                  <Zap className="text-base-red-bright" size={22} />
                  Operacao tecnica completa
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Da visita tecnica a ultima desmontagem, a equipe conduz a estrutura para que o
                  evento rode com seguranca, impacto e pontualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="border-y border-white/10 bg-zinc-950 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase text-base-red-bright">Servicos</span>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">
              Estrutura audiovisual sob medida para cada formato.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-base-red/60 hover:bg-white/[0.07]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-base-red text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estrutura" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-black uppercase text-base-red-bright">Metodo</span>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">
              Um time tecnico que entra antes do palco acender.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              A Base Tecnica combina pre-producao, equipamentos confiaveis e operacao ao vivo para
              reduzir improvisos e deixar cada entrega com leitura clara para publico e contratante.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [CalendarCheck, 'Roteiro tecnico', 'Cronograma de montagem, passagem e operacao alinhado com producao.'],
              [ShieldCheck, 'Seguranca', 'Cabeamento, energia, rigging e backups pensados para operacao estavel.'],
              [Music2, 'Experiencia', 'Som e luz ajustados ao ambiente, ao publico e ao objetivo do evento.'],
              [MapPin, 'Atendimento local', 'Equipe pronta para eventos em saloes, auditorios, arenas e areas abertas.'],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-base-panel p-6">
                <Icon className="text-base-red-bright" size={25} />
                <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-black sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl text-3xl font-black tracking-normal sm:text-4xl">
            Pronta para eventos com escala, detalhe e presenca.
          </h2>
          <div className="flex flex-wrap gap-3">
            {segments.map((segment) => (
              <span key={segment} className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-bold text-zinc-800">
                {segment}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-lg border border-base-red/45 bg-base-red px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="text-3xl font-black tracking-normal sm:text-5xl">Vamos montar a base do seu evento?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-red-50">
              Conte o formato, publico e local. A equipe retorna com uma solucao tecnica clara para
              audio, luz, video e operacao.
            </p>
          </div>
          <a
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 font-black text-black transition hover:bg-zinc-100 lg:mt-0"
            href="mailto:contato@basetecnica.com.br"
          >
            contato@basetecnica.com.br
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
