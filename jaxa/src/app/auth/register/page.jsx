"use client"
import '../style.scss';
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase/config"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import './page.scss';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            toast.error('Пароли не совпадают');
            setLoading(false);
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Регистрация успешна');
            router.push('/profile');
        } catch (error) {
            toast.error('Ошибка регистрации: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Регистрация</h1>
                    <p>Создайте новый аккаунт</p>
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
                            placeholder="Введите пароль"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Подтвердите пароль</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Подтвердите пароль"
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Загрузка...' : 'Зарегистрироваться'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Уже есть аккаунт?{' '}
                        <Link href="/auth/login" className="link">
                            Войти
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}