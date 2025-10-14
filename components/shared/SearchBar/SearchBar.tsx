'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        {/* Input de búsqueda */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar vinos por nombre, bodega o cepa..."
          className="w-full px-6 py-4 pr-14 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
        />
        
        {/* Botón de búsqueda */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gold-400 hover:bg-gold-500 text-primary-950 rounded-xl flex items-center justify-center transition-colors duration-200"
          aria-label="Buscar vinos"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      
      {/* Sugerencia de búsqueda */}
      <p className="text-center text-gray-400 text-sm mt-3">
        Prueba buscando "Malbec", "Catena" o "Chardonnay"
      </p>
    </form>
  );
}
