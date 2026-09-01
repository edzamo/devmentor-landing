import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Faq } from './components/sections/Faq'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { Methodology } from './components/sections/Methodology'
import { Navbar } from './components/sections/Navbar'
import { Pains } from './components/sections/Pains'
import { Pricing } from './components/sections/Pricing'
import { Services } from './components/sections/Services'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pains />
        <Services />
        <Methodology />
        <Pricing />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
