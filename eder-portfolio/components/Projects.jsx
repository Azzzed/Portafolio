'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Comidas Típicas de Colombia',
    subtitle: 'Sitio informativo gastronómico',
    description:
      'Sitio web informativo que celebra la riqueza culinaria de Colombia. Presenta los platos más representativos del país con imágenes atractivas, descripciones detalladas y un diseño que despierta el apetito. Un ejemplo perfecto de cómo un restaurante puede presentar su oferta de forma visual y convincente.',
    url: 'https://sitio-infomativo-comidas-tipicas.vercel.app/',
    tags: ['Diseño Web', 'Gastronomía', 'HTML/CSS/JS', 'Responsive', 'Vercel'],
    category: 'Web Site',
  },
  {
    id: 2,
    number: '02',
    title: 'Joyería Amber',
    subtitle: 'Tienda y catálogo de joyería',
    description:
      'Sitio web elegante para una joyería artesanal. Presenta la colección de productos con una estética sofisticada, galerías visuales y una experiencia de usuario que refleja el lujo y la exclusividad de la marca. Demuestra cómo un negocio puede proyectar su identidad a través de su presencia digital.',
    url: 'https://joyeria-amber.vercel.app/',
    tags: ['E-commerce', 'Branding', 'Catálogo', 'Diseño', 'Vercel'],
    category: 'E-commerce',
  },
];

function ProjectModal({ project, onClose }) {
  const [iframeError, setIframeError] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-frame"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--bg-card)',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{ display: 'flex', gap: '6px', alignItems: 'center' }}
              >
                {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: c,
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {project.url}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ padding: '8px 18px', fontSize: '0.62rem' }}
              >
                Abrir en nueva pestaña ↗
              </a>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-muted)',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'none',
                  transition: 'all 0.2s',
                  fontSize: '1rem',
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Iframe or fallback */}
          {!iframeError ? (
            <iframe
              src={project.url}
              className="modal-iframe"
              title={project.title}
              onError={() => setIframeError(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          ) : (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                padding: '40px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '3rem' }}>🔗</span>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>
                El sitio requiere ser visto directamente. Haz clic en el botón
                para abrirlo en una nueva pestaña.
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver proyecto completo ↗
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, onOpen, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid',
        borderColor: hovered ? 'var(--border-light)' : 'var(--border)',
        background: 'var(--bg-card)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
        cursor: 'none',
      }}
    >
      {/* Preview area */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '320px',
          overflow: 'hidden',
          background: 'var(--bg-elevated)',
        }}
      >
        <iframe
          src={project.url}
          title={`Preview: ${project.title}`}
          style={{
            width: '200%',
            height: '200%',
            border: 'none',
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
            pointerEvents: 'none',
            filter: 'brightness(0.9)',
            transition: 'filter 0.3s ease',
          }}
          sandbox="allow-scripts allow-same-origin"
        />
        <motion.div
          animate={{ opacity: hovered ? 0 : 0.4 }}
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 40%, var(--bg-card))',
          }}
        />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(9,9,9,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <button
            onClick={() => onOpen(project)}
            className="btn btn-primary"
            style={{ fontSize: '0.72rem' }}
          >
            Ver Preview
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ fontSize: '0.72rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            Abrir sitio ↗
          </a>
        </motion.div>

        {/* Category badge */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '5px 12px',
            background: 'rgba(9,9,9,0.8)',
            border: '1px solid var(--border-light)',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'var(--accent)',
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Info area */}
      <div style={{ padding: '28px 32px 32px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px',
          }}
        >
          <div>
            <span
              className="section-tag"
              style={{ display: 'block', marginBottom: '6px' }}
            >
              {project.number} — {project.subtitle}
            </span>
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                fontWeight: 600,
                color: 'var(--text)',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: 'var(--text-muted)', marginTop: '4px' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>

        <p
          style={{
            fontSize: '0.85rem',
            lineHeight: 1.75,
            color: 'var(--text-muted)',
            marginBottom: '20px',
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag, i) => (
            <span key={i} className="skill-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="proyectos"
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
            04
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
            Proyectos
          </motion.span>
        </div>

        {/* Title */}
        <motion.h2
          className="font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.2,
            marginBottom: '60px',
            maxWidth: '600px',
          }}
        >
          Trabajo que{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
            habla por sí solo
          </em>
        </motion.h2>

        {/* Project grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveProject}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
