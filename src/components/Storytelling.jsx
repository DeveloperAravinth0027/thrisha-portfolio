import { BookOpen, Mic2, Users, Target } from 'lucide-react'
import Reveal from './Reveal.jsx'
import './Storytelling.css'

const CARDS = [
  {
    icon: BookOpen,
    title: 'Storytelling',
    text: 'Narrative structure and engaging content.',
  },
  {
    icon: Mic2,
    title: 'Brand Voice',
    text: 'Adapting tone and messaging for different audiences.',
  },
  {
    icon: Users,
    title: 'Audience Understanding',
    text: 'Creating content around audience needs and buyer intent.',
  },
  {
    icon: Target,
    title: 'Content Strategy',
    text: 'Connecting content with business and search objectives.',
  },
]

export default function Storytelling() {
  return (
    <section id="storytelling" className="section storytelling">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Storytelling &amp; Brand Strategy</p>
          <h2 className="section-title">Storytelling Meets Strategy</h2>
          <p className="section-subtitle">
            Great content does more than rank. It communicates ideas, builds trust, reflects brand
            voice, and creates meaningful connections with the audience.
          </p>
        </Reveal>

        <div className="storytelling__grid">
          {CARDS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 90} className="storytelling__card">
              <div className="storytelling__icon">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="storytelling__card-title">{title}</h3>
              <p className="storytelling__card-text">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
