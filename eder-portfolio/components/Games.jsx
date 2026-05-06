'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const GAME = {
  id: '3548690',
  title: 'World Runner Demo',
  subtitle: 'Plataformero 2.5D · Unity · WebGL',
  url: 'https://azzzzed.itch.io/world-runner-demo',
  profileUrl: 'https://azzzzed.itch.io',
  thumbnail: 'https://img.itch.zone/aW1nLzIxMTMxNTI5LnBuZw==/original/f7kr4p.png',
  description:
    'Un demo de plataformero 2.5D desarrollado en Unity con C#. El jugador corre, salta y esquiva obstáculos en un mundo generado dinámicamente, con mecánicas de movimiento pulidas y una estética limpia. Un vistazo a mis capacidades en desarrollo de videojuegos.',
  tags: ['Unity', 'C#', 'WebGL', 'Platformer', '2.5D', 'HTML5'],
  status: 'En desarrollo',
};

function GameModal({ onClose }) {
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
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 20px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--bg-card)',
              flexShrink: 0,
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: c,
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  wordBreak: 'break-all',
                }}
              >
                {GAME.url}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
              <a
                href={GAME.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ padding: '8px 16px', fontSize: '0.6rem' }}
              >
                Abrir en itch.io ↗
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
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* iframe or fallback */}
          {!iframeError ? (
            <iframe
              src={GAME.url}
              className="modal-iframe"
              title={GAME.title}
              onError={() => setIframeError(true)}
              allow="autoplay; fullscreen"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
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
                padding: '40px 20px',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '3rem' }}>🎮</span>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.7, fontSize: '0.9rem' }}>
                El juego debe abrirse directamente en itch.io. Haz clic en el botón para jugarlo.
              </p>
              <a
                href={GAME.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Jugar en itch.io ↗
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Games() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="videojuegos"
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
            05
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
            Videojuegos
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
            marginBottom: '16px',
            maxWidth: '600px',
          }}
        >
          Mundos que cobran vida{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
            línea a línea
          </em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
            lineHeight: 1.75,
            color: 'var(--text-muted)',
            maxWidth: '600px',
            marginBottom: '56px',
          }}
        >
          El desarrollo de videojuegos es donde mi lado técnico y creativo
          convergen. Uso Unity y C# para construir mecánicas de juego,
          sistemas de física y experiencias interactivas que van más allá
          de la pantalla.
        </motion.p>

        {/* Game card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'start',
          }}
        >
          {/* Thumbnail card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="game-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ aspectRatio: '16 / 9', position: 'relative' }}
          >
            <img
              src={GAME.thumbnail}
              alt={GAME.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: hovered ? 'brightness(0.5)' : 'brightness(0.85)',
                transition: 'filter 0.35s ease',
              }}
            />

            {/* Category badge */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                padding: '4px 10px',
                background: 'rgba(9,9,9,0.85)',
                border: '1px solid var(--border-light)',
                fontSize: '0.58rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--accent)',
              }}
            >
              {GAME.status}
            </div>

            {/* Hover overlay */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                padding: '16px',
              }}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary"
                style={{ fontSize: '0.68rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Jugar demo
              </button>
              <a
                href={GAME.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ fontSize: '0.68rem' }}
                onClick={(e) => e.stopPropagation()}
              >
                itch.io ↗
              </a>
            </motion.div>
          </motion.div>

          {/* Game info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span
                className="section-tag"
                style={{ display: 'block', marginBottom: '8px' }}
              >
                01 — {GAME.subtitle}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.15,
                }}
              >
                {GAME.title}
              </h3>
            </div>

            <p
              style={{
                fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
              }}
            >
              {GAME.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {GAME.tags.map((tag, i) => (
                <span key={i} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '4px' }}>
              <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Jugar demo
              </button>
              <a
                href={GAME.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Ver perfil ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* itch.io embed widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ marginTop: 'clamp(32px, 5vw, 56px)' }}
        >
          <span
            className="section-tag"
            style={{ display: 'block', marginBottom: '16px' }}
          >
            Widget de itch.io
          </span>
          <div className="itchio-widget-wrapper">
            <iframe
              src={`https://itch.io/embed/${GAME.id}?bg_color=090909&fg_color=f0eae0&link_color=c8b89a&border_color=1e1e1e&dark=true`}
              allowFullScreen
              title={`${GAME.title} - itch.io widget`}
            />
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalOpen && <GameModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
