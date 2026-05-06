'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      {/* Nav bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          padding: '0 40px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s ease, border-bottom 0.4s ease',
          background: scrolled
            ? 'rgba(9, 9, 9, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--border)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1.6rem',
            fontWeight: 600,
            color: 'var(--text)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}
        >
          ER
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="mailto:papiploxx@gmail.com"
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.65rem' }}
          >
            Trabajemos Juntos
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 7 }
                    : i === 2
                    ? { rotate: -45, y: -7 }
                    : { opacity: 0 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              style={{
                display: 'block',
                width: '22px',
                height: '1px',
                background: 'var(--text)',
              }}
            />
          ))}
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              zIndex: 8999,
              background: 'rgba(9,9,9,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
              padding: '32px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="mailto:papiploxx@gmail.com"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '8px' }}
              onClick={() => setMenuOpen(false)}
            >
              Trabajemos Juntos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
