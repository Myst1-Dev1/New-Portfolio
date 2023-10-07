import { Button } from '../Button';
import { SubTitle } from '../SubTitle';
import styles from './styles.module.scss';

import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaPaperPlane } from 'react-icons/fa';

export function Contact() {
    return (
        <div id='contact'>
            <SubTitle title="Contato" subtitle="Entre em contato" />

            <div className={styles.contact} id='contact'>
                <div className='row m-auto container mt-5'>
                    <div className={`col-md-6 mb-4 d-flex flex-column gap-3 ${styles.contactContainer}`}>
                        <div className='d-flex gap-3'>
                            <FaPhone className={styles.icon} />
                            <div>
                                <h5 className='fw-bold'>Número</h5>
                                <h6>21 9 6475-7806</h6>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <FaEnvelope className={styles.icon} />
                            <div>
                                <h5 className='fw-bold'>Email</h5>
                                <h6>danteopzz@hotmail.com</h6>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <FaMapMarkedAlt className={styles.icon} />
                            <div>
                                <h5 className='fw-bold'>Localização</h5>
                                <h6>Brasil - Rio de Janeiro</h6>
                            </div>
                        </div>
                    </div>
                    <form className='col-md-6 d-flex flex-column gap-4'>
                        <div className='row'>
                            <div className={`col-md-6 ${styles.inputBox}`}>
                                <input type="text" placeholder='Nome' />
                            </div>
                            <div className={`col-md-6 ${styles.inputBox}`}>
                                <input type="email" placeholder='Email' />
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="tel" placeholder='Número' />
                        </div>
                        <div className={styles.inputBox}>
                            <textarea placeholder='Mensagem' />
                        </div>
                        <Button type='submit'>
                            Enviar <FaPaperPlane className="text-light ms-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}