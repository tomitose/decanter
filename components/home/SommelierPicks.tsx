import { db } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/components/shared/ui/Loading';

async function SommelierPicksList() {
  const recommended = await db.wine.findMany({
    where: { isSommelierPick: true },
    take: 2,
  });

  if (recommended.length === 0) {
    return (
      <p className="text-gray-500 text-sm text-center">
        No recommendations available
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {recommended.map((wine) => (
        <Link
          key={wine.id}
          href={`/vinos/${wine.id}`}
          className="bg-black/50 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10 hover:bg-primary-900/50 transition-colors duration-300"
        >
          <div className="flex-shrink-0 w-16 h-32 relative">
            <Image
              src={wine.imageUrl}
              alt={`Botella de ${wine.name}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 10vw, 5vw"
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-lg text-white">{wine.name}</h3>
            <span className="text-primary-500 font-semibold text-sm mt-1 inline-block">
              View details →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function SommelierPicks() {
  return (
    <section className="mx-auto max-w-md w-full mb-10">
      <h2 className="text-xl font-bold tracking-wide text-primary-400 text-center font-serif mb-6">
        Sommelier&apos;s Recommendations
      </h2>
      <Suspense fallback={<Loading size="sm" text="Loading recommendations..." />}>
        <SommelierPicksList />
      </Suspense>
    </section>
  );
}