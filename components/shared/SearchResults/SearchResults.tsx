'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Wine {
  id: string;
  name: string;
  winery: string;
  year: number;
  grape: string;
  price: number;
  imageUrl: string;
  description: string;
}

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const [wines, setWines] = useState<Wine[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Función de debounce para evitar muchas llamadas
    const searchWines = async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setWines([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        
        if (!response.ok) {
          throw new Error('Error en la búsqueda');
        }

        const data = await response.json();
        setWines(data.wines || []);
      } catch (err) {
        setError('Error al buscar vinos');
        setWines([]);
      } finally {
        setLoading(false);
      }
    };

    // Debounce: esperar 500ms después de que el usuario deje de escribir
    const timeoutId = setTimeout(() => {
      searchWines(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // No mostrar nada si no hay query
  if (!query.trim()) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      {/* Header de resultados */}
      <div className="mb-6">
        {loading ? (
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-5 h-5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
            <span>Buscando vinos...</span>
          </div>
        ) : (
          <h2 className="text-2xl font-serif font-bold text-gold-300 mb-2">
            Resultados para "{query}"
          </h2>
        )}
      </div>

      {/* Estado de error */}
      {error && (
        <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 text-red-300 mb-6">
          {error}
        </div>
      )}

      {/* Resultados */}
      {!loading && !error && (
        <>
          {wines.length > 0 ? (
            <>
              <p className="text-gray-400 mb-6">
                {wines.length} {wines.length === 1 ? 'vino encontrado' : 'vinos encontrados'}
              </p>
              
              {/* Grid de vinos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wines.map((wine) => (
                  <Link
                    key={wine.id}
                    href={`/vinos/${wine.id}`}
                    className="group bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-gold-400/50 transition-all duration-300 hover:scale-105"
                  >
                    {/* Imagen del vino */}
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={wine.imageUrl}
                        alt={`Botella de ${wine.name}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Información del vino */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-white group-hover:text-gold-300 transition-colors">
                        {wine.name}
                      </h3>
                      <p className="text-primary-300 text-sm">{wine.winery}</p>
                      <p className="text-primary-400 text-sm">{wine.grape} • {wine.year}</p>
                      
                      {/* Precio */}
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-gold-400 font-bold text-lg">
                          ${wine.price.toFixed(2)}
                        </span>
                        <span className="text-primary-400 text-sm group-hover:text-white transition-colors">
                          Ver detalles →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* Estado sin resultados */
            <div className="text-center py-12">
              <div className="text-gray-400">
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
        </>
      )}
    </div>
  );
}
