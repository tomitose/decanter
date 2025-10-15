'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary - Captura errores de React
 * 
 * Uso:
 * <ErrorBoundary>
 *   <TuComponente />
 * </ErrorBoundary>
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Actualiza el estado para que el próximo render muestre la UI de error
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Puedes registrar el error en un servicio de logging aquí
    console.error('ErrorBoundary capturó un error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderiza la UI de error personalizada
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // UI de error por defecto
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md w-full">
            <div className="bg-red-900/20 border border-red-700 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="text-red-400">
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-red-300 font-semibold text-lg mb-1">
                    Something went wrong
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    An unexpected error occurred. Please try reloading the page.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Reload page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
