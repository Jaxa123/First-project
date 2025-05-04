'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './page.scss';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Успешный вход в систему');
            router.push('/profile');
        } catch (error) {
            toast.error('Ошибка входа: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Вход в систему</h1>
                    <p>Добро пожаловать обратно!</p>
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

                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Введите ваш пароль"
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Загрузка...' : 'Войти'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Нет аккаунта?{' '}
                        <Link href="/auth/register" className="link">
                            Зарегистрироваться
                        </Link>
                    </p>
                    <p>
                        <Link href="/auth/reset-password" className="link">
                            Забыли пароль?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}