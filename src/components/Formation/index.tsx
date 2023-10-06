import styles from './styles.module.scss';

import { FaUserGraduate, FaGraduationCap } from 'react-icons/fa';

export function Formation() {
    return (
        <div className={`container ${styles.formation}`}>
            <h3 className='fw-bold'>Formação</h3>
            <div className={`mt-5 d-flex wrap gap-5
                 ${styles.formationContainer}`}>
                <div>
                    <div className='d-flex gap-2 m-auto'>
                        <FaUserGraduate className={styles.icon} />
                        <h6>Ensino médio completo</h6>
                    </div>
                    <div className='d-flex gap-2 m-auto mt-3'>
                        <FaUserGraduate className={styles.icon} />
                        <h6>Auxiliar de operações em <br /> Logística - Senai Completo</h6>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-2 m-auto'>
                        <FaGraduationCap className={styles.icon} />
                        <h6>Análise e Desenvolvimento de <br /> sistemas - Unifatecie (cursando)</h6>
                    </div>
                    <div className='d-flex gap-2 m-auto mt-3'>
                        <FaGraduationCap className={styles.icon} />
                        <h6>Curso de inglês - Kultivi (cursando)</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}