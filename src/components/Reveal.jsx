import useInView from '../hooks/useInView'

export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const [ref, inView] = useInView()
  const Tag = as

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
