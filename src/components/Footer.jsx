import { Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">THRISHA BAKKIYANATHAN</span>
          <span className="footer__tagline">SEO Content Writer | B2B &amp; B2C Content | Storytelling</span>
        </div>

        <div className="footer__links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="container">
        <p className="footer__copyright">© 2026 Thrisha Bakkiyanathan. All rights reserved.</p>
      </div>
    </footer>
  )
}
