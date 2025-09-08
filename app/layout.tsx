// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
// 1. Importamos las fuentes que queremos usar desde next/font/google
import { Inter, Playfair_Display } from 'next/font/google';

// 2. Configuramos y definimos las constantes para las fuentes
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Le asignamos una variable CSS
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair', // Le asignamos una variable CSS
});

export const metadata: Metadata = {
  title: 'Decanter - Your Wine Collection',
  description: 'Discover your next favorite wine.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Ahora que 'inter' y 'playfair' existen, esta línea funcionará */}
      <body
        className={`${inter.variable} ${playfair.variable} bg-primary-950 text-gray-200 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}