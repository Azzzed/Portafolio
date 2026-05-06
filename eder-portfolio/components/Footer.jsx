'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: '40px 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: '1.4rem',
              fontWeight: 600,
              color: 'var(--text)',
              letterSpacing: '0.04em',
            }}
          >
            Eder Roa
          </span>
          <span
            style={{
              width: '1px',
              height: '16px',
              background: 'var(--border-light)',
              display: 'inline-block',
            }}
          />
          <span
            className="section-tag"
            style={{ color: 'var(--text-muted)' }}
          >
            Creative Developer · Colombia
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a
            href="mailto:papiploxx@gmail.com"
            className="nav-link"
            style={{ fontSize: '0.65rem' }}
          >
            Email
          </a>
          <a
            href="https://wa.me/573027504689"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ fontSize: '0.65rem' }}
          >
            WhatsApp
          </a>
          <span
            className="section-tag"
            style={{ color: 'var(--text-subtle)' }}
          >
            © {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
