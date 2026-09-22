import { Search, Gauge, BarChart3, LayoutTemplate, Bot } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { toolCategories } from '../data/tools.js'
import './Tools.css'

const CATEGORY_ICONS = {
  'seo-research': Search,
  'content-optimization': Gauge,
  analytics: BarChart3,
  cms: LayoutTemplate,
  'ai-productivity': Bot,
}

export default function Tools() {
  return (
    <section id="tools" className="section section--alt tools">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Tools &amp; Technologies</p>
          <h2 className="section-title">The stack behind the writing.</h2>
        </Reveal>

        <div className="tools__grid">
          {toolCategories.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Search
            return (
              <Reveal key={category.id} delay={(index % 3) * 90} className="tools__card">
                <div className="tools__card-head">
                  <Icon size={20} aria-hidden="true" />
                  <h3>{category.title}</h3>
                </div>
                <ul className="tools__list">
                  {category.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
