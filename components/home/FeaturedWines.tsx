// components/home/FeaturedWines.tsx
import { db } from '@/lib/db'; // 👈 1. Importamos la instancia ÚNICA de Prisma
import Link from 'next/link';

// ❌ Ya no necesitamos instanciar Prisma aquí
// const prisma = new PrismaClient();

export default async function FeaturedWines() {
  // Usamos la instancia importada 'db'
  const featured = await db.wine.findMany({
    where: { isFeatured: true },
    take: 5,
  });

  return (
    // Quité 'suppressHydrationWarning' porque ya está en el layout principal (page.tsx)
    <section className="mb-14 text-center">
      <h2 className="text-primary-300 text-lg tracking-wider mb-4 font-serif">
        Destacados
      </h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {featured.map((wine) => (
          <Link
            key={wine.id}
            href={`/vinos/${wine.id}`} // 👈 2. Corregimos la sintaxis del href
            className="bg-primary-700 rounded-lg px-4 py-2 text-white hover:bg-primary-600 transition-colors text-sm"
          >
            {wine.name}
          </Link>
        ))}
      </div>
    </section>
  );
}