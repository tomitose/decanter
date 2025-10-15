interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

/**
 * Componente EmptyState reutilizable
 * 
 * Props:
 * - icon: Ícono personalizado (opcional)
 * - title: Título del estado vacío
 * - description: Descripción adicional (opcional)
 * - action: Botón o acción a mostrar (opcional)
 * 
 * Uso:
 * <EmptyState 
 *   title="No hay vinos" 
 *   description="Aún no has agregado ningún vino a tu colección"
 *   action={<button>Agregar vino</button>}
 * />
 */
export default function EmptyState({ 
  icon,
  title,
  description,
  action
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {/* Icon */}
      <div className="mb-4 text-gray-500">
        {icon || (
          <svg 
            className="w-16 h-16 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
            />
          </svg>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-300 mb-2">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-gray-500 text-sm max-w-md mb-6">
          {description}
        </p>
      )}

      {/* Action */}
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
}
