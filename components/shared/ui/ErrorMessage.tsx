interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  variant?: 'error' | 'warning' | 'info';
}

/**
 * Componente ErrorMessage reutilizable
 * 
 * Props:
 * - title: Título del error (opcional)
 * - message: Mensaje de error principal
 * - onRetry: Función callback para reintentar (opcional)
 * - variant: Tipo de mensaje ('error', 'warning', 'info')
 * 
 * Uso:
 * <ErrorMessage 
 *   title="Error al cargar vinos" 
 *   message="No se pudo conectar con la base de datos"
 *   onRetry={() => refetch()}
 * />
 */
export default function ErrorMessage({ 
  title = 'Something went wrong',
  message,
  onRetry,
  variant = 'error'
}: ErrorMessageProps) {
  // Colores según el tipo de mensaje
  const variantClasses = {
    error: {
      bg: 'bg-red-900/20',
      border: 'border-red-700',
      text: 'text-red-300',
      icon: 'text-red-400'
    },
    warning: {
      bg: 'bg-yellow-900/20',
      border: 'border-yellow-700',
      text: 'text-yellow-300',
      icon: 'text-yellow-400'
    },
    info: {
      bg: 'bg-blue-900/20',
      border: 'border-blue-700',
      text: 'text-blue-300',
      icon: 'text-blue-400'
    }
  };

  const colors = variantClasses[variant];

  return (
    <div className={`
      ${colors.bg} 
      ${colors.border} 
      border rounded-2xl p-6 
      backdrop-blur-md
      animate-fade-in
    `}>
      <div className="flex items-start gap-4">
        {/* Ícono de error */}
        <div className={colors.icon}>
          <svg 
            className="w-6 h-6 flex-shrink-0 mt-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {variant === 'error' && (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            )}
            {variant === 'warning' && (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            )}
            {variant === 'info' && (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            )}
          </svg>
        </div>

        {/* Contenido del error */}
        <div className="flex-1">
          <h3 className={`${colors.text} font-semibold text-lg mb-1`}>
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {message}
          </p>

          {/* Botón de reintentar */}
          {onRetry && (
            <button
              onClick={onRetry}
              className={`
                mt-4 px-4 py-2 
                ${colors.border} 
                ${colors.text}
                border rounded-lg
                hover:bg-opacity-20
                transition-colors duration-200
                text-sm font-medium
              `}
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
