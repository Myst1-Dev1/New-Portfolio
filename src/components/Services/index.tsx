import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import { FaCode, FaCog } from 'react-icons/fa';

export function Services() {
    return (
        <div id='services' className={`container ${styles.services}`}>
            <SubTitle title="Serviços" subtitle="O que eu ofereço" />

            <div data-aos="flip-left" 
                className={`mt-5 row m-auto gap-5 justify-content-center ${styles.serviceContainer}`}>
                <div className={`col-md-6 d-flex gap-2 flex-column align-items-center ${styles.serviceBox}`}>
                    <FaCode className={styles.icon} />
                    <h4 className='fw-bold h2'>Criação de sites</h4>
                    <p>Criação de sites responsivos com alto desempenho</p>
                </div>
                <div className={`col-md-6 d-flex gap-2 flex-column align-items-center ${styles.serviceBox}`}>
                    <FaCog className={styles.icon} />
                    <h4 className='fw-bold'>Manuntenção de Sites</h4>
                    <p>Alterações no site conforme as necessidades do cliente</p>
                </div>
            </div>
        </div>
    )
}