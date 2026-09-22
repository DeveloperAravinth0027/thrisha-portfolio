# Thrisha Bakkiyanathan — Portfolio

A premium, editorial-style personal portfolio for an SEO Content Writer / Content
Strategist, built with React + Vite.

## Tech stack

- React 18 (JavaScript, function components + hooks)
- Vite (dev server & bundler)
- Plain CSS3 (CSS variables, no framework)
- [lucide-react](https://lucide.dev/) for icons

## Project structure

```
src/
  components/     One component + matching .css file per UI piece
  data/           Content (experience, skills, tools, education, profile)
  hooks/          useInView (IntersectionObserver hook for scroll reveals)
  App.jsx         Assembles all sections
  main.jsx        React entry point
  index.css       Design tokens, reset, layout & button utilities
index.html        Meta tags, Open Graph, Person JSON-LD, Google Fonts
public/resume/    Placeholder folder for the downloadable resume PDF
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static output is written to `dist/`.

## Notes

- **Resume download**: the Contact section links to
  `/resume/thrisha-bakkiyanathan-resume.pdf`. Drop the real PDF into
  `public/resume/` with that exact filename and the "Download Resume"
  button will work with no code changes.
- **Contact form**: the form on the Contact section is frontend-only.
  `handleSubmit` in `src/components/Contact.jsx` is where to wire up a
  real email/API service (e.g. Formspree, Resend, or a custom endpoint).
- **Dark mode**: toggled from the navbar (sun/moon icon) and persisted
  via `localStorage`.
- **Content accuracy**: all resume, experience, skills, tools, and
  education content lives in `src/data/` and matches only what was
  supplied — no invented stats, clients, or projects.
