import { PenLine, Briefcase, Compass, BookOpenText, Sparkles, Search, LineChart, Wand2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'
import './About.css'

const EXPERTISE = [
  { icon: Search, label: 'SEO Content' },
  { icon: Briefcase, label: 'B2B & B2C Writing' },
  { icon: Compass, label: 'Content Strategy' },
  { icon: BookOpenText, label: 'Storytelling' },
  { icon: PenLine, label: 'Brand Voice' },
  { icon: Sparkles, label: 'AI Linguistics' },
  { icon: LineChart, label: 'Search Intent' },
  { icon: Wand2, label: 'Content Optimization' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Content built on strategy, not guesswork.</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__intro">
            <p>{profile.summary}</p>
          </Reveal>

          <Reveal delay={120} className="about__expertise">
            <h3 className="about__expertise-title">Key Areas of Expertise</h3>
            <ul className="about__expertise-list">
              {EXPERTISE.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
