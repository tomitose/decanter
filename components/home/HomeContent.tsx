'use client';

import { useState } from 'react';
import SearchBar from '@/components/shared/SearchBar/SearchBar';
import SearchResults from '@/components/shared/SearchResults/SearchResults';
import FeaturedWines from '@/components/home/FeaturedWines';
import SommelierPicks from '@/components/home/SommelierPicks';
import MonthlyPromo from '@/components/home/MonthlyPromo';

export default function HomeContent() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      {/* Barra de búsqueda */}
      <SearchBar onSearchChange={handleSearchChange} />

      {/* Mostrar resultados de búsqueda o contenido normal */}
      {searchQuery.trim() ? (
        <SearchResults query={searchQuery} />
      ) : (
        <>
          <FeaturedWines />
          <SommelierPicks />
          <MonthlyPromo />
        </>
      )}
    </>
  );
}
