import { useState } from 'react'
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Download } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Frontend-only submission. Wire this up to an email/API service
    // (e.g. Formspree, Resend, or a custom backend endpoint) when one
    // is available — send `form` there instead of setting local state.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section section--alt contact">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s Create Meaningful Content</h2>
          <p className="section-subtitle">
            Have a content, SEO, or storytelling project in mind? Let&apos;s connect.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__details">
            <ul className="contact__list">
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button type="button" className="contact__copy" onClick={handleCopy} aria-label="Copy email address">
                  {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                </button>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={profile.phoneHref}>{profile.phone}</a>
              </li>
              <li>
                <Linkedin size={18} aria-hidden="true" />
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/thrisha-bakkiyanathan
                </a>
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                <span>{profile.location}</span>
              </li>
            </ul>

            <div className="contact__actions">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Linkedin size={18} aria-hidden="true" />
                Connect on LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-outline">
                <Mail size={18} aria-hidden="true" />
                Send an Email
              </a>
              <a href={profile.resumeUrl} className="btn btn-outline" download>
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success" role="status">
                <Check size={20} aria-hidden="true" />
                <p>Thanks for reaching out. This message has been noted — reply is best via email for now.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark contact__submit">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
