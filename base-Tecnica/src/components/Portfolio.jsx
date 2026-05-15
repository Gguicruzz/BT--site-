import projeto1 from '../assets/projeto1.jpg'
import projeto2 from '../assets/projeto2.jpg'
import projeto3 from '../assets/projeto3.jpg'

const projects = [
  {
    image: projeto1,
    title: 'Evento corporativo',
    type: 'Áudio, luz e vídeo',
    text: 'Estrutura técnica para apresentação, ambientação e experiência ao vivo.',
  },
  {
    image: projeto2,
    title: 'Produção ao vivo',
    type: 'Operação técnica',
    text: 'Acompanhamento de equipe para manter programação, som e imagem em sintonia.',
  },
  {
    image: projeto3,
    title: 'Experiência de palco',
    type: 'Cenografia técnica',
    text: 'Composição audiovisual para destacar marca, público e momento do evento.',
  },
]

function hideBrokenImage(event) {
  event.currentTarget.hidden = true
}

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 border-y border-white/10 bg-zinc-950 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <span className="text-sm font-black uppercase text-base-red-bright">Portfólio</span>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-5xl">
            Alguns eventos que já passaram pela BT.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Uma seleção de projetos para mostrar como a Base Técnica atua em diferentes formatos,
            sempre com foco em impacto visual, clareza sonora e operação segura.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="reveal overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-base-red/60 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(227,35,24,0.38),transparent_34%),linear-gradient(135deg,#171717,#050505)]">
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-black uppercase text-zinc-300">
                    Imagem do evento
                  </span>
                </div>
                <img
                  className="relative h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105 hover:opacity-100"
                  src={project.image}
                  alt={project.title}
                  onError={hideBrokenImage}
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-black uppercase text-base-red-bright">{project.type}</span>
                <h3 className="mt-3 text-xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
