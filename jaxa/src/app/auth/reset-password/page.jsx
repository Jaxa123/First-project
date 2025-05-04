'use client';

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { toast } from 'react-toastify';
import Link from 'next/link';
import './page.scss';

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Инструкции по сбросу пароля отправлены на ваш email');
        } catch (error) {
            toast.error('Ошибка: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Сброс пароля</h1>
                    <p>Введите ваш email для получения инструкций</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Введите ваш email"
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Отправка...' : 'Отправить инструкции'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        <Link href="/auth/login" className="link">
                            Вернуться к входу
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
} 