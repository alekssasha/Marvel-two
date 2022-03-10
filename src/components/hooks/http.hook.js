import { useState, useCallback } from "react";

const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true)

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            setLoading(false)

            return data;
        }catch(e) {
            setError(e.massage)
            setLoading(false)
            throw e;
        }
    }, [])

    const clearError = useCallback(() => setError(null), []);

    return {request, error, loading, clearError}
}

export default useHttp;