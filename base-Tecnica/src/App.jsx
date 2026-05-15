import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-base-ink text-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  )
}

export default App
