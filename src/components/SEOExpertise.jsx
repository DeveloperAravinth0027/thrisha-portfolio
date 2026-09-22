import Reveal from './Reveal.jsx'
import './SEOExpertise.css'

const FORMULA = [
  'Keyword Research',
  'Search Intent',
  'Useful Content',
  'On-Page Optimization',
  'Internal Linking',
  'Readability',
  'Content Refresh',
]

const PROCESS = [
  { step: '01', title: 'Research', text: 'Keyword and competitor research to find what the content needs to cover.' },
  { step: '02', title: 'Understand Intent', text: 'Mapping search intent so content answers the right question.' },
  { step: '03', title: 'Plan Content', text: 'Structuring headings, angle, and scope before writing begins.' },
  { step: '04', title: 'Write', text: 'Drafting clear, engaging content in the right brand voice.' },
  { step: '05', title: 'Optimize', text: 'On-page SEO — headings, meta tags, alt text, and internal links.' },
  { step: '06', title: 'Review', text: 'Editing and proofreading for accuracy, clarity, and consistency.' },
  { step: '07', title: 'Refresh', text: 'Auditing and updating existing content to keep it relevant.' },
]

export default function SEOExpertise() {
  return (
    <section id="seo" className="section section--alt seo">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">SEO Expertise</p>
          <h2 className="section-title">SEO That Starts With Intent</h2>
          <p className="section-subtitle">
            Search-friendly content isn&apos;t one skill — it&apos;s several, working together.
          </p>
        </Reveal>

        <Reveal className="seo__formula" delay={80}>
          {FORMULA.map((item, index) => (
            <span className="seo__formula-item" key={item}>
              <span className="seo__formula-text">{item}</span>
              {index < FORMULA.length - 1 && <span className="seo__formula-plus">+</span>}
            </span>
          ))}
        </Reveal>

        <div className="seo__process">
          {PROCESS.map((item, index) => (
            <Reveal key={item.step} delay={index * 70} className="seo__process-item">
              <span className="seo__process-step">{item.step}</span>
              <h3 className="seo__process-title">{item.title}</h3>
              <p className="seo__process-text">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
