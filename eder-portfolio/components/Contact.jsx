'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      /*
       * ─── Web3Forms ────────────────────────────────────────────────────
       * Para recibir correos en papiploxx@gmail.com:
       * 1. Ve a https://web3forms.com
       * 2. Ingresa tu email y obtén tu clave GRATIS
       * 3. Reemplaza 'TU_CLAVE_AQUI' con tu access key
       * ─────────────────────────────────────────────────────────────────
       */
      const ACCESS_KEY = 'bf13189c-06d3-4519-9eec-598be8af530b'; // ← reemplaza esto

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'Portfolio de Eder Roa',
          subject: `Nuevo contacto — ${formData.business || formData.name}`,
          name: formData.name,
          email: formData.email,
          message: `Negocio: ${formData.business || 'No especificado'}\nEmail de respuesta: ${formData.email}\n\n${formData.message}`,
          botcheck: false,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(
          'Error al enviar el mensaje. Por favor escríbeme directamente a papiploxx@gmail.com'
        );
      }
    } catch {
      setError(
        'Error de conexión. Por favor escríbeme directamente a papiploxx@gmail.com'
      );
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      label: 'Email',
      value: 'papiploxx@gmail.com',
      href: 'mailto:papiploxx@gmail.com',
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      value: '+57 302 750 4689',
      href: 'https://wa.me/573027504689?text=Hola%20Eder%2C%20vi%20tu%20portfolio%20y%20me%20interesa%20un%20proyecto%20web.',
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.14a16 16 0 006.95 6.95l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: 'Ubicación',
      value: 'Colombia · Trabajo remoto',
      href: null,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contacto"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 0',
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border)',
      }}
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
            06
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
            Contacto
          </motion.span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Left: CTA + contact info */}
          <div>
            <motion.h2
              className="font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: 'var(--text)',
                marginBottom: '24px',
              }}
            >
              ¿Listo para tener el sitio web que tu negocio{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                merece?
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{
                fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                marginBottom: '44px',
              }}
            >
              Cuéntame sobre tu restaurante, cafetería o negocio. En menos de
              24 horas te respondo con ideas concretas y una propuesta sin
              compromiso.
            </motion.p>

            {/* Contact items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                border: '1px solid var(--border)',
              }}
            >
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: 'clamp(14px, 2.5vw, 20px) clamp(16px, 3vw, 24px)',
                    borderBottom:
                      i < contactItems.length - 1
                        ? '1px solid var(--border)'
                        : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div
                      className="section-tag"
                      style={{ marginBottom: '3px' }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 'clamp(0.82rem, 2vw, 0.9rem)',
                          color: 'var(--text)',
                          textDecoration: 'none',
                          fontWeight: 500,
                          transition: 'color 0.2s',
                          wordBreak: 'break-all',
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = 'var(--accent)')
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = 'var(--text)')
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontSize: 'clamp(0.82rem, 2vw, 0.9rem)',
                          color: 'var(--text)',
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            {submitted ? (
              <div
                style={{
                  padding: 'clamp(40px, 8vw, 60px) clamp(24px, 5vw, 40px)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span style={{ fontSize: '2.5rem' }}>✓</span>
                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 600 }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                  }}
                >
                  Te responderé en menos de 24 horas con ideas para tu
                  proyecto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                  padding: 'clamp(24px, 5vw, 40px)',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                }}
              >
                <div>
                  <label
                    className="section-tag"
                    style={{ display: 'block', marginBottom: '8px' }}
                  >
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="¿Cómo te llamas?"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    className="section-tag"
                    style={{ display: 'block', marginBottom: '8px' }}
                  >
                    Tu email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    className="section-tag"
                    style={{ display: 'block', marginBottom: '8px' }}
                  >
                    Tu negocio
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Restaurante, cafetería, bar..."
                    value={formData.business}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    className="section-tag"
                    style={{ display: 'block', marginBottom: '8px' }}
                  >
                    Cuéntame sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="¿Qué necesitas? ¿Tienes referentes? ¿Cuál es tu presupuesto aproximado?"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    style={{ resize: 'vertical', minHeight: '100px' }}
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: '#f87171',
                      lineHeight: 1.5,
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  style={{ opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                  {!loading && (
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
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
