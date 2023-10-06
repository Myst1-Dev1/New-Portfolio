import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import { FaCode, FaPencilAlt, FaAndroid } from 'react-icons/fa';

export function Services() {
    return (
        <div className={`container ${styles.services}`}>
            <SubTitle title="Serviços" subtitle="O que eu ofereço" />

            <div className={`mt-5 row m-auto gap-5 justify-content-center ${styles.serviceContainer}`}>
                <div className={`col-md-4 d-flex gap-2 flex-column align-items-center ${styles.serviceBox}`}>
                    <FaCode className={styles.icon} />
                    <h4 className='fw-bold'>Desenvolvimento Web</h4>
                    <p>Criação e manuntenção de <br /> sites e aplicações para web</p>
                </div>
                <div className={`col-md-4 d-flex gap-2 flex-column align-items-center ${styles.serviceBox}`}>
                    <FaPencilAlt className={styles.icon} />
                    <h4 className='fw-bold'>UX UI Design</h4>
                    <p>Criação de designs que ofereçam <br /> a melhor experiência ao usuário</p>
                </div>
                <div className={`col-md-4 d-flex gap-2 flex-column align-items-center ${styles.serviceBox}`}>
                    <FaAndroid className={styles.icon} />
                    <h4 className='fw-bold'>Desenvolvimento Mobile</h4>
                    <p>Em breve criarei aplicativos <br /> para android e IOS</p>
                </div>
            </div>
        </div>
    )
}