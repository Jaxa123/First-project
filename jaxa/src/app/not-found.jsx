'use client';

import Link from 'next/link';
import './not-found.scss';

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Извините, но страница, которую вы ищете, не существует или была перемещена.</p>
                <div className="not-found-actions">
                    <Link href="/" className="home-btn">Вернуться на главную</Link>
                    <Link href="/contacts" className="contact-btn">Связаться с нами</Link>
                </div>
            </div>
        </div>
    );
}

// Это необходимо для Next.js 13+
export const metadata = {
    title: 'Страница не найдена',
    description: 'Страница не существует или была перемещена',
}; 