import { db } from '@/lib/db';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/components/shared/ui/Loading';

async function FeaturedWinesList() {
  const featured = await db.wine.findMany({
    where: { isFeatured: true },
    take: 5,
  });

  if (featured.length === 0) {
    return (
      <p className="text-gray-500 text-sm">No featured wines available</p>
    );
  }

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {featured.map((wine) => (
        <Link
          key={wine.id}
          href={`/vinos/${wine.id}`}
          className="bg-primary-700 rounded-lg px-4 py-2 text-white hover:bg-primary-600 transition-colors text-sm"
        >
          {wine.name}
        </Link>
      ))}
    </div>
  );
}

export default function FeaturedWines() {
  return (
    <section className="mb-14 text-center">
      <h2 className="text-primary-300 text-lg tracking-wider mb-4 font-serif">
        Featured
      </h2>
      <Suspense fallback={<Loading size="sm" text="Loading featured wines..." />}>
        <FeaturedWinesList />
      </Suspense>
    </section>
  );
}