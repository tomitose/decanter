// app/vinos/[id]/page.tsx
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function WineDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;
  const wine = await db.wine.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!wine) {
    notFound();
  }

  return (
    <div className="relative min-h-screen text-white">
      {/* --- Back to Home Button --- */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-primary-700 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6 text-primary-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </Link>
      </div>

      {/* --- Floating Wine Image --- */}
      <div className="pt-16 pb-8 text-center animate-fade-in">
        <div className="relative inline-block animate-float">
          <div className="relative w-100 h-[380px] md:w-120 md:h-[450px] mx-auto">
            <Image
              src={wine.imageUrl}
              alt={`Botella de ${wine.name}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority // Cargar esta imagen con prioridad
            />
          </div>
          <div className="absolute md:-top-2 md:-right-6 top-4 right-10 bg-wine-900 text-gold-400 px-3 py-1 rounded-full text-sm font-bold shadow-md border border-wine-700">
            {wine.year}
          </div>
        </div>
      </div>

      {/* --- Main Information Card --- */}
      <div className="relative z-10 container mx-auto px-4 pb-12 max-w-md">
        <div className="bg-black/50 backdrop-blur-md rounded-3xl p-6 animate-slide-up shadow-2xl border border-white/10">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-serif font-bold text-gold-300 mb-1">
              {wine.name}
            </h1>
            <p className="text-primary-300 text-sm tracking-wide uppercase">
              {wine.winery}
            </p>
          </div>

          {/* --- Descripción --- */}
          <div className="bg-primary-900/40 rounded-2xl p-4 mb-4">
            <h3 className="text-primary-400 text-lg font-serif font-semibold mb-2">
              Description
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-sans">
              {wine.description}
            </p>
          </div>

          {/* --- Data Grid (Grape, Year, Price) --- */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-900/40 rounded-2xl p-4 text-center">
              <h3 className="text-primary-400 text-sm font-medium uppercase">
                Grape
              </h3>
              <p className="text-white font-semibold text-lg">{wine.grape}</p>
            </div>
            <div className="bg-primary-900/40 rounded-2xl p-4 text-center">
              <h3 className="text-primary-400 text-sm font-medium uppercase">
                Year
              </h3>
              <p className="text-white font-semibold text-lg">{wine.year}</p>
            </div>
            <div className="col-span-2 flex justify-center items-center bg-primary-900/40 rounded-2xl p-4">
              <h3 className="text-primary-400 text-sm font-medium uppercase mr-4">
                Price
              </h3>
              <span className="px-5 py-1 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-primary-950 font-bold text-lg shadow-lg">
                ${wine.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
