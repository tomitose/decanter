import { useState, useEffect, useCallback } from 'react';

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseAsyncReturn<T> extends UseAsyncState<T> {
  execute: (...args: unknown[]) => Promise<void>;
  reset: () => void;
}

/**
 * Hook personalizado para manejar operaciones asíncronas
 * 
 * Uso:
 * const { data, loading, error, execute } = useAsync(fetchWines);
 * 
 * useEffect(() => {
 *   execute();
 * }, []);
 */
export function useAsync<T>(
  asyncFunction: (...args: unknown[]) => Promise<T>,
  immediate = false
): UseAsyncReturn<T> {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: false,
    error: null
  });

  const execute = useCallback(
    async (...args: unknown[]) => {
      setState({
        data: null,
        loading: true,
        error: null
      });

      try {
        const data = await asyncFunction(...args);
        setState({
          data,
          loading: false,
          error: null
        });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error : new Error('Error unknown')
        });
      }
    },
    [asyncFunction]
  );

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null
    });
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute, reset };
}
