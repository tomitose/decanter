import { db } from '@/lib/db'; // 👈 1. Importamos la instancia ÚNICA de Prisma
import Image from 'next/image';
import Link from 'next/link';


export default async function SommelierPicks() {
  const recommended = await db.wine.findMany({
    where: { isSommelierPick: true },
    take: 2,
  });

  if (recommended.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-md w-full mb-10">
      <h2 className="text-xl font-bold tracking-wide text-primary-400 text-center font-serif mb-6">
        Recomendaciones del Sommelier
      </h2>
      <div className="space-y-4">
        {recommended.map((wine) => (
          <Link
            key={wine.id}
            href={`/vinos/${wine.id}`} // 👈 2. Corregimos la sintaxis del href
            className="bg-black/50 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10 hover:bg-primary-900/50 transition-colors duration-300"
          >
            <div className="flex-shrink-0 w-16 h-32 relative">
              <Image
                src={wine.imageUrl}
                alt={`Botella de ${wine.name}`} // 👈 3. Corregimos la sintaxis del alt text
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 10vw, 5vw"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg text-white">{wine.name}</h3>
              <span className="text-primary-500 font-semibold text-sm mt-1 inline-block">
                Ver detalles →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}