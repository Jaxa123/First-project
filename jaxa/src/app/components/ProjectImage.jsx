'use client';

import { useEffect, useRef } from 'react';

export default function ProjectImage({ index }) {
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
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#00ff15');
        gradient.addColorStop(1, '#ff00ff');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.1;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;

        // Добавляем геометрические фигуры
        ctx.strokeStyle = '#00ff15';
        ctx.lineWidth = 2;

        // Рисуем сетку
        for (let i = 0; i < width; i += 30) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height);
            ctx.stroke();
        }

        for (let i = 0; i < height; i += 30) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(width, i);
            ctx.stroke();
        }

        // Добавляем текст
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(`Проект ${index + 1}`, width / 2, height / 2);

        // Добавляем неоновый эффект
        ctx.shadowColor = '#00ff15';
        ctx.shadowBlur = 20;
        ctx.strokeStyle = '#00ff15';
        ctx.lineWidth = 3;
        ctx.strokeText(`Проект ${index + 1}`, width / 2, height / 2);
    }, [index]);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={300}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
        />
    );
} 