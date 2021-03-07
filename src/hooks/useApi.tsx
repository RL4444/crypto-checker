import { useEffect, useState } from 'react';

export function useCoinApi<T>(url: string): { response: any; error: any; loading: boolean } {
    const baseUrl = 'https://api.coingecko.com/api/v3/';
    const [response, setResponse] = useState<object[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const res = await fetch(`${baseUrl}${url}`);
                const data = await res.json();
                setResponse(data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url]);

    return { response, error, loading };
}

export function useNewsApi<T>(): { response: any; error: any; loading: any } {
    const baseUrl = 'https://api.coingecko.com/api/v3/';
    const [response, setResponse] = useState<object[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    return { response, error, loading };
}
