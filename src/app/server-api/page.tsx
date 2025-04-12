// /pages/index.tsx

'use client';

import { useEffect, useState } from 'react';

interface ApiResponse {
    message: string;
}

export default function About() {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        // Fetching data from the API
        const fetchMessage = async () => {
            const response = await fetch('/api/dead-or-alive');
            const data: ApiResponse = await response.json();
            setMessage(data.message);
        };

        fetchMessage();
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}
