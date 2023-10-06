import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface SubTitleProps {
    title: ReactNode;
    subtitle: ReactNode;
}

export function SubTitle({ title, subtitle }: SubTitleProps) {
    return (
        <div className={`d-flex flex-column gap-3 text-center ${styles.subtitle}`}>
            <h3 className='fw-bold'>{title}</h3>
            <h6>{subtitle}</h6>
        </div>
    )
}