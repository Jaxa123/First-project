'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>JAXA</h3>
                    <p>Инновационные решения для цифрового будущего</p>
                </div>
                <div className="footer-section">
                    <h4>Контакты</h4>
                    <p>Email: info@jaxa.com</p>
                    <p>Телефон: +7 (999) 123-45-67</p>
                </div>
                <div className="footer-section">
                    <h4>Социальные сети</h4>
                    <div className="social-links">
                        <a href="#" className="social-link">Telegram</a>
                        <a href="#" className="social-link">VK</a>
                        <a href="#" className="social-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 JAXA. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer; 