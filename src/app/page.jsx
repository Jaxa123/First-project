'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProjectImage from './components/ProjectImage';
import './page.scss';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [email, setEmail] = useState('');

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            text: "Отличная команда профессионалов! Проект был выполнен в срок и с высоким качеством.",
            author: "Иван Петров",
            position: "CEO, Tech Solutions"
        },
        {
            text: "Инновационный подход и внимание к деталям. Рекомендую!",
            author: "Анна Сидорова",
            position: "Директор, Digital Agency"
        },
        {
            text: "Современные решения и отличная поддержка. Сотрудничество на высшем уровне!",
            author: "Михаил Иванов",
            position: "CTO, Innovation Lab"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        alert('Спасибо за подписку!');
        setEmail('');
    };

    return (
        <div className="home-container">
            <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
                <div className="hero-content">
                    <h1>JAXA</h1>
                    <p>Инновационные решения для цифрового будущего</p>
                    <div className="hero-buttons">
                        <Link href="/about" className="btn primary-btn">
                            Исследовать
                        </Link>
                        <Link href="/contact" className="btn secondary-btn">
                            Связаться
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

            <section className="projects-section">
                <h2>Наши проекты</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image">
                            <ProjectImage index={0} />
                        </div>
                        <h3>Веб-приложение</h3>
                        <p>Современное решение для управления бизнесом</p>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <ProjectImage index={1} />
                        </div>
                        <h3>Мобильное приложение</h3>
                        <p>Инновационное решение для вашего бизнеса</p>
                    </div>
                    <div className="project-card">
                        <div className="project-image">
                            <ProjectImage index={2} />
                        </div>
                        <h3>Корпоративный сайт</h3>
                        <p>Профессиональное представление вашей компании</p>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>Отзывы клиентов</h2>
                <div className="testimonials-slider">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
                            style={{ display: index === activeTestimonial ? 'block' : 'none' }}
                        >
                            <div className="testimonial-content">
                                <p>{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="newsletter-section">
                <div className="newsletter-content">
                    <h2>Присоединяйтесь к нам</h2>
                    <p>Будьте в курсе наших последних проектов и инноваций</p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Ваш email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="btn primary-btn">Подписаться</button>
                    </form>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Готовы к инновациям?</h2>
                    <p>Давайте создадим что-то удивительное вместе</p>
                    <Link href="/contact" className="btn primary-btn">
                        Начать проект
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home; 