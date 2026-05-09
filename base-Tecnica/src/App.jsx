import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-base-ink text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}

export default App
