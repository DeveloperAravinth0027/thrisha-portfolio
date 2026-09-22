import { useEffect, useState } from 'react'
import { MapPin, Linkedin } from 'lucide-react'
import { profile } from '../data/profile.js'
import profilePhoto from '../assets/thrisha-profile.jpg'
import './Hero.css'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const scrollToExperience = (event) => {
    event.preventDefault()
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow reveal reveal--visible">SEO Content Writer &amp; Content Strategist</p>

          <h1 className="hero__heading reveal reveal--visible">
            Words That Connect.
            <br />
            Content That Performs.
          </h1>

          <p className="hero__subtext reveal reveal--visible" style={{ transitionDelay: '120ms' }}>
            SEO Content Writer specializing in B2B &amp; B2C content, storytelling, content strategy,
            and search-focused digital experiences.
          </p>

          <div className="hero__role reveal reveal--visible" style={{ transitionDelay: '200ms' }} aria-live="polite">
            <span key={roleIndex} className="hero__role-text">
              {profile.roles[roleIndex]}
            </span>
          </div>

          <div className="hero__actions reveal reveal--visible" style={{ transitionDelay: '280ms' }}>
            <a href="#experience" className="btn btn-primary" onClick={scrollToExperience}>
              View My Experience
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Linkedin size={18} aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="hero__location reveal reveal--visible" style={{ transitionDelay: '340ms' }}>
            <MapPin size={16} aria-hidden="true" />
            <span>{profile.locationShort}</span>
          </div>
        </div>

        <div className="hero__portrait reveal reveal--visible" style={{ transitionDelay: '160ms' }}>
          <div className="hero__portrait-frame">
            <img src={profilePhoto} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
