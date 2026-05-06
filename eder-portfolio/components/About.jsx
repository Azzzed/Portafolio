'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DEVICON_BASE =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillGroups = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', icon: 'java/java-original' },
      { name: 'Spring', icon: 'spring/spring-original' },
      { name: 'PHP', icon: 'php/php-original' },
      { name: 'Laravel', icon: 'laravel/laravel-original' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Python', icon: 'python/python-original' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'React', icon: 'react/react-original' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original' },
      { name: 'HTML5', icon: 'html5/html5-original' },
      { name: 'CSS3', icon: 'css3/css3-original' },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'MySQL', icon: 'mysql/mysql-original' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
    ],
  },
  {
    category: 'Creativo & Herramientas',
    items: [
      { name: 'Unity', icon: 'unity/unity-original' },
      { name: 'C#', icon: 'csharp/csharp-original' },
      { name: 'Blender', icon: 'blender/blender-original' },
      { name: 'Git', icon: 'git/git-original' },
    ],
  },
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

function SkillIcon({ name, icon }) {
  return (
    <div className="skill-icon-item">
      <img
        src={`${DEVICON_BASE}/${icon}.svg`}
        alt={name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="skill-icon-label">{name}</span>
    </div>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
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
                  fontSize: 'clamp(2rem, 4vw, 3.4rem)',
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
                  fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
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
                  fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
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
                      padding: 'clamp(16px, 3vw, 28px) clamp(8px, 2vw, 20px)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      className="font-display"
                      style={{
                        fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
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
                        fontSize: 'clamp(0.5rem, 1.2vw, 0.62rem)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
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

          {/* Right: skills with logos */}
          <FadeIn delay={0.2} direction="left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {skillGroups.map((group, gi) => (
                <div key={gi}>
                  <span
                    className="section-tag"
                    style={{ marginBottom: '14px', display: 'block' }}
                  >
                    {group.category}
                  </span>
                  <div
                    className="skill-icon-grid"
                    style={{ paddingLeft: '2px' }}
                  >
                    {group.items.map((item, ii) => (
                      <SkillIcon key={ii} name={item.name} icon={item.icon} />
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
