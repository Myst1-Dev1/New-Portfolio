import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
    const toastRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (message) {
            gsap.fromTo(
                toastRef.current,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'back.out(1.7)' // O 'back' dá um efeito de mola mais elegante que o bounce puro
                }
            );
        }
    }, [message]);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Opcional: Animação de saída antes de fechar
            gsap.to(toastRef.current, {
                opacity: 0,
                x: 20,
                duration: 0.4,
                onComplete: onClose
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div ref={toastRef} className={`alert-toast fixed top-5 right-5 z-50 flex items-center p-4 mb-4 text-white rounded-lg shadow-lg animate-bounce-in ${bgColor}`}>
            <div className="text-sm font-medium">{message}</div>
            <button
                onClick={onClose}
                className="ml-4 hover:text-gray-200 transition-colors"
            >
                ✕
            </button>
        </div>
    );
}