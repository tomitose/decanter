// components/home/MonthlyPromo.tsx
import { db } from '@/lib/db'; // 👈 1. Importamos la instancia ÚNICA de Prisma
import Link from 'next/link';

// ❌ Ya no instanciamos Prisma aquí
// const prisma = new PrismaClient();

export default async function MonthlyPromo() {
  // Buscamos el primer vino que esté en promoción usando 'db'
  const promoWine = await db.wine.findFirst({
    where: { isOnPromo: true },
  });

  // Si no hay ningún vino en promoción, no renderizamos nada (esto está perfecto)
  if (!promoWine) {
    return null;
  }

  return (
    // Quité 'suppressHydrationWarning', ya que no es necesario aquí
    <section className="mb-10 w-full max-w-md">
      <Link
        href={`/vinos/${promoWine.id}`} // 👈 2. Corregimos la sintaxis del href
        className="block mx-auto bg-gradient-to-br from-wine-950 to-wine-900 rounded-2xl p-5 border border-wine-700 hover:shadow-2xl hover:shadow-wine-900/50 transition-shadow duration-300 relative overflow-hidden"
      >
        {/* Cinta de promoción */}
        <div className="absolute top-2 -right-11 text-center text-white font-bold text-xs bg-primary-500 w-40 py-1 transform rotate-45">
          OFERTA
        </div>

        <div className="flex-grow">
          <p className="font-semibold text-primary-100">PROMOCIÓN DEL MES</p>
          <h3 className="font-bold text-xl text-white mt-1">{promoWine.name}</h3>
        </div>
      </Link>
    </section>
  );
}