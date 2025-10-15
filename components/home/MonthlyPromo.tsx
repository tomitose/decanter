import { db } from '@/lib/db';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/components/shared/ui/Loading';

async function MonthlyPromoContent() {
  const promoWine = await db.wine.findFirst({
    where: { isOnPromo: true },
  });

  if (!promoWine) {
    return null;
  }

  return (
    <Link
      href={`/vinos/${promoWine.id}`}
      className="block mx-auto bg-gradient-to-br from-wine-950 to-wine-900 rounded-2xl p-5 border border-wine-700 hover:shadow-2xl hover:shadow-wine-900/50 transition-shadow duration-300 relative overflow-hidden"
    >
      {/* Promotional ribbon */}
      <div className="absolute top-2 -right-11 text-center text-white font-bold text-xs bg-primary-500 w-40 py-1 transform rotate-45">
        OFFER
      </div>

      <div className="flex-grow">
        <p className="font-semibold text-primary-100">MONTHLY PROMOTION</p>
        <h3 className="font-bold text-xl text-white mt-1">{promoWine.name}</h3>
      </div>
    </Link>
  );
}

export default function MonthlyPromo() {
  return (
    <section className="mb-10 w-full max-w-md">
      <Suspense fallback={<Loading size="sm" text="Loading promotion..." />}>
        <MonthlyPromoContent />
      </Suspense>
    </section>
  );
}