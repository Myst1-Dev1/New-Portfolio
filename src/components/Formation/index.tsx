import styles from './styles.module.scss';

import { FaGraduationCap, FaCode } from 'react-icons/fa';

export function Formation() {
    return (
        <div className={`${styles.formation}`}>
            <h3 className='fw-bold h4'>Formação/Experiência</h3>
            <div className={`d-flex flex-column gap-3 mt-5
                 ${styles.formationContainer}`}>
                    <div className='d-flex gap-2'>
                        <FaGraduationCap className={styles.icon} />
                        <h6>Análise e Desenvolvimento de <br /> sistemas - Unifatecie (cursando)</h6>
                    </div>
                    <div className='d-flex gap-2'>
                        <FaGraduationCap className={styles.icon} />
                        <h6>Curso de inglês - Kultivi (cursando)</h6>
                    </div>
                    <div className='d-flex gap-2'>
                        <FaCode className={styles.icon} />
                        <h6>Estágio - Front end (atualmente)</h6>
                    </div>
            </div>
        </div>
    )
}