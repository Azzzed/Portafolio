'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Diseño Web\na Medida',
    description:
      'Sitios únicos, rápidos y visualmente poderosos que reflejan la identidad de tu restaurante o negocio. Cada pixel diseñado para cautivar a tus visitantes.',
    tags: ['Next.js', 'React', 'Responsive', 'SEO'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Menú Digital\nInteractivo',
    description:
      'Presenta tu carta de forma visual, moderna y apetitosa. Actualizable en tiempo real, con categorías, fotos y precios que se muestran perfectamente en cualquier dispositivo.',
    tags: ['Gestión fácil', 'Fotos HD', 'QR Code', 'Mobile First'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Identidad Visual\nDigital',
    description:
      'Branding coherente y memorable: paleta de colores, tipografías, iconografía y elementos visuales que conectan emocionalmente con tu audiencia y distinguen tu marca.',
    tags: ['Branding', 'UI Design', 'Blender 3D', 'Assets'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Tiendas &\nCatálogos Online',
    description:
      'Muestra y vende tus productos con una experiencia de usuario impecable. Catálogos digitales, tiendas online y plataformas e-commerce que convierten visitas en ventas.',
    tags: ['E-commerce', 'Catálogo', 'Pasarela de pago', 'Inventario'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="service-card"
    >
      {/* Card number */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '32px',
        }}
      >
        <span
          className="font-display"
          style={{
            fontSize: '3.5rem',
            fontWeight: 300,
            color: 'var(--border-light)',
            lineHeight: 1,
          }}
        >
          {service.number}
        </span>
        <span style={{ color: 'var(--text-muted)' }}>{service.icon}</span>
      </div>

      {/* Title */}
      <h3
        className="font-display"
        style={{
          fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
          fontWeight: 600,
          color: 'var(--text)',
          lineHeight: 1.2,
          marginBottom: '16px',
          whiteSpace: 'pre-line',
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.88rem',
          lineHeight: 1.75,
          color: 'var(--text-muted)',
          marginBottom: '28px',
        }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {service.tags.map((tag, i) => (
          <span key={i} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="servicios"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 0',
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
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
            03
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
            Servicios
          </motion.span>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ marginBottom: '60px', maxWidth: '700px' }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: 'var(--text)',
              marginBottom: '20px',
            }}
          >
            Soluciones digitales para{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              restaurantes y negocios
            </em>{' '}
            que quieren crecer
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
            }}
          >
            Diseño y desarrollo sitios web que no solo se ven increíbles, sino
            que trabajan activamente para atraer más clientes, mostrar mejor tus
            productos y fortalecer tu presencia digital.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            marginTop: '56px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <a href="#contacto" className="btn btn-primary">
            Solicitar cotización gratuita
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
          <span
            style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}
          >
            Sin compromisos. Respondo en menos de 24 horas.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
