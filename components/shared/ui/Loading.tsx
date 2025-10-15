interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

/**
 * Componente Loading reutilizable
 * 
 * Props:
 * - size: Tamaño del spinner ('sm', 'md', 'lg')
 * - text: Texto opcional a mostrar debajo del spinner
 * - fullScreen: Si es true, ocupa toda la pantalla
 * 
 * Uso:
 * <Loading size="md" text="Cargando vinos..." />
 */
export default function Loading({ 
  size = 'md', 
  text, 
  fullScreen = false 
}: LoadingProps) {
  // Tamaños del spinner
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  // Tamaños del borde
  const borderClasses = {
    sm: 'border-2',
    md: 'border-3',
    lg: 'border-4'
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50'
    : 'flex items-center justify-center py-8';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-3">
        {/* Animated spinner */}
        <div
          className={`
            ${sizeClasses[size]} 
            ${borderClasses[size]}
            border-gold-400 
            border-t-transparent 
            rounded-full 
            animate-spin
          `}
          role="status"
          aria-label="Loading"
        />
        
        {/* Optional text */}
        {text && (
          <p className="text-gray-400 text-sm animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
