import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import SEOExpertise from './components/SEOExpertise.jsx'
import Storytelling from './components/Storytelling.jsx'
import Tools from './components/Tools.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <SEOExpertise />
        <Storytelling />
        <Tools />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
