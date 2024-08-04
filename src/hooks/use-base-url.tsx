import { useMemo } from 'react';

function useBaseUrl(): string | undefined {
  if (typeof window !== 'undefined') {
    return useMemo(() => {
      const { protocol, hostname, port } = window.location;
      const portPart = port ? `:${port}` : '';

      return `${protocol}//${hostname}${portPart}`;
    }, []);
  }
}

export default useBaseUrl;
