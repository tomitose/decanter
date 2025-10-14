import { db } from '@/lib/db';
import SearchBar from '@/components/shared/SearchBar/SearchBar';
import WineCard from '@/components/shared/WineCard/WineCard';
import Link from 'next/link';

interface SearchPageProps {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || '';
  
  // Si no hay query, mostrar todos los vinos
  const wines = query 
    ? await db.wine.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { winery: { contains: query, mode: 'insensitive' } },
            { grape: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } }
          ]
        },
        orderBy: { name: 'asc' }
      })
    : await db.wine.findMany({
        orderBy: { name: 'asc' }
      });

  return (
    <div className="min-h-screen p-6">
      {/* Header con barra de búsqueda */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gold-300 mb-4">
            {query ? `Resultados para "${query}"` : 'Todos los vinos'}
          </h1>
          <SearchBar />
        </div>

        {/* Resultados */}
        <div className="mb-8">
          {wines.length > 0 ? (
            <>
              <p className="text-gray-400 mb-6 text-center">
                {wines.length} {wines.length === 1 ? 'vino encontrado' : 'vinos encontrados'}
              </p>
              
              {/* Grid de vinos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wines.map((wine) => (
                  <Link key={wine.id} href={`/vinos/${wine.id}`}>
                    <WineCard wine={wine} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* Estado sin resultados */
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">No se encontraron vinos</h3>
                <p className="mb-4">
                  No hay vinos que coincidan con "{query}". 
                  Intenta con otros términos de búsqueda.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Sugerencias:</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Verifica la ortografía</li>
                    <li>• Usa términos más generales</li>
                    <li>• Busca por nombre de bodega o tipo de uva</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Botón para volver al home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
