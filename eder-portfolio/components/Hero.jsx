'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay: 0.6 + i * 0.055,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AnimatedWord({ word, startIndex = 0 }) {
  return (
    <span style={{ display: 'inline-flex', overflow: 'hidden' }}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={startIndex + i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="dot-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '100px',
          left: '40px',
          right: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="section-tag">— Portfolio 2025</span>
        <span
          className="section-tag"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#4ade80',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }}
          />
          Disponible para proyectos
        </span>
      </motion.div>

      <div
        className="section-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
          paddingTop: '80px',
        }}
      >
        {/* Main heading */}
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(72px, 13vw, 190px)',
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            margin: 0,
          }}
        >
          <div>
            <AnimatedWord word="EDER" startIndex={0} />
          </div>
          <div>
            <AnimatedWord word="ROA" startIndex={4} />
          </div>
        </h1>

        {/* Horizontal divider + tagline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            transformOrigin: 'left',
            height: '1px',
            background: 'var(--border-light)',
            margin: '32px 0 28px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Role + tagline row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '24px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              style={{ maxWidth: '480px' }}
            >
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  fontWeight: 400,
                }}
              >
                Desarrollador web colombiano. Construyo experiencias digitales
                modernas que{' '}
                <span style={{ color: 'var(--accent)' }}>
                  elevan la presencia de tu negocio
                </span>{' '}
                y conectan con tu audiencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'flex-end',
              }}
            >
              <span
                className="section-tag"
                style={{ textAlign: 'right' }}
              >
                Full-Stack Developer
              </span>
              <span
                className="section-tag"
                style={{ color: 'var(--accent)' }}
              >
                Colombia · Freelance
              </span>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.6 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a href="#contacto" className="btn btn-primary">
              Trabajemos Juntos
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#proyectos" className="btn btn-ghost">
              Ver Proyectos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span className="section-tag">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background:
              'linear-gradient(to bottom, var(--text-muted), transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
