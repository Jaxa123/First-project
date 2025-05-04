'use client';

import { useState } from 'react';
import './page.scss';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-hero">
                <h1>Свяжитесь с нами</h1>
                <p>Мы всегда рады услышать ваши вопросы и предложения</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-card">
                        <h3>Адрес</h3>
                        <p>г. Москва, ул. Примерная, д. 123</p>
                    </div>
                    <div className="info-card">
                        <h3>Телефон</h3>
                        <p>+7 (123) 456-78-90</p>
                    </div>
                    <div className="info-card">
                        <h3>Email</h3>
                        <p>info@example.com</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Ваше имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
} 