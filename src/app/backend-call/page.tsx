'use client';

import { useEffect, useState } from 'react';

// Define the type for the response data (adjust according to your API structure)
interface MyData {
    id: number;
    name: string;
    // Add other fields as needed
}

const MyComponent = () => {
    const [data, setData] = useState<MyData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Make the AJAX call when the component mounts
        const fetchData = async () => {
            try {
                const options: RequestInit = {
                    method: 'GET',  // La méthode HTTP (GET, POST, PUT, DELETE, etc.)
                    headers: {
                        'Content-Type': 'application/json',  // Le type de contenu attendu
                    },
                    mode: 'cors',  // Mode CORS, ce qui permet de faire une requête entre différents domaines
                };
                const apiUrl = process.env.BAD_BACKEND_BASE_URL;
                const response = await fetch(`${apiUrl}/probe/dead_or_alive`, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result: MyData = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default MyComponent;
