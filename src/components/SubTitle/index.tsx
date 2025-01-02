import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface SubTitleProps {
    title: ReactNode;
    subtitle: ReactNode;
}

export function SubTitle({ title, subtitle }: SubTitleProps) {
    useGSAP(() => {
        gsap.fromTo('.subtitle',{ opacity:0, y:0 }, {opacity:1, y: 10, duration:0.4, ease:'power1.inOut',
            scrollTrigger: {trigger:'.subtitle', scrub:1, once:true, toggleActions: 'play reverse play reverse'}
        })
    }, []);

    return (
        <div className={`subtitle d-flex flex-column gap-3 text-center ${styles.subtitle}`}>
            <h3 className='fw-bold'>{title}</h3>
            <h6>{subtitle}</h6>
        </div>
    )
}