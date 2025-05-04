'use client';

import Link from 'next/link';
import './page.scss';

export default function Home() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Добро пожаловать в JAXA</h1>
                    <p>Инновационные решения для вашего бизнеса</p>
                    <div className="hero-buttons">
                        <Link href="/about" className="btn primary-btn">
                            Узнать больше
                        </Link>
                        <Link href="/contact" className="btn secondary-btn">
                            Связаться с нами
                        </Link>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <h2>Наши преимущества</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>Инновации</h3>
                        <p>Используем передовые технологии для решения ваших задач</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h3>Креативность</h3>
                        <p>Находим нестандартные решения для сложных проблем</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Скорость</h3>
                        <p>Быстрая реализация проектов без потери качества</p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Готовы начать?</h2>
                    <p>Свяжитесь с нами для обсуждения вашего проекта</p>
                    <Link href="/contact" className="btn primary-btn">
                        Начать сотрудничество
                    </Link>
                </div>
            </section>
        </div>
    );
}
