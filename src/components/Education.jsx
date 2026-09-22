import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { education } from '../data/education.js'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Academic background.</h2>
        </Reveal>

        <div className="education__list">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 100} className="education__item">
              <div className="education__icon">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <div className="education__content">
                <div className="education__top">
                  <h3>{item.degree}</h3>
                  <span className="education__score">{item.score}</span>
                </div>
                <p className="education__institution">{item.institution}</p>
                <p className="education__duration">{item.duration}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
