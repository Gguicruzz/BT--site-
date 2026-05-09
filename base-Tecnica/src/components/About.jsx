import { Cable, Headphones, MonitorPlay, RadioTower } from 'lucide-react'

const featuredEvents = [
  'Shows e ativações de marca',
  'Congressos e palestras corporativas',
  'Formaturas, feiras e eventos sociais',
]

const team = [
  ['Técnico de vídeo', 'Switch, painéis, câmeras, projeção e conteúdos visuais no tempo certo.', MonitorPlay],
  ['Técnico de som', 'Montagem, equalização, microfones, PA e monitor para voz e música limpas.', Headphones],
  ['Técnico de áudio', 'Captação, mesa digital, passagem de som e operação durante toda a programação.', RadioTower],
  ['Equipe de montagem', 'Cabeamento, energia, organização de palco e desmontagem com segurança.', Cable],
]

const venues = ['Auditórios', 'Casas de show', 'Salões de eventos', 'Arenas abertas', 'Feiras', 'Espaços corporativos']

function About() {
  return (
    <section id="sobre" className="scroll-mt-24 border-y border-white/10 bg-zinc-950 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-black uppercase text-base-red-bright">Soluções</span>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">
              Grandes eventos começam com uma base técnica bem montada.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              A BT atua nos bastidores para que público, artistas, marcas e produção tenham uma
              experiência clara, segura e memorável. Cada projeto passa por leitura do espaço,
              escolha de estrutura e acompanhamento de equipe durante o evento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featuredEvents.map((event, index) => (
              <article key={event} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <span className="text-sm font-black text-base-red-bright">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-black text-white">{event}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Planejamento de áudio, luz e vídeo para eventos com fluxo intenso e entrega visual
                  forte.
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal">
            <span className="text-sm font-black uppercase text-base-red-bright">Time técnico</span>
            <h3 className="mt-3 text-2xl font-black tracking-normal text-white sm:text-4xl">
              Pessoas certas para cada parte da operação.
            </h3>
            <p className="mt-5 text-base leading-7 text-zinc-300">
              Em evento ao vivo, informação precisa circular rápido. Por isso a BT divide a operação
              por função, mantendo cada área com alguém responsável e preparado para agir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {team.map(([title, text, Icon]) => (
              <article key={title} className="reveal rounded-lg border border-white/10 bg-base-panel p-6">
                <Icon className="text-base-red-bright" size={26} />
                <h4 className="mt-5 text-lg font-black text-white">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-16 rounded-lg bg-white px-6 py-8 text-black sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <span className="text-sm font-black uppercase text-base-red">Casas parceiras</span>
            <h3 className="mt-3 max-w-2xl text-2xl font-black tracking-normal sm:text-4xl">
              Estrutura pronta para diferentes tipos de espaço.
            </h3>
          </div>
          <div className="mt-8 flex max-w-2xl flex-wrap gap-3 lg:mt-0">
            {venues.map((venue) => (
              <span key={venue} className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-bold text-zinc-800">
                {venue}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
