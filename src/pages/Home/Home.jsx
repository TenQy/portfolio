import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Separator from '../../components/Separator/Separator'

function Home() {
  const location = useLocation()

  useEffect(() => {
    const section = location.state?.scrollTo
    if (!section) return
    const timer = setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(timer)
  }, [location.state])

  return (
    <main>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
    </main>
  )
}

export default Home