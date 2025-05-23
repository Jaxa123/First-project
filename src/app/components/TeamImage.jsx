'use client';

import { useEffect, useRef } from 'react';

export default function TeamImage({ index, name }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Очищаем канвас
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, width, height);

        // Создаем градиентный фон
        const gradient = ctx.createRadialGradient(
            width / 2, height / 2, 0,
            width / 2, height / 2, width / 2
        );
        gradient.addColorStop(0, '#00ff15');
        gradient.addColorStop(1, '#ff00ff');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.1;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;

        // Добавляем круг
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, width / 3, 0, Math.PI * 2);
        ctx.fillStyle = '#1a1a1a';
        ctx.fill();
        ctx.strokeStyle = '#00ff15';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Добавляем инициалы
        const initials = name.split(' ').map(n => n[0]).join('');
        ctx.fillStyle = '#00ff15';
        ctx.font = 'bold 48px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, width / 2, height / 2);

        // Добавляем неоновый эффект
        ctx.shadowColor = '#00ff15';
        ctx.shadowBlur = 20;
        ctx.strokeStyle = '#00ff15';
        ctx.lineWidth = 2;
        ctx.strokeText(initials, width / 2, height / 2);
    }, [index, name]);

    return (
        <canvas
            ref={canvasRef}
            width={300}
            height={300}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
        />
    );
} 