'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Start animation immediately on mount or pathname change
        setIsVisible(false);

        // Trigger animation after a brief delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);

    }, [pathname]);

    return (
        <div className={`w-full flex justify-center ${isVisible ? 'page-fade-in' : ''}`}>
            {children}
        </div>
    );
}
