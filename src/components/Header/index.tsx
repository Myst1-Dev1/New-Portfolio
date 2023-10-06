import styles from './styles.module.scss';

import { FaMoon, FaBars } from 'react-icons/fa';

export function Header() {
    return (
        <div className={`text-light w-100 ${styles.header}`}>
            <div className='d-flex justify-content-between align-items-center m-auto'>
                <h1 className='h3'>João Victor</h1>
                <div className='d-flex gap-4'>
                    <FaMoon className={styles.Icon} />
                    <FaBars className={styles.Icon} />
                </div>
            </div>
        </div>
    )
}