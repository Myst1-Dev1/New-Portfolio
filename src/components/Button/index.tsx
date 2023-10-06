import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    children: ReactNode;
}

export function Button({children, ...props}: ButtonProps) {
    return (
        <button className={`text-light ${styles.Button}`} {...props}>{children}</button>
    )
}