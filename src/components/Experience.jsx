import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { experience } from '../data/experience.js'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt experience">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where the writing has happened.</h2>
        </Reveal>

        <ol className="experience__timeline">
          {experience.map((item, index) => (
            <li key={item.company} className="experience__item">
              <Reveal delay={index * 100} className="experience__card">
                <div className="experience__dot" aria-hidden="true" />
                <div className="experience__card-head">
                  <h3 className="experience__role">{item.role}</h3>
                  {item.current && <span className="experience__badge">Current</span>}
                </div>
                <div className="experience__meta">
                  <span>
                    <Building2 size={15} aria-hidden="true" /> {item.company}
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__website"
                        aria-label={`Visit ${item.company} website`}
                      >
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )}
                  </span>
                  <span>
                    <MapPin size={15} aria-hidden="true" /> {item.location}
                  </span>
                  <span>
                    <Calendar size={15} aria-hidden="true" /> {item.duration}
                  </span>
                </div>
                <ul className="experience__list">
                  {item.responsibilities.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
