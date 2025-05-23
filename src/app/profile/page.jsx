'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/firebase/config';
import { toast } from 'react-toastify';
import './page.scss';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                toast.error('Пожалуйста, войдите в систему');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <div className="profile-container">
            <div className="profile-hero">
                <h1>Профиль пользователя</h1>
                <p>Управляйте вашими данными и настройками</p>
            </div>

            <div className="profile-content">
                <div className="profile-card">
                    <div className="avatar-section">
                        <div className="avatar">
                            {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
                        </div>
                        <h2>{user.displayName || 'Пользователь'}</h2>
                        <p className="email">{user.email}</p>
                    </div>

                    <div className="info-section">
                        <div className="info-item">
                            <h3>Дата регистрации</h3>
                            <p>{new Date(user.metadata.creationTime).toLocaleDateString()}</p>
                        </div>
                        <div className="info-item">
                            <h3>Последний вход</h3>
                            <p>{new Date(user.metadata.lastSignInTime).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="actions-section">
                        <button className="edit-btn">Редактировать профиль</button>
                        <button className="logout-btn" onClick={() => auth.signOut()}>
                            Выйти
                        </button>
                    </div>
                </div>

                <div className="settings-section">
                    <h2>Настройки</h2>
                    <div className="settings-grid">
                        <div className="setting-card">
                            <h3>Уведомления</h3>
                            <p>Управление настройками уведомлений</p>
                            <button className="setting-btn">Настроить</button>
                        </div>
                        <div className="setting-card">
                            <h3>Безопасность</h3>
                            <p>Настройки безопасности аккаунта</p>
                            <button className="setting-btn">Настроить</button>
                        </div>
                        <div className="setting-card">
                            <h3>Конфиденциальность</h3>
                            <p>Управление конфиденциальностью</p>
                            <button className="setting-btn">Настроить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 