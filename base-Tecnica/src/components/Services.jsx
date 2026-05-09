import { AudioLines, Clapperboard, Lightbulb, MonitorPlay } from 'lucide-react'

const services = [
  {
    icon: AudioLines,
    title: 'Sonorização profissional',
    text: 'PA, microfonação, consoles digitais e operação técnica para eventos de pequeno a grande porte.',
  },
  {
    icon: Lightbulb,
    title: 'Iluminação cênica',
    text: 'Desenho de luz, moving heads, refletores, efeitos e ambientação alinhados ao clima do evento.',
  },
  {
    icon: MonitorPlay,
    title: 'Vídeo e painéis LED',
    text: 'Projeção, TVs, painéis, câmeras e transmissão para palestras, shows e experiências corporativas.',
  },
  {
    icon: Clapperboard,
    title: 'Produção técnica',
    text: 'Planejamento, montagem, passagem de som, acompanhamento e desmontagem com equipe especializada.',
  },
]

function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <span className="text-sm font-black uppercase text-base-red-bright">Serviços</span>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">
            Estrutura audiovisual sob medida para cada formato.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal rounded-lg border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-base-red/60 hover:bg-white/[0.07]"
            >
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
  )
}

export default Services
