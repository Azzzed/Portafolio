'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { category: 'Backend', items: ['Java · Spring Boot', 'PHP · Laravel', 'Node.js', 'Python'] },
  { category: 'Frontend', items: ['JavaScript', 'React', 'HTML / CSS', 'Next.js'] },
  { category: 'Datos & BD', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Análisis de datos'] },
  { category: 'Creative', items: ['Blender 3D', 'Sprites 2D', 'Rendering', 'C# · Unity'] },
  { category: 'Expertise', items: ['Arquitectura de software', 'Seguridad informática', 'APIs REST', 'Inglés'] },
];

const stats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '10+', label: 'Proyectos completados' },
  { value: '100%', label: 'Compromiso con el cliente' },
];

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="sobre-mi"
      style={{ padding: 'clamp(80px, 12vw, 140px) 0' }}
    >
      <div className="section-container">
        {/* Section header */}
        <div
          ref={ref}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '72px',
          }}
        >
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            02
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{
              flex: 1,
              height: '1px',
              background: 'var(--border)',
              transformOrigin: 'left',
            }}
          />
          <motion.span
            className="section-tag"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sobre mí
          </motion.span>
        </div>

        {/* Content grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Left: bio + stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <FadeIn delay={0.1}>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  color: 'var(--text)',
                  marginBottom: '24px',
                }}
              >
                Tecnología al servicio
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  de tu visión
                </em>
              </h2>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                  marginBottom: '20px',
                }}
              >
                Soy Eder Roa, desarrollador web colombiano con más de 2 años
                construyendo proyectos freelance y personales. Me especializo en
                crear soluciones digitales elegantes para negocios gastronómicos
                y emprendimientos que quieren destacarse en el mundo digital.
              </p>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                }}
              >
                Combino conocimientos técnicos sólidos con un enfoque en el
                diseño para construir sitios web que no solo funcionan
                perfectamente, sino que comunican la esencia de tu marca y
                convierten visitantes en clientes.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.25}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1px',
                  background: 'var(--border)',
                  border: '1px solid var(--border)',
                }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg)',
                      padding: '28px 20px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      className="font-display"
                      style={{
                        fontSize: '2.2rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        lineHeight: 1,
                        marginBottom: '6px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.62rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: skills */}
          <FadeIn delay={0.2} direction="left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {skills.map((group, gi) => (
                <div key={gi}>
                  <span
                    className="section-tag"
                    style={{ marginBottom: '12px', display: 'block' }}
                  >
                    {group.category}
                  </span>
                  <div
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                  >
                    {group.items.map((item, ii) => (
                      <span key={ii} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
