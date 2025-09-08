import Image from 'next/image';

// Definimos los "tipos" de datos que nuestro componente espera recibir.
// Esto es TypeScript en acción, nos ayuda a evitar errores.
type WineProps = {
  wine: {
    id: string;
    name: string;
    winery: string;
    year: number;
    imageUrl: string;
    price: number;
  };
};

// Nuestro componente recibe las "props" (propiedades), en este caso, un objeto "wine".
export default function WineCard({ wine }: WineProps) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      {/* Usamos el componente Image de Next.js para optimizar las imágenes */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={wine.imageUrl}
          alt={`Bottle of ${wine.name}`}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Mostramos la información del vino que nuestro test espera encontrar */}
      <h3 className="text-lg font-bold">{wine.name}</h3>
      <p className="text-gray-600">{wine.winery}</p>
      
      {/* Formateamos el precio para que tenga dos decimales y el símbolo de dólar, 
          tal como lo especificamos en el test. */}
      <p className="text-xl font-semibold mt-2">${wine.price.toFixed(2)}</p>
    </div>
  );
}