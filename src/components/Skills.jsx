import Reveal from './Reveal.jsx'
import { skillCategories } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Core Skills</p>
          <h2 className="section-title">A full-stack content skill set.</h2>
          <p className="section-subtitle">
            From research and strategy to writing and optimization — grouped by discipline.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={(index % 3) * 90} className="skills__card">
              <h3 className="skills__card-title">{category.title}</h3>
              <ul className="skills__tags">
                {category.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
