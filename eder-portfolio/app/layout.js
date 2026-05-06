import { Cormorant_Garamond, Syne } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata = {
  title: 'Eder Roa — Creative Developer',
  description:
    'Desarrollador web colombiano especializado en crear experiencias digitales modernas para restaurantes y negocios gastronómicos.',
  keywords:
    'desarrollador web, Colombia, restaurantes, diseño web, portfolio, Eder Roa',
  openGraph: {
    title: 'Eder Roa — Creative Developer',
    description:
      'Experiencias digitales que elevan la presencia de tu negocio.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
