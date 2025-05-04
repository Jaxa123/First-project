'use client';

import Link from "next/link";
import "./style.scss"
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// EN: ./  means that style.scss file os located in 
//     the same folder with index.jsx
// ----------------------------------------------
// RU: ./  означает, что style.scss файл находится 
//      в той же папке, что и index.jsx

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success('Вы успешно вышли из системы');
            router.push('/');
        } catch (error) {
            toast.error('Ошибка при выходе: ' + error.message);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <div className="nav-logo">
                    <Link href="/" className="logo-link">
                        <span className="logo-text">JAXA</span>
                    </Link>
                </div>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="/" className="nav-link">
                        Главная
                    </Link>
                    <Link href="/about" className="nav-link">
                        О нас
                    </Link>
                    <Link href="/contact" className="nav-link">
                        Контакты
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <Link href="/profile" className="nav-link">
                                Профиль
                            </Link>
                            <button onClick={handleLogout} className="nav-link logout-btn">
                                Выйти
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login" className="nav-link">
                                Войти
                            </Link>
                            <Link href="/auth/register" className="nav-link register-btn">
                                Регистрация
                            </Link>
                        </>
                    )}
                </div>

                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
}